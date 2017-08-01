import React from 'react';
import ReactDOM from 'react-dom';

import ThumbnailGallery from './ThumbnailGallery/ThumbnailGallery';

const buildItemDataFromWordPress = (item) => {
  const largeDetails = item.media_details.sizes.large;
  const thumbDetails = item.media_details.sizes.thumbnail;

  return {
    id: item.id,
    title: item.title.rendered,
    description: item.caption.rendered,
    altText: item.title.rendered,
    src: largeDetails.source_url,
    height: largeDetails.height,
    width: largeDetails.width,
    thumbSrc: thumbDetails.source_url,
    thumbHeight: thumbDetails.height,
    thumbWidth: thumbDetails.width,
  };
};

const initGallery = (container) => {
  const url = `${container.getAttribute(
    'data-endpoint'
  )}?include=${container
    .getAttribute('data-ids')
    .replace(/ /g, '')}&orderby=include&per_page=99`;

  fetch(url).then((response) => response.json()).then((items) => {
    ReactDOM.render(
      <ThumbnailGallery items={items.map(buildItemDataFromWordPress)} />,
      container
    );
  });
};

const maybeInitGallery = (container) => {
  if (
    container.getAttribute('data-endpoint') &&
    container.getAttribute('data-ids')
  ) {
    initGallery(container);
  }
};

const wordpressLoader = () => {
  Array.prototype.forEach.call(
    document.querySelectorAll('[data-thumbnail-gallery]'),
    maybeInitGallery
  );
};

export default wordpressLoader;
