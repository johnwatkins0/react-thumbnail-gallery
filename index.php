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

		if ( strpos( $post->post_content, 'thumbnail-gallery' ) !== false ) {
			$package_json = json_decode( file_get_contents( __DIR__ . '/package.json' ) )
			?: (object) [
				'version' => '1.0.1',
			];
			$min = PROD === true ? '.min' : '';
			$dist = plugin_dir_url( __FILE__ ) . 'dist';

			wp_enqueue_script(
				$package_json->name, "$dist/{$package_json->name}$min.js",
				[ 'prop-types' ],
				$package_json->version,
				true
			);

			wp_enqueue_style(
				$package_json->name,
				"$dist/{$package_json->name}$min.css",
				[],
				$package_json->version
			);
		}
	}, 10, 99
);
