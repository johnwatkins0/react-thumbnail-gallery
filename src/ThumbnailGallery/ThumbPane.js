/* eslint react/no-danger: 0 */
import PropTypes from 'prop-types';
import React from 'react';

import styles from './ThumbnailGallery.module.scss';

import ThumbButton from './ThumbButton';

const ThumbPane = ({ items, activeItemId, setActiveItem }) => {
  const activeItem = items.filter((item) => item.id === activeItemId)[0];

  return (
    <div className={styles.ThumbPane}>
      <h1
        className={styles.thumbTitle}
        dangerouslySetInnerHTML={{ __html: activeItem.title }}
      />
      <p
        className={styles.thumbDescription}
        dangerouslySetInnerHTML={{ __html: activeItem.description }}
      />
      {items.map((item) =>
        (<ThumbButton
          key={item.id}
          altText={item.altText}
          height={item.thumbHeight}
          width={item.thumbWidth}
          src={item.thumbSrc}
          active={item.id === activeItemId}
          setActiveItem={setActiveItem}
          id={item.id}
        />)
      )}
    </div>
  );
};

ThumbPane.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeItemId: PropTypes.number.isRequired,
  setActiveItem: PropTypes.func.isRequired,
};

export default ThumbPane;
