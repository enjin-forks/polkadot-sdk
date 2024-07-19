(function() {var type_impls = {
"frame_support_procedural_tools":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Parse-for-PunctuatedInner%3CP,+T,+NoTrailing%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_support_procedural_tools/syn_ext.rs.html#104-111\">source</a><a href=\"#impl-Parse-for-PunctuatedInner%3CP,+T,+NoTrailing%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P: <a class=\"trait\" href=\"https://docs.rs/syn/2.0.61/syn/parse/trait.Parse.html\" title=\"trait syn::parse::Parse\">Parse</a>, T: <a class=\"trait\" href=\"https://docs.rs/syn/2.0.61/syn/parse/trait.Parse.html\" title=\"trait syn::parse::Parse\">Parse</a>&gt; <a class=\"trait\" href=\"https://docs.rs/syn/2.0.61/syn/parse/trait.Parse.html\" title=\"trait syn::parse::Parse\">Parse</a> for <a class=\"struct\" href=\"frame_support_procedural_tools/syn_ext/struct.PunctuatedInner.html\" title=\"struct frame_support_procedural_tools::syn_ext::PunctuatedInner\">PunctuatedInner</a>&lt;P, T, <a class=\"struct\" href=\"frame_support_procedural_tools/syn_ext/struct.NoTrailing.html\" title=\"struct frame_support_procedural_tools::syn_ext::NoTrailing\">NoTrailing</a>&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.parse\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/frame_support_procedural_tools/syn_ext.rs.html#105-110\">source</a><a href=\"#method.parse\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/syn/2.0.61/syn/parse/trait.Parse.html#tymethod.parse\" class=\"fn\">parse</a>(input: <a class=\"type\" href=\"https://docs.rs/syn/2.0.61/syn/parse/type.ParseStream.html\" title=\"type syn::parse::ParseStream\">ParseStream</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://docs.rs/syn/2.0.61/syn/error/type.Result.html\" title=\"type syn::error::Result\">Result</a>&lt;Self&gt;</h4></section></div></details>","Parse","frame_support_procedural_tools::syn_ext::Punctuated"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-PunctuatedInner%3CP,+T,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_support_procedural_tools/syn_ext.rs.html#79\">source</a><a href=\"#impl-Debug-for-PunctuatedInner%3CP,+T,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"frame_support_procedural_tools/syn_ext/struct.PunctuatedInner.html\" title=\"struct frame_support_procedural_tools::syn_ext::PunctuatedInner\">PunctuatedInner</a>&lt;P, T, V&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/frame_support_procedural_tools/syn_ext.rs.html#79\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","frame_support_procedural_tools::syn_ext::Punctuated","frame_support_procedural_tools::syn_ext::PunctuatedTrailing"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Parse-for-PunctuatedInner%3CP,+T,+Trailing%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_support_procedural_tools/syn_ext.rs.html#95-102\">source</a><a href=\"#impl-Parse-for-PunctuatedInner%3CP,+T,+Trailing%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P: <a class=\"trait\" href=\"https://docs.rs/syn/2.0.61/syn/parse/trait.Parse.html\" title=\"trait syn::parse::Parse\">Parse</a>, T: <a class=\"trait\" href=\"https://docs.rs/syn/2.0.61/syn/parse/trait.Parse.html\" title=\"trait syn::parse::Parse\">Parse</a> + <a class=\"trait\" href=\"https://docs.rs/syn/2.0.61/syn/token/trait.Token.html\" title=\"trait syn::token::Token\">Token</a>&gt; <a class=\"trait\" href=\"https://docs.rs/syn/2.0.61/syn/parse/trait.Parse.html\" title=\"trait syn::parse::Parse\">Parse</a> for <a class=\"struct\" href=\"frame_support_procedural_tools/syn_ext/struct.PunctuatedInner.html\" title=\"struct frame_support_procedural_tools::syn_ext::PunctuatedInner\">PunctuatedInner</a>&lt;P, T, <a class=\"struct\" href=\"frame_support_procedural_tools/syn_ext/struct.Trailing.html\" title=\"struct frame_support_procedural_tools::syn_ext::Trailing\">Trailing</a>&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.parse\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/frame_support_procedural_tools/syn_ext.rs.html#96-101\">source</a><a href=\"#method.parse\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/syn/2.0.61/syn/parse/trait.Parse.html#tymethod.parse\" class=\"fn\">parse</a>(input: <a class=\"type\" href=\"https://docs.rs/syn/2.0.61/syn/parse/type.ParseStream.html\" title=\"type syn::parse::ParseStream\">ParseStream</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://docs.rs/syn/2.0.61/syn/error/type.Result.html\" title=\"type syn::error::Result\">Result</a>&lt;Self&gt;</h4></section></div></details>","Parse","frame_support_procedural_tools::syn_ext::PunctuatedTrailing"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ToTokens-for-PunctuatedInner%3CP,+T,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_support_procedural_tools/syn_ext.rs.html#113-117\">source</a><a href=\"#impl-ToTokens-for-PunctuatedInner%3CP,+T,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P: <a class=\"trait\" href=\"https://docs.rs/quote/1.0.36/quote/to_tokens/trait.ToTokens.html\" title=\"trait quote::to_tokens::ToTokens\">ToTokens</a>, T: <a class=\"trait\" href=\"https://docs.rs/quote/1.0.36/quote/to_tokens/trait.ToTokens.html\" title=\"trait quote::to_tokens::ToTokens\">ToTokens</a>, V&gt; <a class=\"trait\" href=\"https://docs.rs/quote/1.0.36/quote/to_tokens/trait.ToTokens.html\" title=\"trait quote::to_tokens::ToTokens\">ToTokens</a> for <a class=\"struct\" href=\"frame_support_procedural_tools/syn_ext/struct.PunctuatedInner.html\" title=\"struct frame_support_procedural_tools::syn_ext::PunctuatedInner\">PunctuatedInner</a>&lt;P, T, V&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_tokens\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/frame_support_procedural_tools/syn_ext.rs.html#114-116\">source</a><a href=\"#method.to_tokens\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/quote/1.0.36/quote/to_tokens/trait.ToTokens.html#tymethod.to_tokens\" class=\"fn\">to_tokens</a>(&amp;self, tokens: &amp;mut <a class=\"struct\" href=\"https://docs.rs/proc-macro2/1.0.82/proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>)</h4></section></summary><div class='docblock'>Write <code>self</code> to the given <code>TokenStream</code>. <a href=\"https://docs.rs/quote/1.0.36/quote/to_tokens/trait.ToTokens.html#tymethod.to_tokens\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_token_stream\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/quote/1.0.36/src/quote/to_tokens.rs.html#59\">source</a><a href=\"#method.to_token_stream\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/quote/1.0.36/quote/to_tokens/trait.ToTokens.html#method.to_token_stream\" class=\"fn\">to_token_stream</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://docs.rs/proc-macro2/1.0.82/proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a></h4></section></summary><div class='docblock'>Convert <code>self</code> directly into a <code>TokenStream</code> object. <a href=\"https://docs.rs/quote/1.0.36/quote/to_tokens/trait.ToTokens.html#method.to_token_stream\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_token_stream\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/quote/1.0.36/src/quote/to_tokens.rs.html#69-71\">source</a><a href=\"#method.into_token_stream\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/quote/1.0.36/quote/to_tokens/trait.ToTokens.html#method.into_token_stream\" class=\"fn\">into_token_stream</a>(self) -&gt; <a class=\"struct\" href=\"https://docs.rs/proc-macro2/1.0.82/proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a><div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Convert <code>self</code> directly into a <code>TokenStream</code> object. <a href=\"https://docs.rs/quote/1.0.36/quote/to_tokens/trait.ToTokens.html#method.into_token_stream\">Read more</a></div></details></div></details>","ToTokens","frame_support_procedural_tools::syn_ext::Punctuated","frame_support_procedural_tools::syn_ext::PunctuatedTrailing"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-PunctuatedInner%3CP,+T,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_support_procedural_tools/syn_ext.rs.html#119-123\">source</a><a href=\"#impl-Clone-for-PunctuatedInner%3CP,+T,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"frame_support_procedural_tools/syn_ext/struct.PunctuatedInner.html\" title=\"struct frame_support_procedural_tools::syn_ext::PunctuatedInner\">PunctuatedInner</a>&lt;P, T, V&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/frame_support_procedural_tools/syn_ext.rs.html#120-122\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","frame_support_procedural_tools::syn_ext::Punctuated","frame_support_procedural_tools::syn_ext::PunctuatedTrailing"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()