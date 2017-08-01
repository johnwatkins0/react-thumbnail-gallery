# wp-react-thumbnail-gallery
A responsive image gallery featuring (1) a pane showing the full image, and (2) a pane with image thumbnails, titles, and descriptions. Also includes an optional filter for the WordPress [gallery] shortcode.

## Install

```
npm install --save wp-react-thumbnail-gallery
```

## Usage

### With WordPress

Import the gallery filter into your project:

```PHP
require_once( 'node_modules/wp-react-thumbnail-gallery/index.php' );
```

Import the `wordpressLoader` function into your ES6 Javascript and run it after page load:
```Javascript
import { wordpressLoader } from 'wp-react-thumbnail-gallery'

window.addEventListener('load', wordpressLoader);
```

### Without WordPress

// To-do
