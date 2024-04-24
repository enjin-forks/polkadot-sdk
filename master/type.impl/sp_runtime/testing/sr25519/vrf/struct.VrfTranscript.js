(function() {var type_impls = {
"sp_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-VrfTranscript\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_core/sr25519.rs.html#319\">source</a><a href=\"#impl-VrfTranscript\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"sp_runtime/testing/sr25519/vrf/struct.VrfTranscript.html\" title=\"struct sp_runtime::testing::sr25519::vrf::VrfTranscript\">VrfTranscript</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/sp_core/sr25519.rs.html#323\">source</a><h4 class=\"code-header\">pub fn <a href=\"sp_runtime/testing/sr25519/vrf/struct.VrfTranscript.html#tymethod.new\" class=\"fn\">new</a>(\n    label: &amp;'static [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>],\n    data: &amp;[(&amp;'static [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>], &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>])]\n) -&gt; <a class=\"struct\" href=\"sp_runtime/testing/sr25519/vrf/struct.VrfTranscript.html\" title=\"struct sp_runtime::testing::sr25519::vrf::VrfTranscript\">VrfTranscript</a></h4></section></summary><div class=\"docblock\"><p>Build a new transcript instance.</p>\n<p>Each <code>data</code> element is a tuple <code>(domain, message)</code> used to build the transcript.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_sign_data\" class=\"method\"><a class=\"src rightside\" href=\"src/sp_core/sr25519.rs.html#330\">source</a><h4 class=\"code-header\">pub fn <a href=\"sp_runtime/testing/sr25519/vrf/struct.VrfTranscript.html#tymethod.into_sign_data\" class=\"fn\">into_sign_data</a>(self) -&gt; <a class=\"struct\" href=\"sp_runtime/testing/sr25519/vrf/struct.VrfSignData.html\" title=\"struct sp_runtime::testing::sr25519::vrf::VrfSignData\">VrfSignData</a></h4></section></summary><div class=\"docblock\"><p>Map transcript to <code>VrfSignData</code>.</p>\n</div></details></div></details>",0,"sp_runtime::testing::sr25519::vrf::VrfInput"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-VrfTranscript\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_core/sr25519.rs.html#316\">source</a><a href=\"#impl-Clone-for-VrfTranscript\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"sp_runtime/testing/sr25519/vrf/struct.VrfTranscript.html\" title=\"struct sp_runtime::testing::sr25519::vrf::VrfTranscript\">VrfTranscript</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/sr25519.rs.html#316\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"sp_runtime/testing/sr25519/vrf/struct.VrfTranscript.html\" title=\"struct sp_runtime::testing::sr25519::vrf::VrfTranscript\">VrfTranscript</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sp_runtime::testing::sr25519::vrf::VrfInput"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()