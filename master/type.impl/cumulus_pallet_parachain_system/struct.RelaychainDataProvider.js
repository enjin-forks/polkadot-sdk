(function() {var type_impls = {
"cumulus_pallet_parachain_system":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RelaychainStateProvider-for-RelaychainDataProvider%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/cumulus_pallet_parachain_system/lib.rs.html#1750-1774\">source</a><a href=\"#impl-RelaychainStateProvider-for-RelaychainDataProvider%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"cumulus_pallet_parachain_system/pallet/trait.Config.html\" title=\"trait cumulus_pallet_parachain_system::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"cumulus_pallet_parachain_system/trait.RelaychainStateProvider.html\" title=\"trait cumulus_pallet_parachain_system::RelaychainStateProvider\">RelaychainStateProvider</a> for <a class=\"struct\" href=\"cumulus_pallet_parachain_system/struct.RelaychainDataProvider.html\" title=\"struct cumulus_pallet_parachain_system::RelaychainDataProvider\">RelaychainDataProvider</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.current_relay_chain_state\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cumulus_pallet_parachain_system/lib.rs.html#1751-1758\">source</a><a href=\"#method.current_relay_chain_state\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cumulus_pallet_parachain_system/trait.RelaychainStateProvider.html#tymethod.current_relay_chain_state\" class=\"fn\">current_relay_chain_state</a>() -&gt; <a class=\"struct\" href=\"cumulus_pallet_parachain_system/struct.RelayChainState.html\" title=\"struct cumulus_pallet_parachain_system::RelayChainState\">RelayChainState</a></h4></section></summary><div class='docblock'>May be called by any runtime module to obtain the current state of the relay chain. <a href=\"cumulus_pallet_parachain_system/trait.RelaychainStateProvider.html#tymethod.current_relay_chain_state\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_current_relay_chain_state\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cumulus_pallet_parachain_system/lib.rs.html#1761-1773\">source</a><a href=\"#method.set_current_relay_chain_state\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cumulus_pallet_parachain_system/trait.RelaychainStateProvider.html#method.set_current_relay_chain_state\" class=\"fn\">set_current_relay_chain_state</a>(state: <a class=\"struct\" href=\"cumulus_pallet_parachain_system/struct.RelayChainState.html\" title=\"struct cumulus_pallet_parachain_system::RelayChainState\">RelayChainState</a>)</h4></section></summary><div class='docblock'>Utility function only to be used in benchmarking scenarios, to be implemented optionally,\nelse a noop. <a href=\"cumulus_pallet_parachain_system/trait.RelaychainStateProvider.html#method.set_current_relay_chain_state\">Read more</a></div></details></div></details>","RelaychainStateProvider","cumulus_pallet_parachain_system::RelaychainBlockNumberProvider"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BlockNumberProvider-for-RelaychainDataProvider%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/cumulus_pallet_parachain_system/lib.rs.html#1726-1748\">source</a><a href=\"#impl-BlockNumberProvider-for-RelaychainDataProvider%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"cumulus_pallet_parachain_system/pallet/trait.Config.html\" title=\"trait cumulus_pallet_parachain_system::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.BlockNumberProvider.html\" title=\"trait sp_runtime::traits::BlockNumberProvider\">BlockNumberProvider</a> for <a class=\"struct\" href=\"cumulus_pallet_parachain_system/struct.RelaychainDataProvider.html\" title=\"struct cumulus_pallet_parachain_system::RelaychainDataProvider\">RelaychainDataProvider</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.BlockNumber\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.BlockNumber\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"sp_runtime/traits/trait.BlockNumberProvider.html#associatedtype.BlockNumber\" class=\"associatedtype\">BlockNumber</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a></h4></section></summary><div class='docblock'>Type of <code>BlockNumber</code> to provide.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.current_block_number\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cumulus_pallet_parachain_system/lib.rs.html#1729-1733\">source</a><a href=\"#method.current_block_number\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_runtime/traits/trait.BlockNumberProvider.html#tymethod.current_block_number\" class=\"fn\">current_block_number</a>() -&gt; <a class=\"type\" href=\"polkadot_core_primitives/type.BlockNumber.html\" title=\"type polkadot_core_primitives::BlockNumber\">BlockNumber</a></h4></section></summary><div class='docblock'>Returns the current block number. <a href=\"sp_runtime/traits/trait.BlockNumberProvider.html#tymethod.current_block_number\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_block_number\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cumulus_pallet_parachain_system/lib.rs.html#1736-1747\">source</a><a href=\"#method.set_block_number\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_runtime/traits/trait.BlockNumberProvider.html#method.set_block_number\" class=\"fn\">set_block_number</a>(block: Self::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.BlockNumberProvider.html#associatedtype.BlockNumber\" title=\"type sp_runtime::traits::BlockNumberProvider::BlockNumber\">BlockNumber</a>)</h4></section></summary><div class='docblock'>Utility function only to be used in benchmarking scenarios or tests, to be implemented\noptionally, else a noop. <a href=\"sp_runtime/traits/trait.BlockNumberProvider.html#method.set_block_number\">Read more</a></div></details></div></details>","BlockNumberProvider","cumulus_pallet_parachain_system::RelaychainBlockNumberProvider"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()