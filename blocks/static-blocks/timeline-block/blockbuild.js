/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./block.js":
/*!******************!*\
  !*** ./block.js ***!
  \******************/
/***/ (() => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    Button = _wp$components.Button,\n    Tooltip = _wp$components.Tooltip;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InspectorControls = _wp$editor.InspectorControls,\n    MediaUpload = _wp$editor.MediaUpload;\n\nvar edit = /*#__PURE__*/function (_Component) {\n  _inherits(edit, _Component);\n\n  var _super = _createSuper(edit);\n\n  function edit() {\n    _classCallCheck(this, edit);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(edit, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          attributes = _this$props.attributes,\n          setAttributes = _this$props.setAttributes;\n      var timelineitemsDetails = attributes.timelineitemsDetails,\n          backgroundImage = attributes.backgroundImage,\n          isLastItem = attributes.isLastItem;\n\n      var getImage = function getImage(openEvent) {\n        if (backgroundImage) {\n          return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(\"img\", {\n            src: backgroundImage,\n            onClick: openEvent,\n            className: \"bgimg-editor\"\n          }), /*#__PURE__*/React.createElement(Button, {\n            onClick: function onClick() {\n              setAttributes({\n                backgroundImage: \"\",\n                isLastItem: \"no\"\n              });\n            },\n            className: \"button button-large\"\n          }, \"Remove Image\"));\n        } else {\n          return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(Button, {\n            onClick: openEvent,\n            className: \"button button-large\"\n          }, \"Upload image\"));\n        }\n      };\n\n      return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {\n        title: \"Last Item Background Image Settings\",\n        initialOpen: true\n      }, /*#__PURE__*/React.createElement(MediaUpload, {\n        onSelect: function onSelect(media) {\n          setAttributes({\n            backgroundImage: media.url,\n            isLastItem: \"yes\"\n          });\n        },\n        type: \"image\",\n        value: backgroundImage,\n        render: function render(_ref) {\n          var open = _ref.open;\n          return getImage(open);\n        }\n      }))), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"timeline\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"timeline__wrapper\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"timeline__line\"\n      })), 0 < timelineitemsDetails.length && timelineitemsDetails.map(function (timelinelistValues, index) {\n        return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(\"div\", {\n          className: \"timeline__remove-timelineitem\" + (timelinelistValues.index % 2 === 0 ? \" even\" : \" odd\")\n        }, \" \", 1 < timelineitemsDetails.length ? /*#__PURE__*/React.createElement(Tooltip, {\n          text: \"Remove main item\"\n        }, /*#__PURE__*/React.createElement(\"span\", {\n          className: \"remove dashicons dashicons-dismiss\",\n          onClick: function onClick() {\n            var timelineitemsDetailsArr = timelineitemsDetails;\n\n            var newObject = _toConsumableArray(timelineitemsDetails);\n\n            var timelineitemsDetailsNewArr = newObject.filter(function (item) {\n              return item.index !== timelinelistValues.index;\n            }).map(function (t) {\n              if (t.index > timelinelistValues.index) {\n                t.index -= 1;\n              }\n\n              return t;\n            });\n            timelineitemsDetailsArr = timelineitemsDetailsNewArr;\n            setAttributes({\n              timelineitemsDetails: timelineitemsDetailsArr\n            });\n          }\n        })) : \"\"), /*#__PURE__*/React.createElement(\"div\", {\n          className: \"timeline__item\" + (timelinelistValues.index % 2 === 0 ? \"--even\" : \"--odd\") + (isLastItem === \"yes\" && timelinelistValues.index == timelineitemsDetails.length - 1 ? \" timeline_lastitem\" : \"\"),\n          style: {\n            backgroundImage: isLastItem === \"yes\" && timelinelistValues.index == timelineitemsDetails.length - 1 ? \"url(\".concat(backgroundImage, \")\") : \"none\"\n          }\n        }, 0 < timelinelistValues.extracontentList.length && timelinelistValues.extracontentList.map(function (subregionValue, subregionindex) {\n          return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(\"span\", {\n            className: \"feature-remove\" + (timelinelistValues.index % 2 === 0 ? \" even\" : \" odd\"),\n            onClick: function onClick() {\n              var timelineitemsDetailsArr = _toConsumableArray(timelineitemsDetails);\n\n              var newObject = _toConsumableArray(timelinelistValues.extracontentList);\n\n              var timelineitemsDetailsNewArr = newObject.filter(function (item) {\n                return item.index !== subregionValue.index;\n              }).map(function (t) {\n                if (t.index > subregionValue.index) {\n                  t.index -= 1;\n                }\n\n                return t;\n              });\n              timelineitemsDetailsArr[index][\"extracontentList\"] = timelineitemsDetailsNewArr;\n              setAttributes({\n                timelineitemsDetails: timelineitemsDetailsArr\n              });\n            }\n          }, /*#__PURE__*/React.createElement(Tooltip, {\n            text: \"Remove inner item\"\n          }, /*#__PURE__*/React.createElement(\"span\", {\n            className: \"dashicons dashicons-dismiss\"\n          }))), /*#__PURE__*/React.createElement(\"div\", {\n            className: \"timeline__box-inner\"\n          }, /*#__PURE__*/React.createElement(RichText, {\n            tagName: \"h3\",\n            placeholder: \"Title\",\n            keepPlaceholderOnFocus: \"true\",\n            className: \"subregion-title\",\n            value: subregionValue.timelinetitle,\n            onChange: function onChange(timelinetitle) {\n              var newObject = Object.assign({}, subregionValue, {\n                timelinetitle: timelinetitle\n              });\n\n              var timelineitemsDetailsArr = _toConsumableArray(timelineitemsDetails);\n\n              timelineitemsDetailsArr[index][\"extracontentList\"][subregionindex] = newObject;\n              setAttributes({\n                timelineitemsDetails: timelineitemsDetailsArr\n              });\n            }\n          }), /*#__PURE__*/React.createElement(RichText, {\n            tagName: \"p\",\n            placeholder: \"Description\",\n            keepPlaceholderOnFocus: \"true\",\n            className: \"subregion-desc\",\n            value: subregionValue.timelinedesc,\n            onChange: function onChange(timelinedesc) {\n              var newObject = Object.assign({}, subregionValue, {\n                timelinedesc: timelinedesc\n              });\n\n              var timelineitemsDetailsArr = _toConsumableArray(timelineitemsDetails);\n\n              timelineitemsDetailsArr[index][\"extracontentList\"][subregionindex] = newObject;\n              setAttributes({\n                timelineitemsDetails: timelineitemsDetailsArr\n              });\n            }\n          })));\n        }), /*#__PURE__*/React.createElement(\"div\", {\n          className: \"timeline__inneritem--add\"\n        }, /*#__PURE__*/React.createElement(\"span\", {\n          className: \"components-button add\",\n          onClick: function onClick() {\n            var timelineitemsDetailsArr = timelineitemsDetails;\n            var newObject = [].concat(_toConsumableArray(timelinelistValues.extracontentList), [{\n              index: timelinelistValues.extracontentList.length,\n              timelinetitle: \"\",\n              timelinedesc: \"\"\n            }]);\n            timelineitemsDetailsArr[index][\"extracontentList\"] = newObject;\n            setAttributes(_objectSpread(_objectSpread({}, timelinelistValues.extracontentList), {}, {\n              timelineitemsDetails: timelineitemsDetailsArr\n            }));\n          }\n        }, /*#__PURE__*/React.createElement(\"span\", {\n          className: \"add-btn-text\"\n        }, \" Add New Items \"), /*#__PURE__*/React.createElement(\"span\", {\n          className: \"dashicons dashicons-plus-alt\"\n        }, \" \")))));\n      }), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"timeline__item--add\"\n      }, /*#__PURE__*/React.createElement(\"button\", {\n        className: \"components-button add\",\n        onClick: function onClick() {\n          var timelineitemsDetailsArr = timelineitemsDetails;\n          var newObject = [].concat(_toConsumableArray(timelineitemsDetails), [{\n            index: timelineitemsDetails.length,\n            extracontentList: [{\n              index: 0,\n              timelinetitle: \"\",\n              timelinedesc: \"\"\n            }]\n          }]);\n          timelineitemsDetailsArr = newObject;\n          setAttributes({\n            timelineitemsDetails: timelineitemsDetailsArr\n          });\n        }\n      }, \"Add content item\", \" \"))));\n    }\n  }]);\n\n  return edit;\n}(Component);\n\nregisterBlockType(\"abl/timeline-block\", {\n  title: \"timeline block\",\n  icon: \"editor-ul\",\n  category: \"common\",\n  attributes: {\n    timelineitemsDetails: {\n      type: \"array\",\n      \"default\": [{\n        index: 0,\n        extracontentList: [{\n          index: 0,\n          timelinetitle: \"\",\n          timelinedesc: \"\"\n        }]\n      }]\n    },\n    backgroundImage: {\n      type: \"string\",\n      \"default\": null\n    },\n    isLastItem: {\n      type: \"string\",\n      \"default\": \"no\"\n    }\n  },\n  edit: edit,\n  save: function save(_ref2) {\n    var attributes = _ref2.attributes;\n    var timelineitemsDetails = attributes.timelineitemsDetails,\n        backgroundImage = attributes.backgroundImage,\n        isLastItem = attributes.isLastItem;\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"timeline\"\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"timeline-wrapper\"\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"timeline-line\"\n    })), 0 < timelineitemsDetails.length && timelineitemsDetails.map(function (timelinelistValues, index) {\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: \"timeline__item\" + (isLastItem === \"yes\" && timelinelistValues.index == timelineitemsDetails.length - 1 ? \" timeline_lastitem\" : \"\"),\n        style: {\n          backgroundImage: isLastItem === \"yes\" && timelinelistValues.index == timelineitemsDetails.length - 1 ? \"url(\".concat(backgroundImage, \")\") : \"none\"\n        }\n      }, 0 < timelinelistValues.extracontentList.length && timelinelistValues.extracontentList.map(function (subregionValue, subregionindex) {\n        return /*#__PURE__*/React.createElement(\"div\", {\n          className: \"timeline__box-inner\"\n        }, /*#__PURE__*/React.createElement(RichText.Content, {\n          tagName: \"h3\",\n          className: \"subregion-title\",\n          value: subregionValue.timelinetitle\n        }), /*#__PURE__*/React.createElement(RichText.Content, {\n          tagName: \"p\",\n          className: \"subregion-desc\",\n          value: subregionValue.timelinedesc\n        }));\n      }));\n    }));\n  }\n});\n\n//# sourceURL=webpack://gutenberg-block-static-jsx-example/./block.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./block.js"]();
/******/ 	
/******/ })()
;