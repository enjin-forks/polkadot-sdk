// This file is part of Substrate.

// Copyright (C) Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: Apache-2.0

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

pub use pallet::*;

#[frame_support::pallet(dev_mode)]
pub mod pallet {
	use frame_support::{
		dispatch::{Pays, PostDispatchInfo},
		ensure,
		pallet_prelude::DispatchResultWithPostInfo,
		weights::Weight,
	};
	use frame_system::pallet_prelude::*;

	#[pallet::pallet]
	pub struct Pallet<T>(_);

	#[pallet::config]
	pub trait Config: frame_system::Config {}

	#[pallet::call]
	impl<T: Config> Pallet<T> {
		/// Dummy function that overcharges the predispatch weight, allowing us to test the correct
		/// values of [`ContractResult::gas_consumed`] and [`ContractResult::gas_required`] in
		/// tests.
		#[pallet::call_index(1)]
		#[pallet::weight(*pre_charge)]
		pub fn overestimate_pre_charge(
			origin: OriginFor<T>,
			pre_charge: Weight,
			actual_weight: Weight,
		) -> DispatchResultWithPostInfo {
			ensure_signed(origin)?;
			ensure!(pre_charge.any_gt(actual_weight), "pre_charge must be > actual_weight");
			Ok(PostDispatchInfo { actual_weight: Some(actual_weight), pays_fee: Pays::Yes })
		}
	}
}
