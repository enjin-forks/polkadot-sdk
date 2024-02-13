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

//! Utilities that don't belong to any particular module but may draw
//! on all modules.

use bitvec::field::BitField;
use frame_system::pallet_prelude::BlockNumberFor;
use primitives::{
	vstaging::node_features::FeatureIndex, BackedCandidate, CoreIndex, Id as ParaId,
	PersistedValidationData, ValidatorIndex,
};
use sp_std::{collections::btree_set::BTreeSet, vec::Vec};

use crate::{configuration, hrmp, paras, scheduler};

/// Make the persisted validation data for a particular parachain, a specified relay-parent and it's
/// storage root.
///
/// This ties together the storage of several modules.
pub fn make_persisted_validation_data<T: paras::Config + hrmp::Config>(
	para_id: ParaId,
	relay_parent_number: BlockNumberFor<T>,
	relay_parent_storage_root: T::Hash,
) -> Option<PersistedValidationData<T::Hash, BlockNumberFor<T>>> {
	let config = <configuration::Pallet<T>>::config();

	Some(PersistedValidationData {
		parent_head: <paras::Pallet<T>>::para_head(&para_id)?,
		relay_parent_number,
		relay_parent_storage_root,
		max_pov_size: config.max_pov_size,
	})
}

/// Take an active subset of a set containing all validators.
///
/// First item in pair will be all items in set have indices found in the `active` indices set (in
/// the order of the `active` vec, the second item will contain the rest, in the original order.
///
/// ```ignore
/// 		split_active_subset(active, all).0 == take_active_subset(active, all)
/// ```
pub fn split_active_subset<T: Clone>(active: &[ValidatorIndex], all: &[T]) -> (Vec<T>, Vec<T>) {
	let active_set: BTreeSet<_> = active.iter().cloned().collect();
	// active result has ordering of active set.
	let active_result = take_active_subset(active, all);
	// inactive result preserves original ordering of `all`.
	let inactive_result = all
		.iter()
		.enumerate()
		.filter(|(i, _)| !active_set.contains(&ValidatorIndex(*i as _)))
		.map(|(_, v)| v)
		.cloned()
		.collect();

	if active_result.len() != active.len() {
		log::warn!(
			target: "runtime::parachains",
			"Took active validators from set with wrong size.",
		);
	}

	(active_result, inactive_result)
}

/// Uses `split_active_subset` and concatenates the inactive to the active vec.
///
/// ```ignore
/// 		split_active_subset(active, all)[0..active.len()]) == take_active_subset(active, all)
/// ```
pub fn take_active_subset_and_inactive<T: Clone>(active: &[ValidatorIndex], all: &[T]) -> Vec<T> {
	let (mut a, mut i) = split_active_subset(active, all);
	a.append(&mut i);
	a
}

/// Take the active subset of a set containing all validators.
pub fn take_active_subset<T: Clone>(active: &[ValidatorIndex], set: &[T]) -> Vec<T> {
	let subset: Vec<_> = active.iter().filter_map(|i| set.get(i.0 as usize)).cloned().collect();

	if subset.len() != active.len() {
		log::warn!(
			target: "runtime::parachains",
			"Took active validators from set with wrong size",
		);
	}

	subset
}

#[cfg(test)]
mod tests {

	use sp_std::vec::Vec;

	use crate::util::{split_active_subset, take_active_subset};
	use primitives::ValidatorIndex;

	#[test]
	fn take_active_subset_is_compatible_with_split_active_subset() {
		let active: Vec<_> = vec![ValidatorIndex(1), ValidatorIndex(7), ValidatorIndex(3)];
		let validators = vec![9, 1, 6, 7, 4, 5, 2, 3, 0, 8];
		let (selected, unselected) = split_active_subset(&active, &validators);
		let selected2 = take_active_subset(&active, &validators);
		assert_eq!(selected, selected2);
		assert_eq!(unselected, vec![9, 6, 4, 5, 2, 0, 8]);
		assert_eq!(selected, vec![1, 3, 7]);
	}
}

/// Filters out all candidates that have multiple cores assigned and no
/// `CoreIndex` injected.
pub(crate) fn elastic_scaling_mvp_filter<T: configuration::Config + scheduler::Config>(
	candidates: &mut Vec<BackedCandidate<T::Hash>>,
) {
	if !configuration::Pallet::<T>::config()
		.node_features
		.get(FeatureIndex::InjectCoreIndex as usize)
		.map(|b| *b)
		.unwrap_or(false)
	{
		// we don't touch the candidates, since we don't expect block producers
		// to inject `CoreIndex`.
		return
	}

	// TODO: determine cores assigned to this para.
	let multiple_cores_asigned = true;
	candidates.retain(|candidate| !multiple_cores_asigned || has_core_index::<T>(candidate, true));
}

// Returns `true` if the candidate contains an injected `CoreIndex`.
fn has_core_index<T: configuration::Config + scheduler::Config>(
	candidate: &BackedCandidate<T::Hash>,
	core_index_enabled: bool,
) -> bool {
	// After stripping the 8 bit extensions, the `validator_indices` field length is expected
	// to be equal to backing group size. If these don't match, the `CoreIndex` is badly encoded,
	// or not supported.
	let core_idx_offset = candidate.validator_indices(core_index_enabled).len().saturating_sub(8);
	let validator_indices_raw = candidate.validator_indices(core_index_enabled);
	let (validator_indices_slice, core_idx_slice) = validator_indices_raw.split_at(core_idx_offset);
	let core_idx: u8 = core_idx_slice.load();

	let current_block = frame_system::Pallet::<T>::block_number();

	// Get the backing group of the candidate backed at `core_idx`.
	let group_idx = match <scheduler::Pallet<T>>::group_assigned_to_core(
		CoreIndex(core_idx as u32),
		current_block,
	) {
		Some(group_idx) => group_idx,
		None => return false,
	};

	let group_validators = match <scheduler::Pallet<T>>::group_validators(group_idx) {
		Some(validators) => validators,
		None => return false,
	};

	group_validators.len() == validator_indices_slice.len()
}
