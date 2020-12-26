/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + "." + {"1":"3cf162d7","2":"cd9ec8f6","4":"0a8ca88c","5":"8f029160","6":"67826557","7":"9334b892","8":"ab59df31","9":"cb83d5bf","10":"09e19f1b","11":"cdc0ebbf","12":"f78566d5","13":"3a0837fa","14":"8d21bc3c","15":"08c02d67","16":"c10439a3","17":"508c150c","18":"f4e0643b","19":"8c435e58","20":"93c95348","21":"64ab1937","22":"04901afb","23":"2efe1770","24":"fbd0de97","25":"efeaedaa","26":"1f4df684","27":"a3aa03bf","28":"3792d944","29":"14c766c1","30":"75f8b179","31":"e1f6e061","32":"92b91dc5","33":"2ac128f9"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"1":1,"2":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({}[chunkId]||chunkId) + "." + {"1":"408a388e","2":"6e8b0e24","4":"9e9153ef","5":"4786f7b3","6":"bc81b4f7","7":"b2f2b841","8":"56e365aa","9":"5f2217ed","10":"c046444c","11":"9a0d554f","12":"f17804a7","13":"b6728a6d","14":"4b00f494","15":"ed14f818","16":"05fcdc20","17":"dd68b25a","18":"f8e73267","19":"c6829d0a","20":"cf973d1f","21":"774a1d1a","22":"a179b9ea","23":"20951c25","24":"1f4c5873","25":"4623be72","26":"09ab49db","27":"f829b775","28":"c34c455a","29":"afbf5c23","30":"6f880f40","31":"31d6cfe0","32":"31d6cfe0","33":"31d6cfe0"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2f39");


/***/ }),

/***/ "2f39":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./src/store/auth/getters.js
var getters_namespaceObject = {};
__webpack_require__.r(getters_namespaceObject);
__webpack_require__.d(getters_namespaceObject, "getName", function() { return getName; });
__webpack_require__.d(getters_namespaceObject, "getXSRFToken", function() { return getXSRFToken; });
__webpack_require__.d(getters_namespaceObject, "isAuthenticated", function() { return isAuthenticated; });

// NAMESPACE OBJECT: ./src/store/auth/mutations.js
var mutations_namespaceObject = {};
__webpack_require__.r(mutations_namespaceObject);
__webpack_require__.d(mutations_namespaceObject, "SET_BOOL_AUTH", function() { return SET_BOOL_AUTH; });
__webpack_require__.d(mutations_namespaceObject, "SET_NAME_AUTH", function() { return SET_NAME_AUTH; });
__webpack_require__.d(mutations_namespaceObject, "SET_XSRF_AUTH", function() { return SET_XSRF_AUTH; });
__webpack_require__.d(mutations_namespaceObject, "RESET_AUTH", function() { return RESET_AUTH; });

// NAMESPACE OBJECT: ./src/store/auth/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "setXSRFToken", function() { return setXSRFToken; });
__webpack_require__.d(actions_namespaceObject, "resetAuth", function() { return resetAuth; });
__webpack_require__.d(actions_namespaceObject, "signin", function() { return signin; });
__webpack_require__.d(actions_namespaceObject, "signout", function() { return signout; });
__webpack_require__.d(actions_namespaceObject, "setName", function() { return setName; });
__webpack_require__.d(actions_namespaceObject, "changePW", function() { return changePW; });
__webpack_require__.d(actions_namespaceObject, "createUser", function() { return createUser; });
__webpack_require__.d(actions_namespaceObject, "getCustomerStats", function() { return getCustomerStats; });

// NAMESPACE OBJECT: ./src/store/addProduct/getters.js
var addProduct_getters_namespaceObject = {};
__webpack_require__.r(addProduct_getters_namespaceObject);
__webpack_require__.d(addProduct_getters_namespaceObject, "getProduct", function() { return getProduct; });
__webpack_require__.d(addProduct_getters_namespaceObject, "isOngoing", function() { return isOngoing; });

// NAMESPACE OBJECT: ./src/store/addProduct/mutations.js
var addProduct_mutations_namespaceObject = {};
__webpack_require__.r(addProduct_mutations_namespaceObject);
__webpack_require__.d(addProduct_mutations_namespaceObject, "SET_PRODUCT_INFO", function() { return SET_PRODUCT_INFO; });
__webpack_require__.d(addProduct_mutations_namespaceObject, "SET_PRODUCT_IMAGES", function() { return SET_PRODUCT_IMAGES; });
__webpack_require__.d(addProduct_mutations_namespaceObject, "SET_PRODUCT_OPTIONS", function() { return SET_PRODUCT_OPTIONS; });
__webpack_require__.d(addProduct_mutations_namespaceObject, "SET_ONGOING", function() { return SET_ONGOING; });
__webpack_require__.d(addProduct_mutations_namespaceObject, "RESET_PRODUCT", function() { return RESET_PRODUCT; });

// NAMESPACE OBJECT: ./src/store/addProduct/actions.js
var addProduct_actions_namespaceObject = {};
__webpack_require__.r(addProduct_actions_namespaceObject);
__webpack_require__.d(addProduct_actions_namespaceObject, "setProductInfo", function() { return setProductInfo; });
__webpack_require__.d(addProduct_actions_namespaceObject, "setProductImages", function() { return setProductImages; });
__webpack_require__.d(addProduct_actions_namespaceObject, "setProductOptions", function() { return setProductOptions; });
__webpack_require__.d(addProduct_actions_namespaceObject, "clearState", function() { return clearState; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("c973");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@quasar/extras/material-icons/material-icons.css
var material_icons = __webpack_require__("e54f");

// EXTERNAL MODULE: ./node_modules/quasar/dist/quasar.sass
var quasar = __webpack_require__("985d");

// EXTERNAL MODULE: ./src/css/app.scss
var css_app = __webpack_require__("31cd");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/quasar/lang/en-us.js
var en_us = __webpack_require__("1f91");

// EXTERNAL MODULE: ./node_modules/quasar/icon-set/material-icons.js
var icon_set_material_icons = __webpack_require__("42d2");

// EXTERNAL MODULE: ./node_modules/quasar/src/vue-plugin.js + 1 modules
var vue_plugin = __webpack_require__("b05d");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Cookies.js
var Cookies = __webpack_require__("515f");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Meta.js
var Meta = __webpack_require__("9c64");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Notify.js
var Notify = __webpack_require__("2a19");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/LoadingBar.js + 1 modules
var LoadingBar = __webpack_require__("1b3f");

// CONCATENATED MODULE: ./.quasar/import-quasar.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/



;
vue_runtime_esm["a" /* default */].use(vue_plugin["a" /* default */], {
  config: {
    "loadingBar": {
      "color": "secondary",
      "size": "2px"
    }
  },
  lang: en_us["a" /* default */],
  iconSet: icon_set_material_icons["a" /* default */],
  plugins: {
    Cookies: Cookies["a" /* default */],
    Meta: Meta["a" /* default */],
    Notify: Notify["a" /* default */],
    LoadingBar: LoadingBar["a" /* default */]
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=54e66226&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"q-app"}},[_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=54e66226&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: "App"
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./src/store/auth/state.js
function getInitialState() {
  return {
    authenticated: false,
    name: "",
    xsrf: ""
  };
}
/* harmony default export */ var auth_state = (function () {
  return getInitialState();
});
// CONCATENATED MODULE: ./src/store/auth/getters.js
function getName(state) {
  return state.name;
}
function getXSRFToken(state) {
  return state.xsrf;
}
function isAuthenticated(state) {
  return state.authenticated;
}
// CONCATENATED MODULE: ./src/store/auth/mutations.js

function SET_BOOL_AUTH(state, bool) {
  state.authenticated = bool;
}
function SET_NAME_AUTH(state, name) {
  state.name = name;
}
function SET_XSRF_AUTH(state, xsrf) {
  state.xsrf = xsrf;
}
function RESET_AUTH(state) {
  Object.assign(state, getInitialState());
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// CONCATENATED MODULE: ./src/store/auth/actions.js



/*
export function setAuthenticated({ commit }, bool) {
    commit("SET_BOOL_AUTH", bool);
}

export function setName({ commit }, name) {
    commit("SET_NAME_AUTH", name);
}
*/
function setXSRFToken({
  commit
}, xsrf) {
  commit("SET_XSRF_AUTH", xsrf);
}
function resetAuth({
  commit
}) {
  commit("RESET_AUTH");
}
function signin(_x, _x2) {
  return _signin.apply(this, arguments);
}

function _signin() {
  _signin = asyncToGenerator_default()(function* ({
    commit
  }, {
    email,
    password
  }) {
    let resp;

    try {
      resp = yield this.$axios.post("/api/users/login", {
        email,
        password
      });

      if (resp && resp.data) {
        commit("SET_NAME_AUTH", resp.data.cmsuser.name);
        commit("SET_XSRF_AUTH", resp.data.xsrf);
        commit("SET_BOOL_AUTH", true);
      }

      return true;
    } catch (err) {
      throw err.response.data.error || "Invalid email or password.";
    }
  });
  return _signin.apply(this, arguments);
}

function signout(_x3) {
  return _signout.apply(this, arguments);
}

function _signout() {
  _signout = asyncToGenerator_default()(function* ({
    commit
  }) {
    let resp;

    try {
      resp = yield this.$axios.post("/api/users/logout");
      return true;
    } catch (err) {
      throw err.response.data.error || "Error has occurred.";
    } finally {
      commit("RESET_AUTH");
    }
  });
  return _signout.apply(this, arguments);
}

function setName(_x4, _x5) {
  return _setName.apply(this, arguments);
}

function _setName() {
  _setName = asyncToGenerator_default()(function* ({
    commit
  }, {
    name
  }) {
    let resp;

    try {
      resp = yield this.$axios.post("/api/users/edit", {
        name
      });
      commit("SET_NAME_AUTH", resp.data.name);
      return true;
    } catch (err) {
      throw err.response.data.error || "Error has occurred.";
    }
  });
  return _setName.apply(this, arguments);
}

function changePW(_x6, _x7) {
  return _changePW.apply(this, arguments);
}

function _changePW() {
  _changePW = asyncToGenerator_default()(function* ({
    commit
  }, {
    prevpw,
    newpw,
    reppw
  }) {
    let resp;

    try {
      resp = yield this.$axios.post("/api/users/changepw", {
        prevpw,
        newpw,
        reppw
      });
      return true;
    } catch (err) {
      throw err.response.data.error || "Error has occurred.";
    }
  });
  return _changePW.apply(this, arguments);
}

function createUser(_x8, _x9) {
  return _createUser.apply(this, arguments);
}
/** TEST */

function _createUser() {
  _createUser = asyncToGenerator_default()(function* ({
    commit
  }, {
    email,
    name,
    password
  }) {
    let resp;

    try {
      resp = yield this.$axios.post("/api/users", {
        email,
        name,
        password
      });
      return true;
    } catch (err) {
      throw err.response.data.error || "Error has occurred.";
    }
  });
  return _createUser.apply(this, arguments);
}

function getCustomerStats(_x10) {
  return _getCustomerStats.apply(this, arguments);
}

function _getCustomerStats() {
  _getCustomerStats = asyncToGenerator_default()(function* ({
    commit
  }) {
    let resp;

    try {
      resp = yield this.$axios.get("/api/customers/stats");
      return Promise.resolve(resp.data);
    } catch (err) {
      return Promise.resolve(err); //  throw err.response.data.error || "Error has occurred.";
    }
  });
  return _getCustomerStats.apply(this, arguments);
}
// CONCATENATED MODULE: ./src/store/auth/index.js




/* harmony default export */ var auth = ({
  namespaced: true,
  getters: getters_namespaceObject,
  mutations: mutations_namespaceObject,
  actions: actions_namespaceObject,
  state: auth_state
});
// CONCATENATED MODULE: ./src/store/addProduct/state.js
function state_getInitialState() {
  return {
    ongoing: false,
    product: {
      id: 0,
      name: "",
      category: null,
      basePrice: 0,
      minOrderQuantity: 0,
      description: "",
      colors: null,
      details: null,
      options: null,
      images: null
    }
  };
}
/* harmony default export */ var addProduct_state = (function () {
  return state_getInitialState();
});
// CONCATENATED MODULE: ./src/store/addProduct/getters.js
function getProduct(state) {
  return state.product;
}
function isOngoing(state) {
  return state.ongoing;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// CONCATENATED MODULE: ./src/store/addProduct/mutations.js


function SET_PRODUCT_INFO(state, info) {
  state.product = objectSpread2_default()(objectSpread2_default()({}, state.product), info);
}
function SET_PRODUCT_IMAGES(state, imgs) {
  state.product.images = imgs;
}
function SET_PRODUCT_OPTIONS(state, options) {
  state.product.options = options;
}
function SET_ONGOING(state, bool) {
  state.ongoing = bool;
}
function RESET_PRODUCT(state) {
  Object.assign(state, state_getInitialState());
}
// CONCATENATED MODULE: ./src/store/addProduct/actions.js
function setProductInfo({
  commit
}, info) {
  // console.log("ACTION setProductInfo", info);
  commit("SET_PRODUCT_INFO", info);
  commit("SET_ONGOING", true);
}
function setProductImages({
  commit
}, imglist) {
  // console.log("ACTION setProductImages", imglist);
  commit("SET_PRODUCT_IMAGES", imglist);
  commit("SET_ONGOING", true);
}
function setProductOptions({
  commit
}, options) {
  // console.log("ACTION setProductOptions", options);
  commit("SET_PRODUCT_OPTIONS", options);
  commit("SET_ONGOING", true);
}
function clearState({
  commit
}) {
  // console.log("ACTION clearState");
  commit("RESET_PRODUCT");
  commit("SET_ONGOING", false);
}
// CONCATENATED MODULE: ./src/store/addProduct/index.js




/* harmony default export */ var addProduct = ({
  namespaced: true,
  state: addProduct_state,
  getters: addProduct_getters_namespaceObject,
  mutations: addProduct_mutations_namespaceObject,
  actions: addProduct_actions_namespaceObject
});
// CONCATENATED MODULE: ./src/store/index.js





vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

/* harmony default export */ var src_store = (function (_x) {
  return store_ref.apply(this, arguments);
});

function store_ref() {
  store_ref = asyncToGenerator_default()(function* ({
    ssrContext
  }) {
    const Store = yield new vuex_esm["a" /* default */].Store({
      modules: {
        auth: auth,
        addProduct: addProduct
      },
      // enable strict mode (adds overhead!)
      // for dev mode only
      strict: false
    });
    return Store;
  });
  return store_ref.apply(this, arguments);
}
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./src/router/routes.js

const routes = [{
  path: "/",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "713b")),
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, "8b24"))
  }, {
    path: "dashboard",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, "8b24"))
  }]
}, {
  path: "/accounts",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "713b")),
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, "3ac1"))
  }, {
    path: "edit/:id",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, "7d22"))
  }]
}, {
  path: "/announcements",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "713b")),
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, "b4d9"))
  }, {
    path: "add",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, "7858"))
  }, {
    path: "edit/:id",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, "b732"))
  }]
}, {
  path: "/categories",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "713b")),
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, "2484"))
  }, {
    path: "add",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, "9b36"))
  }, {
    path: "edit/:id",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, "d02c"))
  }]
}, {
  path: "/products",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "713b")),
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "e981"))
  }, {
    path: "add/:step",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, "277a"))
  }, {
    path: "edit/:id",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, "85f6"))
  }, {
    path: "feature/:id",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, "8f31"))
  }]
}, {
  path: "/discounts",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "713b")),
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, "c802"))
  }, {
    path: "add",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, "bda4"))
  }, {
    path: "edit/:id",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, "130f"))
  }]
}, {
  path: "/comments",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "713b")),
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, "81a6"))
  }, {
    path: "reply/:id",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, "255f"))
  }]
}, {
  path: "/orders",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "713b")),
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, "8d68"))
  }, {
    path: "process/:id",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "ad4c"))
  }, {
    path: "add",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "e750"))
  }]
}, {
  path: "/holidays",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "713b")),
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, "ad07"))
  }, {
    path: "add",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(22)]).then(__webpack_require__.bind(null, "8db9"))
  }, {
    path: "edit/:id",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, "94d0"))
  }]
}, {
  path: "/users",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "713b")),
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(33)]).then(__webpack_require__.bind(null, "b816"))
  }, {
    path: "add",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, "940d"))
  }, {
    path: "edit",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(29)]).then(__webpack_require__.bind(null, "c8dd"))
  }, {
    path: "changepw",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, "c6b7"))
  }]
}, {
  path: "/login",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(31)]).then(__webpack_require__.bind(null, "4632")),
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(30)]).then(__webpack_require__.bind(null, "5b33"))
  }]
}]; // Always leave this as last one
// if (process.env.MODE !== "ssr") {

routes.push({
  path: "*",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(32)]).then(__webpack_require__.bind(null, "e51e"))
}); // }

/* harmony default export */ var router_routes = (routes);
// CONCATENATED MODULE: ./src/router/index.js




vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

/* harmony default export */ var src_router = (function ({
  store,
  ssrContext
}) {
  const Router = new vue_router_esm["a" /* default */]({
    scrollBehavior: (to, from, savedPosition) => {
      // no scroll if query has been changed
      if (from && to.path === from.path) {
        return false;
      }

      if (savedPosition) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(savedPosition);
          }, 500);
        });
      }

      if (to.hash) {
        return {
          selector: to.hash
        };
      }

      return {
        x: 0,
        y: 0
      };
    },
    routes: router_routes,
    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: "history",
    base: "/"
  });
  Router.beforeEach((to, from, next) => {
    if (to.path !== "/login" && !store.state.auth.authenticated) next("/login");else next();
  });
  return Router;
});
// CONCATENATED MODULE: ./.quasar/app.js


/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/


;



/* harmony default export */ var _quasar_app = (function (_x) {
  return app_ref.apply(this, arguments);
});

function app_ref() {
  app_ref = asyncToGenerator_default()(function* (ssrContext) {
    // create store and router instances
    const store = typeof src_store === 'function' ? yield src_store({
      Vue: vue_runtime_esm["a" /* default */],
      ssrContext
    }) : src_store;
    const router = typeof src_router === 'function' ? yield src_router({
      Vue: vue_runtime_esm["a" /* default */],
      ssrContext,
      store
    }) : src_router; // make router instance available in store

    store.$router = router; // Create the app instantiation Object.
    // Here we inject the router, store to all child components,
    // making them available everywhere as `this.$router` and `this.$store`.

    const app = {
      router,
      store,
      render: h => h(App)
    };
    vue_plugin["a" /* default */].ssrUpdate({
      app,
      ssr: ssrContext
    }); // expose the app, the router and the store.
    // note we are not mounting the app here, since bootstrapping will be
    // different depending on whether we are in a browser or on the server.

    return {
      app,
      store,
      router
    };
  });
  return app_ref.apply(this, arguments);
}
// EXTERNAL MODULE: ./node_modules/axios/index.js
var node_modules_axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(node_modules_axios);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// CONCATENATED MODULE: ./src/boot/inject.js



const mixins = [];

const inject = function (bootCb) {
  return /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()(function* (ctx) {
      const {
        app,
        router,
        store
      } = ctx;
      let boot;

      if (typeof bootCb === "function") {
        const response = bootCb(ctx);
        boot = response.then ? yield response : response;
      } else {
        boot = bootCb;
      }

      for (const name in boot) {
        const key = `$${name}`;

        if (mixins.indexOf(name) === -1) {
          mixins.push(name);
          vue_runtime_esm["a" /* default */].mixin({
            beforeCreate() {
              const options = this.$options;

              if (options[name]) {
                this[key] = options[name];
              } else if (options.parent) {
                this[key] = options.parent[key];
              }
            }

          });
        }

        app[name] = boot[name];
        store[key] = boot[name];
        router[key] = boot[name];
      }
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/* harmony default export */ var boot_inject = (inject);
// EXTERNAL MODULE: ./node_modules/axios-auth-refresh/dist/index.min.js
var index_min = __webpack_require__("ec02");
var index_min_default = /*#__PURE__*/__webpack_require__.n(index_min);

// CONCATENATED MODULE: ./src/boot/axios.js


// import Cookies from 'quasar/src/plugins/Cookies.js';;



/* harmony default export */ var boot_axios = (boot_inject( /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()(function* ({
    app,
    store,
    ssrContext,
    redirect
  }) {
    const instance = axios_default.a.create({
      baseURL: "https://admin.bake-free.co"
    });
    instance.interceptors.request.use(config => {
      if (!!ssrContext) {
        config.headers = ssrContext.req.headers; // config.skipAuthRefresh = true;
      }

      if (store.state.auth.authenticated) {
        config.headers["x-csrf-token"] = store.state.auth.xsrf;
      } else {
        delete config.headers["x-csrf-token"];
      }

      return config;
    }, error => {
      return Promise.reject(error);
    });
    instance.interceptors.response.use(response => {
      return response;
    }, error => {
      if (error.response.status === 403 || error.config.url == "https://admin.bake-free.co" + "/api/users/refresh") {
        store.dispatch("auth/resetAuth");
        redirect("/login");
      }

      return Promise.reject(error);
    });

    const refreshAuthLogic = fReq => instance.post("/api/users/refresh").then(resp => {
      // Renew Access Token & CSRF Token
      if (resp.data && resp.data.xsrf) store.dispatch("auth/setXSRFToken", resp.data.xsrf);
      return Promise.resolve();
    });

    index_min_default()(instance, refreshAuthLogic); // const refreshAuthLogicSSR = fReq =>
    //     instance.post("/api/users/refresh").then(resp => {
    //         const cookies = Cookies.parseSSR(ssrContext);
    //         // Renew Access Token & CSRF Token
    //         cookies.set("_JWT_CMS", resp.data.token, {
    //             path: "/",
    //             sameSite: "Strict",
    //             httpOnly: true,
    //             expires: 7,
    //             secure: process.env.PROD
    //         });
    //         store.dispatch("auth/setXSRFToken", resp.data.xsrf);
    //         return Promise.resolve();
    //     });
    // if (process.env.SERVER) {
    //     createAuthRefreshInterceptor(instance, refreshAuthLogicSSR);
    // } else {
    //     createAuthRefreshInterceptor(instance, refreshAuthLogic);
    // }

    return {
      axios: instance
    };
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()));
// EXTERNAL MODULE: ./node_modules/vuex-persistedstate/dist/vuex-persistedstate.es.js
var vuex_persistedstate_es = __webpack_require__("0e44");

// CONCATENATED MODULE: ./src/boot/persist-auth.js

;

/* harmony default export */ var persist_auth = (/*#__PURE__*/(function () {
  var _ref = asyncToGenerator_default()(function* ({
    store,
    ssrContext
  }) {
    const cookies =  false ? undefined : Cookies["a" /* default */];
    Object(vuex_persistedstate_es["a" /* default */])({
      key: "_VUEX_AUTH",
      paths: ["auth"],
      storage: {
        getItem: key => JSON.stringify(cookies.get(key)),
        setItem: (key, value) => {
          cookies.set(key, value, {
            path: "/",
            sameSite: "Lax",
            expires: 7,
            secure: !false
          });
        },
        removeItem: key => cookies.remove(key)
      }
    })(store);

    if (true) {
      Object(vuex_persistedstate_es["a" /* default */])({
        key: "_VUEX_PRODUCT",
        paths: ["addProduct"]
      })(store);
    }
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());
// EXTERNAL MODULE: ./node_modules/vuex-shared-mutations/dist/vuex-shared-mutations.js
var vuex_shared_mutations = __webpack_require__("0759");
var vuex_shared_mutations_default = /*#__PURE__*/__webpack_require__.n(vuex_shared_mutations);

// CONCATENATED MODULE: ./src/boot/shared-auth.js


/* harmony default export */ var shared_auth = (/*#__PURE__*/(function () {
  var _ref = asyncToGenerator_default()(function* ({
    store
  }) {
    vuex_shared_mutations_default()({
      predicate: ["auth/SET_XSRF_AUTH", "auth/SET_BOOL_AUTH", "auth/SET_NAME_AUTH", "auth/RESET_AUTH"]
    })(store);
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("9523");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./src/boot/repositories/Dashboard.js


class Dashboard_Dashboard {
  constructor(axios) {
    defineProperty_default()(this, "axios", void 0);

    this.axios = axios;
  }

  getCustomerStats() {
    var _this = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this.axios.get("/api/customers/stats");
        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  getProductStats() {
    var _this2 = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this2.axios.get("/api/products/stats");
        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  getOrderStats() {
    var _this3 = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this3.axios.get("/api/orders/stats");
        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  getPendingResellers() {
    var _this4 = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this4.axios.get("/api/customers/pending");
        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  getRecentComments() {
    var _this5 = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this5.axios.get("/api/comments/recent");
        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  getBusinessHolidays() {
    var _this6 = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this6.axios.get("/api/invaliddates");
        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// CONCATENATED MODULE: ./src/boot/repositories/Account.js




const moment = __webpack_require__("c1df");

class Account_Account {
  constructor(axios) {
    defineProperty_default()(this, "axios", void 0);

    this.axios = axios;
  }

  getAllAccounts(filter) {
    var _this = this;

    return asyncToGenerator_default()(function* () {
      try {
        let ret = [],
            res;

        if (filter) {
          res = yield _this.axios.get("/api/customers", {
            params: {
              type: filter
            }
          });
        } else {
          res = yield _this.axios.get("/api/customers");
        }

        res.data.forEach(item => {
          ret.push({
            id: item.id,
            name: item.name,
            joined: moment(item.created).format("MMM DD, YYYY"),
            login: item.login ? moment(item.login).format("MMM DD, YYYY") : "-",
            type: item.accountType,
            active: item.status.isActive
          });
          return item;
        });
        return ret;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  getAccountSelection(filter) {
    var _this2 = this;

    return asyncToGenerator_default()(function* () {
      try {
        let ret = [],
            res;

        if (filter) {
          res = yield _this2.axios.get("/api/customers", {
            params: {
              type: filter
            }
          });
        } else {
          res = yield _this2.axios.get("/api/customers");
        }

        res.data.forEach(item => {
          ret.push({
            value: item.id,
            label: item.name,
            type: item.accountType
          });
          return item;
        });
        return ret;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  getAccount(paramID) {
    var _this3 = this;

    return asyncToGenerator_default()(function* () {
      try {
        let ret = {};
        const res = yield _this3.axios.get(`api/customers/${paramID}`);
        ret.type = res.data.accountType;
        ret.email = res.data.email;
        ret.address = res.data.address;
        ret.fname = res.data.firstname;
        ret.lname = res.data.lastname;
        ret.active = res.data.status.isActive;
        ret.approved = res.data.status.isResellerApproved;
        ret.smsVerified = res.data.status.isSMSVerified;
        ret.phone = res.data.phonenumber;
        return ret;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  editAccount(paramID, {
    fname,
    lname,
    active,
    approved
  }) {
    var _this4 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this4.axios.patch(`api/customers/${paramID}`, [{
          property: "firstname",
          value: fname
        }, {
          property: "lastname",
          value: lname
        }, {
          property: "status.isActive",
          value: active
        }, {
          property: "status.isResellerApproved",
          value: approved
        }]);
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  editAccountContact(paramID, {
    address,
    phone,
    smsVerified
  }) {
    var _this5 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this5.axios.patch(`api/customers/${paramID}`, [{
          property: "address",
          value: !!address ? address.trim() : null
        }, {
          property: "phonenumber",
          value: !!phone ? phone.trim() : null
        }, {
          property: "status.isSMSVerified",
          value: smsVerified
        }]);
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

}
// CONCATENATED MODULE: ./src/boot/repositories/Announcement.js



const Announcement_moment = __webpack_require__("c1df");

class Announcement_Announcement {
  constructor(axios) {
    defineProperty_default()(this, "axios", void 0);

    this.axios = axios;
  }

  getAllAnnouncements() {
    var _this = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this.axios.get("/api/psa/all");
        res.data.map(item => {
          item.start = Announcement_moment(item.start).format("MMM DD, YYYY HH:mm");
          item.end = Announcement_moment(item.end).format("MMM DD, YYYY HH:mm");
          return item;
        });
        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  getAnnouncement(paramID) {
    var _this2 = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this2.axios.get(`api/psa/${paramID}`);
        res.data.start = Announcement_moment(res.data.start).format("YYYY-MM-DD HH:mm");
        res.data.end = Announcement_moment(res.data.end).format("YYYY-MM-DD HH:mm");
        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  addAnnouncement({
    start,
    end,
    message,
    targetLink
  }) {
    var _this3 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this3.axios.post("/api/psa", {
          start,
          end,
          message,
          targetLink
        });
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  editAnnouncement(paramID, {
    start,
    end,
    message,
    targetLink
  }) {
    var _this4 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this4.axios.patch(`api/psa/${paramID}`, [{
          property: "start",
          value: start
        }, {
          property: "end",
          value: end
        }, {
          property: "message",
          value: message
        }, {
          property: "targetLink",
          value: targetLink
        }]);
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  deleteAnnouncement(paramID) {
    var _this5 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this5.axios.delete(`api/psa/${paramID}`);
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// CONCATENATED MODULE: ./src/boot/repositories/Category.js




const Category_moment = __webpack_require__("c1df");

class Category_Category {
  constructor(axios) {
    defineProperty_default()(this, "axios", void 0);

    this.axios = axios;
  }

  getAllCategories() {
    var _this = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this.axios.get("/api/categories/all");
        res.data.map(item => {
          item.created = item.created ? Category_moment(item.created).format("MMMM DD, YYYY") : "-";
        });
        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  getCategoriesSelection() {
    var _this2 = this;

    return asyncToGenerator_default()(function* () {
      try {
        let ret = [];
        const res = yield _this2.axios.get("/api/categories/all");
        res.data.forEach(item => {
          // Ucfirst
          ret.push(item.category.charAt(0).toUpperCase() + item.category.slice(1));
        });
        return ret;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  getProductCategorySelection() {
    var _this3 = this;

    return asyncToGenerator_default()(function* () {
      try {
        let ret = [];
        const res = yield _this3.axios.get("/api/categories/all");
        res.data.forEach(item => {
          ret.push({
            value: item._id,
            label: item.category.charAt(0).toUpperCase() + item.category.slice(1)
          });
        });
        return ret;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  getCategory(paramID) {
    var _this4 = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this4.axios.get(`api/categories/${paramID}`);
        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  addCategory({
    name,
    difficulty
  }) {
    var _this5 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this5.axios.post("/api/categories", {
          name,
          difficulty
        });
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  editCategory(paramID, {
    name,
    difficulty
  }) {
    var _this6 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this6.axios.patch(`api/categories/${paramID}`, [{
          property: "name",
          value: name
        }, {
          property: "difficulty",
          value: difficulty
        }]);
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  deleteCategory(paramID) {
    var _this7 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this7.axios.delete(`api/categories/${paramID}`);
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

}
// CONCATENATED MODULE: ./src/boot/repositories/Discount.js




const Discount_moment = __webpack_require__("c1df");

class Discount_Discount {
  constructor(axios) {
    defineProperty_default()(this, "axios", void 0);

    this.axios = axios;
  }

  getAllDiscounts() {
    var _this = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this.axios.get("/api/discounts/all");
        res.data.map(item => {
          item.start = Discount_moment(item.start).format("MMM DD, YYYY HH:mm");
          item.end = Discount_moment(item.end).format("MMM DD, YYYY HH:mm");
          return item;
        });
        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  getDiscount(paramID) {
    var _this2 = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this2.axios.get(`api/discounts/${paramID}`);
        res.data.start = Discount_moment(res.data.start).format("YYYY-MM-DD HH:mm");
        res.data.end = Discount_moment(res.data.end).format("YYYY-MM-DD HH:mm");
        res.data.target = res.data.target.charAt(0).toUpperCase() + res.data.target.slice(1);
        res.data.value = res.data.percent;
        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  addDiscount({
    start,
    end,
    products,
    value,
    target
  }) {
    var _this3 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this3.axios.post("/api/discounts", {
          start,
          end,
          percent: value,
          target: target.toLowerCase(),
          products
        });
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  editDiscount(paramID, {
    start,
    end,
    products,
    value,
    target
  }) {
    var _this4 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this4.axios.patch(`api/discounts/${paramID}`, [{
          property: "start",
          value: start
        }, {
          property: "end",
          value: end
        }, {
          property: "target",
          value: target.toLowerCase()
        }, {
          property: "percent",
          value: value
        }, {
          property: "products",
          value: products
        }]);
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  deleteDiscount(paramID) {
    var _this5 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this5.axios.delete(`api/discounts/${paramID}`);
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__("4fad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./src/boot/repositories/Product.js







const Product_moment = __webpack_require__("c1df");

class Product_Product {
  constructor(axios) {
    defineProperty_default()(this, "axios", void 0);

    this.axios = axios;
  }

  getProductSelection() {
    var _this = this;

    return asyncToGenerator_default()(function* () {
      try {
        let ret = [];
        const res = yield _this.axios.get("/api/products/cms");
        res.data.products.forEach(item => {
          ret.push({
            value: item._id,
            label: item.name
          });
        });
        return ret;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  searchProducts(search) {
    var _this2 = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this2.axios.get("/api/products/cms", {
          params: {
            name: search
          }
        });
        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  getProducts(category = "all") {
    var _this3 = this;

    return asyncToGenerator_default()(function* () {
      try {
        let res;

        if (category) {
          const catFilter = category.toLocaleLowerCase();
          res = yield _this3.axios.get(`/api/products/cms/${catFilter}`);
        } else {
          res = yield _this3.axios.get(`/api/products/cms`);
        }

        res.data.products.forEach(item => {
          item.created = item.created ? Product_moment(item.created).format("MMM DD, YYYY") : "-";
          item.toggleFlg = item.isActive;
        });
        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  getProduct(paramID) {
    var _this4 = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this4.axios.get(`api/products/cms/item/${paramID}`);
        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  createProduct(product) {
    var _this5 = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this5.axios.post("/api/products", objectSpread2_default()({}, product)); //Return ID

        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  updateProduct(paramID, product) {
    var _this6 = this;

    return asyncToGenerator_default()(function* () {
      try {
        let props = [];
        Object.entries(product).forEach(([key, value]) => {
          if (key != "id") props.push({
            property: key,
            value: value
          });
        });
        yield _this6.axios.patch(`api/products/${paramID}`, [...props]); //Return ID

        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  uploadImgs(paramID, formdat) {
    var _this7 = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this7.axios.patch(`api/products/images/${paramID}`, formdat, {
          "Content-Type": "multipart/form-data"
        }); //Return ID

        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  uploadBanner(paramID, formdat) {
    var _this8 = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this8.axios.patch(`api/products/banner/${paramID}`, formdat, {
          "Content-Type": "multipart/form-data"
        }); //Return ID

        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  deleteImage(paramID, pimgID) {
    var _this9 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this9.axios.delete(`api/products/images/${paramID}/${pimgID}`);
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  toggleActiveProduct(paramID, bool) {
    var _this10 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this10.axios.patch(`api/products/${paramID}`, [{
          property: "isActive",
          value: bool
        }]);
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  toggleAll(paramIDs, bool) {
    var _this11 = this;

    return asyncToGenerator_default()(function* () {
      try {
        if (paramIDs && paramIDs.length > 0) {
          yield _this11.axios.patch("api/products/multi", {
            selected: paramIDs,
            props: [{
              property: "isActive",
              value: bool
            }]
          });
          return true;
        } else {
          return Promise.reject("None selected.");
        }
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

}
// CONCATENATED MODULE: ./src/boot/repositories/Order.js








const Order_moment = __webpack_require__("c1df");

const prefix = "OR";
class Order_Order {
  constructor(axios) {
    defineProperty_default()(this, "axios", void 0);

    this.axios = axios;
  }

  getStatusSelection() {
    var _this = this;

    return asyncToGenerator_default()(function* () {
      // Order Status
      try {
        let ret = [];
        const res = yield _this.axios.get("/api/orders/statlist");
        res.data.forEach(item => {
          ret.push({
            value: item._id,
            label: item.status.charAt(0).toUpperCase() + item.status.slice(1)
          });
        });
        return ret;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  getOrderStats(date) {
    var _this2 = this;

    return asyncToGenerator_default()(function* () {
      try {
        let ret = [],
            total = 0;
        let params = {};

        if (date && date instanceof Date) {
          params.year = date.getFullYear();
          params.month = date.getMonth() + 1;
        }

        const res = yield _this2.axios.get("/api/orders/stats", {
          params: params
        });

        for (const [key, value] of Object.entries(res.data)) {
          ret.push({
            name: key,
            count: value
          });
          total += value;
        }

        ret.unshift({
          name: "all",
          count: total
        });
        return ret;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  getOrders(date, status) {
    var _this3 = this;

    return asyncToGenerator_default()(function* () {
      try {
        let res,
            ret = [];
        let params = {};

        if (date && date instanceof Date) {
          params.year = date.getFullYear();
          params.month = date.getMonth() + 1;
        }

        if (status) {
          params.status = status.toLowerCase();
        }

        res = yield _this3.axios.get("/api/orders/cms", {
          params: params
        });
        res.data.forEach(item => {
          const dt = Order_moment(item.target);
          ret.push({
            id: item._id,
            ordernum: item.orderRef,
            status: item.status.status,
            class: item.status.status.replace(/\s/g, "-").toLowerCase(),
            target: dt.format("MMM DD, YYYY HH:mm"),
            customer: item.customer.firstname + " " + item.customer.lastname,
            type: item.deliveryType ? item.deliveryType : "-",
            total: item.total
          });
        });
        return ret;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  findSimilarOrders(paramID, {
    target,
    status,
    customer,
    products
  }) {
    var _this4 = this;

    return asyncToGenerator_default()(function* () {
      try {
        let ret = [];
        let prodOptions = [];
        let productList = [];
        prodOptions = products.map(prod => {
          return prod.options.map(opt => opt._selected).join(" ");
        }).filter(Boolean).join(" ");
        productList = products.map(prod => {
          return prod.product;
        });
        const res = yield _this4.axios.post(`api/orders/similar/${paramID}`, {
          target,
          status,
          customer,
          options: prodOptions,
          products: productList
        });
        res.data.forEach(item => {
          const dt = Order_moment(item.target);
          ret.push({
            similarity: item.similarity,
            id: item._id,
            ordernum: item.orderRef,
            status: item.status.status,
            class: item.status.status.replace(/\s/g, "-").toLowerCase(),
            target: dt.format("MMM DD, YYYY HH:mm"),
            customer: item.customer.firstname + " " + item.customer.lastname,
            type: item.deliveryType ? item.deliveryType : "-",
            total: item.total
          });
        });
        return ret;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  getOrder(paramID) {
    var _this5 = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this5.axios.get(`api/orders/cms/${paramID}`);
        const dt = Order_moment(res.data.target);
        res.data.ordernum = res.data.orderRef;
        res.data.target = dt.format("YYYY-MM-DD HH:mm");
        res.data.type = res.data.deliveryType;
        res.data.address = res.data.shippingAddress;

        if (res.data.replacedBy) {
          res.data.replacedBy = Object.assign({}, res.data.replacedBy, {
            ordernum: res.data.orderRef
          });
        } // Selected products


        res.data.products.forEach(item => {
          item.name = item.product.name;
          item.discounts = item.product.discounts;
          item.image = item.product.images && item.product.images.length > 0 ? item.product.images[0].image : "";
          item.product = item.product._id;
        });
        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  placeOrder(order) {
    var _this6 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this6.axios.post("/api/orders/cms", objectSpread2_default()({}, order));
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  replaceOrder(paramID, order) {
    var _this7 = this;

    return asyncToGenerator_default()(function* () {
      try {
        let params = order;
        delete params._id;
        delete params.ordernum;
        yield _this7.axios.patch(`api/orders/cms/replace/${paramID}`, objectSpread2_default()({}, params));
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  updateOrder(paramID, {
    status,
    target,
    type,
    address,
    memo
  }) {
    var _this8 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this8.axios.patch(`api/orders/cms/${paramID}`, [{
          property: "status",
          value: status
        }, {
          property: "target",
          value: target
        }, {
          property: "deliveryType",
          value: type
        }, {
          property: "shippingAddress",
          value: address
        }, {
          property: "memo",
          value: memo
        }]);
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

}
// CONCATENATED MODULE: ./src/boot/repositories/Comment.js



const Comment_moment = __webpack_require__("c1df");

class Comment_Comment {
  constructor(axios) {
    defineProperty_default()(this, "axios", void 0);

    this.axios = axios;
  }

  getComments() {
    var _this = this;

    return asyncToGenerator_default()(function* () {
      try {
        let ret = [];
        const res = yield _this.axios.get("/api/comments");
        res.data.forEach(item => {
          ret.push({
            id: item.id,
            posted: Comment_moment(item.created).format("MMM DD, YYYY"),
            author: item.author ? item.author.name : "-",
            product: item.product ? item.product.name : "-",
            flagged: item.isFlagged,
            text: item.comment
          });
          return item;
        });
        return ret;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  getComment(paramID) {
    var _this2 = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this2.axios.get(`api/comments/${paramID}`);
        res.data.text = res.data.comment;
        res.data.posted = res.data.created;
        res.data.author = res.data.author ? res.data.author.name : "-";
        res.data.product = res.data.product ? res.data.product.name : "-";
        res.data.reply = res.data.reply ? res.data.reply : "";
        res.data.replyAuthor = res.data.replyAuthor;
        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  flagComment(paramID, bool) {
    var _this3 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this3.axios.patch(`api/comments/${paramID}`, [{
          property: "isFlagged",
          value: bool
        }]);
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  replyToComment(paramID, {
    reply,
    replyAuthor
  }) {
    var _this4 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this4.axios.patch(`api/comments/${paramID}`, [{
          property: "replyAuthor",
          value: replyAuthor
        }, {
          property: "reply",
          value: reply
        }, {
          property: "replied",
          value: new Date()
        }]);
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

}
// CONCATENATED MODULE: ./src/boot/repositories/Holiday.js



const Holiday_moment = __webpack_require__("c1df");

class Holiday_Holiday {
  constructor(axios) {
    defineProperty_default()(this, "axios", void 0);

    this.axios = axios;
  }

  getBusinessHolidays(date) {
    var _this = this;

    return asyncToGenerator_default()(function* () {
      try {
        let res;

        if (date) {
          const {
            year,
            month
          } = date;
          res = yield _this.axios.get("/api/invaliddates", {
            params: {
              year,
              month
            }
          });
        } else {
          res = yield _this.axios.get("/api/invaliddates");
        }

        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  getBusinessHoliday(paramID) {
    var _this2 = this;

    return asyncToGenerator_default()(function* () {
      try {
        const res = yield _this2.axios.get(`api/invaliddates/${paramID}`);
        res.data.start = Holiday_moment(res.data.start).format("YYYY-MM-DD HH:mm");
        res.data.end = Holiday_moment(res.data.end).format("YYYY-MM-DD HH:mm");
        return res.data;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  addHoliday({
    start,
    end,
    reason
  }) {
    var _this3 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this3.axios.post("/api/invaliddates", {
          start,
          end,
          reason
        });
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  editHoliday(paramID, {
    start,
    end,
    reason
  }) {
    var _this4 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this4.axios.patch(`api/invaliddates/${paramID}`, [{
          property: "start",
          value: start
        }, {
          property: "end",
          value: end
        }, {
          property: "reason",
          value: reason
        }]);
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

  deleteHoliday(paramID) {
    var _this5 = this;

    return asyncToGenerator_default()(function* () {
      try {
        yield _this5.axios.delete(`api/invaliddates/${paramID}`);
        return true;
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

}
// CONCATENATED MODULE: ./src/boot/repositories/Search.js


class Search_Search {
  constructor(axios) {
    defineProperty_default()(this, "axios", void 0);

    this.axios = axios;
  }

  findItems(text) {
    var _this = this;

    return asyncToGenerator_default()(function* () {
      try {
        if (text) {
          const res = yield _this.axios.get("/api/search", {
            params: {
              search: text
            }
          });
          return res.data;
        }

        return [];
      } catch (err) {
        throw err.response.data.error || "Error has occurred.";
      }
    })();
  }

}
// CONCATENATED MODULE: ./src/boot/repository.js












/* harmony default export */ var repository = (boot_inject( /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()(function* ({
    app,
    ssrContext,
    Vue
  }) {
    const repositories = {
      search: new Search_Search(app.axios),
      statistics: new Dashboard_Dashboard(app.axios),
      accounts: new Account_Account(app.axios),
      announcements: new Announcement_Announcement(app.axios),
      categories: new Category_Category(app.axios),
      discounts: new Discount_Discount(app.axios),
      products: new Product_Product(app.axios),
      orders: new Order_Order(app.axios),
      comments: new Comment_Comment(app.axios),
      holidays: new Holiday_Holiday(app.axios)
    };
    const RepositoryFactory = {
      get: name => repositories[name]
    }; // Vue.prototype.$Repo = RepositoryFactory;

    return {
      RepositoryFactory
    };
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()));
// CONCATENATED MODULE: ./.quasar/client-prefetch.js




/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/
;

function getMatchedComponents(to, router) {
  const route = to ? to.matched ? to : router.resolve(to).route : router.currentRoute;

  if (!route) {
    return [];
  }

  return Array.prototype.concat.apply([], route.matched.map(m => {
    return Object.keys(m.components).map(key => {
      const comp = m.components[key];
      return {
        path: m.path,
        c: comp.options
        /* Vue.extend() */
        || comp
      };
    });
  }));
}

function addPreFetchHooks(router, store, publicPath) {
  // Add router hook for handling preFetch.
  // Doing it after initial route is resolved so that we don't double-fetch
  // the data that we already have. Using router.beforeResolve() so that all
  // async components are resolved.
  router.beforeResolve((to, from, next) => {
    const urlPath = window.location.href.replace(window.location.origin, ''),
          matched = getMatchedComponents(to, router),
          prevMatched = getMatchedComponents(from, router);
    let diffed = false;
    const preFetchList = matched.filter((m, i) => {
      return diffed || (diffed = !prevMatched[i] || prevMatched[i].c !== m.c || m.path.indexOf('/:') > -1 // does it has params?
      );
    }).filter(m => m.c && typeof m.c.preFetch === 'function').map(m => m.c.preFetch);

    if (preFetchList.length === 0) {
      return next();
    }

    let hasRedirected = false;

    const redirect = url => {
      hasRedirected = true;
      next(url);
    };

    const proceed = () => {
      LoadingBar["a" /* default */].stop();

      if (hasRedirected === false) {
        next();
      }
    };

    LoadingBar["a" /* default */].start();
    preFetchList.reduce((promise, preFetch) => promise.then(() => hasRedirected === false && preFetch({
      store,
      currentRoute: to,
      previousRoute: from,
      redirect,
      urlPath,
      publicPath
    })), Promise.resolve()).then(proceed).catch(e => {
      console.error(e);
      proceed();
    });
  });
}
// CONCATENATED MODULE: ./.quasar/client-entry.js



/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/
 // We load Quasar stylesheet file










const client_entry_publicPath = `/`;

function client_entry_start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = asyncToGenerator_default()(function* () {
    const {
      app,
      store,
      router
    } = yield _quasar_app(); // prime the store with server-initialized state.
    // the state is determined during SSR and inlined in the page markup.

    if (window.__INITIAL_STATE__) {
      store.replaceState(window.__INITIAL_STATE__);
    }

    let hasRedirected = false;

    const redirect = url => {
      hasRedirected = true;
      const normalized = Object(url) === url ? router.resolve(url).route.fullPath : url;
      window.location.href = normalized;
    };

    const urlPath = window.location.href.replace(window.location.origin, '');
    const bootFiles = [boot_axios, persist_auth, shared_auth, repository];

    for (let i = 0; hasRedirected === false && i < bootFiles.length; i++) {
      if (typeof bootFiles[i] !== 'function') {
        continue;
      }

      try {
        yield bootFiles[i]({
          app,
          router,
          store,
          Vue: vue_runtime_esm["a" /* default */],
          ssrContext: null,
          redirect,
          urlPath,
          publicPath: client_entry_publicPath
        });
      } catch (err) {
        if (err && err.url) {
          window.location.href = err.url;
          return;
        }

        console.error('[Quasar] boot error:', err);
        return;
      }
    }

    if (hasRedirected === true) {
      return;
    }

    const appInstance = new vue_runtime_esm["a" /* default */](app); // wait until router has resolved all async before hooks
    // and async components...

    router.onReady(() => {
      addPreFetchHooks(router, store, client_entry_publicPath);
      appInstance.$mount('#q-app');
    });
  });
  return _start.apply(this, arguments);
}

client_entry_start();

/***/ }),

/***/ "31cd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4678":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "2bfb",
	"./af.js": "2bfb",
	"./ar": "8e73",
	"./ar-dz": "a356",
	"./ar-dz.js": "a356",
	"./ar-kw": "423e",
	"./ar-kw.js": "423e",
	"./ar-ly": "1cfd",
	"./ar-ly.js": "1cfd",
	"./ar-ma": "0a84",
	"./ar-ma.js": "0a84",
	"./ar-sa": "8230",
	"./ar-sa.js": "8230",
	"./ar-tn": "6d83",
	"./ar-tn.js": "6d83",
	"./ar.js": "8e73",
	"./az": "485c",
	"./az.js": "485c",
	"./be": "1fc1",
	"./be.js": "1fc1",
	"./bg": "84aa",
	"./bg.js": "84aa",
	"./bm": "a7fa",
	"./bm.js": "a7fa",
	"./bn": "9043",
	"./bn-bd": "9686",
	"./bn-bd.js": "9686",
	"./bn.js": "9043",
	"./bo": "d26a",
	"./bo.js": "d26a",
	"./br": "6887",
	"./br.js": "6887",
	"./bs": "2554",
	"./bs.js": "2554",
	"./ca": "d716",
	"./ca.js": "d716",
	"./cs": "3c0d",
	"./cs.js": "3c0d",
	"./cv": "03ec",
	"./cv.js": "03ec",
	"./cy": "9797",
	"./cy.js": "9797",
	"./da": "0f14",
	"./da.js": "0f14",
	"./de": "b469",
	"./de-at": "b3eb",
	"./de-at.js": "b3eb",
	"./de-ch": "bb71",
	"./de-ch.js": "bb71",
	"./de.js": "b469",
	"./dv": "598a",
	"./dv.js": "598a",
	"./el": "8d47",
	"./el.js": "8d47",
	"./en-au": "0e6b",
	"./en-au.js": "0e6b",
	"./en-ca": "3886",
	"./en-ca.js": "3886",
	"./en-gb": "39a6",
	"./en-gb.js": "39a6",
	"./en-ie": "e1d3",
	"./en-ie.js": "e1d3",
	"./en-il": "7333",
	"./en-il.js": "7333",
	"./en-in": "ec2e",
	"./en-in.js": "ec2e",
	"./en-nz": "6f50",
	"./en-nz.js": "6f50",
	"./en-sg": "b7e9",
	"./en-sg.js": "b7e9",
	"./eo": "65db",
	"./eo.js": "65db",
	"./es": "898b",
	"./es-do": "0a3c",
	"./es-do.js": "0a3c",
	"./es-mx": "b5b7",
	"./es-mx.js": "b5b7",
	"./es-us": "55c9",
	"./es-us.js": "55c9",
	"./es.js": "898b",
	"./et": "ec18",
	"./et.js": "ec18",
	"./eu": "0ff2",
	"./eu.js": "0ff2",
	"./fa": "8df4",
	"./fa.js": "8df4",
	"./fi": "81e9",
	"./fi.js": "81e9",
	"./fil": "d69a",
	"./fil.js": "d69a",
	"./fo": "0721",
	"./fo.js": "0721",
	"./fr": "9f26",
	"./fr-ca": "d9f8",
	"./fr-ca.js": "d9f8",
	"./fr-ch": "0e49",
	"./fr-ch.js": "0e49",
	"./fr.js": "9f26",
	"./fy": "7118",
	"./fy.js": "7118",
	"./ga": "5120",
	"./ga.js": "5120",
	"./gd": "f6b4",
	"./gd.js": "f6b4",
	"./gl": "8840",
	"./gl.js": "8840",
	"./gom-deva": "aaf2",
	"./gom-deva.js": "aaf2",
	"./gom-latn": "0caa",
	"./gom-latn.js": "0caa",
	"./gu": "e0c5",
	"./gu.js": "e0c5",
	"./he": "c7aa",
	"./he.js": "c7aa",
	"./hi": "dc4d",
	"./hi.js": "dc4d",
	"./hr": "4ba9",
	"./hr.js": "4ba9",
	"./hu": "5b14",
	"./hu.js": "5b14",
	"./hy-am": "d6b6",
	"./hy-am.js": "d6b6",
	"./id": "5038",
	"./id.js": "5038",
	"./is": "0558",
	"./is.js": "0558",
	"./it": "6e98",
	"./it-ch": "6f12",
	"./it-ch.js": "6f12",
	"./it.js": "6e98",
	"./ja": "079e",
	"./ja.js": "079e",
	"./jv": "b540",
	"./jv.js": "b540",
	"./ka": "201b",
	"./ka.js": "201b",
	"./kk": "6d79",
	"./kk.js": "6d79",
	"./km": "e81d",
	"./km.js": "e81d",
	"./kn": "3e92",
	"./kn.js": "3e92",
	"./ko": "22f8",
	"./ko.js": "22f8",
	"./ku": "2421",
	"./ku.js": "2421",
	"./ky": "9609",
	"./ky.js": "9609",
	"./lb": "440c",
	"./lb.js": "440c",
	"./lo": "b29d",
	"./lo.js": "b29d",
	"./lt": "26f9",
	"./lt.js": "26f9",
	"./lv": "b97c",
	"./lv.js": "b97c",
	"./me": "293c",
	"./me.js": "293c",
	"./mi": "688b",
	"./mi.js": "688b",
	"./mk": "6909",
	"./mk.js": "6909",
	"./ml": "02fb",
	"./ml.js": "02fb",
	"./mn": "958b",
	"./mn.js": "958b",
	"./mr": "39bd",
	"./mr.js": "39bd",
	"./ms": "ebe4",
	"./ms-my": "6403",
	"./ms-my.js": "6403",
	"./ms.js": "ebe4",
	"./mt": "1b45",
	"./mt.js": "1b45",
	"./my": "8689",
	"./my.js": "8689",
	"./nb": "6ce3",
	"./nb.js": "6ce3",
	"./ne": "3a39",
	"./ne.js": "3a39",
	"./nl": "facd",
	"./nl-be": "db29",
	"./nl-be.js": "db29",
	"./nl.js": "facd",
	"./nn": "b84c",
	"./nn.js": "b84c",
	"./oc-lnc": "167b",
	"./oc-lnc.js": "167b",
	"./pa-in": "f3ff",
	"./pa-in.js": "f3ff",
	"./pl": "8d57",
	"./pl.js": "8d57",
	"./pt": "f260",
	"./pt-br": "d2d4",
	"./pt-br.js": "d2d4",
	"./pt.js": "f260",
	"./ro": "972c",
	"./ro.js": "972c",
	"./ru": "957c",
	"./ru.js": "957c",
	"./sd": "6784",
	"./sd.js": "6784",
	"./se": "ffff",
	"./se.js": "ffff",
	"./si": "eda5",
	"./si.js": "eda5",
	"./sk": "7be6",
	"./sk.js": "7be6",
	"./sl": "8155",
	"./sl.js": "8155",
	"./sq": "c8f3",
	"./sq.js": "c8f3",
	"./sr": "cf1e",
	"./sr-cyrl": "13e9",
	"./sr-cyrl.js": "13e9",
	"./sr.js": "cf1e",
	"./ss": "52bd",
	"./ss.js": "52bd",
	"./sv": "5fbd",
	"./sv.js": "5fbd",
	"./sw": "74dc",
	"./sw.js": "74dc",
	"./ta": "3de5",
	"./ta.js": "3de5",
	"./te": "5cbb",
	"./te.js": "5cbb",
	"./tet": "576c",
	"./tet.js": "576c",
	"./tg": "3b1b",
	"./tg.js": "3b1b",
	"./th": "10e8",
	"./th.js": "10e8",
	"./tk": "5aff",
	"./tk.js": "5aff",
	"./tl-ph": "0f38",
	"./tl-ph.js": "0f38",
	"./tlh": "cf75",
	"./tlh.js": "cf75",
	"./tr": "0e81",
	"./tr.js": "0e81",
	"./tzl": "cf51",
	"./tzl.js": "cf51",
	"./tzm": "c109",
	"./tzm-latn": "b53d",
	"./tzm-latn.js": "b53d",
	"./tzm.js": "c109",
	"./ug-cn": "6117",
	"./ug-cn.js": "6117",
	"./uk": "ada2",
	"./uk.js": "ada2",
	"./ur": "5294",
	"./ur.js": "5294",
	"./uz": "2e8c",
	"./uz-latn": "010e",
	"./uz-latn.js": "010e",
	"./uz.js": "2e8c",
	"./vi": "2921",
	"./vi.js": "2921",
	"./x-pseudo": "fd7e",
	"./x-pseudo.js": "fd7e",
	"./yo": "7f33",
	"./yo.js": "7f33",
	"./zh-cn": "5c3a",
	"./zh-cn.js": "5c3a",
	"./zh-hk": "49ab",
	"./zh-hk.js": "49ab",
	"./zh-mo": "3a6c",
	"./zh-mo.js": "3a6c",
	"./zh-tw": "90ea",
	"./zh-tw.js": "90ea"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "4678";

/***/ })

/******/ });
//# sourceMappingURL=app.634956b7.js.map