(function() {var type_impls = {
"pallet_referenda":[["<section id=\"impl-EncodeLike-for-TrackInfo%3CBalance,+Moment%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_referenda/types.rs.html#114\">source</a><a href=\"#impl-EncodeLike-for-TrackInfo%3CBalance,+Moment%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Balance, Moment&gt; EncodeLike for <a class=\"struct\" href=\"pallet_referenda/struct.TrackInfo.html\" title=\"struct pallet_referenda::TrackInfo\">TrackInfo</a>&lt;Balance, Moment&gt;<div class=\"where\">where\n    Balance: Encode,\n    Moment: Encode,</div></h3></section>","EncodeLike","pallet_referenda::types::TrackInfoOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-TrackInfo%3CBalance,+Moment%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_referenda/types.rs.html#114\">source</a><a href=\"#impl-Clone-for-TrackInfo%3CBalance,+Moment%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Moment: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"pallet_referenda/struct.TrackInfo.html\" title=\"struct pallet_referenda::TrackInfo\">TrackInfo</a>&lt;Balance, Moment&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_referenda/types.rs.html#114\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"pallet_referenda/struct.TrackInfo.html\" title=\"struct pallet_referenda::TrackInfo\">TrackInfo</a>&lt;Balance, Moment&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","pallet_referenda::types::TrackInfoOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-TrackInfo%3CBalance,+Moment%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_referenda/types.rs.html#114\">source</a><a href=\"#impl-Encode-for-TrackInfo%3CBalance,+Moment%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Balance, Moment&gt; Encode for <a class=\"struct\" href=\"pallet_referenda/struct.TrackInfo.html\" title=\"struct pallet_referenda::TrackInfo\">TrackInfo</a>&lt;Balance, Moment&gt;<div class=\"where\">where\n    Balance: Encode,\n    Moment: Encode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_referenda/types.rs.html#114\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_referenda/types.rs.html#114\">source</a><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>\n)</h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"pallet_referenda/struct.Vec.html\" title=\"struct pallet_referenda::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</div></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","pallet_referenda::types::TrackInfoOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-TrackInfo%3CBalance,+Moment%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_referenda/types.rs.html#114\">source</a><a href=\"#impl-TypeInfo-for-TrackInfo%3CBalance,+Moment%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Balance, Moment&gt; TypeInfo for <a class=\"struct\" href=\"pallet_referenda/struct.TrackInfo.html\" title=\"struct pallet_referenda::TrackInfo\">TrackInfo</a>&lt;Balance, Moment&gt;<div class=\"where\">where\n    Balance: TypeInfo + 'static,\n    Moment: TypeInfo + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = <a class=\"struct\" href=\"pallet_referenda/struct.TrackInfo.html\" title=\"struct pallet_referenda::TrackInfo\">TrackInfo</a>&lt;Balance, Moment&gt;</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_referenda/types.rs.html#114\">source</a><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","pallet_referenda::types::TrackInfoOf"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()