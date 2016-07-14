module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BreadcrumbItem = __webpack_require__(4);
	
	var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Breadcrumb = function (_Component) {
	  _inherits(Breadcrumb, _Component);
	
	  function Breadcrumb() {
	    _classCallCheck(this, Breadcrumb);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Breadcrumb).apply(this, arguments));
	  }
	
	  _createClass(Breadcrumb, [{
	    key: 'trimPath',
	
	    /**
	     * Removes spaces and the given character from both sides of the string
	     *
	     * @param {String} path The path to be trimed
	     * @param {String} char The character trime with spaces
	     *
	     * @returns {String} The trimed string
	     */
	    value: function trimPath(path) {
	      var char = arguments.length <= 1 || arguments[1] === undefined ? '/' : arguments[1];
	
	      var escapedString = char.replace(/[\[\](){}?*+\^$\\.|\-]/g, '\\$&');
	
	      return path.replace(new RegExp('^[ ' + escapedString + ']+|[ ' + escapedString + ']+$', 'g'), '');
	    }
	
	    /**
	     * Create an array of segments from a path
	     *
	     * @param {String} path The path
	     * @param {String} pathSeparator The separator used in the path
	     *
	     * @returns {Array} An array of segments
	     */
	
	  }, {
	    key: 'explodePath',
	    value: function explodePath(path, pathSeparator) {
	      var trimedPath = this.trimPath(path, pathSeparator);
	
	      if (trimedPath === '') {
	        return [];
	      }
	
	      return trimedPath.split(pathSeparator);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var path = this.explodePath(this.props.path, this.props.pathSeparator);
	      var _props = this.props;
	      var getUrlFromPathSegments = _props.getUrlFromPathSegments;
	      var onClick = _props.onClick;
	
	
	      return _react2.default.createElement(
	        'ul',
	        { className: (0, _classnames2.default)('breadcrumb', this.props.className) },
	        this.props.pathRoot ? _react2.default.createElement(
	          'li',
	          {
	            key: 'root',
	            className: 'breadcrumb__item breadcrumb__item--root'
	          },
	          _react2.default.createElement(_BreadcrumbItem2.default, _extends({
	            label: this.props.pathRoot,
	            pathSegments: []
	          }, { getUrlFromPathSegments: getUrlFromPathSegments, onClick: onClick }))
	        ) : null,
	        path.map(function (segment, id) {
	          var pathSegments = path.map(encodeURIComponent).slice(0, id + 1);
	
	          return _react2.default.createElement(
	            'li',
	            {
	              key: id,
	              className: 'breadcrumb__item'
	            },
	            _react2.default.createElement(_BreadcrumbItem2.default, _extends({
	              label: segment,
	              pathSegments: pathSegments
	            }, { getUrlFromPathSegments: getUrlFromPathSegments, onClick: onClick }))
	          );
	        })
	      );
	    }
	  }]);
	
	  return Breadcrumb;
	}(_react.Component);
	
	exports.default = Breadcrumb;
	
	
	Breadcrumb.propTypes = {
	  path: _react2.default.PropTypes.string.isRequired,
	  pathSeparator: _react2.default.PropTypes.string,
	  pathRoot: _react2.default.PropTypes.string,
	  getUrlFromPathSegments: _react2.default.PropTypes.func,
	  onClick: _react2.default.PropTypes.func,
	  className: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object])
	};
	
	Breadcrumb.defaultProps = {
	  pathSeparator: '/',
	  getUrlFromPathSegments: function getUrlFromPathSegments(pathSegments) {
	    return '/' + pathSegments.join('/');
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames() {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if ("function" === 'function' && _typeof(__webpack_require__(3)) === 'object' && __webpack_require__(3)) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BreadcrumbItem = function (_Component) {
	  _inherits(BreadcrumbItem, _Component);
	
	  function BreadcrumbItem() {
	    _classCallCheck(this, BreadcrumbItem);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BreadcrumbItem).apply(this, arguments));
	  }
	
	  _createClass(BreadcrumbItem, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return this.props.onClick ? _react2.default.createElement(
	        'span',
	        { onClick: function onClick(e) {
	            return _this2.props.onClick(_this2.props.pathSegments, e);
	          } },
	        this.props.label
	      ) : _react2.default.createElement(
	        'a',
	        { href: this.props.getUrlFromPathSegments(this.props.pathSegments) },
	        this.props.label
	      );
	    }
	  }]);
	
	  return BreadcrumbItem;
	}(_react.Component);
	
	exports.default = BreadcrumbItem;
	
	
	BreadcrumbItem.propTypes = {
	  label: _react2.default.PropTypes.string.isRequired,
	  pathSegments: _react2.default.PropTypes.array.isRequired,
	  getUrlFromPathSegments: _react2.default.PropTypes.func,
	  onClick: _react2.default.PropTypes.func
	};

/***/ }
/******/ ]);
//# sourceMappingURL=Breadcrumb.js.map