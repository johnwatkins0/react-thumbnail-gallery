const items = [
  {
    id: 'blue',
    title: 'Blue',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus tristique tempor. Integer scelerisque libero eu libero maximus accumsan. Ut consectetur nec elit finibus pellentesque.',
    altText: 'Blue',
    src: 'http://react-thumbnail-gallery.johnwatkins0.me/example/assets/blue.png',
    height: 600,
    width: 1200,
    thumbSrc: 'http://react-thumbnail-gallery.johnwatkins0.me/example/assets/blue-thumb.png',
    thumbHeight: 150,
    thumbWidth: 150,
  },
  {
    id: 'brown',
    title: 'Brown',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus tristique tempor. Integer scelerisque libero eu libero maximus accumsan. Ut consectetur nec elit finibus pellentesque.',
    altText: 'Brown',
    src: 'http://react-thumbnail-gallery.johnwatkins0.me/example/assets/brown.png',
    height: 600,
    width: 1200,
    thumbSrc: 'http://react-thumbnail-gallery.johnwatkins0.me/example/assets/brown-thumb.png',
    thumbHeight: 150,
    thumbWidth: 150,
  },
  {
    id: 'green',
    title: 'Green',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus tristique tempor. Integer scelerisque libero eu libero maximus accumsan. Ut consectetur nec elit finibus pellentesque.',
    altText: 'Green',
    src: 'http://react-thumbnail-gallery.johnwatkins0.me/example/assets/green.png',
    height: 600,
    width: 1200,
    thumbSrc: 'http://react-thumbnail-gallery.johnwatkins0.me/example/assets/green-thumb.png',
    thumbHeight: 150,
    thumbWidth: 150,
  },
  {
    id: 'orange',
    title: 'Orange',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus tristique tempor. Integer scelerisque libero eu libero maximus accumsan. Ut consectetur nec elit finibus pellentesque.',
    altText: 'Orange',
    src: 'http://react-thumbnail-gallery.johnwatkins0.me/example/assets/orange.png',
    height: 600,
    width: 1200,
    thumbSrc: 'http://react-thumbnail-gallery.johnwatkins0.me/example/assets/orange-thumb.png',
    thumbHeight: 150,
    thumbWidth: 150,
  },
  {
    id: 'purple',
    title: 'Purple',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus tristique tempor. Integer scelerisque libero eu libero maximus accumsan. Ut consectetur nec elit finibus pellentesque.',
    altText: 'Purple',
    src: 'http://react-thumbnail-gallery.johnwatkins0.me/example/assets/purple.png',
    height: 600,
    width: 1200,
    thumbSrc: 'http://react-thumbnail-gallery.johnwatkins0.me/example/assets/purple-thumb.png',
    thumbHeight: 150,
    thumbWidth: 150,
  },
  {
    id: 'red',
    title: 'Red',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus tristique tempor. Integer scelerisque libero eu libero maximus accumsan. Ut consectetur nec elit finibus pellentesque.',
    altText: 'Red',
    src: 'http://react-thumbnail-gallery.johnwatkins0.me/example/assets/red.png',
    height: 600,
    width: 1200,
    thumbSrc: 'http://react-thumbnail-gallery.johnwatkins0.me/example/assets/red-thumb.png',
    thumbHeight: 150,
    thumbWidth: 150,
  },
];

window.addEventListener('load', async () => {
  const root = document.querySelector('[data-react-thumbnail-gallery-example]');

  if (!('PropTypes' in window)) {
    window.PropTypes = await import('prop-types');
  }

  if (!('React' in window)) {
    window.React = await import('react');
  }

  if (!('ReactDOM' in window)) {
    window.ReactDOM = await import('react-dom');
  }

  if (!('styled' in window)) {
    const module = await import('styled-components');
    window.styledComponents = module;
    window.styled = module.default;
  }

  if (!('ThumbnailGallery' in window)) {
    const module = await import('../src/');
    window.ThumbnailGallery = module.default;
  }

  ReactDOM.render(<ThumbnailGallery items={items} />, root);
});
