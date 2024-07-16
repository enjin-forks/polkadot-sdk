(function() {var type_impls = {
"cumulus_client_network":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RequireSecondedInBlockAnnounce%3CBlock,+RCInterface%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/cumulus_client_network/lib.rs.html#234-242\">source</a><a href=\"#impl-RequireSecondedInBlockAnnounce%3CBlock,+RCInterface%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block, RCInterface&gt; <a class=\"struct\" href=\"cumulus_client_network/struct.RequireSecondedInBlockAnnounce.html\" title=\"struct cumulus_client_network::RequireSecondedInBlockAnnounce\">RequireSecondedInBlockAnnounce</a>&lt;Block, RCInterface&gt;<div class=\"where\">where\n    RCInterface: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/cumulus_client_network/lib.rs.html#239-241\">source</a><h4 class=\"code-header\">pub fn <a href=\"cumulus_client_network/struct.RequireSecondedInBlockAnnounce.html#tymethod.new\" class=\"fn\">new</a>(relay_chain_interface: RCInterface, para_id: <a class=\"struct\" href=\"polkadot_parachain_primitives/primitives/struct.Id.html\" title=\"struct polkadot_parachain_primitives::primitives::Id\">ParaId</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a new <a href=\"cumulus_client_network/struct.RequireSecondedInBlockAnnounce.html\" title=\"struct cumulus_client_network::RequireSecondedInBlockAnnounce\"><code>RequireSecondedInBlockAnnounce</code></a>.</p>\n</div></details></div></details>",0,"cumulus_client_network::BlockAnnounceValidator"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BlockAnnounceValidator%3CBlock%3E-for-RequireSecondedInBlockAnnounce%3CBlock,+RCInterface%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/cumulus_client_network/lib.rs.html#356-416\">source</a><a href=\"#impl-BlockAnnounceValidator%3CBlock%3E-for-RequireSecondedInBlockAnnounce%3CBlock,+RCInterface%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>, RCInterface&gt; <a class=\"trait\" href=\"sp_consensus/block_validation/trait.BlockAnnounceValidator.html\" title=\"trait sp_consensus::block_validation::BlockAnnounceValidator\">BlockAnnounceValidator</a>&lt;Block&gt; for <a class=\"struct\" href=\"cumulus_client_network/struct.RequireSecondedInBlockAnnounce.html\" title=\"struct cumulus_client_network::RequireSecondedInBlockAnnounce\">RequireSecondedInBlockAnnounce</a>&lt;Block, RCInterface&gt;<div class=\"where\">where\n    RCInterface: <a class=\"trait\" href=\"cumulus_relay_chain_interface/trait.RelayChainInterface.html\" title=\"trait cumulus_relay_chain_interface::RelayChainInterface\">RelayChainInterface</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.validate\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cumulus_client_network/lib.rs.html#361-415\">source</a><a href=\"#method.validate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_consensus/block_validation/trait.BlockAnnounceValidator.html#tymethod.validate\" class=\"fn\">validate</a>(\n    &amp;mut self,\n    header: &amp;Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a>,\n    data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"sp_consensus/block_validation/enum.Validation.html\" title=\"enum sp_consensus::block_validation::Validation\">Validation</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt;&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt;&gt;</h4></section></summary><div class='docblock'>Validate the announced header and its associated data. <a href=\"sp_consensus/block_validation/trait.BlockAnnounceValidator.html#tymethod.validate\">Read more</a></div></details></div></details>","BlockAnnounceValidator<Block>","cumulus_client_network::BlockAnnounceValidator"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-RequireSecondedInBlockAnnounce%3CBlock,+RCInterface%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/cumulus_client_network/lib.rs.html#227\">source</a><a href=\"#impl-Clone-for-RequireSecondedInBlockAnnounce%3CBlock,+RCInterface%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, RCInterface: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"cumulus_client_network/struct.RequireSecondedInBlockAnnounce.html\" title=\"struct cumulus_client_network::RequireSecondedInBlockAnnounce\">RequireSecondedInBlockAnnounce</a>&lt;Block, RCInterface&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cumulus_client_network/lib.rs.html#227\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"cumulus_client_network/struct.RequireSecondedInBlockAnnounce.html\" title=\"struct cumulus_client_network::RequireSecondedInBlockAnnounce\">RequireSecondedInBlockAnnounce</a>&lt;Block, RCInterface&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","cumulus_client_network::BlockAnnounceValidator"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()