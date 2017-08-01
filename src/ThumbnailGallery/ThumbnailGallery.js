import PropTypes from 'prop-types';
import React from 'react';

import MainPane from './MainPane';
import ThumbPane from './ThumbPane';

import styles from './ThumbnailGallery.module.scss';

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

  render() {
    if (this.state.activeItem === null) {
      return null;
    }

    const activeItem = this.props.items.filter(
      (item) => item.id === this.state.activeItem
    )[0];

    return (
      <div className={styles.ThumbnailGallery}>
        <MainPane item={activeItem} />
        <ThumbPane
          items={this.props.items}
          activeItemId={activeItem.id}
          setActiveItem={this.setActiveItem}
        />
      </div>
    );
  }
}

export default ThumbnailGallery;
