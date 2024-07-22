(function() {var type_impls = {
"polkadot_sdk_frame":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Recorder%3CH%3E\" class=\"impl\"><a href=\"#impl-Recorder%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; Recorder&lt;H&gt;<div class=\"where\">where\n    H: Hasher,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.recorded_keys\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">recorded_keys</a>(\n    &amp;self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;&lt;H as Hasher&gt;::Out, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]&gt;, RecordedForKey&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Returns [<code>RecordedForKey</code>] per recorded key per trie.</p>\n<p>There are multiple tries when working with e.g. child tries.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_trie_recorder\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">as_trie_recorder</a>(\n    &amp;self,\n    storage_root: &lt;H as Hasher&gt;::Out\n) -&gt; TrieRecorder&lt;'_, H&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the recorder as <a href=\"trie_db::TrieRecorder\"><code>TrieRecorder</code></a> compatible type.</p>\n<ul>\n<li><code>storage_root</code>: The storage root of the trie for which accesses are recorded. This is\nimportant when recording access to different tries at once (like top and child tries).</li>\n</ul>\n<p>NOTE: This locks a mutex that stays locked until the return value is dropped.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.drain_storage_proof\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">drain_storage_proof</a>(self) -&gt; <a class=\"struct\" href=\"polkadot_sdk_frame/runtime/apis/struct.StorageProof.html\" title=\"struct polkadot_sdk_frame::runtime::apis::StorageProof\">StorageProof</a></h4></section></summary><div class=\"docblock\"><p>Drain the recording into a <a href=\"polkadot_sdk_frame/runtime/apis/struct.StorageProof.html\" title=\"struct polkadot_sdk_frame::runtime::apis::StorageProof\"><code>StorageProof</code></a>.</p>\n<p>While a recorder can be cloned, all share the same internal state. After calling this\nfunction, all other instances will have their internal state reset as well.</p>\n<p>If you don’t want to drain the recorded state, use [<code>Self::to_storage_proof</code>].</p>\n<p>Returns the <a href=\"polkadot_sdk_frame/runtime/apis/struct.StorageProof.html\" title=\"struct polkadot_sdk_frame::runtime::apis::StorageProof\"><code>StorageProof</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_storage_proof\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">to_storage_proof</a>(&amp;self) -&gt; <a class=\"struct\" href=\"polkadot_sdk_frame/runtime/apis/struct.StorageProof.html\" title=\"struct polkadot_sdk_frame::runtime::apis::StorageProof\">StorageProof</a></h4></section></summary><div class=\"docblock\"><p>Convert the recording to a <a href=\"polkadot_sdk_frame/runtime/apis/struct.StorageProof.html\" title=\"struct polkadot_sdk_frame::runtime::apis::StorageProof\"><code>StorageProof</code></a>.</p>\n<p>In contrast to [<code>Self::drain_storage_proof</code>] this doesn’t consume and doesn’t clear the\nrecordings.</p>\n<p>Returns the <a href=\"polkadot_sdk_frame/runtime/apis/struct.StorageProof.html\" title=\"struct polkadot_sdk_frame::runtime::apis::StorageProof\"><code>StorageProof</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.estimate_encoded_size\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">estimate_encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the estimated encoded size of the proof.</p>\n<p>The estimation is based on all the nodes that were accessed until now while\naccessing the trie.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reset\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">reset</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Reset the state.</p>\n<p>This discards all recorded data.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.start_transaction\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">start_transaction</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Start a new transaction.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.rollback_transaction\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">rollback_transaction</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Rollback the latest transaction.</p>\n<p>Returns an error if there wasn’t any active transaction.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.commit_transaction\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">commit_transaction</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Commit the latest transaction.</p>\n<p>Returns an error if there wasn’t any active transaction.</p>\n</div></details></div></details>",0,"polkadot_sdk_frame::runtime::apis::ProofRecorder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Recorder%3CH%3E\" class=\"impl\"><a href=\"#impl-Default-for-Recorder%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for Recorder&lt;H&gt;<div class=\"where\">where\n    H: Hasher,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Recorder&lt;H&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","polkadot_sdk_frame::runtime::apis::ProofRecorder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ProofSizeProvider-for-Recorder%3CH%3E\" class=\"impl\"><a href=\"#impl-ProofSizeProvider-for-Recorder%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; ProofSizeProvider for Recorder&lt;H&gt;<div class=\"where\">where\n    H: Hasher,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.estimate_encoded_size\" class=\"method trait-impl\"><a href=\"#method.estimate_encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">estimate_encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the storage proof size.</div></details></div></details>","ProofSizeProvider","polkadot_sdk_frame::runtime::apis::ProofRecorder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TrieRecorderProvider%3CH%3E-for-Recorder%3CH%3E\" class=\"impl\"><a href=\"#impl-TrieRecorderProvider%3CH%3E-for-Recorder%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; TrieRecorderProvider&lt;H&gt; for Recorder&lt;H&gt;<div class=\"where\">where\n    H: Hasher,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Recorder\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Recorder\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Recorder</a>&lt;'a&gt; = TrieRecorder&lt;'a, H&gt;\n<span class=\"where\">where\n    H: 'a</span></h4></section></summary><div class='docblock'>Recorder type that is going to be returned by implementors of this trait.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.drain_storage_proof\" class=\"method trait-impl\"><a href=\"#method.drain_storage_proof\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">drain_storage_proof</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"polkadot_sdk_frame/runtime/apis/struct.StorageProof.html\" title=\"struct polkadot_sdk_frame::runtime::apis::StorageProof\">StorageProof</a>&gt;</h4></section></summary><div class='docblock'>Create a <a href=\"polkadot_sdk_frame/runtime/apis/struct.StorageProof.html\" title=\"struct polkadot_sdk_frame::runtime::apis::StorageProof\"><code>StorageProof</code></a> derived from the internal state.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_trie_recorder\" class=\"method trait-impl\"><a href=\"#method.as_trie_recorder\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">as_trie_recorder</a>(\n    &amp;self,\n    storage_root: &lt;H as Hasher&gt;::Out\n) -&gt; &lt;Recorder&lt;H&gt; as TrieRecorderProvider&lt;H&gt;&gt;::Recorder&lt;'_&gt;</h4></section></summary><div class='docblock'>Provide a recorder implementing [<code>trie_db::TrieRecorder</code>].</div></details></div></details>","TrieRecorderProvider<H>","polkadot_sdk_frame::runtime::apis::ProofRecorder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Recorder%3CH%3E\" class=\"impl\"><a href=\"#impl-Clone-for-Recorder%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for Recorder&lt;H&gt;<div class=\"where\">where\n    H: Hasher,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Recorder&lt;H&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","polkadot_sdk_frame::runtime::apis::ProofRecorder"]],
"sp_api":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Recorder%3CH%3E\" class=\"impl\"><a href=\"#impl-Recorder%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; Recorder&lt;H&gt;<div class=\"where\">where\n    H: Hasher,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.recorded_keys\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">recorded_keys</a>(\n    &amp;self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;&lt;H as Hasher&gt;::Out, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]&gt;, RecordedForKey&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Returns [<code>RecordedForKey</code>] per recorded key per trie.</p>\n<p>There are multiple tries when working with e.g. child tries.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_trie_recorder\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">as_trie_recorder</a>(\n    &amp;self,\n    storage_root: &lt;H as Hasher&gt;::Out\n) -&gt; TrieRecorder&lt;'_, H&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the recorder as <a href=\"trie_db::TrieRecorder\"><code>TrieRecorder</code></a> compatible type.</p>\n<ul>\n<li><code>storage_root</code>: The storage root of the trie for which accesses are recorded. This is\nimportant when recording access to different tries at once (like top and child tries).</li>\n</ul>\n<p>NOTE: This locks a mutex that stays locked until the return value is dropped.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.drain_storage_proof\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">drain_storage_proof</a>(self) -&gt; <a class=\"struct\" href=\"sp_api/struct.StorageProof.html\" title=\"struct sp_api::StorageProof\">StorageProof</a></h4></section></summary><div class=\"docblock\"><p>Drain the recording into a <a href=\"sp_api/struct.StorageProof.html\" title=\"struct sp_api::StorageProof\"><code>StorageProof</code></a>.</p>\n<p>While a recorder can be cloned, all share the same internal state. After calling this\nfunction, all other instances will have their internal state reset as well.</p>\n<p>If you don’t want to drain the recorded state, use [<code>Self::to_storage_proof</code>].</p>\n<p>Returns the <a href=\"sp_api/struct.StorageProof.html\" title=\"struct sp_api::StorageProof\"><code>StorageProof</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_storage_proof\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">to_storage_proof</a>(&amp;self) -&gt; <a class=\"struct\" href=\"sp_api/struct.StorageProof.html\" title=\"struct sp_api::StorageProof\">StorageProof</a></h4></section></summary><div class=\"docblock\"><p>Convert the recording to a <a href=\"sp_api/struct.StorageProof.html\" title=\"struct sp_api::StorageProof\"><code>StorageProof</code></a>.</p>\n<p>In contrast to [<code>Self::drain_storage_proof</code>] this doesn’t consume and doesn’t clear the\nrecordings.</p>\n<p>Returns the <a href=\"sp_api/struct.StorageProof.html\" title=\"struct sp_api::StorageProof\"><code>StorageProof</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.estimate_encoded_size\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">estimate_encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the estimated encoded size of the proof.</p>\n<p>The estimation is based on all the nodes that were accessed until now while\naccessing the trie.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reset\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">reset</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Reset the state.</p>\n<p>This discards all recorded data.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.start_transaction\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">start_transaction</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Start a new transaction.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.rollback_transaction\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">rollback_transaction</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Rollback the latest transaction.</p>\n<p>Returns an error if there wasn’t any active transaction.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.commit_transaction\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">commit_transaction</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Commit the latest transaction.</p>\n<p>Returns an error if there wasn’t any active transaction.</p>\n</div></details></div></details>",0,"sp_api::ProofRecorder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Recorder%3CH%3E\" class=\"impl\"><a href=\"#impl-Default-for-Recorder%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for Recorder&lt;H&gt;<div class=\"where\">where\n    H: Hasher,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Recorder&lt;H&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","sp_api::ProofRecorder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ProofSizeProvider-for-Recorder%3CH%3E\" class=\"impl\"><a href=\"#impl-ProofSizeProvider-for-Recorder%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; ProofSizeProvider for Recorder&lt;H&gt;<div class=\"where\">where\n    H: Hasher,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.estimate_encoded_size\" class=\"method trait-impl\"><a href=\"#method.estimate_encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">estimate_encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the storage proof size.</div></details></div></details>","ProofSizeProvider","sp_api::ProofRecorder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TrieRecorderProvider%3CH%3E-for-Recorder%3CH%3E\" class=\"impl\"><a href=\"#impl-TrieRecorderProvider%3CH%3E-for-Recorder%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; TrieRecorderProvider&lt;H&gt; for Recorder&lt;H&gt;<div class=\"where\">where\n    H: Hasher,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Recorder\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Recorder\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Recorder</a>&lt;'a&gt; = TrieRecorder&lt;'a, H&gt;\n<span class=\"where\">where\n    H: 'a</span></h4></section></summary><div class='docblock'>Recorder type that is going to be returned by implementors of this trait.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.drain_storage_proof\" class=\"method trait-impl\"><a href=\"#method.drain_storage_proof\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">drain_storage_proof</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sp_api/struct.StorageProof.html\" title=\"struct sp_api::StorageProof\">StorageProof</a>&gt;</h4></section></summary><div class='docblock'>Create a <a href=\"sp_api/struct.StorageProof.html\" title=\"struct sp_api::StorageProof\"><code>StorageProof</code></a> derived from the internal state.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_trie_recorder\" class=\"method trait-impl\"><a href=\"#method.as_trie_recorder\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">as_trie_recorder</a>(\n    &amp;self,\n    storage_root: &lt;H as Hasher&gt;::Out\n) -&gt; &lt;Recorder&lt;H&gt; as TrieRecorderProvider&lt;H&gt;&gt;::Recorder&lt;'_&gt;</h4></section></summary><div class='docblock'>Provide a recorder implementing [<code>trie_db::TrieRecorder</code>].</div></details></div></details>","TrieRecorderProvider<H>","sp_api::ProofRecorder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Recorder%3CH%3E\" class=\"impl\"><a href=\"#impl-Clone-for-Recorder%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for Recorder&lt;H&gt;<div class=\"where\">where\n    H: Hasher,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Recorder&lt;H&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sp_api::ProofRecorder"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()