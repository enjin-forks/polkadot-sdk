(function() {var type_impls = {
"sc_transaction_pool":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BasicPool%3CPoolApi,+Block%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#157-250\">source</a><a href=\"#impl-BasicPool%3CPoolApi,+Block%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;PoolApi, Block&gt; <a class=\"struct\" href=\"sc_transaction_pool/struct.BasicPool.html\" title=\"struct sc_transaction_pool::BasicPool\">BasicPool</a>&lt;PoolApi, Block&gt;<div class=\"where\">where\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,\n    PoolApi: <a class=\"trait\" href=\"sc_transaction_pool/trait.ChainApi.html\" title=\"trait sc_transaction_pool::ChainApi\">ChainApi</a>&lt;Block = Block&gt; + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_test\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#163-190\">source</a><h4 class=\"code-header\">pub fn <a href=\"sc_transaction_pool/struct.BasicPool.html#tymethod.new_test\" class=\"fn\">new_test</a>(\n    pool_api: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;PoolApi&gt;,\n    best_block_hash: Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>,\n    finalized_hash: Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>,\n    options: <a class=\"struct\" href=\"sc_transaction_pool/struct.Options.html\" title=\"struct sc_transaction_pool::Options\">Options</a>\n) -&gt; (Self, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt;&gt;)</h4></section></summary><div class=\"docblock\"><p>Create new basic transaction pool with provided api, for tests.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_revalidation_type\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#194-239\">source</a><h4 class=\"code-header\">pub fn <a href=\"sc_transaction_pool/struct.BasicPool.html#tymethod.with_revalidation_type\" class=\"fn\">with_revalidation_type</a>(\n    options: <a class=\"struct\" href=\"sc_transaction_pool/struct.Options.html\" title=\"struct sc_transaction_pool::Options\">Options</a>,\n    is_validator: IsValidator,\n    pool_api: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;PoolApi&gt;,\n    prometheus: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;PrometheusRegistry&gt;,\n    revalidation_type: <a class=\"enum\" href=\"sc_transaction_pool/enum.RevalidationType.html\" title=\"enum sc_transaction_pool::RevalidationType\">RevalidationType</a>,\n    spawner: impl <a class=\"trait\" href=\"sp_core/traits/trait.SpawnEssentialNamed.html\" title=\"trait sp_core::traits::SpawnEssentialNamed\">SpawnEssentialNamed</a>,\n    best_block_number: <a class=\"type\" href=\"sp_runtime/traits/type.NumberFor.html\" title=\"type sp_runtime::traits::NumberFor\">NumberFor</a>&lt;Block&gt;,\n    best_block_hash: Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>,\n    finalized_hash: Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create new basic transaction pool with provided api and custom\nrevalidation type.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.pool\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#242-244\">source</a><h4 class=\"code-header\">pub fn <a href=\"sc_transaction_pool/struct.BasicPool.html#tymethod.pool\" class=\"fn\">pool</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"sc_transaction_pool/struct.Pool.html\" title=\"struct sc_transaction_pool::Pool\">Pool</a>&lt;PoolApi&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Gets shared reference to the underlying pool.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.api\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#247-249\">source</a><h4 class=\"code-header\">pub fn <a href=\"sc_transaction_pool/struct.BasicPool.html#tymethod.api\" class=\"fn\">api</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;PoolApi</a></h4></section></summary><div class=\"docblock\"><p>Get access to the underlying api</p>\n</div></details></div></details>",0,"sc_transaction_pool::FullPool"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LocalTransactionPool-for-BasicPool%3CFullChainApi%3CClient,+Block%3E,+Block%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#413-465\">source</a><a href=\"#impl-LocalTransactionPool-for-BasicPool%3CFullChainApi%3CClient,+Block%3E,+Block%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block, Client&gt; LocalTransactionPool for <a class=\"struct\" href=\"sc_transaction_pool/struct.BasicPool.html\" title=\"struct sc_transaction_pool::BasicPool\">BasicPool</a>&lt;<a class=\"struct\" href=\"sc_transaction_pool/struct.FullChainApi.html\" title=\"struct sc_transaction_pool::FullChainApi\">FullChainApi</a>&lt;Client, Block&gt;, Block&gt;<div class=\"where\">where\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,\n    Client: ProvideRuntimeApi&lt;Block&gt; + BlockBackend&lt;Block&gt; + HeaderBackend&lt;Block&gt; + <a class=\"trait\" href=\"sp_runtime/traits/trait.BlockIdTo.html\" title=\"trait sp_runtime::traits::BlockIdTo\">BlockIdTo</a>&lt;Block&gt; + HeaderMetadata&lt;Block, Error = Error&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    Client::Api: TaggedTransactionQueue&lt;Block&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Block\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Block\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Block</a> = Block</h4></section></summary><div class='docblock'>Block type.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Hash\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Hash\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Hash</a> = &lt;&lt;<a class=\"struct\" href=\"sc_transaction_pool/struct.FullChainApi.html\" title=\"struct sc_transaction_pool::FullChainApi\">FullChainApi</a>&lt;Client, Block&gt; as <a class=\"trait\" href=\"sc_transaction_pool/trait.ChainApi.html\" title=\"trait sc_transaction_pool::ChainApi\">ChainApi</a>&gt;::<a class=\"associatedtype\" href=\"sc_transaction_pool/trait.ChainApi.html#associatedtype.Block\" title=\"type sc_transaction_pool::ChainApi::Block\">Block</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a></h4></section></summary><div class='docblock'>Transaction hash type.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Error</a> = &lt;<a class=\"struct\" href=\"sc_transaction_pool/struct.FullChainApi.html\" title=\"struct sc_transaction_pool::FullChainApi\">FullChainApi</a>&lt;Client, Block&gt; as <a class=\"trait\" href=\"sc_transaction_pool/trait.ChainApi.html\" title=\"trait sc_transaction_pool::ChainApi\">ChainApi</a>&gt;::<a class=\"associatedtype\" href=\"sc_transaction_pool/trait.ChainApi.html#associatedtype.Error\" title=\"type sc_transaction_pool::ChainApi::Error\">Error</a></h4></section></summary><div class='docblock'>Error type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.submit_local\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#429-464\">source</a><a href=\"#method.submit_local\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">submit_local</a>(\n    &amp;self,\n    at: Block::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>,\n    xt: LocalTransactionFor&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self::Hash, Self::Error&gt;</h4></section></summary><div class='docblock'>Submits the given local unverified transaction to the pool blocking the\ncurrent thread for any necessary pre-verification.\nNOTE: It MUST NOT be used for transactions that originate from the\nnetwork or RPC, since the validation is performed with\n<code>TransactionSource::Local</code>.</div></details></div></details>","LocalTransactionPool","sc_transaction_pool::FullPool"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MaintainedTransactionPool-for-BasicPool%3CPoolApi,+Block%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#725-779\">source</a><a href=\"#impl-MaintainedTransactionPool-for-BasicPool%3CPoolApi,+Block%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;PoolApi, Block&gt; MaintainedTransactionPool for <a class=\"struct\" href=\"sc_transaction_pool/struct.BasicPool.html\" title=\"struct sc_transaction_pool::BasicPool\">BasicPool</a>&lt;PoolApi, Block&gt;<div class=\"where\">where\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,\n    PoolApi: 'static + <a class=\"trait\" href=\"sc_transaction_pool/trait.ChainApi.html\" title=\"trait sc_transaction_pool::ChainApi\">ChainApi</a>&lt;Block = Block&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.maintain\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#730-778\">source</a><a href=\"#method.maintain\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">maintain</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    event: ChainEvent&lt;Self::Block&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    Self: 'async_trait,\n    'life0: 'async_trait,</div></h4></section></summary><div class='docblock'>Perform maintenance</div></details></div></details>","MaintainedTransactionPool","sc_transaction_pool::FullPool"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TransactionPool-for-BasicPool%3CPoolApi,+Block%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#252-371\">source</a><a href=\"#impl-TransactionPool-for-BasicPool%3CPoolApi,+Block%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;PoolApi, Block&gt; TransactionPool for <a class=\"struct\" href=\"sc_transaction_pool/struct.BasicPool.html\" title=\"struct sc_transaction_pool::BasicPool\">BasicPool</a>&lt;PoolApi, Block&gt;<div class=\"where\">where\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,\n    PoolApi: 'static + <a class=\"trait\" href=\"sc_transaction_pool/trait.ChainApi.html\" title=\"trait sc_transaction_pool::ChainApi\">ChainApi</a>&lt;Block = Block&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Block\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Block\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Block</a> = &lt;PoolApi as <a class=\"trait\" href=\"sc_transaction_pool/trait.ChainApi.html\" title=\"trait sc_transaction_pool::ChainApi\">ChainApi</a>&gt;::<a class=\"associatedtype\" href=\"sc_transaction_pool/trait.ChainApi.html#associatedtype.Block\" title=\"type sc_transaction_pool::ChainApi::Block\">Block</a></h4></section></summary><div class='docblock'>Block type.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Hash\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Hash\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Hash</a> = &lt;&lt;PoolApi as <a class=\"trait\" href=\"sc_transaction_pool/trait.ChainApi.html\" title=\"trait sc_transaction_pool::ChainApi\">ChainApi</a>&gt;::<a class=\"associatedtype\" href=\"sc_transaction_pool/trait.ChainApi.html#associatedtype.Block\" title=\"type sc_transaction_pool::ChainApi::Block\">Block</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a></h4></section></summary><div class='docblock'>Transaction hash type.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.InPoolTransaction\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.InPoolTransaction\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">InPoolTransaction</a> = <a class=\"struct\" href=\"sc_transaction_pool/struct.Transaction.html\" title=\"struct sc_transaction_pool::Transaction\">Transaction</a>&lt;&lt;<a class=\"struct\" href=\"sc_transaction_pool/struct.BasicPool.html\" title=\"struct sc_transaction_pool::BasicPool\">BasicPool</a>&lt;PoolApi, Block&gt; as TransactionPool&gt;::Hash, &lt;&lt;<a class=\"struct\" href=\"sc_transaction_pool/struct.BasicPool.html\" title=\"struct sc_transaction_pool::BasicPool\">BasicPool</a>&lt;PoolApi, Block&gt; as TransactionPool&gt;::Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Extrinsic\" title=\"type sp_runtime::traits::Block::Extrinsic\">Extrinsic</a>&gt;</h4></section></summary><div class='docblock'>In-pool transaction type.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Error</a> = &lt;PoolApi as <a class=\"trait\" href=\"sc_transaction_pool/trait.ChainApi.html\" title=\"trait sc_transaction_pool::ChainApi\">ChainApi</a>&gt;::<a class=\"associatedtype\" href=\"sc_transaction_pool/trait.ChainApi.html#associatedtype.Error\" title=\"type sc_transaction_pool::ChainApi::Error\">Error</a></h4></section></summary><div class='docblock'>Error type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.submit_at\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#262-274\">source</a><a href=\"#method.submit_at\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">submit_at</a>(\n    &amp;self,\n    at: &lt;Self::Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>,\n    source: <a class=\"enum\" href=\"sp_runtime/transaction_validity/enum.TransactionSource.html\" title=\"enum sp_runtime::transaction_validity::TransactionSource\">TransactionSource</a>,\n    xts: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;TransactionFor&lt;Self&gt;&gt;\n) -&gt; PoolFuture&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;TxHash&lt;Self&gt;, Self::Error&gt;&gt;, Self::Error&gt;</h4></section></summary><div class='docblock'>Returns a future that imports a bunch of unverified transactions to the pool.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.submit_one\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#276-287\">source</a><a href=\"#method.submit_one\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">submit_one</a>(\n    &amp;self,\n    at: &lt;Self::Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>,\n    source: <a class=\"enum\" href=\"sp_runtime/transaction_validity/enum.TransactionSource.html\" title=\"enum sp_runtime::transaction_validity::TransactionSource\">TransactionSource</a>,\n    xt: TransactionFor&lt;Self&gt;\n) -&gt; PoolFuture&lt;TxHash&lt;Self&gt;, Self::Error&gt;</h4></section></summary><div class='docblock'>Returns a future that imports one unverified transaction to the pool.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.submit_and_watch\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#289-305\">source</a><a href=\"#method.submit_and_watch\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">submit_and_watch</a>(\n    &amp;self,\n    at: &lt;Self::Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>,\n    source: <a class=\"enum\" href=\"sp_runtime/transaction_validity/enum.TransactionSource.html\" title=\"enum sp_runtime::transaction_validity::TransactionSource\">TransactionSource</a>,\n    xt: TransactionFor&lt;Self&gt;\n) -&gt; PoolFuture&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;TransactionStatusStreamFor&lt;Self&gt;&gt;&gt;, Self::Error&gt;</h4></section></summary><div class='docblock'>Returns a future that import a single transaction and starts to watch their progress in the\npool.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove_invalid\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#307-312\">source</a><a href=\"#method.remove_invalid\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">remove_invalid</a>(\n    &amp;self,\n    hashes: &amp;[TxHash&lt;Self&gt;]\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;Self::InPoolTransaction&gt;&gt;</h4></section></summary><div class='docblock'>Remove transactions identified by given hashes (and dependent transactions) from the pool.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.status\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#314-316\">source</a><a href=\"#method.status\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">status</a>(&amp;self) -&gt; PoolStatus</h4></section></summary><div class='docblock'>Returns pool status.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.import_notification_stream\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#318-320\">source</a><a href=\"#method.import_notification_stream\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">import_notification_stream</a>(&amp;self) -&gt; ImportNotificationStream&lt;TxHash&lt;Self&gt;&gt;</h4></section></summary><div class='docblock'>Return an event stream of transactions imported to the pool.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_of\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#322-324\">source</a><a href=\"#method.hash_of\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">hash_of</a>(&amp;self, xt: &amp;TransactionFor&lt;Self&gt;) -&gt; TxHash&lt;Self&gt;</h4></section></summary><div class='docblock'>Returns transaction hash</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_broadcasted\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#326-328\">source</a><a href=\"#method.on_broadcasted\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">on_broadcasted</a>(&amp;self, propagations: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;TxHash&lt;Self&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;)</h4></section></summary><div class='docblock'>Notify the pool about transactions broadcast.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ready_transaction\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#330-332\">source</a><a href=\"#method.ready_transaction\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">ready_transaction</a>(\n    &amp;self,\n    hash: &amp;TxHash&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;Self::InPoolTransaction&gt;&gt;</h4></section></summary><div class='docblock'>Return specific ready transaction by hash, if there is one.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ready_at\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#334-360\">source</a><a href=\"#method.ready_at\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">ready_at</a>(\n    &amp;self,\n    at: <a class=\"type\" href=\"sp_runtime/traits/type.NumberFor.html\" title=\"type sp_runtime::traits::NumberFor\">NumberFor</a>&lt;Self::Block&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn ReadyTransactions&lt;Item = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"sc_transaction_pool/struct.Transaction.html\" title=\"struct sc_transaction_pool::Transaction\">Transaction</a>&lt;&lt;&lt;PoolApi as <a class=\"trait\" href=\"sc_transaction_pool/trait.ChainApi.html\" title=\"trait sc_transaction_pool::ChainApi\">ChainApi</a>&gt;::<a class=\"associatedtype\" href=\"sc_transaction_pool/trait.ChainApi.html#associatedtype.Block\" title=\"type sc_transaction_pool::ChainApi::Block\">Block</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>, &lt;&lt;PoolApi as <a class=\"trait\" href=\"sc_transaction_pool/trait.ChainApi.html\" title=\"trait sc_transaction_pool::ChainApi\">ChainApi</a>&gt;::<a class=\"associatedtype\" href=\"sc_transaction_pool/trait.ChainApi.html#associatedtype.Block\" title=\"type sc_transaction_pool::ChainApi::Block\">Block</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Extrinsic\" title=\"type sp_runtime::traits::Block::Extrinsic\">Extrinsic</a>&gt;&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt;&gt;</h4></section></summary><div class='docblock'>Get an iterator for ready transactions ordered by priority. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ready\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#362-364\">source</a><a href=\"#method.ready\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">ready</a>(\n    &amp;self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn ReadyTransactions&lt;Item = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"sc_transaction_pool/struct.Transaction.html\" title=\"struct sc_transaction_pool::Transaction\">Transaction</a>&lt;&lt;&lt;PoolApi as <a class=\"trait\" href=\"sc_transaction_pool/trait.ChainApi.html\" title=\"trait sc_transaction_pool::ChainApi\">ChainApi</a>&gt;::<a class=\"associatedtype\" href=\"sc_transaction_pool/trait.ChainApi.html#associatedtype.Block\" title=\"type sc_transaction_pool::ChainApi::Block\">Block</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>, &lt;&lt;PoolApi as <a class=\"trait\" href=\"sc_transaction_pool/trait.ChainApi.html\" title=\"trait sc_transaction_pool::ChainApi\">ChainApi</a>&gt;::<a class=\"associatedtype\" href=\"sc_transaction_pool/trait.ChainApi.html#associatedtype.Block\" title=\"type sc_transaction_pool::ChainApi::Block\">Block</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Extrinsic\" title=\"type sp_runtime::traits::Block::Extrinsic\">Extrinsic</a>&gt;&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt;</h4></section></summary><div class='docblock'>Get an iterator for ready transactions ordered by priority.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.futures\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_transaction_pool/lib.rs.html#366-370\">source</a><a href=\"#method.futures\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">futures</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Self::InPoolTransaction&gt;</h4></section></summary><div class='docblock'>Get futures transaction list.</div></details></div></details>","TransactionPool","sc_transaction_pool::FullPool"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()