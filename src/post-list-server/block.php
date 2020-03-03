<?php

/**
 * ブロックの実行関数
 *
 * @param [type] $attributes
 * @param [type] $content
 * @return void
 */
function gutenberg_examples_post_list_server_render_callback( $attributes, $content ) {
	// $recent_posts = wp_get_recent_posts(
		$recent_posts = get_posts(
			array(
				'posts_per_page' => -1,
				'post_status'    => 'publish',
			)
		);
	if ( count( $recent_posts ) === 0 ) {
		return 'No posts';
	}
	if ( $recent_posts && is_array( $recent_posts ) ) {
		$return = '<ul>';
		foreach ( $recent_posts as $key => $post ) {
			$return .= '<li><a href="' . esc_url( get_permalink( $post->ID ) ) . '" target="_blank">' . esc_html( get_the_title( $post->ID ) ) . '</a></li>';
		}
		$return .= '</ul>';
	}
	return $return;
}

function gutenberg_examples_post_list_server() {

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
		'gutenberg-examples/post-list-server',
		array(
			'editor_script'   => 'gutenberg-examples',
			'render_callback' => 'gutenberg_examples_post_list_server_render_callback',
		)
	);

}
add_action( 'init', 'gutenberg_examples_post_list_server' );
