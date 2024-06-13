(function() {var type_impls = {
"polkadot_node_network_protocol":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Versioned%3CV1,+V2,+V3%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_node_network_protocol/lib.rs.html#256\">source</a><a href=\"#impl-Debug-for-Versioned%3CV1,+V2,+V3%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V1: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, V2: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, V3: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"polkadot_node_network_protocol/enum.Versioned.html\" title=\"enum polkadot_node_network_protocol::Versioned\">Versioned</a>&lt;V1, V2, V3&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_node_network_protocol/lib.rs.html#256\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","polkadot_node_network_protocol::VersionedValidationProtocol","polkadot_node_network_protocol::VersionedCollationProtocol","polkadot_node_network_protocol::BitfieldDistributionMessage","polkadot_node_network_protocol::StatementDistributionMessage","polkadot_node_network_protocol::ApprovalDistributionMessage","polkadot_node_network_protocol::GossipSupportNetworkMessage","polkadot_node_network_protocol::CollatorProtocolMessage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Versioned%3CV1,+V2,+V3%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_node_network_protocol/lib.rs.html#256\">source</a><a href=\"#impl-PartialEq-for-Versioned%3CV1,+V2,+V3%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V1: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, V2: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, V3: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"polkadot_node_network_protocol/enum.Versioned.html\" title=\"enum polkadot_node_network_protocol::Versioned\">Versioned</a>&lt;V1, V2, V3&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_node_network_protocol/lib.rs.html#256\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"polkadot_node_network_protocol/enum.Versioned.html\" title=\"enum polkadot_node_network_protocol::Versioned\">Versioned</a>&lt;V1, V2, V3&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","polkadot_node_network_protocol::VersionedValidationProtocol","polkadot_node_network_protocol::VersionedCollationProtocol","polkadot_node_network_protocol::BitfieldDistributionMessage","polkadot_node_network_protocol::StatementDistributionMessage","polkadot_node_network_protocol::ApprovalDistributionMessage","polkadot_node_network_protocol::GossipSupportNetworkMessage","polkadot_node_network_protocol::CollatorProtocolMessage"],["<section id=\"impl-Eq-for-Versioned%3CV1,+V2,+V3%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_node_network_protocol/lib.rs.html#256\">source</a><a href=\"#impl-Eq-for-Versioned%3CV1,+V2,+V3%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V1: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, V2: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, V3: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"polkadot_node_network_protocol/enum.Versioned.html\" title=\"enum polkadot_node_network_protocol::Versioned\">Versioned</a>&lt;V1, V2, V3&gt;</h3></section>","Eq","polkadot_node_network_protocol::VersionedValidationProtocol","polkadot_node_network_protocol::VersionedCollationProtocol","polkadot_node_network_protocol::BitfieldDistributionMessage","polkadot_node_network_protocol::StatementDistributionMessage","polkadot_node_network_protocol::ApprovalDistributionMessage","polkadot_node_network_protocol::GossipSupportNetworkMessage","polkadot_node_network_protocol::CollatorProtocolMessage"],["<section id=\"impl-StructuralPartialEq-for-Versioned%3CV1,+V2,+V3%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_node_network_protocol/lib.rs.html#256\">source</a><a href=\"#impl-StructuralPartialEq-for-Versioned%3CV1,+V2,+V3%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V1, V2, V3&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"polkadot_node_network_protocol/enum.Versioned.html\" title=\"enum polkadot_node_network_protocol::Versioned\">Versioned</a>&lt;V1, V2, V3&gt;</h3></section>","StructuralPartialEq","polkadot_node_network_protocol::VersionedValidationProtocol","polkadot_node_network_protocol::VersionedCollationProtocol","polkadot_node_network_protocol::BitfieldDistributionMessage","polkadot_node_network_protocol::StatementDistributionMessage","polkadot_node_network_protocol::ApprovalDistributionMessage","polkadot_node_network_protocol::GossipSupportNetworkMessage","polkadot_node_network_protocol::CollatorProtocolMessage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Versioned%3CV1,+V2,+V3%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polkadot_node_network_protocol/lib.rs.html#256\">source</a><a href=\"#impl-Clone-for-Versioned%3CV1,+V2,+V3%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V1: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, V2: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, V3: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"polkadot_node_network_protocol/enum.Versioned.html\" title=\"enum polkadot_node_network_protocol::Versioned\">Versioned</a>&lt;V1, V2, V3&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polkadot_node_network_protocol/lib.rs.html#256\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"polkadot_node_network_protocol/enum.Versioned.html\" title=\"enum polkadot_node_network_protocol::Versioned\">Versioned</a>&lt;V1, V2, V3&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","polkadot_node_network_protocol::VersionedValidationProtocol","polkadot_node_network_protocol::VersionedCollationProtocol","polkadot_node_network_protocol::BitfieldDistributionMessage","polkadot_node_network_protocol::StatementDistributionMessage","polkadot_node_network_protocol::ApprovalDistributionMessage","polkadot_node_network_protocol::GossipSupportNetworkMessage","polkadot_node_network_protocol::CollatorProtocolMessage"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()