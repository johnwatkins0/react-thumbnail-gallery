import React from 'react';
import ReactDOM from 'react-dom';

import TestGallery from './TestGallery';

const run = () => {
  const root = document.querySelector('[data-react-thumbnail-gallery-example]');

  ReactDOM.render(<TestGallery />, root);
};

window.addEventListener('load', run);
