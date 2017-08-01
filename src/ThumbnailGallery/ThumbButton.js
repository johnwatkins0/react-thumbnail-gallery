import PropTypes from 'prop-types';
import React from 'react';

import styles from './ThumbnailGallery.module.scss';

const ThumbButton = ({
  active,
  altText,
  height,
  width,
  src,
  setActiveItem,
  id,
}) =>
  (<button
    className={
      styles.ThumbButton + (active === true ? ` ${styles.active}` : '')
    }
    onClick={() => setActiveItem(id)}
  >
    <img src={src} alt={altText} height={height} width={width} />
  </button>);

ThumbButton.propTypes = {
  active: PropTypes.bool.isRequired,
  altText: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setActiveItem: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default ThumbButton;
