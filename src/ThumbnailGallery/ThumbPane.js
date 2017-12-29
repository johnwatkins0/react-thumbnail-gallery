/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ThumbButton from './ThumbButton';

const ThumbPaneContainer = styled.div`
  padding-top: 0.75rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  flex: 0 0 100%;

  button {
    width: 25%;
    padding: 0.125rem;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      width: 20%;
    }
  }

  img {
    width: 100%;
    max-width: 150px;
    height: auto;
  }

  @media screen and (min-width: 992px) {
    float: left;
    max-width: ${8.3333 * 5}%;

    @supports (display: flex) {
      flex: 0 0 ${8.3333 * 5}%;
      max-width: ${8.3333 * 5}%;
    }

    @supports (display: grid) {
      padding-left: 0;
      padding-right: 0;
      flex: none;
      max-width: none;
      grid-column-end: span 5;
    }
  }
`;

const ThumbTitle = styled.h1`
  font-size: 1.122rem;
`;

const ThumbDescription = styled.p`
  color: $black;
`;

const ThumbPane = ({ items, activeItemId, setActiveItem }) => {
  const activeItem = items.filter(item => item.id === activeItemId)[0];

  return (
    <ThumbPaneContainer>
      <ThumbTitle dangerouslySetInnerHTML={{ __html: activeItem.title }} />
      <ThumbDescription
        dangerouslySetInnerHTML={{ __html: activeItem.description }}
      />
      {items.map(item => (
        <ThumbButton
          key={item.id}
          altText={item.altText}
          height={item.thumbHeight}
          width={item.thumbWidth}
          src={item.thumbSrc}
          active={item.id === activeItemId}
          setActiveItem={setActiveItem}
          id={item.id}
        />
      ))}
    </ThumbPaneContainer>
  );
};

ThumbPane.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeItemId: PropTypes.string.isRequired,
  setActiveItem: PropTypes.func.isRequired,
};

export default ThumbPane;
