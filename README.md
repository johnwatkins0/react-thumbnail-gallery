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

Use the WordPress gallery shortcode, adding a "thumbnail-gallery" attribute, whose value can be anything:

```
[gallery ids="1,2,3,4,5" thumbnail-gallery="1"]
```

### Without WordPress

// To-do
