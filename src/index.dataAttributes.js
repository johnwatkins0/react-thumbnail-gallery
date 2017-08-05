import React from 'react';
import ReactDOM from 'react-dom';

import ThumbnailGallery from './ThumbnailGallery/ThumbnailGallery';

const initGallery = (container, items) => {
  ReactDOM.render(<ThumbnailGallery items={items} />, container);
};

const maybeInitGallery = (container) => {
  const images = container.getAttribute('data-images');
  if (!images) {
    return;
  }

  const items = JSON.parse(images);

  if (items.length) {
    initGallery(container, items);
  }
};

const loadFromDataAttributes = () => {
  Array.prototype.forEach.call(
    document.querySelectorAll('[data-thumbnail-gallery]'),
    maybeInitGallery
  );
};

window.addEventListener('load', loadFromDataAttributes);
