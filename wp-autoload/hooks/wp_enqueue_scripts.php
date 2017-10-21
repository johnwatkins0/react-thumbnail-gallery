<?php

add_action( 'wp_enqueue_scripts', 'wp_react_thumbnail_gallery_enqueues' );

function wp_react_thumbnail_gallery_enqueues() {
	global $post;

    /**
     * Filters whether to enqueue assets for this plugin.
     */
    if ( apply_filters( 'do_wp_react_thumbnail_gallery_enqueues', true ) === false ) {
        return;
    }

	if ( strpos( $post->post_content, 'thumbnail-gallery' ) !== false ) {
		$package_json = json_decode( file_get_contents( __DIR__ . '/../../package.json' ) )
    		?: (object) [
    			'version' => '1.0.1',
    		];
		$min = defined( 'PROD' ) && PROD === true ? '.min' : '';
		$dist = plugin_dir_url( __FILE__ ) . 'dist';

		wp_enqueue_script(
			$package_json->name, "$dist/{$package_json->name}$min.wordpress.js",
			[],
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
}
