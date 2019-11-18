<?php
/*
Plugin Name: Fancy Quote
*/

function myguten_enqueue() {
	wp_enqueue_script(
		'myguten-script',
		plugins_url( 'myguten.js', __FILE__ )
	);
}
add_action( 'enqueue_block_editor_assets', 'myguten_enqueue' );
