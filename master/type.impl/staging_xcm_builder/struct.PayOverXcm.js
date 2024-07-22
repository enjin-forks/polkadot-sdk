(function() {var type_impls = {
"staging_xcm_builder":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Pay-for-PayOverXcm%3CInterior,+Router,+Querier,+Timeout,+Beneficiary,+AssetKind,+AssetKindToLocatableAsset,+BeneficiaryRefToLocation%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/pay.rs.html#68-157\">source</a><a href=\"#impl-Pay-for-PayOverXcm%3CInterior,+Router,+Querier,+Timeout,+Beneficiary,+AssetKind,+AssetKindToLocatableAsset,+BeneficiaryRefToLocation%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Interior: Get&lt;<a class=\"type\" href=\"staging_xcm_builder/test_utils/type.InteriorLocation.html\" title=\"type staging_xcm_builder::test_utils::InteriorLocation\">InteriorLocation</a>&gt;, Router: <a class=\"trait\" href=\"staging_xcm_builder/test_utils/trait.SendXcm.html\" title=\"trait staging_xcm_builder::test_utils::SendXcm\">SendXcm</a>, Querier: <a class=\"trait\" href=\"staging_xcm_builder/trait.QueryHandler.html\" title=\"trait staging_xcm_builder::QueryHandler\">QueryHandler</a>, Timeout: Get&lt;Querier::<a class=\"associatedtype\" href=\"staging_xcm_builder/trait.QueryHandler.html#associatedtype.BlockNumber\" title=\"type staging_xcm_builder::QueryHandler::BlockNumber\">BlockNumber</a>&gt;, Beneficiary: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, AssetKind, AssetKindToLocatableAsset: <a class=\"trait\" href=\"sp_runtime/traits/trait.TryConvert.html\" title=\"trait sp_runtime::traits::TryConvert\">TryConvert</a>&lt;AssetKind, <a class=\"struct\" href=\"staging_xcm_builder/struct.LocatableAssetId.html\" title=\"struct staging_xcm_builder::LocatableAssetId\">LocatableAssetId</a>&gt;, BeneficiaryRefToLocation: for&lt;'a&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.TryConvert.html\" title=\"trait sp_runtime::traits::TryConvert\">TryConvert</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;'a Beneficiary</a>, <a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>&gt;&gt; Pay for <a class=\"struct\" href=\"staging_xcm_builder/struct.PayOverXcm.html\" title=\"struct staging_xcm_builder::PayOverXcm\">PayOverXcm</a>&lt;Interior, Router, Querier, Timeout, Beneficiary, AssetKind, AssetKindToLocatableAsset, BeneficiaryRefToLocation&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Beneficiary\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Beneficiary\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Beneficiary</a> = Beneficiary</h4></section></summary><div class='docblock'>The type by which we identify the beneficiaries to whom a payment may be made.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.AssetKind\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.AssetKind\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">AssetKind</a> = AssetKind</h4></section></summary><div class='docblock'>The type for the kinds of asset that are going to be paid. <a>Read more</a></div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Balance\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Balance\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Balance</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u128.html\">u128</a></h4></section></summary><div class='docblock'>The type by which we measure units of the currency in which we make payments.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Id\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Id\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Id</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>An identifier given to an individual payment.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Error</a> = <a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.XcmError.html\" title=\"enum staging_xcm_builder::test_utils::XcmError\">Error</a></h4></section></summary><div class='docblock'>An error which could be returned by the Pay type</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.pay\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/pay.rs.html#95-131\">source</a><a href=\"#method.pay\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">pay</a>(\n    who: &amp;Self::Beneficiary,\n    asset_kind: Self::AssetKind,\n    amount: Self::Balance\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self::Id, Self::Error&gt;</h4></section></summary><div class='docblock'>Make a payment and return an identifier for later evaluation of success in some off-chain\nmechanism (likely an event, but possibly not on this chain).</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.check_payment\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/pay.rs.html#133-144\">source</a><a href=\"#method.check_payment\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">check_payment</a>(id: Self::Id) -&gt; PaymentStatus</h4></section></summary><div class='docblock'>Check how a payment has proceeded. <code>id</code> must have been previously returned by <code>pay</code> for\nthe result of this call to be meaningful. Once this returns anything other than\n<code>InProgress</code> for some <code>id</code> it must return <code>Unknown</code> rather than the actual result\nvalue.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ensure_successful\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/pay.rs.html#147-151\">source</a><a href=\"#method.ensure_successful\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">ensure_successful</a>(\n    _: &amp;Self::Beneficiary,\n    _: Self::AssetKind,\n    _: Self::Balance\n)</h4></section></summary><div class='docblock'>Ensure that a call to pay with the given parameters will be successful if done immediately\nafter this call. Used in benchmarking code.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ensure_concluded\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/pay.rs.html#154-156\">source</a><a href=\"#method.ensure_concluded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">ensure_concluded</a>(id: Self::Id)</h4></section></summary><div class='docblock'>Ensure that a call to <code>check_payment</code> with the given parameters will return either <code>Success</code>\nor <code>Failure</code>.</div></details></div></details>","Pay","staging_xcm_builder::pay::PayAccountId32OnChainOverXcm"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()