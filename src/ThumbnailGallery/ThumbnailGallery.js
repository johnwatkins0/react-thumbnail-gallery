import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MainPane from './MainPane';
import ThumbPane from './ThumbPane';

const ThumbnailGalleryContainer = styled.div`
  margin-left: -1.5rem;
  margin-right: -1.5rem;

  @media screen and (min-width: 992px) {
    @supports (display: flex) {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }

    @supports (display: grid) {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-column-gap: 2rem;
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

class ThumbnailGallery extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeItem: null,
    };

    this.setActiveItem = this.setActiveItem.bind(this);
  }

  componentDidMount() {
    this.setActiveItem(this.props.items[0].id);
  }

  setActiveItem(activeItem) {
    this.setState({ activeItem });
  }

  getActiveItem = () =>
    this.props.items.filter(item => item.id === this.state.activeItem)[0];

  render() {
    if (this.state.activeItem === null) {
      return null;
    }

    const activeItem = this.getActiveItem();

    return (
      <ThumbnailGalleryContainer className="ThumbnailGallery">
        <MainPane item={activeItem} />
        <ThumbPane
          items={this.props.items}
          activeItemId={activeItem.id}
          setActiveItem={this.setActiveItem}
        />
      </ThumbnailGalleryContainer>
    );
  }
}

export default ThumbnailGallery;
