# wp-react-thumbnail-gallery
A responsive image gallery featuring (1) a pane showing the full image, and (2) a pane with image thumbnails, titles, and descriptions.

## Usage

For use with ES6 Javascript, install the package from NPM:

```
npm install --save react-thumbnail-gallery
```

[React](https://github.com/facebook/react), [PropTypes](https://github.com/facebook/prop-types), and [styled](https://github.com/styled-components/styled-components) must be available in the window as global variables.

```Javascript
import ThumbnailGallery from 'react-thumbnail-gallery';

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
