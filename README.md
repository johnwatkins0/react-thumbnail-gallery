# react-thumbnail-gallery
A responsive image gallery featuring (1) a pane showing the full image, and (2) a pane with image thumbnails, titles, and descriptions. Also includes an optional filter for the WordPress [gallery] shortcode.

## Usage

### Without WordPress

For use with ES6 Javascript, install the package from NPM:

```
npm install --save wp-react-thumbnail-gallery
```

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
