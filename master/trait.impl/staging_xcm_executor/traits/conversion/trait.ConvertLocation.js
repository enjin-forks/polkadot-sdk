(function() {var implementors = {
"snowbridge_router_primitives":[["impl&lt;AccountId&gt; ConvertLocation&lt;AccountId&gt; for <a class=\"struct\" href=\"snowbridge_router_primitives/inbound/struct.GlobalConsensusEthereumConvertsFor.html\" title=\"struct snowbridge_router_primitives::inbound::GlobalConsensusEthereumConvertsFor\">GlobalConsensusEthereumConvertsFor</a>&lt;AccountId&gt;<div class=\"where\">where\n    AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">32</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div>"]],
"staging_xcm_builder":[["impl&lt;ParaId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"sp_runtime/traits/trait.AccountIdConversion.html\" title=\"trait sp_runtime::traits::AccountIdConversion\">AccountIdConversion</a>&lt;AccountId&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; ConvertLocation&lt;AccountId&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.ChildParachainConvertsVia.html\" title=\"struct staging_xcm_builder::ChildParachainConvertsVia\">ChildParachainConvertsVia</a>&lt;ParaId, AccountId&gt;"],["impl&lt;UniversalLocation: Get&lt;<a class=\"type\" href=\"staging_xcm_builder/test_utils/type.InteriorLocation.html\" title=\"type staging_xcm_builder::test_utils::InteriorLocation\">InteriorLocation</a>&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">32</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; ConvertLocation&lt;AccountId&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.GlobalConsensusParachainConvertsFor.html\" title=\"struct staging_xcm_builder::GlobalConsensusParachainConvertsFor\">GlobalConsensusParachainConvertsFor</a>&lt;UniversalLocation, AccountId&gt;"],["impl&lt;TreasuryAccount: Get&lt;AccountId&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">32</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">32</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; ConvertLocation&lt;AccountId&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.LocalTreasuryVoiceConvertsVia.html\" title=\"struct staging_xcm_builder::LocalTreasuryVoiceConvertsVia\">LocalTreasuryVoiceConvertsVia</a>&lt;TreasuryAccount, AccountId&gt;"],["impl&lt;AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">32</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Describe: <a class=\"trait\" href=\"staging_xcm_builder/trait.DescribeLocation.html\" title=\"trait staging_xcm_builder::DescribeLocation\">DescribeLocation</a>&gt; ConvertLocation&lt;AccountId&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.HashedDescription.html\" title=\"struct staging_xcm_builder::HashedDescription\">HashedDescription</a>&lt;AccountId, Describe&gt;"],["impl&lt;Network: Get&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.NetworkId.html\" title=\"enum staging_xcm_builder::test_utils::NetworkId\">NetworkId</a>&gt;&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">20</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">20</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; ConvertLocation&lt;AccountId&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.AccountKey20Aliases.html\" title=\"struct staging_xcm_builder::AccountKey20Aliases\">AccountKey20Aliases</a>&lt;Network, AccountId&gt;"],["impl&lt;UniversalLocation: Get&lt;<a class=\"type\" href=\"staging_xcm_builder/test_utils/type.InteriorLocation.html\" title=\"type staging_xcm_builder::test_utils::InteriorLocation\">InteriorLocation</a>&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">32</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; ConvertLocation&lt;AccountId&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.GlobalConsensusConvertsFor.html\" title=\"struct staging_xcm_builder::GlobalConsensusConvertsFor\">GlobalConsensusConvertsFor</a>&lt;UniversalLocation, AccountId&gt;"],["impl&lt;AccountId: Decode + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; ConvertLocation&lt;AccountId&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.ParentIsPreset.html\" title=\"struct staging_xcm_builder::ParentIsPreset\">ParentIsPreset</a>&lt;AccountId&gt;"],["impl&lt;Network: Get&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.NetworkId.html\" title=\"enum staging_xcm_builder::test_utils::NetworkId\">NetworkId</a>&gt;&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">32</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">32</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; ConvertLocation&lt;AccountId&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.AccountId32Aliases.html\" title=\"struct staging_xcm_builder::AccountId32Aliases\">AccountId32Aliases</a>&lt;Network, AccountId&gt;"],["impl&lt;Network: Get&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.NetworkId.html\" title=\"enum staging_xcm_builder::test_utils::NetworkId\">NetworkId</a>&gt;&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">32</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">32</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; ConvertLocation&lt;AccountId&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.Account32Hash.html\" title=\"struct staging_xcm_builder::Account32Hash\">Account32Hash</a>&lt;Network, AccountId&gt;"],["impl&lt;ParaId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"sp_runtime/traits/trait.AccountIdConversion.html\" title=\"trait sp_runtime::traits::AccountIdConversion\">AccountIdConversion</a>&lt;AccountId&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; ConvertLocation&lt;AccountId&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.SiblingParachainConvertsVia.html\" title=\"struct staging_xcm_builder::SiblingParachainConvertsVia\">SiblingParachainConvertsVia</a>&lt;ParaId, AccountId&gt;"]],
"staging_xcm_executor":[],
"xcm_emulator":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()