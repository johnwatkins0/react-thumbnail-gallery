const StyledThumbButton = styled.button`
  background: none;
  border: none;
  opacity: ${props => (props.active ? '1' : '.8')};
`;

const ThumbButton = ({ active, altText, height, width, src, setActiveItem, id }) => (
  <StyledThumbButton active={active} onClick={() => setActiveItem(id)}>
    <img src={src} alt={altText} height={height} width={width} />
  </StyledThumbButton>
);

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
