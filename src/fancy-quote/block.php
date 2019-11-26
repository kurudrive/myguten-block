<?php
/*
https://developer.wordpress.org/block-editor/tutorials/javascript/extending-the-block-editor/
*/

/**
 * jsファイルの読み込み
 */

function fancy_quote_enqueue() {
	wp_enqueue_script(
		'fancy_quote-script',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks' ) // 依存ライブラリ
	);
}
add_action( 'enqueue_block_editor_assets', 'fancy_quote_enqueue' );

/**
 * cssの読み込み
 */
function fancy_quote_stylesheet() {
	wp_enqueue_style( 'fancy-quote-style', plugins_url( 'style.css', __FILE__ ) );
}
add_action( 'enqueue_block_assets', 'fancy_quote_stylesheet' );
