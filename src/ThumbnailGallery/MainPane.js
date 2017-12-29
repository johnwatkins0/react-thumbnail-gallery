import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainPaneDiv = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  float: left;
  margin-bottom: 1.5rem;
  padding-top: 1.5rem;

  @media screen and (min-width: 992px) {
    float: left;
    max-width: ${8.3333 * 7};

    @supports (display: flex) {
      flex: 0 0 ${8.3333 * 7}%;
      max-width: ${8.3333 * 7}%;
    }

    @supports (display: grid) {
      padding-left: 0;
      padding-right: 0;
      flex: none;
      max-width: none;
      grid-column-end: span 7;
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const MainPane = ({ item }) => (
  <MainPaneDiv>
    <img
      src={item.src}
      height={item.height}
      width={item.width}
      alt={item.altText}
    />
  </MainPaneDiv>
);

MainPane.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MainPane;
