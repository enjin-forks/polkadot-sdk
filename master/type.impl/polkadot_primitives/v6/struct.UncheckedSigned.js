(function() {var type_impls = {
"polkadot_primitives":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#206-333\">source</a><a href=\"#impl-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload: <a class=\"trait\" href=\"polkadot_primitives/v6/trait.EncodeAs.html\" title=\"trait polkadot_primitives::v6::EncodeAs\">EncodeAs</a>&lt;RealPayload&gt;, RealPayload: Encode&gt; <a class=\"struct\" href=\"polkadot_primitives/v6/struct.UncheckedSigned.html\" title=\"struct polkadot_primitives::v6::UncheckedSigned\">UncheckedSigned</a>&lt;Payload, RealPayload&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#211-217\">source</a><h4 class=\"code-header\">pub fn <a href=\"polkadot_primitives/v6/struct.UncheckedSigned.html#tymethod.new\" class=\"fn\">new</a>(\n    payload: Payload,\n    validator_index: <a class=\"struct\" href=\"polkadot_primitives/v6/struct.ValidatorIndex.html\" title=\"struct polkadot_primitives::v6::ValidatorIndex\">ValidatorIndex</a>,\n    signature: <a class=\"type\" href=\"polkadot_primitives/v6/type.ValidatorSignature.html\" title=\"type polkadot_primitives::v6::ValidatorSignature\">ValidatorSignature</a>\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Used to create a <code>UncheckedSigned</code> from already existing parts.</p>\n<p>Signature is not checked here, hence <code>UncheckedSigned</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_into_checked\" class=\"method\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#220-226\">source</a><h4 class=\"code-header\">pub fn <a href=\"polkadot_primitives/v6/struct.UncheckedSigned.html#tymethod.try_into_checked\" class=\"fn\">try_into_checked</a>&lt;H: Encode&gt;(\n    self,\n    context: &amp;<a class=\"struct\" href=\"polkadot_primitives/v6/struct.SigningContext.html\" title=\"struct polkadot_primitives::v6::SigningContext\">SigningContext</a>&lt;H&gt;,\n    key: &amp;<a class=\"type\" href=\"polkadot_primitives/v6/type.ValidatorId.html\" title=\"type polkadot_primitives::v6::ValidatorId\">ValidatorId</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"polkadot_primitives/v6/struct.Signed.html\" title=\"struct polkadot_primitives::v6::Signed\">Signed</a>&lt;Payload, RealPayload&gt;, Self&gt;</h4></section></summary><div class=\"docblock\"><p>Check signature and convert to <code>Signed</code> if successful.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unchecked_payload\" class=\"method\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#230-232\">source</a><h4 class=\"code-header\">pub fn <a href=\"polkadot_primitives/v6/struct.UncheckedSigned.html#tymethod.unchecked_payload\" class=\"fn\">unchecked_payload</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Payload</a></h4></section></summary><div class=\"docblock\"><p>Immutably access the payload.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unchecked_validator_index\" class=\"method\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#236-238\">source</a><h4 class=\"code-header\">pub fn <a href=\"polkadot_primitives/v6/struct.UncheckedSigned.html#tymethod.unchecked_validator_index\" class=\"fn\">unchecked_validator_index</a>(&amp;self) -&gt; <a class=\"struct\" href=\"polkadot_primitives/v6/struct.ValidatorIndex.html\" title=\"struct polkadot_primitives::v6::ValidatorIndex\">ValidatorIndex</a></h4></section></summary><div class=\"docblock\"><p>Immutably access the validator index.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unchecked_signature\" class=\"method\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#242-244\">source</a><h4 class=\"code-header\">pub fn <a href=\"polkadot_primitives/v6/struct.UncheckedSigned.html#tymethod.unchecked_signature\" class=\"fn\">unchecked_signature</a>(&amp;self) -&gt; &amp;<a class=\"type\" href=\"polkadot_primitives/v6/type.ValidatorSignature.html\" title=\"type polkadot_primitives::v6::ValidatorSignature\">ValidatorSignature</a></h4></section></summary><div class=\"docblock\"><p>Immutably access the signature.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unchecked_into_payload\" class=\"method\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#248-250\">source</a><h4 class=\"code-header\">pub fn <a href=\"polkadot_primitives/v6/struct.UncheckedSigned.html#tymethod.unchecked_into_payload\" class=\"fn\">unchecked_into_payload</a>(self) -&gt; Payload</h4></section></summary><div class=\"docblock\"><p>Discard signing data, get the payload</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unchecked_convert_payload\" class=\"method\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#253-263\">source</a><h4 class=\"code-header\">pub fn <a href=\"polkadot_primitives/v6/struct.UncheckedSigned.html#tymethod.unchecked_convert_payload\" class=\"fn\">unchecked_convert_payload</a>(&amp;self) -&gt; <a class=\"struct\" href=\"polkadot_primitives/v6/struct.UncheckedSigned.html\" title=\"struct polkadot_primitives::v6::UncheckedSigned\">UncheckedSigned</a>&lt;RealPayload&gt;<span class=\"where fmt-newline\">where\n    for&lt;'a&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;'a Payload</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;RealPayload&gt;,</span></h4></section></summary><div class=\"docblock\"><p>Convert <code>Payload</code> into <code>RealPayload</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.check_signature\" class=\"method\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#294-305\">source</a><h4 class=\"code-header\">pub fn <a href=\"polkadot_primitives/v6/struct.UncheckedSigned.html#tymethod.check_signature\" class=\"fn\">check_signature</a>&lt;H: Encode&gt;(\n    &amp;self,\n    context: &amp;<a class=\"struct\" href=\"polkadot_primitives/v6/struct.SigningContext.html\" title=\"struct polkadot_primitives::v6::SigningContext\">SigningContext</a>&lt;H&gt;,\n    key: &amp;<a class=\"type\" href=\"polkadot_primitives/v6/type.ValidatorId.html\" title=\"type polkadot_primitives::v6::ValidatorId\">ValidatorId</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Validate the payload given the context and public key\nwithout creating a <code>Signed</code> type.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.benchmark_sign\" class=\"method\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#309-320\">source</a><h4 class=\"code-header\">pub fn <a href=\"polkadot_primitives/v6/struct.UncheckedSigned.html#tymethod.benchmark_sign\" class=\"fn\">benchmark_sign</a>&lt;H: Encode&gt;(\n    public: &amp;<a class=\"type\" href=\"polkadot_primitives/v6/type.ValidatorId.html\" title=\"type polkadot_primitives::v6::ValidatorId\">ValidatorId</a>,\n    payload: Payload,\n    context: &amp;<a class=\"struct\" href=\"polkadot_primitives/v6/struct.SigningContext.html\" title=\"struct polkadot_primitives::v6::SigningContext\">SigningContext</a>&lt;H&gt;,\n    validator_index: <a class=\"struct\" href=\"polkadot_primitives/v6/struct.ValidatorIndex.html\" title=\"struct polkadot_primitives::v6::ValidatorIndex\">ValidatorIndex</a>\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sign this payload with the given context and pair.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.benchmark_signature\" class=\"method\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#324-326\">source</a><h4 class=\"code-header\">pub fn <a href=\"polkadot_primitives/v6/struct.UncheckedSigned.html#tymethod.benchmark_signature\" class=\"fn\">benchmark_signature</a>(&amp;self) -&gt; <a class=\"type\" href=\"polkadot_primitives/v6/type.ValidatorSignature.html\" title=\"type polkadot_primitives::v6::ValidatorSignature\">ValidatorSignature</a></h4></section></summary><div class=\"docblock\"><p>Immutably access the signature.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_signature\" class=\"method\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#330-332\">source</a><h4 class=\"code-header\">pub fn <a href=\"polkadot_primitives/v6/struct.UncheckedSigned.html#tymethod.set_signature\" class=\"fn\">set_signature</a>(&amp;mut self, signature: <a class=\"type\" href=\"polkadot_primitives/v6/type.ValidatorSignature.html\" title=\"type polkadot_primitives::v6::ValidatorSignature\">ValidatorSignature</a>)</h4></section></summary><div class=\"docblock\"><p>Set the signature. Only should be used for creating testing mocks.</p>\n</div></details></div></details>",0,"polkadot_primitives::v6::UncheckedSignedStatement","polkadot_primitives::v6::UncheckedSignedAvailabilityBitfield"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#50\">source</a><a href=\"#impl-Clone-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, RealPayload: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"polkadot_primitives/v6/struct.UncheckedSigned.html\" title=\"struct polkadot_primitives::v6::UncheckedSigned\">UncheckedSigned</a>&lt;Payload, RealPayload&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#50\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"polkadot_primitives/v6/struct.UncheckedSigned.html\" title=\"struct polkadot_primitives::v6::UncheckedSigned\">UncheckedSigned</a>&lt;Payload, RealPayload&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","polkadot_primitives::v6::UncheckedSignedStatement","polkadot_primitives::v6::UncheckedSignedAvailabilityBitfield"],["<section id=\"impl-Eq-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#50\">source</a><a href=\"#impl-Eq-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, RealPayload: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"polkadot_primitives/v6/struct.UncheckedSigned.html\" title=\"struct polkadot_primitives::v6::UncheckedSigned\">UncheckedSigned</a>&lt;Payload, RealPayload&gt;</h3></section>","Eq","polkadot_primitives::v6::UncheckedSignedStatement","polkadot_primitives::v6::UncheckedSignedAvailabilityBitfield"],["<section id=\"impl-StructuralEq-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#50\">source</a><a href=\"#impl-StructuralEq-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, RealPayload&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"polkadot_primitives/v6/struct.UncheckedSigned.html\" title=\"struct polkadot_primitives::v6::UncheckedSigned\">UncheckedSigned</a>&lt;Payload, RealPayload&gt;</h3></section>","StructuralEq","polkadot_primitives::v6::UncheckedSignedStatement","polkadot_primitives::v6::UncheckedSignedAvailabilityBitfield"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#50\">source</a><a href=\"#impl-Decode-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, RealPayload&gt; Decode for <a class=\"struct\" href=\"polkadot_primitives/v6/struct.UncheckedSigned.html\" title=\"struct polkadot_primitives::v6::UncheckedSigned\">UncheckedSigned</a>&lt;Payload, RealPayload&gt;<span class=\"where fmt-newline\">where\n    Payload: Decode,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;RealPayload&gt;: Decode,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#50\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;__CodecInputEdqy: Input&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, Error&gt;</h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.75.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","polkadot_primitives::v6::UncheckedSignedStatement","polkadot_primitives::v6::UncheckedSignedAvailabilityBitfield"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#50\">source</a><a href=\"#impl-TypeInfo-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, RealPayload&gt; TypeInfo for <a class=\"struct\" href=\"polkadot_primitives/v6/struct.UncheckedSigned.html\" title=\"struct polkadot_primitives::v6::UncheckedSigned\">UncheckedSigned</a>&lt;Payload, RealPayload&gt;<span class=\"where fmt-newline\">where\n    Payload: TypeInfo + 'static,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;RealPayload&gt;: TypeInfo + 'static,\n    RealPayload: TypeInfo + 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = <a class=\"struct\" href=\"polkadot_primitives/v6/struct.UncheckedSigned.html\" title=\"struct polkadot_primitives::v6::UncheckedSigned\">UncheckedSigned</a>&lt;Payload, RealPayload&gt;</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#50\">source</a><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","polkadot_primitives::v6::UncheckedSignedStatement","polkadot_primitives::v6::UncheckedSignedAvailabilityBitfield"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#50\">source</a><a href=\"#impl-PartialEq-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, RealPayload: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"polkadot_primitives/v6/struct.UncheckedSigned.html\" title=\"struct polkadot_primitives::v6::UncheckedSigned\">UncheckedSigned</a>&lt;Payload, RealPayload&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#50\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"polkadot_primitives/v6/struct.UncheckedSigned.html\" title=\"struct polkadot_primitives::v6::UncheckedSigned\">UncheckedSigned</a>&lt;Payload, RealPayload&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","polkadot_primitives::v6::UncheckedSignedStatement","polkadot_primitives::v6::UncheckedSignedAvailabilityBitfield"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#50\">source</a><a href=\"#impl-Debug-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, RealPayload&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"polkadot_primitives/v6/struct.UncheckedSigned.html\" title=\"struct polkadot_primitives::v6::UncheckedSigned\">UncheckedSigned</a>&lt;Payload, RealPayload&gt;<span class=\"where fmt-newline\">where\n    Payload: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    RealPayload: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#50\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","polkadot_primitives::v6::UncheckedSignedStatement","polkadot_primitives::v6::UncheckedSignedAvailabilityBitfield"],["<section id=\"impl-EncodeLike-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#50\">source</a><a href=\"#impl-EncodeLike-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, RealPayload&gt; EncodeLike for <a class=\"struct\" href=\"polkadot_primitives/v6/struct.UncheckedSigned.html\" title=\"struct polkadot_primitives::v6::UncheckedSigned\">UncheckedSigned</a>&lt;Payload, RealPayload&gt;<span class=\"where fmt-newline\">where\n    Payload: Encode,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;RealPayload&gt;: Encode,</span></h3></section>","EncodeLike","polkadot_primitives::v6::UncheckedSignedStatement","polkadot_primitives::v6::UncheckedSignedAvailabilityBitfield"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CSigned%3CPayload,+RealPayload%3E%3E-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#335-341\">source</a><a href=\"#impl-From%3CSigned%3CPayload,+RealPayload%3E%3E-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, RealPayload&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"polkadot_primitives/v6/struct.Signed.html\" title=\"struct polkadot_primitives::v6::Signed\">Signed</a>&lt;Payload, RealPayload&gt;&gt; for <a class=\"struct\" href=\"polkadot_primitives/v6/struct.UncheckedSigned.html\" title=\"struct polkadot_primitives::v6::UncheckedSigned\">UncheckedSigned</a>&lt;Payload, RealPayload&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#338-340\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(signed: <a class=\"struct\" href=\"polkadot_primitives/v6/struct.Signed.html\" title=\"struct polkadot_primitives::v6::Signed\">Signed</a>&lt;Payload, RealPayload&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Signed<Payload, RealPayload>>","polkadot_primitives::v6::UncheckedSignedStatement","polkadot_primitives::v6::UncheckedSignedAvailabilityBitfield"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#50\">source</a><a href=\"#impl-Encode-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, RealPayload&gt; Encode for <a class=\"struct\" href=\"polkadot_primitives/v6/struct.UncheckedSigned.html\" title=\"struct polkadot_primitives::v6::UncheckedSigned\">UncheckedSigned</a>&lt;Payload, RealPayload&gt;<span class=\"where fmt-newline\">where\n    Payload: Encode,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;RealPayload&gt;: Encode,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#50\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#50\">source</a><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>\n)</h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</span></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","polkadot_primitives::v6::UncheckedSignedStatement","polkadot_primitives::v6::UncheckedSignedAvailabilityBitfield"],["<section id=\"impl-StructuralPartialEq-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_primitives/v6/signed.rs.html#50\">source</a><a href=\"#impl-StructuralPartialEq-for-UncheckedSigned%3CPayload,+RealPayload%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, RealPayload&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"polkadot_primitives/v6/struct.UncheckedSigned.html\" title=\"struct polkadot_primitives::v6::UncheckedSigned\">UncheckedSigned</a>&lt;Payload, RealPayload&gt;</h3></section>","StructuralPartialEq","polkadot_primitives::v6::UncheckedSignedStatement","polkadot_primitives::v6::UncheckedSignedAvailabilityBitfield"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()