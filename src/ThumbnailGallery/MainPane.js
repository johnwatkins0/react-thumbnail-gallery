import styled from 'styled-components';

const MainPaneDiv = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  flex: 0 0 100%;
  min-width: 100%;
  margin-bottom: 1.5rem;
  padding-top: 1.5rem;

  @media screen and (min-width: 992px) {
    flex: 0 0 ${100 / 12 * 7}%;
    min-width: ${100 / 12 * 7}%;
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
