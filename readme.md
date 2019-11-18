
## MEMO

### How to set up

https://developer.wordpress.org/block-editor/tutorials/javascript/js-build-setup/

```
// 製品ビルド
$ npm run build
// 開発モード（非圧縮 & 保存時自動ビルド）
$ npm start
```

### ソース管理

* node_module ディレクトリとかソース管理に入れるんじゃねーぞ。npm install すればいいだけだ。
* プラグインディレクトリにも入れるなよ。 build/index.js を プラグインのPHPから enqueue すればいい。
