# wp-react-thumbnail-gallery
A responsive image gallery featuring (1) a pane showing the full image, and (2) a pane with image thumbnails, titles, and descriptions. Also includes an optional filter for the WordPress [gallery] shortcode.

[Example](https://johnwatkins0.github.io/wp-react-thumbnail-gallery/index.html)


## Usage

### Without WordPress

For use with ES6 Javascript, install the package from NPM:

```
npm install --save wp-react-thumbnail-gallery
```

To use the package directly:

```Javascript
import React from 'react';

import ThumbnailGallery from './ThumbnailGallery/ThumbnailGallery';

const YourComponent = (items) => {
  return (
    <ThumbnailGallery items={items} />
  )
}
```

#### Props

The thumbnail gallery requires an array of `items`. Each item is an object requiring the following props:

```Javascript
{
  id: // *string* A unique string identifier for this item.
  title: // *string* The item's title.
  description: // *string* The item's description.
  altText: // *string* The item's alt text.
  src: // *string* The item's URL.
  height: // *number* The item's height.
  width: // *number* The item's width.
  thumbSrc: // *string* The item's thumbnail URL.
  thumbHeight: // *number* The item's thumbnail height.
  thumbWidth: // *number* The item's thumbnail width.
}
```

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

Alternatively, bypass the previous step by including the library and its dependencies from the unpkg CDN:

```HTML
<link href="https://unpkg.com/wp-react-thumbnail-gallery@latest/dist/wp-react-thumbnail-gallery.min.css" media="all" rel="stylesheet" />
<script type="text/javascript" src="https://unpkg.com/prop-types/prop-types.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/react@15.6.1/dist/react.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/react-dom@15.6.1/dist/react-dom.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/wp-react-thumbnail-gallery@latest/dist/wp-react-thumbnail-gallery.min.wordpress.js"></script>
```

Use the WordPress gallery shortcode, adding a "thumbnail-gallery" attribute, whose value can be anything:

```
[gallery ids="1,2,3,4,5" thumbnail-gallery="1"]
```

### With data attributes

Include the library and its dependencies from the unpkg CDN:

```HTML
<link href="https://unpkg.com/wp-react-thumbnail-gallery@latest/dist/wp-react-thumbnail-gallery.min.css" media="all" rel="stylesheet" />
<script type="text/javascript" src="https://unpkg.com/prop-types/prop-types.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/react@15.6.1/dist/react.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/react-dom@15.6.1/dist/react-dom.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/wp-react-thumbnail-gallery@latest/dist/wp-react-thumbnail-gallery.min.dataAttributes.js"></script>
```

Create an HTML container with two data attributes, `data-thumbnail-gallery` and `data-images`. `data-images` is a JSON array of objects with props to pass to the gallery component (see the "Props" section above) -- e.g. (from the [example](https://johnwatkins0.github.io/wp-react-thumbnail-gallery/)):

```HTML
<div data-thumbnail-gallery data-images='
    [
      {
        "id": "blue",
        "title": "Blue",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus tristique tempor. Integer scelerisque libero eu libero maximus accumsan. Ut consectetur nec elit finibus pellentesque.",
        "altText": "Blue",
        "src": "images/blue.png",
        "height": 600,
        "width": 1200,
        "thumbSrc": "images/blue-thumb.png",
        "thumbHeight": 150,
        "thumbWidth": 150
      },
      {
        "id": "brown",
        "title": "Brown",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus tristique tempor. Integer scelerisque libero eu libero maximus accumsan. Ut consectetur nec elit finibus pellentesque.",
        "altText": "Brown",
        "src": "images/brown.png",
        "height": 600,
        "width": 1200,
        "thumbSrc": "images/brown-thumb.png",
        "thumbHeight": 150,
        "thumbWidth": 150
      },
      {
        "id": "green",
        "title": "Green",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus tristique tempor. Integer scelerisque libero eu libero maximus accumsan. Ut consectetur nec elit finibus pellentesque.",
        "altText": "Green",
        "src": "images/green.png",
        "height": 600,
        "width": 1200,
        "thumbSrc": "images/green-thumb.png",
        "thumbHeight": 150,
        "thumbWidth": 150
      },
      {
        "id": "orange",
        "title": "Orange",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus tristique tempor. Integer scelerisque libero eu libero maximus accumsan. Ut consectetur nec elit finibus pellentesque.",
        "altText": "Orange",
        "src": "images/orange.png",
        "height": 600,
        "width": 1200,
        "thumbSrc": "images/orange-thumb.png",
        "thumbHeight": 150,
        "thumbWidth": 150
      },
      {
        "id": "purple",
        "title": "Purple",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus tristique tempor. Integer scelerisque libero eu libero maximus accumsan. Ut consectetur nec elit finibus pellentesque.",
        "altText": "Purple",
        "src": "images/purple.png",
        "height": 600,
        "width": 1200,
        "thumbSrc": "images/purple-thumb.png",
        "thumbHeight": 150,
        "thumbWidth": 150
      },
      {
        "id": "red",
        "title": "Red",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus tristique tempor. Integer scelerisque libero eu libero maximus accumsan. Ut consectetur nec elit finibus pellentesque.",
        "altText": "Red",
        "src": "images/red.png",
        "height": 600,
        "width": 1200,
        "thumbSrc": "images/red-thumb.png",
        "thumbHeight": 150,
        "thumbWidth": 150
      }
    ]
  '>
</div>
  ```
