import React from 'react';
import ThumbnailGallery from '../../';

const items = [
  {
    id: 'blue',
    title: 'Blue',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus tristique tempor. Integer scelerisque libero eu libero maximus accumsan. Ut consectetur nec elit finibus pellentesque.',
    altText: 'Blue',
    src: '/react-thumbnail-gallery/example/assets/blue.png',
    height: 600,
    width: 1200,
    thumbSrc: '/react-thumbnail-gallery/example/assets/blue-thumb.png',
    thumbHeight: 150,
    thumbWidth: 150,
  },
  {
    id: 'brown',
    title: 'Brown',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus tristique tempor. Integer scelerisque libero eu libero maximus accumsan. Ut consectetur nec elit finibus pellentesque.',
    altText: 'Brown',
    src: '/react-thumbnail-gallery/example/assets/brown.png',
    height: 600,
    width: 1200,
    thumbSrc: '/react-thumbnail-gallery/example/assets/brown-thumb.png',
    thumbHeight: 150,
    thumbWidth: 150,
  },
  {
    id: 'green',
    title: 'Green',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus tristique tempor. Integer scelerisque libero eu libero maximus accumsan. Ut consectetur nec elit finibus pellentesque.',
    altText: 'Green',
    src: '/react-thumbnail-gallery/example/assets/green.png',
    height: 600,
    width: 1200,
    thumbSrc: '/react-thumbnail-gallery/example/assets/green-thumb.png',
    thumbHeight: 150,
    thumbWidth: 150,
  },
  {
    id: 'orange',
    title: 'Orange',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus tristique tempor. Integer scelerisque libero eu libero maximus accumsan. Ut consectetur nec elit finibus pellentesque.',
    altText: 'Orange',
    src: '/react-thumbnail-gallery/example/assets/orange.png',
    height: 600,
    width: 1200,
    thumbSrc: '/react-thumbnail-gallery/example/assets/orange-thumb.png',
    thumbHeight: 150,
    thumbWidth: 150,
  },
  {
    id: 'purple',
    title: 'Purple',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus tristique tempor. Integer scelerisque libero eu libero maximus accumsan. Ut consectetur nec elit finibus pellentesque.',
    altText: 'Purple',
    src: '/react-thumbnail-gallery/example/assets/purple.png',
    height: 600,
    width: 1200,
    thumbSrc: '/react-thumbnail-gallery/example/assets/purple-thumb.png',
    thumbHeight: 150,
    thumbWidth: 150,
  },
  {
    id: 'red',
    title: 'Red',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus tristique tempor. Integer scelerisque libero eu libero maximus accumsan. Ut consectetur nec elit finibus pellentesque.',
    altText: 'Red',
    src: '/react-thumbnail-gallery/example/assets/red.png',
    height: 600,
    width: 1200,
    thumbSrc: '/react-thumbnail-gallery/example/assets/red-thumb.png',
    thumbHeight: 150,
    thumbWidth: 150,
  },
];

const TestGallery = () => <ThumbnailGallery items={items} />;

export default TestGallery;
