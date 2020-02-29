<?php
function gutenberg_examples_01() {

	// js ファイルは共有で読み込んでいるのでコメントアウト

	// automatically load dependencies and version
	// $asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	// wp_register_script(
	// 	'gutenberg-examples',
	// 	plugins_url( 'build/index.js', __FILE__ ),
	// 	$asset_file['dependencies'],
	// 	$asset_file['version']
	// );

	// ブロックの登録
	register_block_type(
		'gutenberg-examples/example-01-basic-esnext',
		array(
			'editor_script' => 'gutenberg-examples',
		)
	);
}
add_action( 'init', 'gutenberg_examples_01' );
