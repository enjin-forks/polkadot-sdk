(function() {var type_impls = {
"sp_consensus_sassafras":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RingContext%3CD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_core/bandersnatch.rs.html#566\">source</a><a href=\"#impl-RingContext%3CD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt; <a class=\"struct\" href=\"sp_core/bandersnatch/ring_vrf/struct.RingContext.html\" title=\"struct sp_core::bandersnatch::ring_vrf::RingContext\">RingContext</a>&lt;D&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_testing\" class=\"method\"><a class=\"src rightside\" href=\"src/sp_core/bandersnatch.rs.html#568\">source</a><h4 class=\"code-header\">pub fn <a href=\"sp_core/bandersnatch/ring_vrf/struct.RingContext.html#tymethod.new_testing\" class=\"fn\">new_testing</a>() -&gt; <a class=\"struct\" href=\"sp_core/bandersnatch/ring_vrf/struct.RingContext.html\" title=\"struct sp_core::bandersnatch::ring_vrf::RingContext\">RingContext</a>&lt;D&gt;</h4></section></summary><div class=\"docblock\"><p>Build an dummy instance for testing purposes.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_keyset_size\" class=\"method\"><a class=\"src rightside\" href=\"src/sp_core/bandersnatch.rs.html#573\">source</a><h4 class=\"code-header\">pub fn <a href=\"sp_core/bandersnatch/ring_vrf/struct.RingContext.html#tymethod.max_keyset_size\" class=\"fn\">max_keyset_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Get the keyset max size.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.prover\" class=\"method\"><a class=\"src rightside\" href=\"src/sp_core/bandersnatch.rs.html#578\">source</a><h4 class=\"code-header\">pub fn <a href=\"sp_core/bandersnatch/ring_vrf/struct.RingContext.html#tymethod.prover\" class=\"fn\">prover</a>(\n    &amp;self,\n    public_keys: &amp;[<a class=\"struct\" href=\"sp_core/crypto_bytes/struct.CryptoBytes.html\" title=\"struct sp_core::crypto_bytes::CryptoBytes\">CryptoBytes</a>&lt;sp_core::::bandersnatch::Public::{constant#0}, (<a class=\"struct\" href=\"sp_core/crypto_bytes/public_bytes/struct.PublicTag.html\" title=\"struct sp_core::crypto_bytes::public_bytes::PublicTag\">PublicTag</a>, BandersnatchTag)&gt;],\n    public_idx: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;RingProver&lt;Fp&lt;MontBackend&lt;FrConfig, 4&gt;, 4&gt;, KZG&lt;Bls12&lt;Config&lt;<a class=\"struct\" href=\"sp_crypto_ec_utils/bls12_381/struct.HostHooks.html\" title=\"struct sp_crypto_ec_utils::bls12_381::HostHooks\">HostHooks</a>&gt;&gt;&gt;, BandersnatchConfig&lt;<a class=\"struct\" href=\"sp_crypto_ec_utils/ed_on_bls12_381_bandersnatch/struct.HostHooks.html\" title=\"struct sp_crypto_ec_utils::ed_on_bls12_381_bandersnatch::HostHooks\">HostHooks</a>&gt;&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Get ring prover for the key at index <code>public_idx</code> in the <code>public_keys</code> set.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.verifier\" class=\"method\"><a class=\"src rightside\" href=\"src/sp_core/bandersnatch.rs.html#591\">source</a><h4 class=\"code-header\">pub fn <a href=\"sp_core/bandersnatch/ring_vrf/struct.RingContext.html#tymethod.verifier\" class=\"fn\">verifier</a>(\n    &amp;self,\n    public_keys: &amp;[<a class=\"struct\" href=\"sp_core/crypto_bytes/struct.CryptoBytes.html\" title=\"struct sp_core::crypto_bytes::CryptoBytes\">CryptoBytes</a>&lt;sp_core::::bandersnatch::Public::{constant#0}, (<a class=\"struct\" href=\"sp_core/crypto_bytes/public_bytes/struct.PublicTag.html\" title=\"struct sp_core::crypto_bytes::public_bytes::PublicTag\">PublicTag</a>, BandersnatchTag)&gt;]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;RingVerifier&lt;Fp&lt;MontBackend&lt;FrConfig, 4&gt;, 4&gt;, KZG&lt;Bls12&lt;Config&lt;<a class=\"struct\" href=\"sp_crypto_ec_utils/bls12_381/struct.HostHooks.html\" title=\"struct sp_crypto_ec_utils::bls12_381::HostHooks\">HostHooks</a>&gt;&gt;&gt;, BandersnatchConfig&lt;<a class=\"struct\" href=\"sp_crypto_ec_utils/ed_on_bls12_381_bandersnatch/struct.HostHooks.html\" title=\"struct sp_crypto_ec_utils::ed_on_bls12_381_bandersnatch::HostHooks\">HostHooks</a>&gt;&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Get ring verifier for the <code>public_keys</code> set.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.verifier_data\" class=\"method\"><a class=\"src rightside\" href=\"src/sp_core/bandersnatch.rs.html#604\">source</a><h4 class=\"code-header\">pub fn <a href=\"sp_core/bandersnatch/ring_vrf/struct.RingContext.html#tymethod.verifier_data\" class=\"fn\">verifier_data</a>(\n    &amp;self,\n    public_keys: &amp;[<a class=\"struct\" href=\"sp_core/crypto_bytes/struct.CryptoBytes.html\" title=\"struct sp_core::crypto_bytes::CryptoBytes\">CryptoBytes</a>&lt;sp_core::::bandersnatch::Public::{constant#0}, (<a class=\"struct\" href=\"sp_core/crypto_bytes/public_bytes/struct.PublicTag.html\" title=\"struct sp_core::crypto_bytes::public_bytes::PublicTag\">PublicTag</a>, BandersnatchTag)&gt;]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sp_consensus_sassafras/vrf/struct.RingVerifierData.html\" title=\"struct sp_consensus_sassafras::vrf::RingVerifierData\">RingVerifierData</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Information required for a lazy construction of a ring verifier.</p>\n</div></details></div></details>",0,"sp_consensus_sassafras::vrf::RingContext"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-RingContext%3CD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_core/bandersnatch.rs.html#645\">source</a><a href=\"#impl-TypeInfo-for-RingContext%3CD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt; TypeInfo for <a class=\"struct\" href=\"sp_core/bandersnatch/ring_vrf/struct.RingContext.html\" title=\"struct sp_core::bandersnatch::ring_vrf::RingContext\">RingContext</a>&lt;D&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = <a class=\"struct\" href=\"sp_core/bandersnatch/ring_vrf/struct.RingContext.html\" title=\"struct sp_core::bandersnatch::ring_vrf::RingContext\">RingContext</a>&lt;D&gt;</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/bandersnatch.rs.html#648\">source</a><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","sp_consensus_sassafras::vrf::RingContext"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-RingContext%3CD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_core/bandersnatch.rs.html#617\">source</a><a href=\"#impl-Encode-for-RingContext%3CD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt; Encode for <a class=\"struct\" href=\"sp_core/bandersnatch/ring_vrf/struct.RingContext.html\" title=\"struct sp_core::bandersnatch::ring_vrf::RingContext\">RingContext</a>&lt;D&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/bandersnatch.rs.html#618\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;T&gt;(&amp;self, dest: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut T</a>)<div class=\"where\">where\n    T: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</div></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","sp_consensus_sassafras::vrf::RingContext"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-RingContext%3CD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_core/bandersnatch.rs.html#627\">source</a><a href=\"#impl-Decode-for-RingContext%3CD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt; Decode for <a class=\"struct\" href=\"sp_core/bandersnatch/ring_vrf/struct.RingContext.html\" title=\"struct sp_core::bandersnatch::ring_vrf::RingContext\">RingContext</a>&lt;D&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/bandersnatch.rs.html#628\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;R&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut R</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"sp_core/bandersnatch/ring_vrf/struct.RingContext.html\" title=\"struct sp_core::bandersnatch::ring_vrf::RingContext\">RingContext</a>&lt;D&gt;, Error&gt;<div class=\"where\">where\n    R: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.77.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","sp_consensus_sassafras::vrf::RingContext"],["<section id=\"impl-EncodeLike-for-RingContext%3CD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_core/bandersnatch.rs.html#637\">source</a><a href=\"#impl-EncodeLike-for-RingContext%3CD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt; EncodeLike for <a class=\"struct\" href=\"sp_core/bandersnatch/ring_vrf/struct.RingContext.html\" title=\"struct sp_core::bandersnatch::ring_vrf::RingContext\">RingContext</a>&lt;D&gt;</h3></section>","EncodeLike","sp_consensus_sassafras::vrf::RingContext"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MaxEncodedLen-for-RingContext%3CD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_core/bandersnatch.rs.html#639\">source</a><a href=\"#impl-MaxEncodedLen-for-RingContext%3CD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt; MaxEncodedLen for <a class=\"struct\" href=\"sp_core/bandersnatch/ring_vrf/struct.RingContext.html\" title=\"struct sp_core::bandersnatch::ring_vrf::RingContext\">RingContext</a>&lt;D&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_encoded_len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/bandersnatch.rs.html#640\">source</a><a href=\"#method.max_encoded_len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">max_encoded_len</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Upper bound, in bytes, of the maximum encoded size of this item.</div></details></div></details>","MaxEncodedLen","sp_consensus_sassafras::vrf::RingContext"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-RingContext%3CD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_core/bandersnatch.rs.html#563\">source</a><a href=\"#impl-Clone-for-RingContext%3CD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"sp_core/bandersnatch/ring_vrf/struct.RingContext.html\" title=\"struct sp_core::bandersnatch::ring_vrf::RingContext\">RingContext</a>&lt;D&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/bandersnatch.rs.html#563\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"sp_core/bandersnatch/ring_vrf/struct.RingContext.html\" title=\"struct sp_core::bandersnatch::ring_vrf::RingContext\">RingContext</a>&lt;D&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sp_consensus_sassafras::vrf::RingContext"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()