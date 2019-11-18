
## MEMO

### セットアップ

https://developer.wordpress.org/block-editor/tutorials/javascript/js-build-setup/

```
// 製品ビルド
$ npm run build
// 開発モード（非圧縮 & 保存時自動ビルド）
$ npm start
```

#### ソース管理

* node_module ディレクトリとかソース管理に入れるんじゃねーぞ。npm install すればいいだけだ。
* プラグインディレクトリにも入れるなよ。 build/index.js を プラグインのPHPから enqueue すればいい。

#### 依存関係管理

wp-scripts ver 5.0.0+ からは、ビルドすると依存関係の情報が書いてある index.asset.php も出力される。

依存ファイルはブロック登録の際に以下のように指定する

```
// 依存ファイルのパスを登録
$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

// ブロックの読み込み時に依存ファイル情報も読み込む
wp_register_script(
    'myguten-block',
    plugins_url( 'build/index.js', __FILE__ ),
    $asset_file['dependencies'],
    $asset_file['version']
);
```

#### 概要

npm install で環境つくって...
npm start で開発して
npm run build で製品版出力

---

### チュートリアル
