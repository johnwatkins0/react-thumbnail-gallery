<?php
/**
 * Plugin Name: Thumbnail gallery
 * Description: A responsive image gallery featuring (1) a pane showing the full image, and (2) a pane with image thumbnails, titles, and descriptions. Also includes an optional filter for the WordPress [gallery] shortcode.
 * Author: John Watkins, Colby Communications
 */

add_filter(
	'post_gallery', function( $output, $atts ) {
		if ( ! isset( $atts['thumbnail-gallery'] ) || '1' !== $atts['thumbnail-gallery'] ) {
			return $output;
		}

		$ids = esc_attr( $atts['ids'] );
		$endpoint = $atts['endpoint'] ?: get_rest_url() . 'wp/v2/media/';

		return "
		<div data-thumbnail-gallery data-endpoint=\"$endpoint\" data-ids=\"$ids\"></div>
		";
	}, 10, 2
);

add_action(
	'wp_enqueue_scripts', function() {
		global $post;

		$min = PROD === true ? '.min' : '';
		$dist = plugin_dir_url( __FILE__ ) . 'dist';

		wp_register_script(
			'thumbnail-gallery', "$dist/wp-react-thumbnail-gallery$min.wordpress.js",
			[ 'prop-types' ],
			'',
			true
		);

		wp_register_style(
			'thumbnail-gallery',
			"$dist/wp-react-thumbnail-gallery$min.css",
			[],
			''
		);

		if ( strpos( $post->post_content, 'thumbnail-gallery' ) !== false ) {
			wp_enqueue_script( 'thumbnail-gallery' );
			wp_enqueue_style( 'thumbnail-gallery' );
		}
	}, 10, 99
);
