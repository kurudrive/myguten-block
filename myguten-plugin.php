<?php
/*
Plugin Name: Fancy Quote
*/

function myguten_enqueue() {
	wp_enqueue_script(
		'myguten-script',
		plugins_url( 'myguten.js', __FILE__ ),
		array( 'wp-blocks' ) // 依存ライブラリ
	);
}
add_action( 'enqueue_block_editor_assets', 'myguten_enqueue' );

function myguten_stylesheet() {
	wp_enqueue_style( 'myguten-style', plugins_url( 'style.css', __FILE__ ) );
}
add_action( 'enqueue_block_assets', 'myguten_stylesheet' );
