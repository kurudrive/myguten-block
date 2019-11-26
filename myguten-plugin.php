<?php
/*
Plugin Name: MyGuten Plugin
*/


require_once( 'src/fancy-quote/block.php' );

// 依存ファイルのパスを登録
$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php' );

// ブロックの読み込み時に依存ファイル情報も読み込む
wp_register_script(
	'myguten-block',
	plugins_url( 'build/index.js', __FILE__ ),
	$asset_file['dependencies'],
	$asset_file['version']
);
