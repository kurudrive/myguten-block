
## MEMO

https://developer.wordpress.org/block-editor/

### チュートリアル

* Tutorials
    * Getting Started with JavaScript
        * Plugins Background(skip)
        * Loading JavaScript
        * Extending the Block Editor（コアブロックのスタイル拡張）
        * Troubleshooting（トラブルシューティング）
        * JavaScript Versions and Build Step(skip)
        * Scope Your Code
        * JavaScript Build Setup 
    * Blocks


---

#### Loading JavaScript

js ファイルは以下のように 'enqueue_block_editor_assets' で読み込む。

##### プラグインの場合

```
function myguten_enqueue() {
    wp_enqueue_script(
        'myguten-script',
        plugins_url( 'myguten.js', __FILE__ )
    );
}
add_action( 'enqueue_block_editor_assets', 'myguten_enqueue' );
```

##### テーマの場合（jsの読み込みURL例が違うだけ）

```
function myguten_enqueue() {
    wp_enqueue_script(
        'myguten-script',
        get_template_directory_uri() . '/myguten.js'
    );
}
add_action( 'enqueue_block_editor_assets', 'myguten_enqueue' );
```
---

#### Extending the Block Editor （コアブロックのスタイル拡張）

jsに以下を書いて読み込む

```
wp.blocks.registerBlockStyle( 'core/quote', {
    name: 'fancy-quote',
    label: 'Fancy Quote',
} );
```

cssは style.css などに

```
.is-style-fancy-quote {
    color: tomato;
}
```

みたいに書いて enqueue_block_assets で読み込む

```
function myguten_stylesheet() {
    wp_enqueue_style( 'myguten-style', plugins_url( 'style.css', __FILE__ ) );
}
add_action( 'enqueue_block_assets', 'myguten_stylesheet' );
```

---

#### Troubleshooting（トラブルシューティング）

1. ブラウザの console log 見ろ
2. そもそも js がちゃんと読み込まれてるか確認しろ
3. 依存が読み込まれてるか確認しろ

console.logでみたら例えば wp.blocks is undefined とか出てたら、wp.blocks が読み込まれてない。
以下のように依存が書いてあるか確認

```
wp_enqueue_script(
    'myguten-script',
    plugins_url( 'myguten.js', __FILE__ ),
    array( 'wp-blocks' )
);
```

---

#### Scope Your Code

https://developer.wordpress.org/block-editor/tutorials/javascript/scope-your-code/

function の中に入れないと同じ変数名の時上書きで誤動作するぞ的な

```
function() {
    var pluginName = 'MyPlugin';
    console.log( 'Plugin name is ', pluginName );
}
```

---

#### JavaScript Build Setup 

https://developer.wordpress.org/block-editor/tutorials/javascript/js-build-setup/

##### 最初だけ

###### nodeのインストール

nodeが入っていない環境は今どきないとは思うが、node -v でバージョンが出てこない場合は入れる

```
Ubuntu: apt install nodejs npm
macOS: brew install node
Windows: choco install node
````

開発用のパッケージがあるので、インストール

```
npm install --save-dev --save-exact @wordpress/scripts
```

git clone などで落としてきて node_modulesなどがまだない時は一式再インストール

```
npm install --save-dev
```

##### 通常作業時

```
// 製品ビルド
$ npm run build
// 開発モード（非圧縮 & 保存時自動ビルド）
$ npm start
```

start が動かない時は package.json に以下の start の行があるか確認してなければ追加する

```
"scripts": {
  "start": "wp-scripts start",
  "build": "wp-scripts build"
},
```


##### ソース管理

* node_module ディレクトリとかソース管理に入れるんじゃねーぞ。npm install すればいいだけだ。
* プラグインディレクトリにも入れるなよ。 build/index.js を プラグインのPHPから enqueue すればいい。

##### 依存関係管理

wp-scripts ver 5.0.0+ からは、ビルドすると依存関係の情報が書いてある index.asset.php も自動的に出力される。

依存ファイルはブロック登録の際に以下のように指定する

```
// 依存ファイルのパスを登録
$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

// ブロックの読み込み時に依存ファイル情報も読み込む
wp_register_script(
    'myguten-block',
    plugins_url( 'build/index.js', __FILE__ ),
    $asset_file['dependencies'], // 自動でindex.asset.php内に入るので特になにも変更する必要はない
    $asset_file['version'], // 自動でindex.asset.php内に入るので特になにも変更する必要はない
);
```

##### 概要

npm install で環境つくって...
npm start で開発して
npm run build で製品版出力

---

#### Blocks

編集画面のcssを登録すると後に読み込まれる

```
function gutenberg_examples_02_register_block() {

	// ブロックのjsは全部結合したファイルを読み込んでいるのでコメントアウト

	// wp_register_script(
	// 	'gutenberg-examples-02',
	// plugins_url( 'block.js', __FILE__ ),
	// 	array( 'wp-blocks', 'wp-element' ),
	// 	filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	// );


	// 編集画面ののスタイルの登録
	wp_register_style(
		'gutenberg-examples-02-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	// 公開画面のスタイルの登録
	wp_register_style(
		'gutenberg-examples-02',
		plugins_url( 'style.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	// ブロックの登録
	register_block_type(
		'gutenberg-examples/example-02-stylesheets',
		array(
			'style'         => 'gutenberg-examples-02',
			'editor_style'  => 'gutenberg-examples-02-editor',
			'editor_script' => 'gutenberg-examples',
		)
	);
}
add_action( 'init', 'gutenberg_examples_02_register_block' );
```
