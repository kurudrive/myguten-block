<?php

/**
 * ブロックの実行関数
 *
 * @param [type] $attributes
 * @param [type] $content
 * @return void
 */
function gutenberg_examples_dynamic_render_callback( $attributes, $content ) {
	$recent_posts = wp_get_recent_posts(
		array(
			'numberposts' => 1,
			'post_status' => 'publish',
		)
	);
	if ( count( $recent_posts ) === 0 ) {
		return 'No posts';
	}
	$post    = $recent_posts[0];
	$post_id = $post['ID'];
	return sprintf(
		'<a class="wp-block-my-plugin-latest-post" href="%1$s">%2$s</a>',
		esc_url( get_permalink( $post_id ) ),
		esc_html( get_the_title( $post_id ) )
	);
}

function gutenberg_examples_dynamic() {

	// ブロックのjsは全部結合したファイルを読み込んでいるのでコメントアウト

	// automatically load dependencies and version
	// $asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	// wp_register_script(
	// 'gutenberg-examples-dynamic',
	// plugins_url( 'build/block.js', __FILE__ ),
	// $asset_file['dependencies'],
	// $asset_file['version']
	// );

	register_block_type(
		'gutenberg-examples/post-list',
		array(
			'editor_script'   => 'gutenberg-examples',
			'render_callback' => 'gutenberg_examples_dynamic_render_callback',
		)
	);

}
add_action( 'init', 'gutenberg_examples_dynamic' );
