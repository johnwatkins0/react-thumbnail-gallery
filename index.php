<?php

add_filter( 'post_gallery', function( $output, $atts ) {
    if ( ! isset( $atts['thumbnail-gallery'] ) || '1' !== $atts['thumbnail-gallery'] ) {
        return $output;
    }

	$ids = esc_attr( $atts['ids'] );
	$endpoint = $atts['endpoint'] ?: get_rest_url() . 'wp/v2/media/';

	return "
		<div data-thumbnail-gallery data-endpoint=\"$endpoint\" data-ids=\"$ids\"></div>
		";
}, 10, 2 );
