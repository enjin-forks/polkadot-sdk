(function() {var type_impls = {
"bridge_hub_test_utils":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RuntimeHelper%3CRuntime,+AllPalletsWithoutSystem%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#264-272\">source</a><a href=\"#impl-RuntimeHelper%3CRuntime,+AllPalletsWithoutSystem%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Runtime, AllPalletsWithoutSystem&gt; <a class=\"struct\" href=\"bridge_hub_test_utils/struct.RuntimeHelper.html\" title=\"struct bridge_hub_test_utils::RuntimeHelper\">RuntimeHelper</a>&lt;Runtime, AllPalletsWithoutSystem&gt;<div class=\"where\">where\n    Runtime: Config + Config + Config,\n    &lt;Runtime as Config&gt;::AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;&lt;&lt;Runtime as Config&gt;::RuntimeOrigin as OriginTrait&gt;::AccountId&gt;,\n    AllPalletsWithoutSystem: OnInitialize&lt;&lt;&lt;&lt;Runtime as Config&gt;::Block as HeaderProvider&gt;::HeaderT as Header&gt;::Number&gt; + OnFinalize&lt;&lt;&lt;&lt;Runtime as Config&gt;::Block as HeaderProvider&gt;::HeaderT as Header&gt;::Number&gt;,</div></h3></section></summary><div class=\"docblock\"><p>Utility function that advances the chain to the desired block number.\nIf an author is provided, that author information is injected to all the blocks in the meantime.</p>\n</div><div class=\"impl-items\"><section id=\"method.run_to_block\" class=\"method\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#274\">source</a><h4 class=\"code-header\">pub fn <a href=\"bridge_hub_test_utils/struct.RuntimeHelper.html#tymethod.run_to_block\" class=\"fn\">run_to_block</a>(\n    n: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>,\n    author: &lt;Runtime as Config&gt;::AccountId\n) -&gt; &lt;&lt;Runtime as Config&gt;::Block as HeaderProvider&gt;::HeaderT</h4></section><section id=\"method.run_to_block_with_finalize\" class=\"method\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#303\">source</a><h4 class=\"code-header\">pub fn <a href=\"bridge_hub_test_utils/struct.RuntimeHelper.html#tymethod.run_to_block_with_finalize\" class=\"fn\">run_to_block_with_finalize</a>(\n    n: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>\n) -&gt; &lt;&lt;Runtime as Config&gt;::Block as HeaderProvider&gt;::HeaderT</h4></section><section id=\"method.root_origin\" class=\"method\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#362\">source</a><h4 class=\"code-header\">pub fn <a href=\"bridge_hub_test_utils/struct.RuntimeHelper.html#tymethod.root_origin\" class=\"fn\">root_origin</a>() -&gt; &lt;Runtime as Config&gt;::RuntimeOrigin</h4></section><section id=\"method.block_number\" class=\"method\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#366\">source</a><h4 class=\"code-header\">pub fn <a href=\"bridge_hub_test_utils/struct.RuntimeHelper.html#tymethod.block_number\" class=\"fn\">block_number</a>() -&gt; U256</h4></section><section id=\"method.origin_of\" class=\"method\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#370-372\">source</a><h4 class=\"code-header\">pub fn <a href=\"bridge_hub_test_utils/struct.RuntimeHelper.html#tymethod.origin_of\" class=\"fn\">origin_of</a>(\n    account_id: &lt;Runtime as Config&gt;::AccountId\n) -&gt; &lt;Runtime as Config&gt;::RuntimeOrigin</h4></section></div></details>",0,"bridge_hub_test_utils::test_cases::RuntimeHelper"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RuntimeHelper%3CXcmConfig,+AllPalletsWithoutSystem%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#377-378\">source</a><a href=\"#impl-RuntimeHelper%3CXcmConfig,+AllPalletsWithoutSystem%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;XcmConfig, AllPalletsWithoutSystem&gt; <a class=\"struct\" href=\"bridge_hub_test_utils/struct.RuntimeHelper.html\" title=\"struct bridge_hub_test_utils::RuntimeHelper\">RuntimeHelper</a>&lt;XcmConfig, AllPalletsWithoutSystem&gt;<div class=\"where\">where\n    XcmConfig: Config,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.do_transfer\" class=\"method\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#380-384\">source</a><h4 class=\"code-header\">pub fn <a href=\"bridge_hub_test_utils/struct.RuntimeHelper.html#tymethod.do_transfer\" class=\"fn\">do_transfer</a>(\n    from: Location,\n    to: Location,\n    _: (Location, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u128.html\">u128</a>)\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;AssetsInHolding, Error&gt;</h4></section></div></details>",0,"bridge_hub_test_utils::test_cases::RuntimeHelper"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RuntimeHelper%3CRuntime,+AllPalletsWithoutSystem%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#396-399\">source</a><a href=\"#impl-RuntimeHelper%3CRuntime,+AllPalletsWithoutSystem%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Runtime, AllPalletsWithoutSystem&gt; <a class=\"struct\" href=\"bridge_hub_test_utils/struct.RuntimeHelper.html\" title=\"struct bridge_hub_test_utils::RuntimeHelper\">RuntimeHelper</a>&lt;Runtime, AllPalletsWithoutSystem&gt;<div class=\"where\">where\n    Runtime: Config + Config,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.do_teleport_assets\" class=\"method\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#401-414\">source</a><h4 class=\"code-header\">pub fn <a href=\"bridge_hub_test_utils/struct.RuntimeHelper.html#tymethod.do_teleport_assets\" class=\"fn\">do_teleport_assets</a>&lt;HrmpChannelOpener&gt;(\n    origin: &lt;Runtime as Config&gt;::RuntimeOrigin,\n    dest: Location,\n    beneficiary: Location,\n    _: (Location, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u128.html\">u128</a>),\n    open_hrmp_channel: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>)&gt;,\n    included_head: &lt;&lt;Runtime as Config&gt;::Block as HeaderProvider&gt;::HeaderT,\n    slot_digest: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>],\n    slot_durations: &amp;<a class=\"struct\" href=\"bridge_hub_test_utils/struct.SlotDurations.html\" title=\"struct bridge_hub_test_utils::SlotDurations\">SlotDurations</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, DispatchError&gt;<div class=\"where\">where\n    HrmpChannelOpener: ProvideInherent&lt;Call = Call&lt;Runtime&gt;&gt;,</div></h4></section></div></details>",0,"bridge_hub_test_utils::test_cases::RuntimeHelper"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RuntimeHelper%3CRuntime,+AllPalletsWithoutSystem%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#439-442\">source</a><a href=\"#impl-RuntimeHelper%3CRuntime,+AllPalletsWithoutSystem%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Runtime, AllPalletsWithoutSystem&gt; <a class=\"struct\" href=\"bridge_hub_test_utils/struct.RuntimeHelper.html\" title=\"struct bridge_hub_test_utils::RuntimeHelper\">RuntimeHelper</a>&lt;Runtime, AllPalletsWithoutSystem&gt;<div class=\"where\">where\n    Runtime: Config + Config,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.execute_as_governance\" class=\"method\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#444\">source</a><h4 class=\"code-header\">pub fn <a href=\"bridge_hub_test_utils/struct.RuntimeHelper.html#tymethod.execute_as_governance\" class=\"fn\">execute_as_governance</a>(\n    call: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt;,\n    require_weight_at_most: Weight\n) -&gt; Outcome</h4></section></div></details>",0,"bridge_hub_test_utils::test_cases::RuntimeHelper"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RuntimeHelper%3CParachainSystem,+AllPalletsWithoutSystem%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#472-473\">source</a><a href=\"#impl-RuntimeHelper%3CParachainSystem,+AllPalletsWithoutSystem%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;ParachainSystem, AllPalletsWithoutSystem&gt; <a class=\"struct\" href=\"bridge_hub_test_utils/struct.RuntimeHelper.html\" title=\"struct bridge_hub_test_utils::RuntimeHelper\">RuntimeHelper</a>&lt;ParachainSystem, AllPalletsWithoutSystem&gt;<div class=\"where\">where\n    ParachainSystem: Config,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.xcm_max_weight\" class=\"method\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#475\">source</a><h4 class=\"code-header\">pub fn <a href=\"bridge_hub_test_utils/struct.RuntimeHelper.html#tymethod.xcm_max_weight\" class=\"fn\">xcm_max_weight</a>(from: <a class=\"enum\" href=\"bridge_hub_test_utils/enum.XcmReceivedFrom.html\" title=\"enum bridge_hub_test_utils::XcmReceivedFrom\">XcmReceivedFrom</a>) -&gt; Weight</h4></section></div></details>",0,"bridge_hub_test_utils::test_cases::RuntimeHelper"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RuntimeHelper%3CRuntime,+AllPalletsWithoutSystem%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#483-484\">source</a><a href=\"#impl-RuntimeHelper%3CRuntime,+AllPalletsWithoutSystem%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Runtime, AllPalletsWithoutSystem&gt; <a class=\"struct\" href=\"bridge_hub_test_utils/struct.RuntimeHelper.html\" title=\"struct bridge_hub_test_utils::RuntimeHelper\">RuntimeHelper</a>&lt;Runtime, AllPalletsWithoutSystem&gt;<div class=\"where\">where\n    Runtime: Config + Config,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.assert_pallet_xcm_event_outcome\" class=\"method\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#486-489\">source</a><h4 class=\"code-header\">pub fn <a href=\"bridge_hub_test_utils/struct.RuntimeHelper.html#tymethod.assert_pallet_xcm_event_outcome\" class=\"fn\">assert_pallet_xcm_event_outcome</a>(\n    unwrap_pallet_xcm_event: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Event&lt;Runtime&gt;&gt;&gt;,\n    assert_outcome: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.fn.html\">fn</a>(_: Outcome)\n)</h4></section><section id=\"method.get_pallet_xcm_event_outcome\" class=\"method\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#493-495\">source</a><h4 class=\"code-header\">pub fn <a href=\"bridge_hub_test_utils/struct.RuntimeHelper.html#tymethod.get_pallet_xcm_event_outcome\" class=\"fn\">get_pallet_xcm_event_outcome</a>(\n    unwrap_pallet_xcm_event: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Event&lt;Runtime&gt;&gt;&gt;\n) -&gt; Outcome</h4></section></div></details>",0,"bridge_hub_test_utils::test_cases::RuntimeHelper"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RuntimeHelper%3CRuntime,+AllPalletsWithoutSystem%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#507-510\">source</a><a href=\"#impl-RuntimeHelper%3CRuntime,+AllPalletsWithoutSystem%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Runtime, AllPalletsWithoutSystem&gt; <a class=\"struct\" href=\"bridge_hub_test_utils/struct.RuntimeHelper.html\" title=\"struct bridge_hub_test_utils::RuntimeHelper\">RuntimeHelper</a>&lt;Runtime, AllPalletsWithoutSystem&gt;<div class=\"where\">where\n    Runtime: Config + Config,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.xcmp_queue_message_sent\" class=\"method\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#512-516\">source</a><h4 class=\"code-header\">pub fn <a href=\"bridge_hub_test_utils/struct.RuntimeHelper.html#tymethod.xcmp_queue_message_sent\" class=\"fn\">xcmp_queue_message_sent</a>(\n    unwrap_xcmp_queue_event: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Event&lt;Runtime&gt;&gt;&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">32</a>]&gt;</h4></section></div></details>",0,"bridge_hub_test_utils::test_cases::RuntimeHelper"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RuntimeHelper%3CHrmpChannelSource,+AllPalletsWithoutSystem%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#629-630\">source</a><a href=\"#impl-RuntimeHelper%3CHrmpChannelSource,+AllPalletsWithoutSystem%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;HrmpChannelSource, AllPalletsWithoutSystem&gt; <a class=\"struct\" href=\"bridge_hub_test_utils/struct.RuntimeHelper.html\" title=\"struct bridge_hub_test_utils::RuntimeHelper\">RuntimeHelper</a>&lt;HrmpChannelSource, AllPalletsWithoutSystem&gt;<div class=\"where\">where\n    HrmpChannelSource: XcmpMessageSource,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.take_xcm\" class=\"method\"><a class=\"src rightside\" href=\"src/parachains_runtimes_test_utils/lib.rs.html#632\">source</a><h4 class=\"code-header\">pub fn <a href=\"bridge_hub_test_utils/struct.RuntimeHelper.html#tymethod.take_xcm\" class=\"fn\">take_xcm</a>(sent_to_para_id: Id) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;VersionedXcm&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;&gt;</h4></section></div></details>",0,"bridge_hub_test_utils::test_cases::RuntimeHelper"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()