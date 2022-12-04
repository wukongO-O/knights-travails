"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkknights_travails"] = self["webpackChunkknights_travails"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/comic_zine_ot-webfont.woff2 */ \"./src/font/comic_zine_ot-webfont.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font/comic_zine_ot-webfont.woff */ \"./src/font/comic_zine_ot-webfont.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'comic_zine_otregular';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff2'),\\n         url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n\\nhtml, body {\\n    box-sizing: border-box;\\n    height: 100%;\\n    padding: 0;\\n    margin: 0;\\n}\\n\\nbody {\\n    background-color: rgb(243, 195, 36);\\n}\\n\\n.container {\\n    min-height: 100%;\\n    display: grid;\\n    grid-template-rows: auto 1fr auto;\\n}\\n\\n.gameArea {\\n    display: flex;\\n    place-content: center;\\n    gap: 40px;\\n}\\n\\ntable {\\n    table-layout: fixed;\\n}\\n.cell {\\n    border: 1px solid black;\\n    height: 65px;\\n    width: 65px;\\n    font-family: monospace;\\n    font-weight: 800;\\n    font-size: 18pt;\\n    text-align: center;\\n}\\n.cell:hover {\\n    background-color: #fd80db !important;\\n}\\n.blackCell {\\n    background-color: black;\\n}\\n.whiteCell {\\n    background-color: white;\\n}\\n\\ntd img {\\n    height: 55px;\\n    width: 55px;\\n    position: relative;\\n    left: 4px;\\n}\\n\\nh1 {\\n    font-family: 'comic_zine_otregular', monospace;\\n    text-align: center;\\n    font-size: 60pt;\\n}\\n\\nbutton {\\n    color: white;\\n    background-color: black;\\n    width: 240px;\\n    place-self: center;\\n    font-family: monospace;\\n    border-radius: 20px;\\n    font-size: 18pt;\\n    border: none;\\n    padding: 8px;\\n}\\nbutton:hover {\\n    color: #fd80db;\\n}\\nbutton:active {\\n    box-shadow: 6px 8px 8px #fd80db;\\n    transform: translateY(4px);\\n}\\n\\n.btnDiv {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 20px;\\n    justify-content: flex-start;\\n    padding-top: 100px;\\n}\\np {\\n    font-size: 18pt;\\n    font-family: monospace;\\n    width: 300px;\\n    text-align: center;\\n}\\n\\nfooter {\\n    text-align: center;\\n    background-color: black;\\n    color: white;\\n    font-family: 'comic_zine_otregular';\\n    font-size: 20pt;\\n    padding: 10px;\\n}\\nfooter svg {\\n    stroke: white;\\n    position: relative;\\n    top: 3px;\\n}\\nfooter svg:hover {\\n    fill: #fd80db;\\n    stroke: #fd80db;\\n    transform: rotate(30deg);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://knights-travails/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://knights-travails/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://knights-travails/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://knights-travails/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://knights-travails/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://knights-travails/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://knights-travails/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://knights-travails/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://knights-travails/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://knights-travails/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://knights-travails/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/chessBoard.js":
/*!***************************!*\
  !*** ./src/chessBoard.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_horse_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/horse.svg */ \"./src/img/horse.svg\");\n/* harmony import */ var _knightMoves__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knightMoves */ \"./src/knightMoves.js\");\n\n\n\nconst gameArea = document.querySelector('.gameArea');\n// gameArea.classList.add('gameArea');\n// document.body.appendChild(gameArea);\n//create an 8 x 8, black-n-white chess board via table element\nconst gameBoard = document.createElement('table');\nfor (let i = 0; i < 8; i++) {\n    let row = document.createElement('tr');\n    for (let j = 0; j < 8; j++) {\n        const cell = document.createElement('td');\n        row.appendChild(cell);\n        if ((i + j) % 2 == 0) {\n            cell.setAttribute('class', 'cell whiteCell');\n        } else {\n            cell.setAttribute('class', 'cell blackCell');\n        }\n    };\n    gameBoard.appendChild(row);\n};\ngameArea.appendChild(gameBoard);\ngameBoard.setAttribute('width', '650px');\ngameBoard.setAttribute('height', '650px');\ngameBoard.setAttribute('cellspacing', '0');\n\n//place knight & destination on chess board\nconst cells = document.querySelectorAll('.cell');\nlet cellClicks = 0;\nlet knightXY;\nlet destinationXY = [0, 0];\ncells.forEach(cell => {\n    cell.addEventListener('click', (e) => {\n        cellClicks +=1;\n        if (cellClicks == 1) {\n            placeKnight(e.target);\n            knightXY = getCellXY(e);\n        } else if (cellClicks == 2) {\n            destination(e.target);\n            destinationXY = getCellXY(e);\n        } else {\n            e.preventDefault();\n        };\n        return {\n            knightXY,\n            destinationXY\n        };\n    });\n});\nconst getCellXY = (e) => {\n    return console.log([e.target.closest('tr').rowIndex, e.target.cellIndex]);\n};\n//click a cell to place a knight\nconst knightIcon = new Image();\nknightIcon.src = _img_horse_svg__WEBPACK_IMPORTED_MODULE_0__;\nknightIcon.setAttribute('id', 'horse');\nconst placeKnight = (cell) => {\n    cell.appendChild(knightIcon);\n};\n//click a cell to create a destination\nconst destination = (cell) => {\n    cell.style.backgroundColor = '#f3c324';\n    cell.textContent = 'End';\n};\n//radomly create a knight & destination\nconst randomKnightTravails = () => {\n    const startX = randomNum(0, 8);\n    const startY = randomNum(0, 8);\n    const dstX = randomNum(0, 8);\n    const dstY = randomNum(0, 8);\n    const start = document.querySelector('table').rows[startX].cells[startY];\n    const destination = document.querySelector('table').rows[dstX].cells[dstY];\n\n    start.appendChild(knightIcon);\n    destination.style.backgroundColor = '#f3c324';\n    destination.textContent = 'End';\n\n    knightXY = [startX, startY];\n    destinationXY = [dstX, dstY];\n};\nconst randomNum = (min, max) => {\n    return Math.floor(Math.random() * (max - min) + min);\n};\n\n//1 move horse-temp horse stops 2 show path (a-show step #) 3 horse ends at dst - removeChild from a & append to b\nconst travail1 = (a, b) => {\n    const stops = (0,_knightMoves__WEBPACK_IMPORTED_MODULE_1__.knightMoves)(a, b).path;\n    showPath(stops);\n};\n\nconst showPath = (stops) => {\n    for (let i = 0; i < stops.length; i++) {\n        setTimeout(function(){\n            let step = stops[i].split(',').map(Number);\n            let stopCell = document.querySelector('table').rows[step[0]].cells[step[1]];\n            stopCell.textContent = i;\n            stopCell.style.color = '#fd80db';\n            stopCell.appendChild(knightIcon);\n        }, 500 * i);\n    }\n};\n\n//removeChild of knight etc; clear the board\nconst restart = () => {\n    const cells = document.querySelectorAll('.cell');\n    cells.forEach(cell => {\n        cell.textContent ='';\n    })\n\n    const horse = document.getElementById('horse');\n    if (horse) horse.remove();\n\n    const whiteCells = document.querySelectorAll('.whiteCell');\n    whiteCells.forEach (cell => {\n        cell.style.backgroundColor = '#ffffff';\n    });\n    \n    const blackCell = document.querySelectorAll('.blackCell');\n    blackCell.forEach(cell => {\n        cell.style.backgroundColor = '#000000';\n    });\n\n    cellClicks = 0;\n};\n\n//buttons\nconst buttonsDiv = document.createElement('div');\nbuttonsDiv.classList.add('btnDiv');\ngameArea.appendChild(buttonsDiv);\n\nconst textIntro = document.createElement('p');\ntextIntro.textContent = 'Pick the start &  end on the board or click the random-tour button below!';\nbuttonsDiv.appendChild(textIntro);\n\nconst randomBtn = document.createElement('button');\nrandomBtn.textContent = 'Random Tour';\nbuttonsDiv.appendChild(randomBtn);\nrandomBtn.addEventListener('click', randomKnightTravails);\n\nconst travailBtn = document.createElement('button');\ntravailBtn.textContent = 'Go!';\nbuttonsDiv.appendChild(travailBtn);\ntravailBtn.addEventListener('click', () => {\n    const startCell = document.getElementById('horse').parentNode;\n    knightXY = [startCell.parentNode.rowIndex, startCell.cellIndex];\n    const dstCell = document.querySelector('td[style*=\"rgb(243, 195, 36)\"]');\n    destinationXY = [dstCell.parentNode.rowIndex, dstCell.cellIndex];\n    \n    travail1(knightXY, destinationXY);\n});\n\nconst restartBtn = document.createElement('button');\nrestartBtn.textContent = 'Restart';\nbuttonsDiv.appendChild(restartBtn);\nrestartBtn.addEventListener('click',restart);\n\n\n\n//# sourceURL=webpack://knights-travails/./src/chessBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _knightMoves__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knightMoves */ \"./src/knightMoves.js\");\n/* harmony import */ var _chessBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chessBoard */ \"./src/chessBoard.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://knights-travails/./src/index.js?");

/***/ }),

/***/ "./src/knightMoves.js":
/*!****************************!*\
  !*** ./src/knightMoves.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"knightMoves\": () => (/* binding */ knightMoves)\n/* harmony export */ });\nconst knightMoves = (a, b) => {\n    const chessBoardGrid = buildGrid(8, 8);\n    const movesAdjList = buildMovesGraph(chessBoardGrid);\n\n    return shortestPath(movesAdjList, String(a), String(b));\n};\n//Build a grid w each node's value as a  chessboard cell's x-y coordinates\nconst buildGrid = (row, col) => {\n    let grid = [];\n    for (let r = 0; r < row; r++) {\n        grid.push([]);\n        for (let c = 0; c < col; c++) {\n            const [a, b] = [r, c];\n            grid[r].push([a, b]);\n        }\n    }\n    return grid;\n};\n//convert a grid into an adjacency list, including neighbors of each node/cell\nconst buildMovesGraph = (grid) => {\n    let graphAdjList = {};\n\n    for (let r = 0; r < grid.length; r++) {\n        for (let c = 0; c < grid[0].length; c++) {\n            let node = grid[r][c];\n            if (! (node in graphAdjList)) graphAdjList[String(node)] = [];\n            //push node's neighbors up to 8 into the array\n            const neighborXYs = [\n                [r + 1, c + 2],\n                [r + 2, c + 1],\n                [r - 1, c + 2],\n                [r - 2, c + 1],\n                [r + 1, c - 2],\n                [r + 2, c - 1],\n                [r - 1, c - 2],\n                [r - 2, c - 1]\n            ];\n            neighborXYs.forEach(neighborXY => {\n                const [row, col] = neighborXY;\n                //check if a neighbor's coordinates are within bounds\n                const rowInbounds = 0 <= row && row < grid.length;\n                const columnInbounds = 0 <= col && col < grid[0].length;\n                if (! rowInbounds || ! columnInbounds) return false;\n\n                graphAdjList[String(node)].push(String(grid[row][col]));\n            });\n        };\n    };\n\n    return graphAdjList;\n};\n//bfs to find min moves from point a to b & track the path\nconst shortestPath = (graph, a, b) => {\n    const visitedNodes = new Set();\n    let queue = [[a, 0, []]];\n\n    while (queue.length > 0) {\n        let [currentNode, moves, [...path]] = queue.shift();\n        path.push(currentNode);\n        \n        if (String(currentNode) === String(b)) return {moves, path};\n\n        if (! visitedNodes.has(currentNode)) {\n            const neighbors = graph[currentNode].map(neighbor => [neighbor, moves + 1, path]);\n            queue.push(...neighbors);\n            // queue.push(...graph[currentNode].map(neighbor => [neighbor, moves+1, path])); //condense above 2 lines to 1\n            visitedNodes.add(currentNode);\n        }\n    }\n};\n// console.log(knightMoves([0, 0], [3, 3])); //{ moves: 2, path: [ '0,0', '1,2', '3,3' ] }\n// console.log(knightMoves([3, 3], [4, 3])); //{ moves: 3, path: [ '3,3', '4,5', '6,4', '4,3' ] }\n\n\n\n//# sourceURL=webpack://knights-travails/./src/knightMoves.js?");

/***/ }),

/***/ "./src/font/comic_zine_ot-webfont.woff":
/*!*********************************************!*\
  !*** ./src/font/comic_zine_ot-webfont.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d3a827edd5de10f1078c.woff\";\n\n//# sourceURL=webpack://knights-travails/./src/font/comic_zine_ot-webfont.woff?");

/***/ }),

/***/ "./src/font/comic_zine_ot-webfont.woff2":
/*!**********************************************!*\
  !*** ./src/font/comic_zine_ot-webfont.woff2 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"81bb71356518e1ae37ca.woff2\";\n\n//# sourceURL=webpack://knights-travails/./src/font/comic_zine_ot-webfont.woff2?");

/***/ }),

/***/ "./src/img/horse.svg":
/*!***************************!*\
  !*** ./src/img/horse.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"13bc0aba33606fd4cd4c.svg\";\n\n//# sourceURL=webpack://knights-travails/./src/img/horse.svg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);