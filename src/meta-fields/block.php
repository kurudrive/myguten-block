<?php

// register custom meta tag field
function myguten_register_post_meta() {
	register_post_meta(
		'post',
		'myguten_meta_block_field',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'string',
		)
	);
}
add_action( 'init', 'myguten_register_post_meta' );

function my_add_meta_field_block_test() {

	// automatically load dependencies and version
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	// registerは親ファイルでしてある

	// wp_register_script(
	// 	'gutenberg-examples-01-esnext',
	// 	plugins_url( 'build/index.js', __FILE__ ),
	// 	$asset_file['dependencies'],
	// 	$asset_file['version']
	// );

	// register_block_type(
	// 	'gutenberg-examples/meta-block',
	// 	array(
	// 		'api_version'   => 2,
	// 		'editor_script' => 'gutenberg-examples',
	// 	)
	// );

	// ブロックの登録
	register_block_type(
		'gutenberg-examples/meta-block',
		array(
			// 'api_version'   => 2,
			'editor_script' => 'gutenberg-examples',
		)
	);

}
add_action( 'init', 'my_add_meta_field_block_test' );
