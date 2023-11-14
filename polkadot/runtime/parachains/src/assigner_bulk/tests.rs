// Copyright (C) Parity Technologies (UK) Ltd.
// This file is part of Polkadot.

// Polkadot is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Polkadot is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Polkadot.  If not, see <http://www.gnu.org/licenses/>.

use super::*;

use crate::{
	assigner_bulk::{mock_helpers::GenesisConfigBuilder, pallet::Error, Schedule},
	assigner_on_demand::OnDemandAssignment,
	initializer::SessionChangeNotification,
	mock::{
		new_test_ext, Balances, BulkAssigner, OnDemandAssigner, Paras, ParasShared, RuntimeOrigin,
		Scheduler, System, Test,
	},
	paras::{ParaGenesisArgs, ParaKind},
};
use frame_support::{assert_noop, assert_ok, pallet_prelude::*, traits::Currency};
use pallet_broker::TaskId;
use primitives::{BlockNumber, SessionIndex, ValidationCode};
use sp_std::collections::btree_map::BTreeMap;

fn schedule_blank_para(id: ParaId, parakind: ParaKind) {
	let validation_code: ValidationCode = vec![1, 2, 3].into();
	assert_ok!(Paras::schedule_para_initialize(
		id,
		ParaGenesisArgs {
			genesis_head: Vec::new().into(),
			validation_code: validation_code.clone(),
			para_kind: parakind,
		}
	));

	assert_ok!(Paras::add_trusted_validation_code(RuntimeOrigin::root(), validation_code));
}

fn run_to_block(
	to: BlockNumber,
	new_session: impl Fn(BlockNumber) -> Option<SessionChangeNotification<BlockNumber>>,
) {
	while System::block_number() < to {
		let b = System::block_number();

		Scheduler::initializer_finalize();
		Paras::initializer_finalize(b);

		if let Some(notification) = new_session(b + 1) {
			let mut notification_with_session_index = notification;
			// We will make every session change trigger an action queue. Normally this may require
			// 2 or more session changes.
			if notification_with_session_index.session_index == SessionIndex::default() {
				notification_with_session_index.session_index = ParasShared::scheduled_session();
			}
			Paras::initializer_on_new_session(&notification_with_session_index);
			Scheduler::initializer_on_new_session(&notification_with_session_index);
		}

		System::on_finalize(b);

		System::on_initialize(b + 1);
		System::set_block_number(b + 1);

		Paras::initializer_initialize(b + 1);
		Scheduler::initializer_initialize(b + 1);

		// In the real runtime this is expected to be called by the `InclusionInherent` pallet.
		Scheduler::free_cores_and_fill_claimqueue(BTreeMap::new(), b + 1);
	}
}

fn default_test_assignments() -> Vec<(CoreAssignment, PartsOf57600)> {
	vec![(CoreAssignment::Idle, PartsOf57600::from(57600u16))]
}

fn default_test_schedule() -> Schedule<BlockNumberFor<Test>> {
	Schedule { assignments: default_test_assignments(), end_hint: None, next_schedule: None }
}

#[test]
// Should create new QueueDescriptor and add new schedule to CoreSchedules
fn assign_core_works_with_no_prior_schedule() {
	let core_idx = CoreIndex(0);

	new_test_ext(GenesisConfigBuilder::default().build()).execute_with(|| {
		run_to_block(10, |n| if n == 10 { Some(Default::default()) } else { None });

		// Call assign_core
		assert_ok!(BulkAssigner::assign_core(
			core_idx,
			BlockNumberFor::<Test>::from(11u32),
			default_test_assignments(),
			None,
		));

		// Check CoreSchedules
		assert_eq!(
			CoreSchedules::<Test>::get((BlockNumberFor::<Test>::from(11u32), core_idx)),
			Some(default_test_schedule())
		);

		// Check QueueDescriptor
		assert_eq!(
			CoreDescriptors::<Test>::get(core_idx)
				.queue
				.as_ref()
				.and_then(|q| Some(q.first)),
			Some(BlockNumberFor::<Test>::from(11u32))
		);
		assert_eq!(
			CoreDescriptors::<Test>::get(core_idx).queue.as_ref().and_then(|q| Some(q.last)),
			Some(BlockNumberFor::<Test>::from(11u32))
		);
	});
}

#[test]
// Should update last in QueueDescriptor and add new schedule to CoreSchedules
fn assign_core_works_with_prior_schedule() {
	let core_idx = CoreIndex(0);

	new_test_ext(GenesisConfigBuilder::default().build()).execute_with(|| {
		run_to_block(10, |n| if n == 10 { Some(Default::default()) } else { None });
		let default_with_next_schedule =
			Schedule { next_schedule: Some(15u32), ..default_test_schedule() };

		// Call assign_core twice
		assert_ok!(BulkAssigner::assign_core(
			core_idx,
			BlockNumberFor::<Test>::from(11u32),
			default_test_assignments(),
			None,
		));

		assert_ok!(BulkAssigner::assign_core(
			core_idx,
			BlockNumberFor::<Test>::from(15u32),
			default_test_assignments(),
			None,
		));

		// Check CoreSchedules for two entries
		assert_eq!(
			CoreSchedules::<Test>::get((BlockNumberFor::<Test>::from(11u32), core_idx)),
			Some(default_with_next_schedule)
		);
		assert_eq!(
			CoreSchedules::<Test>::get((BlockNumberFor::<Test>::from(15u32), core_idx)),
			Some(default_test_schedule())
		);

		// Check QueueDescriptor
		assert_eq!(
			CoreDescriptors::<Test>::get(core_idx)
				.queue
				.as_ref()
				.and_then(|q| Some(q.first)),
			Some(BlockNumberFor::<Test>::from(11u32))
		);
		assert_eq!(
			CoreDescriptors::<Test>::get(core_idx).queue.as_ref().and_then(|q| Some(q.last)),
			Some(BlockNumberFor::<Test>::from(15u32))
		);
	});
}

#[test]
// Invariants: We assume that CoreSchedules is append only and consumed. In other words new
// schedules inserted for a core must have a higher block number than all of the already existing
// schedules.
fn assign_core_enforces_higher_block_number() {
	let core_idx = CoreIndex(0);

	new_test_ext(GenesisConfigBuilder::default().build()).execute_with(|| {
		run_to_block(10, |n| if n == 10 { Some(Default::default()) } else { None });

		// Call assign core twice to establish some schedules
		assert_ok!(BulkAssigner::assign_core(
			core_idx,
			BlockNumberFor::<Test>::from(11u32),
			default_test_assignments(),
			None,
		));

		assert_ok!(BulkAssigner::assign_core(
			core_idx,
			BlockNumberFor::<Test>::from(15u32),
			default_test_assignments(),
			None,
		));

		// Call assign core with block number before QueueDescriptor first, expecting an error
		assert_noop!(
			BulkAssigner::assign_core(
				core_idx,
				BlockNumberFor::<Test>::from(10u32),
				default_test_assignments(),
				None,
			),
			Error::<Test>::DisallowedInsert
		);

		// Call assign core with block number between already scheduled assignments, expecting an
		// error
		assert_noop!(
			BulkAssigner::assign_core(
				core_idx,
				BlockNumberFor::<Test>::from(13u32),
				default_test_assignments(),
				None,
			),
			Error::<Test>::DisallowedInsert
		);
	});
}

#[test]
fn assign_core_enforces_well_formed_schedule() {
	let para_id = ParaId::from(1u32);
	let core_idx = CoreIndex(0);

	new_test_ext(GenesisConfigBuilder::default().build()).execute_with(|| {
		run_to_block(10, |n| if n == 10 { Some(Default::default()) } else { None });

		let bad_assignment_count: Vec<(CoreAssignment, PartsOf57600)> = vec![];
		let bad_parts_sum = vec![
			(CoreAssignment::Task(para_id.into()), PartsOf57600::from(57600u16)),
			(CoreAssignment::Pool, PartsOf57600::from(57600u16)),
		];

		// Attempting to assign_core with bad assignments
		assert_noop!(
			BulkAssigner::assign_core(
				core_idx,
				BlockNumberFor::<Test>::from(11u32),
				bad_assignment_count,
				None,
			),
			Error::<Test>::AssignmentsEmpty
		);
		assert_noop!(
			BulkAssigner::assign_core(
				core_idx,
				BlockNumberFor::<Test>::from(11u32),
				bad_parts_sum,
				None,
			),
			Error::<Test>::OverScheduled
		);
	});
}

#[test]
fn next_schedule_always_points_to_next_work_plan_item() {
	let core_idx = CoreIndex(0);

	new_test_ext(GenesisConfigBuilder::default().build()).execute_with(|| {
		run_to_block(10, |n| if n == 10 { Some(Default::default()) } else { None });
		let start_1 = 10u32;
		let start_2 = 15u32;
		let start_3 = 20u32;
		let start_4 = 25u32;
		let start_5 = 30u32;

		let expected_schedule_3 =
			Schedule { next_schedule: Some(start_4), ..default_test_schedule() };
		let expected_schedule_4 =
			Schedule { next_schedule: Some(start_5), ..default_test_schedule() };
		let expected_schedule_5 = default_test_schedule();

		// Call assign_core for each of five schedules
		assert_ok!(BulkAssigner::assign_core(
			core_idx,
			BlockNumberFor::<Test>::from(start_1),
			default_test_assignments(),
			None,
		));

		assert_ok!(BulkAssigner::assign_core(
			core_idx,
			BlockNumberFor::<Test>::from(start_2),
			default_test_assignments(),
			None,
		));

		assert_ok!(BulkAssigner::assign_core(
			core_idx,
			BlockNumberFor::<Test>::from(start_3),
			default_test_assignments(),
			None,
		));

		assert_ok!(BulkAssigner::assign_core(
			core_idx,
			BlockNumberFor::<Test>::from(start_4),
			default_test_assignments(),
			None,
		));

		assert_ok!(BulkAssigner::assign_core(
			core_idx,
			BlockNumberFor::<Test>::from(start_5),
			default_test_assignments(),
			None,
		));

		// Rotate through the first two schedules
		BulkAssigner::pop_assignment_for_core(core_idx);
		run_to_block(15, |n| if n == 15 { Some(Default::default()) } else { None });
		BulkAssigner::pop_assignment_for_core(core_idx);

		// Use saved starting block numbers to check that schedules chain
		// together correctly
		assert_eq!(
			CoreSchedules::<Test>::get((BlockNumberFor::<Test>::from(start_3), core_idx)),
			Some(expected_schedule_3)
		);
		assert_eq!(
			CoreSchedules::<Test>::get((BlockNumberFor::<Test>::from(start_4), core_idx)),
			Some(expected_schedule_4)
		);
		assert_eq!(
			CoreSchedules::<Test>::get((BlockNumberFor::<Test>::from(start_5), core_idx)),
			Some(expected_schedule_5)
		);

		// Check QueueDescriptor
		assert_eq!(
			CoreDescriptors::<Test>::get(core_idx)
				.queue
				.as_ref()
				.and_then(|q| Some(q.first)),
			Some(start_3)
		);
		assert_eq!(
			CoreDescriptors::<Test>::get(core_idx).queue.as_ref().and_then(|q| Some(q.last)),
			Some(start_5)
		);
	});
}

#[test]
fn ensure_workload_works() {
	let core_idx = CoreIndex(0);
	let test_assignment_state = AssignmentState {
		ratio: PartsOf57600::from(57600u16),
		remaining: PartsOf57600::from(57600u16),
	};

	let empty_descriptor: CoreDescriptor<BlockNumberFor<Test>> =
		CoreDescriptor { queue: None, current_work: None };
	let assignments_queued_descriptor = CoreDescriptor {
		queue: Some(QueueDescriptor {
			first: BlockNumberFor::<Test>::from(11u32),
			last: BlockNumberFor::<Test>::from(11u32),
		}),
		current_work: None,
	};
	let assignments_active_descriptor = CoreDescriptor {
		queue: None,
		current_work: Some(WorkState {
			assignments: vec![(CoreAssignment::Pool, test_assignment_state)],
			end_hint: Some(BlockNumberFor::<Test>::from(15u32)),
			pos: 0,
			step: PartsOf57600::from(57600u16),
		}),
	};

	new_test_ext(GenesisConfigBuilder::default().build()).execute_with(|| {
		let mut core_descriptor: CoreDescriptor<BlockNumberFor<Test>> =
			CoreDescriptor { queue: None, current_work: None };
		run_to_block(10, |n| if n == 10 { Some(Default::default()) } else { None });

		// Case 1: No new schedule in CoreSchedules for core
		BulkAssigner::ensure_workload(10u32, core_idx, &mut core_descriptor);
		assert_eq!(core_descriptor, empty_descriptor);

		// Case 2: New schedule exists in CoreSchedules for core, but new
		// schedule start is not yet reached.
		assert_ok!(BulkAssigner::assign_core(
			core_idx,
			BlockNumberFor::<Test>::from(11u32),
			vec![(CoreAssignment::Pool, PartsOf57600::from(57600u16))],
			Some(BlockNumberFor::<Test>::from(15u32)),
		));

		// Propagate changes from storage to Core_Descriptor handle. Normally
		// pop_assignment_for_core would handle this.
		core_descriptor = CoreDescriptors::<Test>::get(core_idx);

		BulkAssigner::ensure_workload(10u32, core_idx, &mut core_descriptor);
		assert_eq!(core_descriptor, assignments_queued_descriptor);

		// Case 3: Next schedule exists in CoreSchedules for core. Next starting
		// block has been reached. Swaps new WorkState into CoreDescriptors from
		// CoreSchedules.
		BulkAssigner::ensure_workload(11u32, core_idx, &mut core_descriptor);
		assert_eq!(core_descriptor, assignments_active_descriptor);

		// Case 4: end_hint reached but new schedule start not yet reached. WorkState in
		// CoreDescriptor is cleared
		BulkAssigner::ensure_workload(15u32, core_idx, &mut core_descriptor);
		assert_eq!(core_descriptor, empty_descriptor);
	});
}

#[test]
fn pop_assignment_for_core_works() {
	let para_id = ParaId::from(1);
	let core_idx = CoreIndex(0);
	let alice = 1u64;
	let amt = 10_000_000u128;
	let on_demand_assignment = OnDemandAssignment::new(para_id, CoreIndex(0));

	let assignments_pool = vec![(CoreAssignment::Pool, PartsOf57600::from(57600u16))];
	let assignments_task =
		vec![(CoreAssignment::Task(para_id.into()), PartsOf57600::from(57600u16))];

	new_test_ext(GenesisConfigBuilder::default().build()).execute_with(|| {
		// Initialize the parathread, wait for it to be ready, then add an
		// on demand order to later pop with our bulk assigner.
		schedule_blank_para(para_id, ParaKind::Parathread);
		Balances::make_free_balance_be(&alice, amt);
		run_to_block(10, |n| if n == 10 { Some(Default::default()) } else { None });
		assert_ok!(OnDemandAssigner::place_order_allow_death(
			RuntimeOrigin::signed(alice),
			amt,
			para_id
		));

		// Case 1: Assignment idle
		assert_ok!(BulkAssigner::assign_core(
			core_idx,
			BlockNumberFor::<Test>::from(10u32),
			default_test_assignments(), // Default is Idle
			None,
		));

		assert_eq!(BulkAssigner::pop_assignment_for_core(core_idx), None);

		// Case 2: Assignment pool
		assert_ok!(BulkAssigner::assign_core(
			core_idx,
			BlockNumberFor::<Test>::from(11u32),
			assignments_pool,
			None,
		));

		run_to_block(11, |n| if n == 11 { Some(Default::default()) } else { None });

		assert_eq!(
			BulkAssigner::pop_assignment_for_core(core_idx),
			Some(BulkAssignment::Instantaneous(on_demand_assignment))
		);

		// Case 3: Assignment task
		assert_ok!(BulkAssigner::assign_core(
			core_idx,
			BlockNumberFor::<Test>::from(12u32),
			assignments_task,
			None,
		));

		run_to_block(12, |n| if n == 12 { Some(Default::default()) } else { None });

		assert_eq!(
			BulkAssigner::pop_assignment_for_core(core_idx),
			Some(BulkAssignment::Bulk(para_id))
		);
	});
}

#[test]
fn assignment_proportions_in_core_state_work() {
	let core_idx = CoreIndex(0);
	let task_1 = TaskId::from(1u32);
	let task_2 = TaskId::from(2u32);

	new_test_ext(GenesisConfigBuilder::default().build()).execute_with(|| {
		run_to_block(10, |n| if n == 10 { Some(Default::default()) } else { None });

		// Task 1 gets 2/3 core usage, while task 2 gets 1/3
		let test_assignments = vec![
			(CoreAssignment::Task(task_1), PartsOf57600::from(57600u16 / 3 * 2)),
			(CoreAssignment::Task(task_2), PartsOf57600::from(57600u16 / 3)),
		];

		assert_ok!(BulkAssigner::assign_core(
			core_idx,
			BlockNumberFor::<Test>::from(10u32),
			test_assignments,
			None,
		));

		// Case 1: Current assignment remaining >= step after pop
		{
			assert_eq!(
				BulkAssigner::pop_assignment_for_core(core_idx),
				Some(BulkAssignment::Bulk(task_1.into()))
			);

			assert_eq!(
				CoreDescriptors::<Test>::get(core_idx)
					.current_work
					.as_ref()
					.and_then(|w| Some(w.pos)),
				Some(0u16)
			);
			// Consumed step should be 1/3 of core parts, leaving 1/3 remaining
			assert_eq!(
				CoreDescriptors::<Test>::get(core_idx)
					.current_work
					.as_ref()
					.and_then(|w| Some(w.assignments[0].1.remaining)),
				Some(PartsOf57600::from(57600u16 / 3))
			);
		}

		// Case 2: Current assignment remaning < step after pop
		{
			assert_eq!(
				BulkAssigner::pop_assignment_for_core(core_idx),
				Some(BulkAssignment::Bulk(task_1.into()))
			);
			// Pos should have incremented, as assignment had remaining < step
			assert_eq!(
				CoreDescriptors::<Test>::get(core_idx)
					.current_work
					.as_ref()
					.and_then(|w| Some(w.pos)),
				Some(1u16)
			);
			// Remaining should have started at 1/3 of core work parts. We then subtract
			// step (1/3) and add back ratio (2/3), leaving us with 2/3 of core work parts.
			assert_eq!(
				CoreDescriptors::<Test>::get(core_idx)
					.current_work
					.as_ref()
					.and_then(|w| Some(w.assignments[0].1.remaining)),
				Some(PartsOf57600::from(57600u16 / 3 * 2))
			);
		}

		// Final check, task 2's turn to be served
		assert_eq!(
			BulkAssigner::pop_assignment_for_core(core_idx),
			Some(BulkAssignment::Bulk(task_2.into()))
		);
	});
}

#[test]
fn equal_assignments_served_equally() {
	let core_idx = CoreIndex(0);
	let task_1 = TaskId::from(1u32);
	let task_2 = TaskId::from(2u32);

	new_test_ext(GenesisConfigBuilder::default().build()).execute_with(|| {
		run_to_block(10, |n| if n == 10 { Some(Default::default()) } else { None });

		// Tasks 1 and 2 get equal work parts
		let test_assignments = vec![
			(CoreAssignment::Task(task_1), PartsOf57600::from(57600u16 / 2)),
			(CoreAssignment::Task(task_2), PartsOf57600::from(57600u16 / 2)),
		];

		assert_ok!(BulkAssigner::assign_core(
			core_idx,
			BlockNumberFor::<Test>::from(10u32),
			test_assignments,
			None,
		));

		// Test that popped assignments alternate between tasks 1 and 2
		assert_eq!(
			BulkAssigner::pop_assignment_for_core(core_idx),
			Some(BulkAssignment::Bulk(task_1.into()))
		);

		assert_eq!(
			BulkAssigner::pop_assignment_for_core(core_idx),
			Some(BulkAssignment::Bulk(task_2.into()))
		);

		assert_eq!(
			BulkAssigner::pop_assignment_for_core(core_idx),
			Some(BulkAssignment::Bulk(task_1.into()))
		);

		assert_eq!(
			BulkAssigner::pop_assignment_for_core(core_idx),
			Some(BulkAssignment::Bulk(task_2.into()))
		);

		assert_eq!(
			BulkAssigner::pop_assignment_for_core(core_idx),
			Some(BulkAssignment::Bulk(task_1.into()))
		);

		assert_eq!(
			BulkAssigner::pop_assignment_for_core(core_idx),
			Some(BulkAssignment::Bulk(task_2.into()))
		);
	});
}

#[test]
// Checks that core is shared fairly, even in case of `ratio` not being
// divisible by `step` (over multiple rounds).
fn assignment_proportions_indivisible_by_step_work() {
	let core_idx = CoreIndex(0);
	let task_1 = TaskId::from(1u32);
	let ratio_1 = PartsOf57600::from(57600u16 / 5 * 3);
	let ratio_2 = PartsOf57600::from(57600u16 / 5 * 2);
	let task_2 = TaskId::from(2u32);

	new_test_ext(GenesisConfigBuilder::default().build()).execute_with(|| {
		run_to_block(10, |n| if n == 10 { Some(Default::default()) } else { None });

		// Task 1 gets 3/5 core usage, while task 2 gets 2/5. That way
		// step is set to 2/5 and task 1 is indivisible by step.
		let test_assignments =
			vec![(CoreAssignment::Task(task_1), ratio_1), (CoreAssignment::Task(task_2), ratio_2)];

		assert_ok!(BulkAssigner::assign_core(
			core_idx,
			BlockNumberFor::<Test>::from(10u32),
			test_assignments,
			None,
		));

		// Pop 5 assignments. Should Result in the the following work ordering:
		// 1, 2, 1, 1, 2. The remaining parts for each assignment should be same
		// at the end as in the beginning.
		assert_eq!(
			BulkAssigner::pop_assignment_for_core(core_idx),
			Some(BulkAssignment::Bulk(task_1.into()))
		);

		assert_eq!(
			BulkAssigner::pop_assignment_for_core(core_idx),
			Some(BulkAssignment::Bulk(task_2.into()))
		);

		assert_eq!(
			BulkAssigner::pop_assignment_for_core(core_idx),
			Some(BulkAssignment::Bulk(task_1.into()))
		);

		assert_eq!(
			BulkAssigner::pop_assignment_for_core(core_idx),
			Some(BulkAssignment::Bulk(task_1.into()))
		);

		assert_eq!(
			BulkAssigner::pop_assignment_for_core(core_idx),
			Some(BulkAssignment::Bulk(task_2.into()))
		);

		// Remaining should equal ratio for both assignments.
		assert_eq!(
			CoreDescriptors::<Test>::get(core_idx)
				.current_work
				.as_ref()
				.and_then(|w| Some(w.assignments[0].1.remaining)),
			Some(ratio_1)
		);
		assert_eq!(
			CoreDescriptors::<Test>::get(core_idx)
				.current_work
				.as_ref()
				.and_then(|w| Some(w.assignments[1].1.remaining)),
			Some(ratio_2)
		);
	});
}
