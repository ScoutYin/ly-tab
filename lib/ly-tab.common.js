/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.ly-tab-bar-wrap {\n\tdisplay: flex;\n\tflex-wrap: nowrap;\n\talign-items: stretch;\n\tmin-height: 50px;\n\tbackground: #fff;\n}\n.ly-tab-bar .ly-tab-item {\n\tfont-size: 12px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.ly-tab-item {\n\tflex: 1 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.ly-tabs {\n\tposition: relative;\n\tbackground: #fff;\n\twidth: 100%;\n\toverflow: hidden;\n\tdisplay: flex;\n\tborder-bottom: 1px solid #eee;\n}\n.ly-tabs__tab-list {\n\tposition: relative;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\tflex-shrink: 0;\n\tpadding: 14px 10px;\n\tmin-width: 100%;\n}\n.ly-tabs__active-bar {\n\tposition: absolute;\n\tbottom: 3px;\n\tleft: 0;\n\twidth: 30px;\n\theight: 3px;\n\tborder-radius: 4px;\n}\n.ly-tabs .ly-tab-item {\n\tflex-grow: 1;\n\tfont-size: 14px;\n\ttext-align: center;\n\tpadding: 0 5px;\n}\n.ly-tabs .ly-tab-item:not(:first-child) {\n\tmargin-left: 15px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 81:
/***/ (function(module) {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 923:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(696);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("7aa7ba07", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 343:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(918);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("52d1e537", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 613:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(374);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("42e6a91d", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 346:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ addStylesClient; }
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LyTabBar": function() { return /* reexport */ tab_bar; },
  "LyTabItem": function() { return /* reexport */ tab_item; },
  "LyTabs": function() { return /* reexport */ tabs; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/tab-bar.vue?vue&type=template&id=4a1cd892&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "ly-tab-bar" }, [
    _c("div", { staticClass: "ly-tab-bar-wrap" }, [_vm._t("default")], 2),
  ])
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/tab-bar.vue?vue&type=template&id=4a1cd892&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/tab-bar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var tab_barvue_type_script_lang_js_ = ({
  name: 'LyTabBar',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    activeColor: {
      type: String,
      default: '#1677ff'
    }
  },
  data: function data() {
    return {
      activeValue: this.value
    };
  },
  watch: {
    value: function value(_value) {
      this.activeValue = _value;
    }
  },
  methods: {
    setActiveValue: function setActiveValue(value) {
      this.activeValue = value;
      this.$emit('change', value);
    }
  }
});
;// CONCATENATED MODULE: ./src/tab-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tab_barvue_type_script_lang_js_ = (tab_barvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/tab-bar.vue?vue&type=style&index=0&lang=css&
var tab_barvue_type_style_index_0_lang_css_ = __webpack_require__(923);
;// CONCATENATED MODULE: ./src/tab-bar.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/tab-bar.vue



;


/* normalize component */

var component = normalizeComponent(
  src_tab_barvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/tab-bar.vue"
/* harmony default export */ var tab_bar = (component.exports);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/tab-item.vue?vue&type=template&id=aa3624b8&
var tab_itemvue_type_template_id_aa3624b8_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "ly-tab-item",
      style: _vm.$parent.value === _vm.name ? _vm.activeStyle : {},
      on: { click: _vm.onItemClicked },
    },
    [
      _vm._t("icon"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "ly-tab-item-label" },
        [
          _vm._t("default", function () {
            return [_vm._v(_vm._s(_vm.title))]
          }),
        ],
        2
      ),
    ],
    2
  )
}
var tab_itemvue_type_template_id_aa3624b8_staticRenderFns = []
tab_itemvue_type_template_id_aa3624b8_render._withStripped = true


;// CONCATENATED MODULE: ./src/tab-item.vue?vue&type=template&id=aa3624b8&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/tab-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var tab_itemvue_type_script_lang_js_ = ({
  name: 'LyTabItem',
  props: {
    title: String,
    name: [String, Number]
  },
  computed: {
    activeStyle: function activeStyle() {
      return {
        color: this.$parent.activeColor
      };
    }
  },
  mounted: function mounted() {
    this.$parent.addItem && this.$parent.addItem(this);
  },
  methods: {
    onItemClicked: function onItemClicked() {
      this.$parent.setActiveValue(this.name);
    }
  }
});
;// CONCATENATED MODULE: ./src/tab-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tab_itemvue_type_script_lang_js_ = (tab_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/tab-item.vue?vue&type=style&index=0&lang=css&
var tab_itemvue_type_style_index_0_lang_css_ = __webpack_require__(343);
;// CONCATENATED MODULE: ./src/tab-item.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/tab-item.vue



;


/* normalize component */

var tab_item_component = normalizeComponent(
  src_tab_itemvue_type_script_lang_js_,
  tab_itemvue_type_template_id_aa3624b8_render,
  tab_itemvue_type_template_id_aa3624b8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tab_item_api; }
tab_item_component.options.__file = "src/tab-item.vue"
/* harmony default export */ var tab_item = (tab_item_component.exports);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/tabs.vue?vue&type=template&id=079d45d7&
var tabsvue_type_template_id_079d45d7_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "viewArea", staticClass: "ly-tabs" }, [
    _c(
      "div",
      { ref: "list", staticClass: "ly-tabs__tab-list", style: _vm.style },
      [
        _vm._t("default"),
        _vm._v(" "),
        _c("div", {
          staticClass: "ly-tabs__active-bar",
          style: _vm.activeBarStyle,
        }),
      ],
      2
    ),
  ])
}
var tabsvue_type_template_id_079d45d7_staticRenderFns = []
tabsvue_type_template_id_079d45d7_render._withStripped = true


;// CONCATENATED MODULE: ./src/tabs.vue?vue&type=template&id=079d45d7&

;// CONCATENATED MODULE: ./src/utils/requestAnimationFrame.js
function windowInit() {
  var lastTime = 0;
  var vendors = ['webkit', 'moz'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || // name has changed in Webkit
    window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
      var interval = currTime - lastTime;
      var id = window.setTimeout(function () {
        callback(interval);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
}
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/tabs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var tabsvue_type_script_lang_js_ = ({
  name: 'LyTabs',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    lineWidth: {
      type: Number,
      default: 3
    },
    activeColor: {
      type: String,
      default: '#1677ff'
    },
    // 近似等于超出边界时最大可拖动距离(px);
    additionalX: {
      type: Number,
      default: 50
    },
    // 惯性回弹指数(值越大，幅度越大，惯性回弹距离越长);
    reBoundExponent: {
      type: Number,
      default: 10,
      validator: function validator(v) {
        return v > 0;
      }
    },
    // 灵敏度(惯性滑动时的灵敏度，值越小，阻力越大)，可近似认为速度减为零所需的时间(ms);
    sensitivity: {
      type: Number,
      default: 1000,
      validator: function validator(v) {
        return v > 0;
      }
    },
    // 回弹过程duration
    reBoundingDuration: {
      type: Number,
      default: 360
    }
  },
  data: function data() {
    return {
      activeValue: this.value,
      activeBarX: 0,
      activeBarWidth: 0,
      viewAreaWidth: 0,
      // 可视区宽度;
      offsetX: 0,
      // 可视区与可滑动元素宽度差值;
      speed: 0,
      // 滑动速度(正常滑动时一般不会超过10);
      touching: false,
      // 是否处于touch状态;
      reBounding: false,
      // 是否处于回弹过程;
      translateX: 0,
      startX: 0,
      lastX: 0,
      currentX: 0,
      startMoveTime: 0,
      endMoveTime: 0,
      frameTime: 16.7,
      // 每个动画帧的ms数
      frameStartTime: 0,
      frameEndTime: 0,
      inertiaFrame: 0,
      zeroSpeed: 0.001,
      // 当speed绝对值小于该值时认为速度为0 (可用于控制惯性滚动结束期的顺滑度)
      acceleration: 0 // 惯性滑动加速度;

    };
  },
  computed: {
    style: function style() {
      var duration = this.reBounding && !this.touching ? this.reBoundingDuration : 0;
      return {
        transitionTimingFunction: this.reBounding ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'cubic-bezier(0.1, 0.57, 0.1, 1)',
        transitionDuration: "".concat(duration, "ms"),
        transform: "translate3d(".concat(this.translateX, "px, 0px, 0px)")
      };
    },
    activeBarStyle: function activeBarStyle() {
      return {
        transition: "all 300ms",
        width: "".concat(this.activeBarWidth, "px"),
        height: "".concat(this.lineWidth, "px"),
        transform: "translate3d(".concat(this.activeBarX, "px, 0, 0)"),
        backgroundColor: this.activeColor
      };
    },
    // 是否向左惯性滚动;
    isMoveLeft: function isMoveLeft() {
      return this.currentX <= this.startX;
    }
  },
  watch: {
    value: function value(v) {
      this.activeValue = v;
      this.refreshState();
    }
  },
  mounted: function mounted() {
    windowInit();
    this.bindEvent();
    this.refreshState();
  },
  destroyed: function destroyed() {
    this.removeEvent();
  },
  methods: {
    refreshState: function refreshState() {
      var _this = this;

      if (this.refreshTask) return; // 避免在单次事件循环中重复执行多次计算逻辑，造成不必要的性能浪费

      this.refreshTask = new Promise(function (resolve) {
        _this.$nextTick(function () {
          // 重新计算可视区宽度、
          _this.viewAreaWidth = _this.$refs.viewArea.offsetWidth;
          _this.offsetX = _this.$refs.list.offsetWidth - _this.viewAreaWidth;

          _this.checkPosition();

          _this.calcBarPosX();

          resolve();
          _this.refreshTask = null;
        });
      });
    },

    /**
     * touchstart
     * @param {*} event
     */
    handleTouchStart: function handleTouchStart(event) {
      event.stopPropagation();
      cancelAnimationFrame(this.inertiaFrame);
      this.lastX = event.touches[0].clientX;
    },

    /**
     * touchmove
     * @param {*} event
     */
    handleTouchMove: function handleTouchMove(event) {
      if (this.offsetX <= 0) return;
      event.preventDefault();
      event.stopPropagation();
      this.touching = true;
      this.startMoveTime = this.endMoveTime;
      this.startX = this.lastX;
      this.currentX = event.touches[0].clientX;
      this.moveFollowTouch();
      this.endMoveTime = event.timeStamp; // 每次触发touchmove事件的时间戳;
    },

    /**
     * touchend
     * @param {*} event
     */
    handleTouchEnd: function handleTouchEnd(event) {
      this.touching = false;

      if (this.reboundIfNeeded()) {
        cancelAnimationFrame(this.inertiaFrame);
      } else {
        var silenceTime = event.timeStamp - this.endMoveTime;
        var timeStamp = this.endMoveTime - this.startMoveTime;
        timeStamp = timeStamp > 0 ? timeStamp : 8; // 停顿时间超过100ms不产生惯性滑动;

        if (silenceTime > 100) return;
        this.speed = (this.lastX - this.startX) / timeStamp;
        this.acceleration = this.speed / this.sensitivity;
        this.frameStartTime = Date.now();
        this.inertiaFrame = requestAnimationFrame(this.moveByInertia);
      }
    },

    /**
     * 如果需要回弹则进行回弹操作，并返回true;
     */
    reboundIfNeeded: function reboundIfNeeded() {
      this.reBounding = false;

      if (this.translateX > 0) {
        this.reBounding = true;
        this.translateX = 0;
      } else if (this.translateX < -this.offsetX) {
        this.reBounding = true;
        this.translateX = -this.offsetX;
      }

      return this.reBounding;
    },
    bindEvent: function bindEvent() {
      this.$el.addEventListener('touchstart', this.handleTouchStart, false);
      this.$el.addEventListener('touchmove', this.handleTouchMove, false);
      this.$el.addEventListener('touchend', this.handleTouchEnd, false);
    },
    removeEvent: function removeEvent() {
      this.$el.removeEventListener('touchstart', this.handleTouchStart);
      this.$el.removeEventListener('touchmove', this.handleTouchMove);
      this.$el.removeEventListener('touchend', this.handleTouchEnd);
    },

    /**
     * touch拖动
     */
    moveFollowTouch: function moveFollowTouch() {
      // 向左拖动
      if (this.isMoveLeft) {
        if (this.translateX <= 0 && this.translateX + this.offsetX > 0 || this.translateX > 0) {
          this.translateX += this.currentX - this.lastX;
        } else if (this.translateX + this.offsetX <= 0) {
          this.translateX += this.additionalX * (this.currentX - this.lastX) / (this.viewAreaWidth + Math.abs(this.translateX + this.offsetX));
        }
      } else {
        // 向右拖动
        if (this.translateX >= 0) {
          this.translateX += this.additionalX * (this.currentX - this.lastX) / (this.viewAreaWidth + this.translateX);
        } else if (this.translateX <= 0 && this.translateX + this.offsetX >= 0 || this.translateX + this.offsetX <= 0) {
          this.translateX += this.currentX - this.lastX;
        }
      }

      this.lastX = this.currentX;
    },
    // 惯性滑动
    moveByInertia: function moveByInertia() {
      this.frameEndTime = Date.now();
      this.frameTime = this.frameEndTime - this.frameStartTime; // 向左惯性滑动;

      if (this.isMoveLeft) {
        // 超出边界的阶段;
        if (this.translateX <= -this.offsetX) {
          // 加速度指数变化;
          this.acceleration *= (this.reBoundExponent + Math.abs(this.translateX + this.offsetX)) / this.reBoundExponent;
          this.speed = Math.min(this.speed - this.acceleration, 0); // 为避免减速过程过短，此处加速度没有乘上frameTime;
        } else {
          this.speed = Math.min(this.speed - this.acceleration * this.frameTime, 0);
        }
      } else {
        // 向右惯性滑动;
        if (this.translateX >= 0) {
          this.acceleration *= (this.reBoundExponent + this.translateX) / this.reBoundExponent;
          this.speed = Math.max(this.speed - this.acceleration, 0);
        } else {
          this.speed = Math.max(this.speed - this.acceleration * this.frameTime, 0);
        }
      }

      this.translateX += this.speed * this.frameTime / 2;

      if (Math.abs(this.speed) <= this.zeroSpeed) {
        this.reboundIfNeeded();
        return;
      }

      this.frameStartTime = this.frameEndTime;
      this.inertiaFrame = requestAnimationFrame(this.moveByInertia);
    },

    /**
     * 计算activeBar的translateX
     */
    calcBarPosX: function calcBarPosX() {
      var itemEl = this.getActiveItemEl();
      if (!itemEl) return;
      var itemWidth = itemEl.offsetWidth;
      var itemLeft = itemEl.offsetLeft;
      this.activeBarWidth = Math.max(itemWidth * 0.6, 14);
      this.activeBarX = itemLeft + (itemWidth - this.activeBarWidth) / 2;
    },

    /**
     * 点击切换item时，调整位置使当前item尽可能往中间显示
     */
    checkPosition: function checkPosition() {
      var activeItemEl = this.getActiveItemEl();
      if (!activeItemEl) return;
      var offsetLeft = activeItemEl.offsetLeft; // 让 activeItem 展示在正中间时，其距视图左右边距为 half

      var half = (this.viewAreaWidth - activeItemEl.offsetWidth) / 2; // 在当前的translateX基础上需要调整的距离

      var changeX = 0;
      var absTransX = Math.abs(this.translateX); // item偏左，需要往右移（往中间靠）

      if (offsetLeft <= absTransX + half) {
        // 这种情况下this.translateX是负数
        changeX = half - (offsetLeft + this.translateX);
      } else {
        // item偏右，需要往左移
        changeX = -(offsetLeft - absTransX - half);
      }

      var targetX = changeX + this.translateX; // 左边界

      if (targetX > 0) {
        targetX = 0;
      } // 右边界


      if (targetX < -this.offsetX) {
        targetX = -this.offsetX;
      }

      this.reBounding = true;
      this.translateX = targetX;
    },
    getActiveItemEl: function getActiveItemEl() {
      var _this2 = this;

      if (!this.$children.length) return;
      return this.$children.find(function (child) {
        return child.name === _this2.activeValue;
      }).$el;
    },
    setActiveValue: function setActiveValue(value) {
      this.activeValue = value;
      this.$emit('change', value);
    },
    addItem: function addItem() {
      this.refreshState();
    }
  }
});
;// CONCATENATED MODULE: ./src/tabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tabsvue_type_script_lang_js_ = (tabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/tabs.vue?vue&type=style&index=0&lang=css&
var tabsvue_type_style_index_0_lang_css_ = __webpack_require__(613);
;// CONCATENATED MODULE: ./src/tabs.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/tabs.vue



;


/* normalize component */

var tabs_component = normalizeComponent(
  src_tabsvue_type_script_lang_js_,
  tabsvue_type_template_id_079d45d7_render,
  tabsvue_type_template_id_079d45d7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tabs_api; }
tabs_component.options.__file = "src/tabs.vue"
/* harmony default export */ var tabs = (tabs_component.exports);
;// CONCATENATED MODULE: ./src/index.js




}();
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;