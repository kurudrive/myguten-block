<?php
/**
 * cssの読み込み
 */
function gutenberg_examples_04_register_block() {

	// ブロックのjsは全部結合したファイルを読み込んでいるのでコメントアウト

	// wp_register_script(
	// 	'gutenberg-examples-04',
	// plugins_url( 'block.js', __FILE__ ),
	// 	array( 'wp-blocks', 'wp-element' ),
	// 	filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	// );


	// 編集画面ののスタイルの登録
	wp_register_style(
		'gutenberg-examples-04-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	// 公開画面のスタイルの登録
	wp_register_style(
		'gutenberg-examples-04',
		plugins_url( 'style.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	// ブロックの登録
	register_block_type(
		'gutenberg-examples/example-04-stylesheets',
		array(
			'style'         => 'gutenberg-examples-04',
			'editor_style'  => 'gutenberg-examples-04-editor',
			'editor_script' => 'gutenberg-examples',
		)
	);
}
add_action( 'init', 'gutenberg_examples_04_register_block' );
