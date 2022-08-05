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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(0),
    isKey = __webpack_require__(22),
    stringToPath = __webpack_require__(27),
    toString = __webpack_require__(56);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(8);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(10);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(13);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(52);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObjectLike = __webpack_require__(9);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(2),
    getRawTag = __webpack_require__(25),
    objectToString = __webpack_require__(26);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(23);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(34),
    getValue = __webpack_require__(39);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(6);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(10);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(65),
    isObjectLike = __webpack_require__(9);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_pick__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_pick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_pick__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



(function (wpI18n, wpBlocks, wpElement, wpEditor, wpComponents) {
  var __ = wpI18n.__;
  var Component = wpElement.Component,
      Fragment = wpElement.Fragment;
  var registerBlockType = wpBlocks.registerBlockType;
  var InspectorControls = wpEditor.InspectorControls,
      MediaUpload = wpEditor.MediaUpload;
  var PanelBody = wpComponents.PanelBody,
      RangeControl = wpComponents.RangeControl,
      ToggleControl = wpComponents.ToggleControl,
      Button = wpComponents.Button,
      IconButton = wpComponents.IconButton,
      Placeholder = wpComponents.Placeholder,
      TextControl = wpComponents.TextControl;

  var PromoManagerIcon = wp.element.createElement(
    "svg",
    {
      width: "100px",
      height: "100px",
      viewBox: "0 0 150 150",
      enableBackground: "new 0 0 150 150"
    },
    wp.element.createElement(
      "g",
      null,
      wp.element.createElement(
        "g",
        null,
        wp.element.createElement("path", {
          fill: "#DF0A1E",
          d: "M146.221,54.552l-7.549-6.523c-0.936-0.81-2.352-0.706-3.161,0.231c-0.81,0.937-0.706,2.352,0.23,3.162\r l7.548,6.523c2.69,2.326,2.988,6.406,0.662,9.097l-49.027,56.729c-0.809,0.937-0.706,2.353,0.23,3.162\r c0.424,0.366,0.945,0.546,1.465,0.546c0.629,0,1.254-0.264,1.697-0.775l49.027-56.73\r C151.285,65.412,150.781,58.494,146.221,54.552z"
        })
      )
    ),
    wp.element.createElement(
      "g",
      null,
      wp.element.createElement(
        "g",
        null,
        wp.element.createElement("path", {
          fill: "#DF0A1E",
          d: "M132.932,43.067L98.015,12.891c-2.21-1.91-5.03-2.843-7.942-2.632c-2.913,0.212-5.568,1.546-7.479,3.755\r l-3.326,3.85c-0.811,0.937-0.707,2.353,0.23,3.162c0.937,0.81,2.352,0.707,3.161-0.23l3.327-3.85\r c1.127-1.303,2.693-2.09,4.411-2.215c1.718-0.126,3.382,0.426,4.686,1.553L130,46.459c0.424,0.366,0.945,0.545,1.465,0.545\r c0.629,0,1.254-0.263,1.697-0.775C133.971,45.292,133.869,43.877,132.932,43.067z"
        })
      )
    ),
    wp.element.createElement(
      "g",
      null,
      wp.element.createElement(
        "g",
        null,
        wp.element.createElement("path", {
          fill: "#DF0A1E",
          d: "M111.65,35.142L51.244,14.881c-5.716-1.917-11.925,1.173-13.842,6.889l-0.797,2.376\r c-0.394,1.173,0.239,2.444,1.413,2.838c1.174,0.394,2.444-0.238,2.838-1.413l0.797-2.375c1.131-3.372,4.793-5.195,8.166-4.064\r l60.407,20.261c3.372,1.131,5.195,4.794,4.064,8.166l-28.105,83.795c-0.395,1.174,0.238,2.444,1.412,2.839\r c0.236,0.078,0.477,0.116,0.713,0.116c0.938,0,1.811-0.592,2.125-1.529l28.105-83.794\r C120.456,43.269,117.365,37.059,111.65,35.142z"
        })
      )
    ),
    wp.element.createElement(
      "g",
      null,
      wp.element.createElement(
        "g",
        null,
        wp.element.createElement("path", {
          fill: "#DF0A1E",
          d: "M74.647,29.522H10.933C4.905,29.522,0,34.426,0,40.455v88.383c0,6.027,4.905,10.933,10.933,10.933h63.714\r c6.028,0,10.933-4.905,10.933-10.933V40.455C85.58,34.426,80.676,29.522,74.647,29.522z M81.096,128.838\r c0,3.556-2.893,6.449-6.449,6.449H10.933c-3.557,0-6.45-2.894-6.45-6.449V40.455c0-3.557,2.894-6.45,6.45-6.45h63.714\r c3.556,0,6.449,2.894,6.449,6.45L81.096,128.838L81.096,128.838z"
        })
      )
    ),
    wp.element.createElement(
      "g",
      null,
      wp.element.createElement(
        "g",
        null,
        wp.element.createElement("path", {
          fill: "#DF0A1E",
          d: "M75.814,91.395H9.767c-1.238,0-2.242,1.004-2.242,2.242s1.004,2.241,2.242,2.241h66.048\r c1.238,0,2.242-1.003,2.242-2.241C78.056,92.398,77.052,91.395,75.814,91.395z"
        })
      )
    ),
    wp.element.createElement(
      "g",
      null,
      wp.element.createElement(
        "g",
        null,
        wp.element.createElement("path", {
          fill: "#DF0A1E",
          d: "M65.363,104.215h-27.76c-1.238,0-2.242,1.003-2.242,2.241s1.004,2.241,2.242,2.241h27.76\r c1.238,0,2.242-1.003,2.242-2.241S66.601,104.215,65.363,104.215z"
        })
      )
    ),
    wp.element.createElement(
      "g",
      null,
      wp.element.createElement(
        "g",
        null,
        wp.element.createElement("path", {
          fill: "#DF0A1E",
          d: "M30.13,104.215h-9.914c-1.238,0-2.242,1.003-2.242,2.241s1.004,2.241,2.242,2.241h9.914\r c1.238,0,2.242-1.003,2.242-2.241S31.369,104.215,30.13,104.215z"
        })
      )
    ),
    wp.element.createElement(
      "g",
      null,
      wp.element.createElement(
        "g",
        null,
        wp.element.createElement("path", {
          fill: "#DF0A1E",
          d: "M65.363,112.783H20.217c-1.238,0-2.242,1.004-2.242,2.242s1.004,2.242,2.242,2.242h45.146\r c1.238,0,2.242-1.004,2.242-2.242S66.601,112.783,65.363,112.783z"
        })
      )
    ),
    wp.element.createElement(
      "g",
      null,
      wp.element.createElement(
        "g",
        null,
        wp.element.createElement("path", {
          fill: "#DF0A1E",
          d: "M65.363,121.354H20.217c-1.238,0-2.242,1.004-2.242,2.242c0,1.237,1.004,2.241,2.242,2.241h45.146\r c1.238,0,2.242-1.004,2.242-2.241C67.605,122.357,66.601,121.354,65.363,121.354z"
        })
      )
    ),
    wp.element.createElement(
      "g",
      null,
      wp.element.createElement(
        "g",
        null,
        wp.element.createElement("path", {
          fill: "#DF0A1E",
          d: "M67.429,55.533c-0.264-0.812-0.965-1.403-1.81-1.525l-14.386-2.09L44.8,38.881\r c-0.378-0.765-1.157-1.25-2.01-1.25c-0.854,0-1.633,0.485-2.011,1.25l-6.434,13.036l-14.385,2.09\r c-0.845,0.123-1.546,0.714-1.81,1.525c-0.264,0.812-0.043,1.702,0.567,2.298l10.41,10.146L26.67,82.305\r c-0.144,0.842,0.202,1.691,0.892,2.193c0.391,0.283,0.854,0.428,1.318,0.428c0.356,0,0.715-0.086,1.043-0.258l12.867-6.765\r l12.867,6.765c0.755,0.397,1.67,0.331,2.361-0.17c0.69-0.502,1.036-1.352,0.892-2.193l-2.458-14.328l10.41-10.146\r C67.472,57.235,67.692,56.344,67.429,55.533z M52.479,65.589c-0.528,0.515-0.77,1.257-0.645,1.984l1.889,11.012l-9.89-5.199\r c-0.653-0.343-1.434-0.343-2.086,0l-9.89,5.199l1.889-11.012c0.125-0.727-0.116-1.469-0.645-1.984l-8-7.799l11.057-1.607\r c0.73-0.106,1.361-0.564,1.688-1.226l4.945-10.02l4.945,10.02c0.326,0.662,0.958,1.12,1.688,1.226l11.058,1.607L52.479,65.589z"
        })
      )
    )
  );

  var osInsertMedaitoSlide = function osInsertMedaitoSlide(sourceURL, attributes) {
    if (osIsImage(sourceURL)) {
      return wp.element.createElement("img", {
        src: sourceURL,
        className: "media-slider-img",
        alt: __("Slider image"),
        width: "120",
        height: "120",
        loading: "lazy"
      });
    }
  };

  var osIsImage = function osIsImage(sourceURL) {
    var imageExtension = ["jpg", "jpeg", "png", "gif"];
    var fileExtension = sourceURL.split(".").pop();
    if (-1 < imageExtension.indexOf(fileExtension)) {
      return true;
    } else {
      return false;
    }
  };

  var ourSponsorSlider = function (_Component) {
    _inherits(ourSponsorSlider, _Component);

    function ourSponsorSlider() {
      _classCallCheck(this, ourSponsorSlider);

      var _this = _possibleConstructorReturn(this, (ourSponsorSlider.__proto__ || Object.getPrototypeOf(ourSponsorSlider)).apply(this, arguments));

      _this.state = {
        currentSelected: 0,
        inited: false,
        slickSliderObj: {}
      };

      _this.initSlider = _this.initSlider.bind(_this);
      return _this;
    }

    _createClass(ourSponsorSlider, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var attributes = this.props.attributes;

        if (attributes.media.length) {
          this.initSlider();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this2 = this;

        var clientId = this.props.clientId;
        var attributes = this.props.attributes;
        var media = attributes.media,
            autoplay = attributes.autoplay,
            dots = attributes.dots,
            arrows = attributes.arrows,
            speed = attributes.speed,
            slidesToShowDesktop = attributes.slidesToShowDesktop,
            adaptiveHeight = attributes.adaptiveHeight,
            centerMode = attributes.centerMode,
            fade = attributes.fade,
            autoplaySpeed = attributes.autoplaySpeed;
        var prevMedia = prevProps.attributes.media;

        if (media.length !== prevMedia.length) {
          if (0 === prevMedia.length) {
            setTimeout(function () {
              return _this2.initSlider();
            }, 100);
          } else {
            setTimeout(function () {
              return _this2.initSlider();
            }, 100);
          }
        }
        if (autoplay !== prevProps.attributes.autoplay) {
          jQuery("#block-" + clientId + " .md_essential_our_sponsor").slick("unslick");
          setTimeout(function () {
            return _this2.initSlider();
          }, 100);
        }
        if (dots !== prevProps.attributes.dots) {
          jQuery("#block-" + clientId + " .md_essential_our_sponsor").slick("unslick");
          setTimeout(function () {
            return _this2.initSlider();
          }, 100);
        }
        if (arrows !== prevProps.attributes.arrows) {
          jQuery("#block-" + clientId + " .md_essential_our_sponsor").slick("unslick");
          setTimeout(function () {
            return _this2.initSlider();
          }, 100);
        }
        if (speed !== prevProps.attributes.speed) {
          jQuery("#block-" + clientId + " .md_essential_our_sponsor").slick("unslick");
          setTimeout(function () {
            return _this2.initSlider();
          }, 100);
        }
        if (slidesToShowDesktop !== prevProps.attributes.slidesToShowDesktop) {
          jQuery("#block-" + clientId + " .md_essential_our_sponsor").slick("unslick");
          setTimeout(function () {
            return _this2.initSlider();
          }, 100);
        }
        if (adaptiveHeight !== prevProps.attributes.adaptiveHeight) {
          jQuery("#block-" + clientId + " .md_essential_our_sponsor").slick("unslick");
          setTimeout(function () {
            return _this2.initSlider();
          }, 100);
        }
        if (centerMode !== prevProps.attributes.centerMode) {
          jQuery("#block-" + clientId + " .md_essential_our_sponsor").slick("unslick");
          setTimeout(function () {
            return _this2.initSlider();
          }, 100);
        }
        if (fade !== prevProps.attributes.fade) {
          jQuery("#block-" + clientId + " .md_essential_our_sponsor").slick("unslick");
          setTimeout(function () {
            return _this2.initSlider();
          }, 100);
        }
        if (autoplaySpeed !== prevProps.attributes.autoplaySpeed) {
          jQuery("#block-" + clientId + " .md_essential_our_sponsor").slick("unslick");
          setTimeout(function () {
            return _this2.initSlider();
          }, 100);
        }
      }
    }, {
      key: "initSlider",
      value: function initSlider() {
        var _jQuery$slick;

        var clientId = this.props.clientId;
        var _props$attributes = this.props.attributes,
            autoplay = _props$attributes.autoplay,
            dots = _props$attributes.dots,
            autoplaySpeed = _props$attributes.autoplaySpeed,
            slidesToShowDesktop = _props$attributes.slidesToShowDesktop,
            speed = _props$attributes.speed,
            adaptiveHeight = _props$attributes.adaptiveHeight,
            centerMode = _props$attributes.centerMode,
            fade = _props$attributes.fade;

        var sliderObj = jQuery("#block-" + clientId + " .md_essential_our_sponsor").slick((_jQuery$slick = {
          infinite: true,
          slidesToScroll: 1,
          dots: dots,
          autoplay: autoplay,
          speed: speed,
          slidesToShow: slidesToShowDesktop
        }, _defineProperty(_jQuery$slick, "slidesToScroll", 1), _defineProperty(_jQuery$slick, "adaptiveHeight", adaptiveHeight), _defineProperty(_jQuery$slick, "centerMode", centerMode), _defineProperty(_jQuery$slick, "fade", fade), _defineProperty(_jQuery$slick, "autoplaySpeed", autoplaySpeed), _jQuery$slick));
        this.setState({ slickSliderObj: sliderObj });
      }
    }, {
      key: "moveMedia",
      value: function moveMedia(currentIndex, newIndex) {
        var _props = this.props,
            setAttributes = _props.setAttributes,
            attributes = _props.attributes;
        var media = attributes.media;


        var currentMedia = media[currentIndex];
        setAttributes({
          media: [].concat(_toConsumableArray(media.filter(function (img, idx) {
            return idx !== currentIndex;
          }).slice(0, newIndex)), [currentMedia], _toConsumableArray(media.filter(function (img, idx) {
            return idx !== currentIndex;
          }).slice(newIndex)))
        });
      }
    }, {
      key: "updateMediaData",
      value: function updateMediaData(data) {
        var currentSelected = this.state.currentSelected;

        if ("number" !== typeof currentSelected) {
          return null;
        }

        var _props2 = this.props,
            attributes = _props2.attributes,
            setAttributes = _props2.setAttributes;
        var media = attributes.media;


        var newMedia = media.map(function (media, index) {
          if (index === currentSelected) {
            media = Object.assign({}, media, data);
          }

          return media;
        });

        setAttributes({ media: newMedia });
      }
    }, {
      key: "render",
      value: function render() {
        var _props3 = this.props,
            attributes = _props3.attributes,
            setAttributes = _props3.setAttributes,
            isSelected = _props3.isSelected;
        var currentSelected = this.state.currentSelected;
        var media = attributes.media,
            autoplay = attributes.autoplay,
            dots = attributes.dots,
            arrows = attributes.arrows,
            speed = attributes.speed,
            slidesToShowDesktop = attributes.slidesToShowDesktop,
            slidesToShowTablet = attributes.slidesToShowTablet,
            slidesToShowMobile = attributes.slidesToShowMobile,
            adaptiveHeight = attributes.adaptiveHeight,
            centerMode = attributes.centerMode,
            fade = attributes.fade,
            autoplaySpeed = attributes.autoplaySpeed,
            clientId = attributes.clientId;


        if (0 === media.length) {
          return wp.element.createElement(
            Placeholder,
            {
              icon: "lock",
              label: __("Our Sponsors"),
              instructions: __("No media selected. Adding media to start using this block.")
            },
            wp.element.createElement(MediaUpload, {
              value: null,
              multiple: true,
              onSelect: function onSelect(item) {
                var mediaInsert = item.map(function (source) {
                  return {
                    url: source.url,
                    id: source.id
                  };
                });

                setAttributes({
                  media: [].concat(_toConsumableArray(media), _toConsumableArray(mediaInsert))
                });
              },
              render: function render(_ref) {
                var open = _ref.open;
                return wp.element.createElement(
                  Button,
                  {
                    className: "button button-large button-primary",
                    onClick: open
                  },
                  __("Add media")
                );
              }
            })
          );
        }
        return wp.element.createElement(
          Fragment,
          null,
          wp.element.createElement(
            InspectorControls,
            null,
            wp.element.createElement(
              PanelBody,
              {
                title: __("Slider Setting"),
                initialOpen: true,
                className: "school-ranking-setting"
              },
              wp.element.createElement(ToggleControl, {
                label: "Auto Play",
                checked: autoplay,
                onChange: function onChange(newValue) {
                  return setAttributes({ autoplay: newValue });
                }
              }),
              wp.element.createElement(ToggleControl, {
                label: "Dots",
                checked: dots,
                onChange: function onChange(newValue) {
                  return setAttributes({ dots: newValue });
                }
              }),
              wp.element.createElement(ToggleControl, {
                label: "Arrows",
                checked: arrows,
                onChange: function onChange(newValue) {
                  return setAttributes({ arrows: newValue });
                }
              }),
              wp.element.createElement(ToggleControl, {
                label: "Animation Fade",
                checked: fade,
                onChange: function onChange(newValue) {
                  return setAttributes({ fade: newValue });
                }
              }),
              !fade ? wp.element.createElement(ToggleControl, {
                label: "Center Mode",
                checked: centerMode,
                onChange: function onChange(newValue) {
                  return setAttributes({ centerMode: newValue });
                }
              }) : "",
              wp.element.createElement(
                "div",
                { "class": "md_essential_our_sponsor-setting-tooltip" },
                wp.element.createElement(
                  "label",
                  null,
                  "Slide speed",
                  wp.element.createElement("span", { "class": "dashicons dashicons-info" })
                ),
                wp.element.createElement(
                  "span",
                  { "class": "md_essential_our_sponsor-setting-tooltiptext" },
                  "Settings to control the speed of slides.                                "
                )
              ),
              wp.element.createElement(TextControl, {
                type: "text",
                value: speed,
                onChange: function onChange(newNumber) {
                  return setAttributes({ speed: newNumber });
                }
              }),
              autoplay ? wp.element.createElement(
                "div",
                null,
                wp.element.createElement(
                  "div",
                  { "class": "md_essential_our_sponsor-setting-tooltip" },
                  wp.element.createElement(
                    "label",
                    null,
                    "Auto Slide speed",
                    wp.element.createElement("span", { "class": "dashicons dashicons-info" })
                  ),
                  wp.element.createElement(
                    "span",
                    { "class": "md_essential_our_sponsor-setting-tooltiptext" },
                    "Settings to control the auto speed of slides.                                "
                  )
                ),
                wp.element.createElement(TextControl, {
                  type: "text",
                  value: autoplaySpeed,
                  onChange: function onChange(newNumber) {
                    return setAttributes({ autoplaySpeed: newNumber });
                  }
                })
              ) : "",
              !fade ? wp.element.createElement(
                "span",
                null,
                wp.element.createElement(
                  "div",
                  { "class": "md_essential_our_sponsor-setting-tooltip" },
                  wp.element.createElement(
                    "label",
                    null,
                    "Slides To Show Desktop",
                    wp.element.createElement("span", { "class": "dashicons dashicons-info" })
                  ),
                  wp.element.createElement(
                    "span",
                    { "class": "md_essential_our_sponsor-setting-tooltiptext" },
                    "Settings to control the number of slides to show on desktop.                                "
                  )
                ),
                wp.element.createElement(RangeControl, {
                  min: "1",
                  value: slidesToShowDesktop,
                  onChange: function onChange(newNumber) {
                    return newNumber !== "0" && newNumber ? setAttributes({ slidesToShowDesktop: newNumber }) : setAttributes({ slidesToShowDesktop: 1 });
                  }
                }),
                wp.element.createElement(
                  "div",
                  { "class": "md_essential_our_sponsor-setting-tooltip" },
                  wp.element.createElement(
                    "label",
                    null,
                    "Slides To Show Tablet",
                    wp.element.createElement("span", { "class": "dashicons dashicons-info" })
                  ),
                  wp.element.createElement(
                    "span",
                    { "class": "md_essential_our_sponsor-setting-tooltiptext" },
                    "Settings to control the number of slides to show on Tablet.                                "
                  )
                ),
                wp.element.createElement(RangeControl, {
                  min: "1",
                  value: slidesToShowTablet,
                  onChange: function onChange(newNumber) {
                    return newNumber !== "0" && newNumber ? setAttributes({ slidesToShowTablet: newNumber }) : setAttributes({ slidesToShowTablet: 1 });
                  }
                }),
                wp.element.createElement(
                  "div",
                  { "class": "md_essential_our_sponsor-setting-tooltip" },
                  wp.element.createElement(
                    "label",
                    null,
                    "Slides To Show Mobile",
                    wp.element.createElement("span", { "class": "dashicons dashicons-info" })
                  ),
                  wp.element.createElement(
                    "span",
                    { "class": "md_essential_our_sponsor-setting-tooltiptext" },
                    "Settings to control the number of slides to show on mobile.                                "
                  )
                ),
                wp.element.createElement(RangeControl, {
                  min: "1",
                  value: slidesToShowMobile,
                  onChange: function onChange(newNumber) {
                    return newNumber !== "0" && newNumber ? setAttributes({ slidesToShowMobile: newNumber }) : setAttributes({ slidesToShowMobile: 1 });
                  }
                })
              ) : ""
            )
          ),
          wp.element.createElement(
            "div",
            { className: "md_essential_our_sponsor_block slider-arrow-main" },
            wp.element.createElement(
              "div",
              {
                className: "md_essential_our_sponsor",
                "data-autoplay": "" + autoplay,
                "data-dots": "" + dots,
                "data-arrows": "" + arrows,
                "data-fade": "" + fade,
                "data-speed": "" + speed,
                "data-autoplaySpeed": "" + autoplaySpeed,
                "data-adaptiveHeight": "" + adaptiveHeight,
                "data-centerMode": "" + centerMode,
                "data-slidesToShowDesktop": "" + slidesToShowDesktop,
                "data-slidesToShowTablet": "" + slidesToShowTablet,
                "data-slidesToShowMobile": "" + slidesToShowMobile
              },
              media.map(function (source, index) {
                return wp.element.createElement(
                  "div",
                  { className: "md_essential_our_sponsor-item", key: index },
                  osInsertMedaitoSlide(source.url, attributes),
                  wp.element.createElement(
                    "span",
                    {
                      className: "feature-remove",
                      onClick: function onClick() {
                        var retVal = confirm("Are you sure you wish to delete this?");
                        if (retVal == false) {
                          return false;
                        }
                        jQuery(".md_essential_our_sponsor").slick("unslick");
                        var mediaItem = media.filter(function (img, idx) {
                          return idx !== index;
                        });
                        setAttributes({
                          media: mediaItem
                        });
                      }
                    },
                    wp.element.createElement("span", { className: "dashicons dashicons-no-alt" })
                  )
                );
              })
            ),
            isSelected && wp.element.createElement(
              "div",
              { className: "md_essential_our_sponsor-add-item" },
              wp.element.createElement(MediaUpload, {
                value: currentSelected,
                multiple: true,
                onSelect: function onSelect(items) {
                  jQuery("#block-" + clientId + " .md_essential_our_sponsor").slick("unslick");
                  setAttributes({
                    media: [].concat(_toConsumableArray(media), _toConsumableArray(items.map(function (item) {
                      return __WEBPACK_IMPORTED_MODULE_0_lodash_pick___default()(item, "id", "url", "alt");
                    })))
                  });
                },
                render: function render(_ref2) {
                  var open = _ref2.open;
                  return wp.element.createElement(IconButton, {
                    label: __("Add media"),
                    icon: "plus",
                    onClick: open
                  });
                }
              })
            )
          )
        );
      }
    }]);

    return ourSponsorSlider;
  }(Component);

  var blockAttrs = {
    media: {
      type: "array",
      default: []
    },
    autoplay: {
      type: "boolean",
      default: false
    },
    dots: {
      type: "boolean",
      default: true
    },
    arrows: {
      type: "boolean",
      default: true
    },
    speed: {
      type: "string",
      default: 300
    },
    autoplaySpeed: {
      type: "string",
      default: 300
    },
    slidesToShowDesktop: {
      type: "string",
      default: 1
    },
    slidesToShowTablet: {
      type: "string",
      default: 1
    },
    slidesToShowMobile: {
      type: "string",
      default: 1
    },
    clientId: {
      type: "number"
    },
    adaptiveHeight: {
      type: "boolean",
      default: true
    },
    centerMode: {
      type: "boolean",
      default: true
    },
    fade: {
      type: "boolean",
      default: true
    }
  };

  registerBlockType("md/our-sponsors", {
    title: __("Our Sponsors"),
    description: __("Display your Sponsors in a slider."),
    icon: { src: PromoManagerIcon },
    category: "mdessentialblocks",
    keywords: [__("slide"), __("gallery"), __("photos"), __("sponsors")],
    attributes: blockAttrs,
    edit: ourSponsorSlider,
    save: function save(_ref3) {
      var attributes = _ref3.attributes;
      var media = attributes.media,
          autoplay = attributes.autoplay,
          dots = attributes.dots,
          arrows = attributes.arrows,
          speed = attributes.speed,
          slidesToShowDesktop = attributes.slidesToShowDesktop,
          slidesToShowTablet = attributes.slidesToShowTablet,
          slidesToShowMobile = attributes.slidesToShowMobile,
          adaptiveHeight = attributes.adaptiveHeight,
          centerMode = attributes.centerMode,
          autoplaySpeed = attributes.autoplaySpeed,
          fade = attributes.fade,
          clientId = attributes.clientId;

      return wp.element.createElement(
        "div",
        { className: "md_essential_our_sponsor_block slider-arrow-main " },
        wp.element.createElement(
          "div",
          {
            className: "md_essential_our_sponsor",
            "data-autoplay": "" + autoplay,
            "data-dots": "" + dots,
            "data-arrows": "" + arrows,
            "data-speed": "" + speed,
            "data-fade": "" + fade,
            "data-adaptiveHeight": "" + adaptiveHeight,
            "data-centerMode": "" + centerMode,
            "data-autoplaySpeed": "" + autoplaySpeed,
            "data-slidesToShowDesktop": "" + slidesToShowDesktop,
            "data-slidesToShowTablet": "" + slidesToShowTablet,
            "data-slidesToShowMobile": "" + slidesToShowMobile
          },
          media.map(function (source, index) {
            return wp.element.createElement(
              "div",
              { className: "md_essential_our_sponsor-item", key: index },
              osInsertMedaitoSlide(source.url, attributes)
            );
          })
        )
      );
    }
  });
})(wp.i18n, wp.blocks, wp.element, wp.editor, wp.components);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(19),
    flatRest = __webpack_require__(67);

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(20),
    hasIn = __webpack_require__(62);

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(21),
    baseSet = __webpack_require__(59),
    castPath = __webpack_require__(1);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(1),
    toKey = __webpack_require__(12);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(0),
    isSymbol = __webpack_require__(6);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(2);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(28);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(29);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(30);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(31),
    mapCacheDelete = __webpack_require__(51),
    mapCacheGet = __webpack_require__(53),
    mapCacheHas = __webpack_require__(54),
    mapCacheSet = __webpack_require__(55);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(32),
    ListCache = __webpack_require__(44),
    Map = __webpack_require__(50);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(33),
    hashDelete = __webpack_require__(40),
    hashGet = __webpack_require__(41),
    hashHas = __webpack_require__(42),
    hashSet = __webpack_require__(43);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(3);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(35),
    isMasked = __webpack_require__(36),
    isObject = __webpack_require__(11),
    toSource = __webpack_require__(38);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObject = __webpack_require__(11);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(37);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(8);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(3);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(3);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(3);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(45),
    listCacheDelete = __webpack_require__(46),
    listCacheGet = __webpack_require__(47),
    listCacheHas = __webpack_require__(48),
    listCacheSet = __webpack_require__(49);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(4);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(4);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(4);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(4);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(10),
    root = __webpack_require__(8);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(5);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(5);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(5);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(5);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(57);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(2),
    arrayMap = __webpack_require__(58),
    isArray = __webpack_require__(0),
    isSymbol = __webpack_require__(6);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(60),
    castPath = __webpack_require__(1),
    isIndex = __webpack_require__(15),
    isObject = __webpack_require__(11),
    toKey = __webpack_require__(12);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(61),
    eq = __webpack_require__(13);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(14);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(63),
    hasPath = __webpack_require__(64);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(1),
    isArguments = __webpack_require__(16),
    isArray = __webpack_require__(0),
    isIndex = __webpack_require__(15),
    isLength = __webpack_require__(66),
    toKey = __webpack_require__(12);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObjectLike = __webpack_require__(9);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(68),
    overRest = __webpack_require__(72),
    setToString = __webpack_require__(74);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(69);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(70),
    isFlattenable = __webpack_require__(71);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(2),
    isArguments = __webpack_require__(16),
    isArray = __webpack_require__(0);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(73);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(75),
    shortOut = __webpack_require__(78);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(76),
    defineProperty = __webpack_require__(14),
    identity = __webpack_require__(77);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ })
/******/ ]);