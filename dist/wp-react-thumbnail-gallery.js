/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"ThumbButton":"ThumbButton","active":"active","ThumbnailGallery":"ThumbnailGallery","MainPane":"MainPane","ThumbPane":"ThumbPane","thumbTitle":"thumbTitle","thumbDescription":"thumbDescription"};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ThumbnailGallery = __webpack_require__(4);

var _ThumbnailGallery2 = _interopRequireDefault(_ThumbnailGallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ThumbnailGallery2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _MainPane = __webpack_require__(5);

var _MainPane2 = _interopRequireDefault(_MainPane);

var _ThumbPane = __webpack_require__(6);

var _ThumbPane2 = _interopRequireDefault(_ThumbPane);

var _ThumbnailGalleryModule = __webpack_require__(2);

var _ThumbnailGalleryModule2 = _interopRequireDefault(_ThumbnailGalleryModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThumbnailGallery = function (_React$Component) {
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

      return _react2.default.createElement(
        'div',
        { className: _ThumbnailGalleryModule2.default.ThumbnailGallery },
        _react2.default.createElement(_MainPane2.default, { item: activeItem }),
        _react2.default.createElement(_ThumbPane2.default, {
          items: this.props.items,
          activeItemId: activeItem.id,
          setActiveItem: this.setActiveItem
        })
      );
    }
  }]);

  return ThumbnailGallery;
}(_react2.default.Component);

ThumbnailGallery.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};
exports.default = ThumbnailGallery;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ThumbnailGalleryModule = __webpack_require__(2);

var _ThumbnailGalleryModule2 = _interopRequireDefault(_ThumbnailGalleryModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainPane = function MainPane(_ref) {
  var item = _ref.item;
  return _react2.default.createElement(
    'div',
    { className: _ThumbnailGalleryModule2.default.MainPane },
    _react2.default.createElement('img', {
      src: item.src,
      height: item.height,
      width: item.width,
      alt: item.altText
    })
  );
};

MainPane.propTypes = {
  item: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired
};

exports.default = MainPane;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ThumbnailGalleryModule = __webpack_require__(2);

var _ThumbnailGalleryModule2 = _interopRequireDefault(_ThumbnailGalleryModule);

var _ThumbButton = __webpack_require__(7);

var _ThumbButton2 = _interopRequireDefault(_ThumbButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/no-danger: 0 */
var ThumbPane = function ThumbPane(_ref) {
  var items = _ref.items,
      activeItemId = _ref.activeItemId,
      setActiveItem = _ref.setActiveItem;

  var activeItem = items.filter(function (item) {
    return item.id === activeItemId;
  })[0];

  return _react2.default.createElement(
    'div',
    { className: _ThumbnailGalleryModule2.default.ThumbPane },
    _react2.default.createElement('h1', {
      className: _ThumbnailGalleryModule2.default.thumbTitle,
      dangerouslySetInnerHTML: { __html: activeItem.title }
    }),
    _react2.default.createElement('p', {
      className: _ThumbnailGalleryModule2.default.thumbDescription,
      dangerouslySetInnerHTML: { __html: activeItem.description }
    }),
    items.map(function (item) {
      return _react2.default.createElement(_ThumbButton2.default, {
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
  items: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  activeItemId: _propTypes2.default.number.isRequired,
  setActiveItem: _propTypes2.default.func.isRequired
};

exports.default = ThumbPane;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ThumbnailGalleryModule = __webpack_require__(2);

var _ThumbnailGalleryModule2 = _interopRequireDefault(_ThumbnailGalleryModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThumbButton = function ThumbButton(_ref) {
  var active = _ref.active,
      altText = _ref.altText,
      height = _ref.height,
      width = _ref.width,
      src = _ref.src,
      setActiveItem = _ref.setActiveItem,
      id = _ref.id;
  return _react2.default.createElement(
    'button',
    {
      className: _ThumbnailGalleryModule2.default.ThumbButton + (active === true ? ' ' + _ThumbnailGalleryModule2.default.active : ''),
      onClick: function onClick() {
        return setActiveItem(id);
      }
    },
    _react2.default.createElement('img', { src: src, alt: altText, height: height, width: width })
  );
};

ThumbButton.propTypes = {
  active: _propTypes2.default.bool.isRequired,
  altText: _propTypes2.default.string.isRequired,
  height: _propTypes2.default.number.isRequired,
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  setActiveItem: _propTypes2.default.func.isRequired,
  src: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.number.isRequired
};

exports.default = ThumbButton;

/***/ })
/******/ ]);