<?php
/*
Plugin Name: MyGuten Plugin
*/

require_once 'src/fancy-quote/block.php';
require_once 'src/examples_01/block.php';
require_once 'src/examples_02/block.php';
require_once 'src/examples_03/block.php';
require_once 'src/examples_04/block.php';
require_once 'src/05-recipe-card/block.php';
require_once 'src/post-list/block.php';
require_once 'src/post-list-server/block.php';
require_once 'src/meta-fields/block.php';

function gutenberg_examples() {

	// automatically load dependencies and version
	// $asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	wp_register_script(
		'gutenberg-examples',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

}
add_action( 'enqueue_block_editor_assets', 'gutenberg_examples' );
