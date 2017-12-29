import React from 'react';
import renderer from 'react-test-renderer';

import TestGallery from '../example/src/TestGallery';

test('ThumbnailGallery renders correctly.', () => {
  const tree = renderer.create(<TestGallery />).toJSON();

  expect(tree).toMatchSnapshot();
});
