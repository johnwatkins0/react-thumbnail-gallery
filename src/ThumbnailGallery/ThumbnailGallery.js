import MainPane from './MainPane';
import ThumbPane from './ThumbPane';

const ThumbnailGalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  align-items: center;
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

  render() {
    if (this.state.activeItem === null) {
      return null;
    }

    const activeItem = this.props.items.filter(item => item.id === this.state.activeItem)[0];

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
