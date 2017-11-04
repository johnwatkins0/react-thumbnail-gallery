webpackJsonp([4],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ThumbnailGallery = __webpack_require__(197);

var _ThumbnailGallery2 = _interopRequireDefault(_ThumbnailGallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ThumbnailGallery2.default;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _templateObject = _taggedTemplateLiteral(['\n  margin-left: -1.5rem;\n  margin-right: -1.5rem;\n\n  @media screen and (min-width: 992px) {\n    @supports (display: flex) {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: center;\n    }\n\n    @supports (display: grid) {\n      display: grid;\n      grid-template-columns: repeat(12, 1fr);\n      grid-column-gap: 2rem;\n      margin-left: 0;\n      margin-right: 0;\n    }\n  }\n'], ['\n  margin-left: -1.5rem;\n  margin-right: -1.5rem;\n\n  @media screen and (min-width: 992px) {\n    @supports (display: flex) {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: center;\n    }\n\n    @supports (display: grid) {\n      display: grid;\n      grid-template-columns: repeat(12, 1fr);\n      grid-column-gap: 2rem;\n      margin-left: 0;\n      margin-right: 0;\n    }\n  }\n']);

var _MainPane = __webpack_require__(198);

var _MainPane2 = _interopRequireDefault(_MainPane);

var _ThumbPane = __webpack_require__(199);

var _ThumbPane2 = _interopRequireDefault(_ThumbPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ThumbnailGalleryContainer = styled.div(_templateObject);

var ThumbnailGallery = (_temp = _class = function (_React$Component) {
  _inherits(ThumbnailGallery, _React$Component);

  function ThumbnailGallery(props) {
    _classCallCheck(this, ThumbnailGallery);

    var _this = _possibleConstructorReturn(this, (ThumbnailGallery.__proto__ || Object.getPrototypeOf(ThumbnailGallery)).call(this, props));

    _this.state = {
      activeItem: null
    };

    _this.setActiveItem = _this.setActiveItem.bind(_this);
    return _this;
  }

  _createClass(ThumbnailGallery, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setActiveItem(this.props.items[0].id);
    }
  }, {
    key: 'setActiveItem',
    value: function setActiveItem(activeItem) {
      this.setState({ activeItem: activeItem });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.state.activeItem === null) {
        return null;
      }

      var activeItem = this.props.items.filter(function (item) {
        return item.id === _this2.state.activeItem;
      })[0];

      return React.createElement(
        ThumbnailGalleryContainer,
        { className: 'ThumbnailGallery' },
        React.createElement(_MainPane2.default, { item: activeItem }),
        React.createElement(_ThumbPane2.default, {
          items: this.props.items,
          activeItemId: activeItem.id,
          setActiveItem: this.setActiveItem
        })
      );
    }
  }]);

  return ThumbnailGallery;
}(React.Component), _class.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}, _temp);
exports.default = ThumbnailGallery;

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  float: left;\n  margin-bottom: 1.5rem;\n  padding-top: 1.5rem;\n\n  @media screen and (min-width: 992px) {\n    float: left;\n    max-width: ", ";\n\n    @supports (display: flex) {\n      flex: 0 0 ", "%;\n      max-width: ", "%;\n    }\n\n    @supports (display: grid) {\n      padding-left: 0;\n      padding-right: 0;\n      flex: none;\n      max-width: none;\n      grid-column-end: span 7;\n    }\n  }\n\n  img {\n    width: 100%;\n    height: auto;\n  }\n"], ["\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  float: left;\n  margin-bottom: 1.5rem;\n  padding-top: 1.5rem;\n\n  @media screen and (min-width: 992px) {\n    float: left;\n    max-width: ", ";\n\n    @supports (display: flex) {\n      flex: 0 0 ", "%;\n      max-width: ", "%;\n    }\n\n    @supports (display: grid) {\n      padding-left: 0;\n      padding-right: 0;\n      flex: none;\n      max-width: none;\n      grid-column-end: span 7;\n    }\n  }\n\n  img {\n    width: 100%;\n    height: auto;\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainPaneDiv = styled.div(_templateObject, 8.3333 * 7, 8.3333 * 7, 8.3333 * 7);

var MainPane = function MainPane(_ref) {
  var item = _ref.item;
  return React.createElement(
    MainPaneDiv,
    null,
    React.createElement("img", { src: item.src, height: item.height, width: item.width, alt: item.altText })
  );
};

MainPane.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired
};

exports.default = MainPane;

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding-top: 0.75rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  flex: 0 0 100%;\n\n  button {\n    width: 25%;\n    padding: 0.125rem;\n    cursor: pointer;\n\n    @media screen and (min-width: 768px) {\n      width: 20%;\n    }\n  }\n\n  img {\n    width: 100%;\n    max-width: 150px;\n    height: auto;\n  }\n\n  @media screen and (min-width: 992px) {\n    float: left;\n    max-width: ', '%;\n\n    @supports (display: flex) {\n      flex: 0 0 ', '%;\n      max-width: ', '%;\n    }\n\n    @supports (display: grid) {\n      padding-left: 0;\n      padding-right: 0;\n      flex: none;\n      max-width: none;\n      grid-column-end: span 5;\n    }\n  }\n'], ['\n  padding-top: 0.75rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  flex: 0 0 100%;\n\n  button {\n    width: 25%;\n    padding: 0.125rem;\n    cursor: pointer;\n\n    @media screen and (min-width: 768px) {\n      width: 20%;\n    }\n  }\n\n  img {\n    width: 100%;\n    max-width: 150px;\n    height: auto;\n  }\n\n  @media screen and (min-width: 992px) {\n    float: left;\n    max-width: ', '%;\n\n    @supports (display: flex) {\n      flex: 0 0 ', '%;\n      max-width: ', '%;\n    }\n\n    @supports (display: grid) {\n      padding-left: 0;\n      padding-right: 0;\n      flex: none;\n      max-width: none;\n      grid-column-end: span 5;\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 1.122rem;\n'], ['\n  font-size: 1.122rem;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  color: $black;\n'], ['\n  color: $black;\n']);

var _ThumbButton = __webpack_require__(200);

var _ThumbButton2 = _interopRequireDefault(_ThumbButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint react/no-danger: 0 */


var ThumbPaneContainer = styled.div(_templateObject, 8.3333 * 5, 8.3333 * 5, 8.3333 * 5);

var ThumbTitle = styled.h1(_templateObject2);

var ThumbDescription = styled.p(_templateObject3);

var ThumbPane = function ThumbPane(_ref) {
  var items = _ref.items,
      activeItemId = _ref.activeItemId,
      setActiveItem = _ref.setActiveItem;

  var activeItem = items.filter(function (item) {
    return item.id === activeItemId;
  })[0];

  return React.createElement(
    ThumbPaneContainer,
    null,
    React.createElement(ThumbTitle, { dangerouslySetInnerHTML: { __html: activeItem.title } }),
    React.createElement(ThumbDescription, { dangerouslySetInnerHTML: { __html: activeItem.description } }),
    items.map(function (item) {
      return React.createElement(_ThumbButton2.default, {
        key: item.id,
        altText: item.altText,
        height: item.thumbHeight,
        width: item.thumbWidth,
        src: item.thumbSrc,
        active: item.id === activeItemId,
        setActiveItem: setActiveItem,
        id: item.id
      });
    })
  );
};

ThumbPane.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeItemId: PropTypes.string.isRequired,
  setActiveItem: PropTypes.func.isRequired
};

exports.default = ThumbPane;

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: none;\n  border: none;\n  opacity: ', ';\n'], ['\n  background: none;\n  border: none;\n  opacity: ', ';\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledThumbButton = styled.button(_templateObject, function (props) {
  return props.active ? '1' : '.8';
});

var ThumbButton = function ThumbButton(_ref) {
  var active = _ref.active,
      altText = _ref.altText,
      height = _ref.height,
      width = _ref.width,
      src = _ref.src,
      setActiveItem = _ref.setActiveItem,
      id = _ref.id;
  return React.createElement(
    StyledThumbButton,
    { active: active, onClick: function onClick() {
        return setActiveItem(id);
      } },
    React.createElement('img', { src: src, alt: altText, height: height, width: width })
  );
};

ThumbButton.propTypes = {
  active: PropTypes.bool.isRequired,
  altText: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setActiveItem: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
};

exports.default = ThumbButton;

/***/ })

});
//# sourceMappingURL=4.f82b5d7b15c1af65d4d4.bundle.js.map