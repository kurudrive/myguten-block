<?php
/**
 * cssの読み込み
 */
function register_block_recipe_card() {

	// ブロックのjsは全部結合したファイルを読み込んでいるのでコメントアウト

	// wp_register_script(
	// 	'recipe-card',
	// plugins_url( 'block.js', __FILE__ ),
	// 	array( 'wp-blocks', 'wp-element' ),
	// 	filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	// );


	// 編集画面ののスタイルの登録
	wp_register_style(
		'recipe-card-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	// 公開画面のスタイルの登録
	wp_register_style(
		'recipe-card',
		plugins_url( 'style.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	// ブロックの登録
	register_block_type(
		'gutenberg-examples/recipe-card',
		array(
			'style'         => 'recipe-card',
			'editor_style'  => 'recipe-card-editor',
			'editor_script' => 'gutenberg-examples',
		)
	);
}
add_action( 'init', 'register_block_recipe_card' );
