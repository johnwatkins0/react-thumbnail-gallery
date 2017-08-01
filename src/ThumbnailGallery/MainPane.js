import PropTypes from 'prop-types';
import React from 'react';

import styles from './ThumbnailGallery.module.scss';

const MainPane = ({ item }) =>
  (<div className={styles.MainPane}>
    <img
      src={item.src}
      height={item.height}
      width={item.width}
      alt={item.altText}
    />
  </div>);

MainPane.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MainPane;
