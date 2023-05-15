(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["moment"], factory);
	else if(typeof exports === 'object')
		exports["jfHeader"] = factory(require("moment"));
	else
		root["jfHeader"] = factory(root["moment"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__275__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
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
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		8: 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		8: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"2":"account-box-standalone","3":"campaigns-main","4":"common-login","5":"enterprise-components-utils","6":"enterprise-non-profit-modal","7":"healthcare-report-modal","9":"show-enterprise-logo-tooltip"}[chunkId]||chunkId) + ".js?ver=" + {"2":"0e5bfb0cd124ad8e8a2c","3":"37f7ecb86c2a1db1672d","4":"d36310fc97a1c72e46cf","5":"54708cd43cd6669030f9","6":"7f69903d100dd96bcdd2","7":"19afc9c6d19f439d759c","9":"816fcf03c19da4ecb8d5"}[chunkId] + ""
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
/******/ 		var cssChunks = {"2":1,"4":1,"6":1,"7":1,"9":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + chunkId + ".css?ver=" + {"2":"0e5bfb0cd124ad8e8a2c","3":"37f7ecb86c2a1db1672d","4":"d36310fc97a1c72e46cf","5":"54708cd43cd6669030f9","6":"7f69903d100dd96bcdd2","7":"19afc9c6d19f439d759c","9":"816fcf03c19da4ecb8d5"}[chunkId] + "";
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
/******/
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				var onLinkComplete = function (event) {
/******/ 					// avoid mem leaks.
/******/ 					linkTag.onerror = linkTag.onload = null;
/******/ 					if (event.type === 'load') {
/******/ 						resolve();
/******/ 					} else {
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realHref = event && event.target && event.target.href || fullhref;
/******/ 						var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 						err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 						err.type = errorType;
/******/ 						err.request = realHref;
/******/ 						delete installedCssChunks[chunkId]
/******/ 						linkTag.parentNode.removeChild(linkTag)
/******/ 						reject(err);
/******/ 					}
/******/ 				};
/******/ 				linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				document.head.appendChild(linkTag);
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
/******/ 	__webpack_require__.p = "/common-header/assets/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["jfHeaderJsonp"] = window["jfHeaderJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 217);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var getOwnPropertyDescriptor = __webpack_require__(62).f;
var createNonEnumerableProperty = __webpack_require__(46);
var defineBuiltIn = __webpack_require__(19);
var defineGlobalProperty = __webpack_require__(115);
var copyConstructorProperties = __webpack_require__(138);
var isForced = __webpack_require__(109);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(91);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var shared = __webpack_require__(57);
var hasOwn = __webpack_require__(12);
var uid = __webpack_require__(110);
var NATIVE_SYMBOL = __webpack_require__(58);
var USE_SYMBOL_AS_UID = __webpack_require__(150);

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var $documentAll = __webpack_require__(147);

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(118);
var defineBuiltIn = __webpack_require__(19);
var toString = __webpack_require__(233);

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(91);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(2);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(61);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(234);
__webpack_require__(240);
__webpack_require__(241);
__webpack_require__(242);
__webpack_require__(243);
__webpack_require__(244);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1);
var toObject = __webpack_require__(32);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var $includes = __webpack_require__(111).includes;
var fails = __webpack_require__(2);
var addToUnscopables = __webpack_require__(141);

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(123).charAt;
var toString = __webpack_require__(9);
var InternalStateModule = __webpack_require__(26);
var defineIterator = __webpack_require__(142);
var createIterResultObject = __webpack_require__(143);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(29);
var addToUnscopables = __webpack_require__(141);
var Iterators = __webpack_require__(68);
var InternalStateModule = __webpack_require__(26);
var defineProperty = __webpack_require__(24).f;
var defineIterator = __webpack_require__(142);
var createIterResultObject = __webpack_require__(143);
var IS_PURE = __webpack_require__(30);
var DESCRIPTORS = __webpack_require__(8);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject(index, false);
  if (kind == 'values') return createIterResultObject(target[index], false);
  return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return isEnterprise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return isGuest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return isBSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return trackWatchman; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return readCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return setCookie; });
/* unused harmony export getHostname */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getLocalizedPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getUrlParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return enableScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return disableScroll; });
/* unused harmony export loadAfter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return loadJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return addEventListenerOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return initPersOnbForOrderLanding2Test; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getBodyEl; });
/* unused harmony export isIE */
/* unused harmony export isYandex */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return focusToFirstInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return clickOutsideEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return keydownEscapeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addBrowserClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addClassNameForWindows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return hideAccountBoxIfCustomCtaExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getCurrentDateWithoutTimeZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createLcStGetterWithKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createLcStSetterWithKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return isInViewport; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(177);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(194);
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_iso_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(186);
/* harmony import */ var core_js_modules_es_date_to_iso_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(59);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(48);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(103);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(65);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(70);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_22__);
function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},_typeof(obj);}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function _defineProperty(obj,key,value){key=_toPropertyKey(key);if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return _typeof(key)==="symbol"?key:String(key);}function _toPrimitive(input,hint){if(_typeof(input)!=="object"||input===null)return input;var prim=input[Symbol.toPrimitive];if(prim!==undefined){var res=prim.call(input,hint||"default");if(_typeof(res)!=="object")return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return(hint==="string"?String:Number)(input);}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2;}function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1;}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err;}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return;}finally{if(_d)throw _e;}}return _arr;}}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var isEnterprise=function isEnterprise(){return window.JOTFORM_ENV&&window.JOTFORM_ENV==='ENTERPRISE';};var isAdmin=function isAdmin(user){return lodash_isObject__WEBPACK_IMPORTED_MODULE_22___default()(user===null||user===void 0?void 0:user.account_type)?user.account_type.name==='ADMIN':user.account_type==='ADMIN';};var isGuest=function isGuest(user){var _user$account_type;return((user===null||user===void 0?void 0:(_user$account_type=user.account_type)===null||_user$account_type===void 0?void 0:_user$account_type.name)||(user===null||user===void 0?void 0:user.account_type))==='GUEST';};var isBSG=function isBSG(user){var _user$account_type2;return['BRONZE','SILVER','GOLD'].includes((user===null||user===void 0?void 0:(_user$account_type2=user.account_type)===null||_user$account_type2===void 0?void 0:_user$account_type2.name)||(user===null||user===void 0?void 0:user.account_type));};var trackWatchman=function trackWatchman(){if(window.JOTFORM_ENV!=='DEVELOPMENT'){if(typeof JotFormActions!=='undefined'){if(typeof window.jfHeaderCTA==='undefined'){window.jfHeaderCTA=window.JotFormActions('jfHeaderCTA');}if(typeof window.megaMenuHeader==='undefined'){window.megaMenuHeader=window.JotFormActions('megaMenuHeader');}}else{var script=document.createElement('script');script.setAttribute('src','//cdn.jotfor.ms/assets/js/actions.js');document.getElementsByTagName('head')[0].appendChild(script);script.onload=function(){if(typeof window.jfHeaderCTA==='undefined'){window.jfHeaderCTA=window.JotFormActions('jfHeaderCTA');}if(typeof window.megaMenuHeader==='undefined'){window.megaMenuHeader=window.JotFormActions('megaMenuHeader');}};}}};var removeClass=function removeClass(el,str){if(el!==null&&el.classList!==undefined&&typeof el.classList.add==='function'){el.classList.remove(str);return Array.from(el.classList).join(' ');}return[];};window.removeClass=removeClass;var addClass=function addClass(el,str){if(el!==null&&el.classList!==undefined&&typeof el.classList.add==='function'){el.classList.add(str);return Array.from(el.classList).join(' ');}return[];};window.addClass=addClass;var readCookie=function readCookie(key){var values=document.cookie.match("(^|;)\\s*".concat(key,"\\s*=\\s*([^;]+)"));return values?values.pop():undefined;};var setCookie=function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+exdays*24*60*60*1000);var expires="expires=".concat(d.toUTCString());document.cookie="".concat(cname,"=").concat(cvalue,"; ").concat(expires,"; path=/");};var getHostname=function getHostname(url){var hostname=url.split('/')[url.indexOf('//')>-1?2:0];var _hostname$split=hostname.split(':');var _hostname$split2=_slicedToArray(_hostname$split,1);hostname=_hostname$split2[0];return hostname.split('?')[0];};window.getHostname=getHostname;var getLocalizedPath=function getLocalizedPath(path_){var path=path_;var jfLocalizationEnabledSubdomains=['www'];var jfLocalizationEnabledDomains=['jotform.com','jotform.pro'];var hostname=getHostname(path);var domain=hostname.substring(hostname.lastIndexOf('.',hostname.lastIndexOf('.')-1)+1);var subdomain=hostname.replace(domain,'').replace('.','');var url;if(subdomain.length&&jfLocalizationEnabledSubdomains.indexOf(subdomain)<0){return path;}if(domain.length&&jfLocalizationEnabledDomains.indexOf(domain)<0){return path;}if(path.indexOf('http')===0){url=new URL(path);path=url.pathname;}if(window.jfLocalizedPaths&&typeof window.jfLocalizedPaths!=='undefined'){for(var i=0;i<window.jfLocalizedPaths.length;i++){if(window.location.pathname.indexOf("/".concat(window.jfLocalizedPaths[i],"/"))>=0){if(path.indexOf("/".concat(window.jfLocalizedPaths[i],"/"))!==0){path="/".concat(window.jfLocalizedPaths[i]).concat(path);}break;}}}return url?url.origin+path+url.search:path;};window.getLocalizedPath=getLocalizedPath;var getUrlParameter=function getUrlParameter(name){var url=arguments.length>1&&arguments[1]!==undefined?arguments[1]:window.location.href;var name_=name.replace(/[\[\]]/g,'\\$&');// eslint-disable-line
var regex=new RegExp("[?&]".concat(name_,"(=([^&#]*)|&|#|$)"));var results=regex.exec(url);if(!results)return null;if(!results[2])return'';return decodeURIComponent(results[2].replace(/\+/g,' '));};var debounce=function debounce(func,wait){var timeout;return function executedFunction(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var later=function later(){clearTimeout(timeout);func.apply(void 0,args);};clearTimeout(timeout);timeout=setTimeout(later,wait);};};window.debounce=debounce;var enableScroll=function enableScroll(){var body=document.querySelector('body');var scrollY=body.style.top;body.style.position='';body.style.top='';body.style.width='';window.scrollTo(0,parseInt(scrollY||'0')*-1);// eslint-disable-line
};window.enableScroll=enableScroll;var disableScroll=function disableScroll(){var scrollY=document.documentElement.style.getPropertyValue('--scroll-y');var body=document.querySelector('body');body.style.position='fixed';body.style.width='100%';body.style.top="-".concat(scrollY);document.documentElement.style.scrollBehavior='initial';};window.disableScroll=disableScroll;var loadAfter=function loadAfter(params){var forceLoad=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(!Array.isArray(params)){console.error('LoadAfter :: please give array to window.loadAfter function');return;}params.forEach(function(param,index){var options={type:'',url:'',callback:'',el:'',attr:'',force:false};var moptions=_objectSpread(_objectSpread({},options),param);var uniqueName=moptions.url.split('/').pop().split('.')[0]+(moptions.force?index:'');if(!moptions.url){console.error('LoadAfter :: url not found');return;}function createJS(){var script=document.createElement('script');script.type='text/javascript';if(moptions.callback){script.onload=function(){moptions.callback();};}if(moptions.attr){script.setAttribute(moptions.attr,moptions.attr);}script.src=moptions.url;document.getElementsByTagName('head')[0].appendChild(script);console.log('Loaded JS: ',moptions.url);}function createCSS(){var link=document.createElement('link');link.rel='stylesheet';link.href=moptions.url;if(moptions.attr){link.setAttribute(moptions.attr,moptions.attr);}document.getElementsByTagName('head')[0].appendChild(link);console.log('Loaded CSS: ',moptions.url);}function elGeneralFunc(){if(document.querySelector('body').classList.contains(uniqueName))return;document.querySelector('body').classList.add(uniqueName);if(moptions.type==='JS'){createJS();}if(moptions.type==='CSS'){createCSS();}}if(moptions.el){if('ontouchstart'in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0){// eslint-disable-line
document.querySelector(moptions.el).addEventListener('touchstart',function(){elGeneralFunc();});}document.querySelector(moptions.el).addEventListener('mousemove',function(){elGeneralFunc();});if(forceLoad){elGeneralFunc();}window.addEventListener('scroll',function(){elGeneralFunc();});return;}if(moptions.type==='JS'){if(document.querySelector('body').classList.contains(uniqueName))return;document.querySelector('body').classList.add(uniqueName);createJS();}if(moptions.type==='CSS'){if(document.querySelector('body').classList.contains(uniqueName))return;document.querySelector('body').classList.add(uniqueName);createCSS();}});};window.loadAfter=loadAfter;window.dispatchEvent(new CustomEvent('jfheader-utils-ready'));// eslint-disable-line no-undef
var loadJS=function loadJS(id,src,onload){if(document.getElementById(id)){onload();return false;}var js=document.createElement('script');js.id=id;js.onload=onload;js.src=src;var fjs=document.getElementsByTagName('script')[0];if(fjs){fjs.parentNode.insertBefore(js,fjs);}else{document.getElementsByTagName('head')[0].appendChild(js);}};var addEventListenerOnce=function addEventListenerOnce(node,type,listener){var listener_=function listener_(event){node.removeEventListener(type,listener_);listener(event);};node.addEventListener(type,listener_);};var initPersOnbForOrderLanding2Test=function initPersOnbForOrderLanding2Test(user){if(window.location.pathname==='/order-form-creator/'){Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 126)).then(function(personalizedOnboardingForOrderLandings){personalizedOnboardingForOrderLandings.default().init(user);});}};var getBodyEl=function getBodyEl(){return document.querySelector('body');};function isIE(){if(window.navigator.appVersion.indexOf('Edge')>-1)return'12';if(window.ActiveXObject===undefined)return'';// Not IE
if(!window.XMLHttpRequest)return'6';if(!document.querySelector)return'7';if(!document.addEventListener)return'8';if(!window.atob)return'9';// eslint-disable-next-line no-proto
if(!document.__proto__)return'10';return'11';}function isYandex(){var ua=window.navigator.userAgent;if(ua.search(/YaBrowser/)>0){return ua.search(/YaBrowser/).toString();}return'';}function focusToFirstInput(subMenu){var firstInput=subMenu.getElementsByTagName('input')[0];if(firstInput){firstInput.focus();firstInput.setSelectionRange(0,firstInput.value.length);}}var clickOutsideEvent=function clickOutsideEvent(event){// exit modal overlays the login and signup modals
if(event.target.closest('#exitModal'))return false;if(event.target.closest('.modalView .jfHeader-modalViewContent'))return true;if(document.querySelector('.xcl-content')&&!document.contains(event.target)){return false;}window.closeModal();};var keydownEscapeEvent=function keydownEscapeEvent(e){var isEscapePressed=e.key==='Escape'||e.keyCode===27;if(isEscapePressed){window.closeModal();}};var addBrowserClassNames=function addBrowserClassNames(){var ieClassName="header-browser-ie-".concat(isIE());var yandexClassName="header-browser-yandex-".concat(isYandex());if(isIE()){addClass(document.querySelector('html'),'header-browser-ie');addClass(document.querySelector('html'),ieClassName);}if(isYandex()){addClass(document.querySelector('html'),'header-browser-yandex');addClass(document.querySelector('html'),yandexClassName);}};var addClassNameForWindows=function addClassNameForWindows(){if(window.navigator.appVersion.indexOf('Win')!==-1){document.querySelector('.jfHeader').classList.add('windows');}};var hideAccountBoxIfCustomCtaExists=function hideAccountBoxIfCustomCtaExists(){if(document.querySelector('.jfh-custom-cta')){document.querySelector('.jfHeader-accountBox').style.display='none';}};var getCurrentDateWithoutTimeZone=function getCurrentDateWithoutTimeZone(){var currentDate=new Date();var offset=currentDate.getTimezoneOffset();var currentDateWithoutOffset=new Date(currentDate.getTime()-offset*60*1000);var formattedDate=currentDateWithoutOffset.toISOString().split('T')[0];return formattedDate;};var hasUrlParamForAbTest=function hasUrlParamForAbTest(param){var urlParams=new URLSearchParams(window.location.search);return urlParams.get(param)==='true';};var createLcStGetterWithKey=function createLcStGetterWithKey(lcStKey){return function(){return!!window.localStorage.getItem(lcStKey);};};var createLcStSetterWithKey=function createLcStSetterWithKey(lcStKey,urlParam){return function(){return!hasUrlParamForAbTest(urlParam)&&window.localStorage.setItem(lcStKey,'1');};};var isInViewport=function isInViewport(element){var rect=element.getBoundingClientRect();return rect.top>=0&&rect.left>=0&&rect.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&rect.right<=(window.innerWidth||document.documentElement.clientWidth);};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var exec = __webpack_require__(98);

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(5);
var $documentAll = __webpack_require__(147);

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(5);
var definePropertyModule = __webpack_require__(24);
var makeBuiltIn = __webpack_require__(153);
var defineGlobalProperty = __webpack_require__(115);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var DOMIterables = __webpack_require__(168);
var DOMTokenListPrototype = __webpack_require__(169);
var ArrayIteratorMethods = __webpack_require__(15);
var createNonEnumerableProperty = __webpack_require__(46);
var wellKnownSymbol = __webpack_require__(4);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var uncurryThis = __webpack_require__(1);
var notARegExp = __webpack_require__(144);
var requireObjectCoercible = __webpack_require__(25);
var toString = __webpack_require__(9);
var correctIsRegExpLogic = __webpack_require__(145);

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var forEach = __webpack_require__(164);

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var DOMIterables = __webpack_require__(168);
var DOMTokenListPrototype = __webpack_require__(169);
var forEach = __webpack_require__(164);
var createNonEnumerableProperty = __webpack_require__(46);

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var IE8_DOM_DEFINE = __webpack_require__(148);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(149);
var anObject = __webpack_require__(10);
var toPropertyKey = __webpack_require__(84);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isNullOrUndefined = __webpack_require__(41);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(199);
var global = __webpack_require__(3);
var isObject = __webpack_require__(18);
var createNonEnumerableProperty = __webpack_require__(46);
var hasOwn = __webpack_require__(12);
var shared = __webpack_require__(114);
var sharedKey = __webpack_require__(95);
var hiddenKeys = __webpack_require__(86);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {__webpack_require__(42);__webpack_require__(43);__webpack_require__(212);__webpack_require__(44);__webpack_require__(195);__webpack_require__(22);__webpack_require__(15);__webpack_require__(213);__webpack_require__(75);__webpack_require__(40);__webpack_require__(196);__webpack_require__(197);__webpack_require__(182);__webpack_require__(211);__webpack_require__(6);__webpack_require__(11);__webpack_require__(14);__webpack_require__(210);__webpack_require__(23);__webpack_require__(20);function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var runtime=function(exports){"use strict";var Op=Object.prototype;var hasOwn=Op.hasOwnProperty;var undefined;// More compressible than void 0.
var $Symbol=typeof Symbol==="function"?Symbol:{};var iteratorSymbol=$Symbol.iterator||"@@iterator";var asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator";var toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});return obj[key];}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
define({},"");}catch(err){define=function define(obj,key,value){return obj[key]=value;};}function wrap(innerFn,outerFn,self,tryLocsList){// If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator;var generator=Object.create(protoGenerator.prototype);var context=new Context(tryLocsList||[]);// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
generator._invoke=makeInvokeMethod(innerFn,self,context);return generator;}exports.wrap=wrap;// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)};}catch(err){return{type:"throw",arg:err};}}var GenStateSuspendedStart="suspendedStart";var GenStateSuspendedYield="suspendedYield";var GenStateExecuting="executing";var GenStateCompleted="completed";// Returning this object from the innerFn has the same effect as
// breaking out of the dispatch switch statement.
var ContinueSentinel={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,function(){return this;});var getProto=Object.getPrototypeOf;var NativeIteratorPrototype=getProto&&getProto(getProto(values([])));if(NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)){// This environment has a native %IteratorPrototype%; use it instead
// of the polyfill.
IteratorPrototype=NativeIteratorPrototype;}var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);GeneratorFunction.prototype=GeneratorFunctionPrototype;define(Gp,"constructor",GeneratorFunctionPrototype);define(GeneratorFunctionPrototype,"constructor",GeneratorFunction);GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction");// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){define(prototype,method,function(arg){return this._invoke(method,arg);});});}exports.isGeneratorFunction=function(genFun){var ctor=typeof genFun==="function"&&genFun.constructor;return ctor?ctor===GeneratorFunction||// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(ctor.displayName||ctor.name)==="GeneratorFunction":false;};exports.mark=function(genFun){if(Object.setPrototypeOf){Object.setPrototypeOf(genFun,GeneratorFunctionPrototype);}else{genFun.__proto__=GeneratorFunctionPrototype;define(genFun,toStringTagSymbol,"GeneratorFunction");}genFun.prototype=Object.create(Gp);return genFun;};// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
exports.awrap=function(arg){return{__await:arg};};function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if(record.type==="throw"){reject(record.arg);}else{var result=record.arg;var value=result.value;if(value&&_typeof(value)==="object"&&hasOwn.call(value,"__await")){return PromiseImpl.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject);},function(err){invoke("throw",err,resolve,reject);});}return PromiseImpl.resolve(value).then(function(unwrapped){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
result.value=unwrapped;resolve(result);},function(error){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return invoke("throw",error,resolve,reject);});}}var previousPromise;function enqueue(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl(function(resolve,reject){invoke(method,arg,resolve,reject);});}return previousPromise=// If enqueue has been called before, then we want to wait until
// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
previousPromise?previousPromise.then(callInvokeWithMethodAndArg,// Avoid propagating failures to Promises returned by later
// invocations of the iterator.
callInvokeWithMethodAndArg):callInvokeWithMethodAndArg();}// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
this._invoke=enqueue;}defineIteratorMethods(AsyncIterator.prototype);define(AsyncIterator.prototype,asyncIteratorSymbol,function(){return this;});exports.AsyncIterator=AsyncIterator;// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){if(PromiseImpl===void 0)PromiseImpl=Promise;var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter// If outerFn is a generator, return the full iterator.
:iter.next().then(function(result){return result.done?result.value:iter.next();});};function makeInvokeMethod(innerFn,self,context){var state=GenStateSuspendedStart;return function invoke(method,arg){if(state===GenStateExecuting){throw new Error("Generator is already running");}if(state===GenStateCompleted){if(method==="throw"){throw arg;}// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return doneResult();}context.method=method;context.arg=arg;while(true){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult;}}if(context.method==="next"){// Setting context._sent for legacy support of Babel's
// function.sent implementation.
context.sent=context._sent=context.arg;}else if(context.method==="throw"){if(state===GenStateSuspendedStart){state=GenStateCompleted;throw context.arg;}context.dispatchException(context.arg);}else if(context.method==="return"){context.abrupt("return",context.arg);}state=GenStateExecuting;var record=tryCatch(innerFn,self,context);if(record.type==="normal"){// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
state=context.done?GenStateCompleted:GenStateSuspendedYield;if(record.arg===ContinueSentinel){continue;}return{value:record.arg,done:context.done};}else if(record.type==="throw"){state=GenStateCompleted;// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
context.method="throw";context.arg=record.arg;}}};}// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(method===undefined){// A .throw or .return when the delegate iterator has no .throw
// method always terminates the yield* loop.
context.delegate=null;if(context.method==="throw"){// Note: ["return"] must be used for ES3 parsing compatibility.
if(delegate.iterator["return"]){// If the delegate iterator has a return method, give it a
// chance to clean up.
context.method="return";context.arg=undefined;maybeInvokeDelegate(delegate,context);if(context.method==="throw"){// If maybeInvokeDelegate(context) changed context.method from
// "return" to "throw", let that override the TypeError below.
return ContinueSentinel;}}context.method="throw";context.arg=new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record=tryCatch(method,delegate.iterator,context.arg);if(record.type==="throw"){context.method="throw";context.arg=record.arg;context.delegate=null;return ContinueSentinel;}var info=record.arg;if(!info){context.method="throw";context.arg=new TypeError("iterator result is not an object");context.delegate=null;return ContinueSentinel;}if(info.done){// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
context[delegate.resultName]=info.value;// Resume execution at the desired location (see delegateYield).
context.next=delegate.nextLoc;// If context.method was "throw" but the delegate handled the
// exception, let the outer generator proceed normally. If
// context.method was "next", forget context.arg since it has been
// "consumed" by the delegate iterator. If context.method was
// "return", allow the original .return call to continue in the
// outer generator.
if(context.method!=="return"){context.method="next";context.arg=undefined;}}else{// Re-yield the result returned by the delegate method.
return info;}// The delegate iterator is finished, so forget it and continue with
// the outer generator.
context.delegate=null;return ContinueSentinel;}// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
defineIteratorMethods(Gp);define(Gp,toStringTagSymbol,"Generator");// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
define(Gp,iteratorSymbol,function(){return this;});define(Gp,"toString",function(){return"[object Generator]";});function pushTryEntry(locs){var entry={tryLoc:locs[0]};if(1 in locs){entry.catchLoc=locs[1];}if(2 in locs){entry.finallyLoc=locs[2];entry.afterLoc=locs[3];}this.tryEntries.push(entry);}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal";delete record.arg;entry.completion=record;}function Context(tryLocsList){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}];tryLocsList.forEach(pushTryEntry,this);this.reset(true);}exports.keys=function(object){var keys=[];for(var key in object){keys.push(key);}keys.reverse();// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return function next(){while(keys.length){var key=keys.pop();if(key in object){next.value=key;next.done=false;return next;}}// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
next.done=true;return next;};};function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod){return iteratorMethod.call(iterable);}if(typeof iterable.next==="function"){return iterable;}if(!isNaN(iterable.length)){var i=-1,next=function next(){while(++i<iterable.length){if(hasOwn.call(iterable,i)){next.value=iterable[i];next.done=false;return next;}}next.value=undefined;next.done=true;return next;};return next.next=next;}}// Return an iterator with no values.
return{next:doneResult};}exports.values=values;function doneResult(){return{value:undefined,done:true};}Context.prototype={constructor:Context,reset:function reset(skipTempReset){this.prev=0;this.next=0;// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=undefined;this.done=false;this.delegate=null;this.method="next";this.arg=undefined;this.tryEntries.forEach(resetTryEntry);if(!skipTempReset){for(var name in this){// Not sure about the optimal order of these conditions:
if(name.charAt(0)==="t"&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))){this[name]=undefined;}}}},stop:function stop(){this.done=true;var rootEntry=this.tryEntries[0];var rootRecord=rootEntry.completion;if(rootRecord.type==="throw"){throw rootRecord.arg;}return this.rval;},dispatchException:function dispatchException(exception){if(this.done){throw exception;}var context=this;function handle(loc,caught){record.type="throw";record.arg=exception;context.next=loc;if(caught){// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
context.method="next";context.arg=undefined;}return!!caught;}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];var record=entry.completion;if(entry.tryLoc==="root"){// Exception thrown outside of any try block that could handle
// it, so set the completion value of the entire function to
// throw the exception.
return handle("end");}if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc");var hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true);}else if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc);}}else if(hasCatch){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true);}}else if(hasFinally){if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc);}}else{throw new Error("try statement without catch or finally");}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break;}}if(finallyEntry&&(type==="break"||type==="continue")&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc){// Ignore the finally entry if control is not jumping to a
// location outside the try/catch block.
finallyEntry=null;}var record=finallyEntry?finallyEntry.completion:{};record.type=type;record.arg=arg;if(finallyEntry){this.method="next";this.next=finallyEntry.finallyLoc;return ContinueSentinel;}return this.complete(record);},complete:function complete(record,afterLoc){if(record.type==="throw"){throw record.arg;}if(record.type==="break"||record.type==="continue"){this.next=record.arg;}else if(record.type==="return"){this.rval=this.arg=record.arg;this.method="return";this.next="end";}else if(record.type==="normal"&&afterLoc){this.next=afterLoc;}return ContinueSentinel;},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc){this.complete(entry.completion,entry.afterLoc);resetTryEntry(entry);return ContinueSentinel;}}},"catch":function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if(record.type==="throw"){var thrown=record.arg;resetTryEntry(entry);}return thrown;}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw new Error("illegal catch attempt");},delegateYield:function delegateYield(iterable,resultName,nextLoc){this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc};if(this.method==="next"){// Deliberately forget the last sent value so that we don't
// accidentally pass it on to the delegate.
this.arg=undefined;}return ContinueSentinel;}};// Regardless of whether this script is executing as a CommonJS module
// or not, return the runtime object so that we can declare the variable
// regeneratorRuntime in the outer scope, which allows this module to be
// injected easily by `bin/regenerator --include-runtime script.js`.
return exports;}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false?undefined:_typeof(module))==="object"?module.exports:{});try{regeneratorRuntime=runtime;}catch(accidentalStrictMode){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
if((typeof globalThis==="undefined"?"undefined":_typeof(globalThis))==="object"){globalThis.regeneratorRuntime=runtime;}else{Function("r","regeneratorRuntime = r")(runtime);}}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(188)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var isCallable = __webpack_require__(5);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(85);
var requireObjectCoercible = __webpack_require__(25);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(25);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ActionManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _ABTestManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(173);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ABTestManager__WEBPACK_IMPORTED_MODULE_1__["a"]; });



/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(0);
var uncurryThis = __webpack_require__(81);
var $indexOf = __webpack_require__(111).indexOf;
var arrayMethodIsStrict = __webpack_require__(56);

var nativeIndexOf = uncurryThis([].indexOf);

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: FORCED }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf(this, searchElement, fromIndex) || 0
      : $indexOf(this, searchElement, fromIndex);
  }
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var makeBuiltIn = __webpack_require__(153);
var defineProperty = __webpack_require__(24);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(24).f;
var hasOwn = __webpack_require__(12);
var wellKnownSymbol = __webpack_require__(4);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var fails = __webpack_require__(2);
var isArray = __webpack_require__(67);
var isObject = __webpack_require__(18);
var toObject = __webpack_require__(32);
var lengthOfArrayLike = __webpack_require__(39);
var doesNotExceedSafeInteger = __webpack_require__(201);
var createProperty = __webpack_require__(82);
var arraySpeciesCreate = __webpack_require__(139);
var arrayMethodHasSpeciesSupport = __webpack_require__(88);
var wellKnownSymbol = __webpack_require__(4);
var V8_VERSION = __webpack_require__(79);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(5);
var tryToString = __webpack_require__(64);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__(53);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var FUNCTION_NAME_EXISTS = __webpack_require__(66).EXISTS;
var uncurryThis = __webpack_require__(1);
var defineBuiltInAccessor = __webpack_require__(35);

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineBuiltInAccessor(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),
/* 41 */
/***/ (function(module, exports) {

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(246);
__webpack_require__(248);
__webpack_require__(249);
__webpack_require__(250);
__webpack_require__(252);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(0);
var DESCRIPTORS = __webpack_require__(8);
var global = __webpack_require__(3);
var uncurryThis = __webpack_require__(1);
var hasOwn = __webpack_require__(12);
var isCallable = __webpack_require__(5);
var isPrototypeOf = __webpack_require__(47);
var toString = __webpack_require__(9);
var defineBuiltInAccessor = __webpack_require__(35);
var copyConstructorProperties = __webpack_require__(138);

var NativeSymbol = global.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
  var thisSymbolValue = uncurryThis(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineBuiltInAccessor(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(101);

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(81);
var aCallable = __webpack_require__(38);
var NATIVE_BIND = __webpack_require__(91);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var definePropertyModule = __webpack_require__(24);
var createPropertyDescriptor = __webpack_require__(55);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(7);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(99);
var anObject = __webpack_require__(10);
var isNullOrUndefined = __webpack_require__(41);
var requireObjectCoercible = __webpack_require__(25);
var sameValue = __webpack_require__(207);
var toString = __webpack_require__(9);
var getMethod = __webpack_require__(49);
var regExpExec = __webpack_require__(100);

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__(38);
var isNullOrUndefined = __webpack_require__(41);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(45);
var uncurryThis = __webpack_require__(1);
var IndexedObject = __webpack_require__(85);
var toObject = __webpack_require__(32);
var lengthOfArrayLike = __webpack_require__(39);
var arraySpeciesCreate = __webpack_require__(139);

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var trunc = __webpack_require__(226);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(52);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(10);
var definePropertiesModule = __webpack_require__(155);
var enumBugKeys = __webpack_require__(116);
var hiddenKeys = __webpack_require__(86);
var html = __webpack_require__(156);
var documentCreateElement = __webpack_require__(93);
var sharedKey = __webpack_require__(95);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(2);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(30);
var store = __webpack_require__(114);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.29.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(79);
var fails = __webpack_require__(2);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(63);
var call = __webpack_require__(7);
var uncurryThis = __webpack_require__(1);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(99);
var fails = __webpack_require__(2);
var anObject = __webpack_require__(10);
var isCallable = __webpack_require__(5);
var isNullOrUndefined = __webpack_require__(41);
var toIntegerOrInfinity = __webpack_require__(52);
var toLength = __webpack_require__(53);
var toString = __webpack_require__(9);
var requireObjectCoercible = __webpack_require__(25);
var advanceStringIndex = __webpack_require__(122);
var getMethod = __webpack_require__(49);
var getSubstitution = __webpack_require__(231);
var regExpExec = __webpack_require__(100);
var wellKnownSymbol = __webpack_require__(4);

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = __webpack_require__(66).PROPER;
var defineBuiltIn = __webpack_require__(19);
var anObject = __webpack_require__(10);
var $toString = __webpack_require__(9);
var fails = __webpack_require__(2);
var getRegExpFlags = __webpack_require__(152);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(118);
var isCallable = __webpack_require__(5);
var classofRaw = __webpack_require__(31);
var wellKnownSymbol = __webpack_require__(4);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var call = __webpack_require__(7);
var propertyIsEnumerableModule = __webpack_require__(96);
var createPropertyDescriptor = __webpack_require__(55);
var toIndexedObject = __webpack_require__(29);
var toPropertyKey = __webpack_require__(84);
var hasOwn = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(148);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(91);

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),
/* 64 */
/***/ (function(module, exports) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(258);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var hasOwn = __webpack_require__(12);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(31);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var from = __webpack_require__(170);
var checkCorrectnessOfIteration = __webpack_require__(133);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);__webpack_require__(43);__webpack_require__(44);__webpack_require__(15);__webpack_require__(6);__webpack_require__(14);__webpack_require__(20);function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/**
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
 */function isObject(value){var type=_typeof(value);return value!=null&&(type=='object'||type=='function');}module.exports=isObject;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(151);
var enumBugKeys = __webpack_require__(116);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);

module.exports = global.Promise;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var NativePromiseConstructor = __webpack_require__(72);
var isCallable = __webpack_require__(5);
var isForced = __webpack_require__(109);
var inspectSource = __webpack_require__(120);
var wellKnownSymbol = __webpack_require__(4);
var IS_BROWSER = __webpack_require__(239);
var IS_DENO = __webpack_require__(160);
var IS_PURE = __webpack_require__(30);
var V8_VERSION = __webpack_require__(79);

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT;
});

module.exports = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  SUBCLASSING: SUBCLASSING
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(38);

var $TypeError = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw $TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var isArray = __webpack_require__(67);
var isConstructor = __webpack_require__(92);
var isObject = __webpack_require__(18);
var toAbsoluteIndex = __webpack_require__(105);
var lengthOfArrayLike = __webpack_require__(39);
var toIndexedObject = __webpack_require__(29);
var createProperty = __webpack_require__(82);
var wellKnownSymbol = __webpack_require__(4);
var arrayMethodHasSpeciesSupport = __webpack_require__(88);
var nativeSlice = __webpack_require__(108);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var $parseInt = __webpack_require__(257);

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(198);
var anObject = __webpack_require__(10);
var aPossiblePrototype = __webpack_require__(224);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(151);
var enumBugKeys = __webpack_require__(116);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var userAgent = __webpack_require__(80);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__(31);
var uncurryThis = __webpack_require__(1);

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__(84);
var definePropertyModule = __webpack_require__(24);
var createPropertyDescriptor = __webpack_require__(55);

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(28);
var isCallable = __webpack_require__(5);
var isPrototypeOf = __webpack_require__(47);
var USE_SYMBOL_AS_UID = __webpack_require__(150);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__(185);
var isSymbol = __webpack_require__(83);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1);
var fails = __webpack_require__(2);
var classof = __webpack_require__(31);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var toAbsoluteIndex = __webpack_require__(105);
var lengthOfArrayLike = __webpack_require__(39);
var createProperty = __webpack_require__(82);

var $Array = Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(2);
var wellKnownSymbol = __webpack_require__(4);
var V8_VERSION = __webpack_require__(79);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var classof = __webpack_require__(31);

module.exports = typeof process != 'undefined' && classof(process) == 'process';

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(193)))

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(61);
var getMethod = __webpack_require__(49);
var isNullOrUndefined = __webpack_require__(41);
var Iterators = __webpack_require__(68);
var wellKnownSymbol = __webpack_require__(4);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(2);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1);
var fails = __webpack_require__(2);
var isCallable = __webpack_require__(5);
var classof = __webpack_require__(61);
var getBuiltIn = __webpack_require__(28);
var inspectSource = __webpack_require__(120);

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var isObject = __webpack_require__(18);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(2);
var global = __webpack_require__(3);

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(57);
var uid = __webpack_require__(110);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(7);
var uncurryThis = __webpack_require__(1);
var toString = __webpack_require__(9);
var regexpFlags = __webpack_require__(119);
var stickyHelpers = __webpack_require__(94);
var shared = __webpack_require__(57);
var create = __webpack_require__(54);
var getInternalState = __webpack_require__(26).get;
var UNSUPPORTED_DOT_ALL = __webpack_require__(121);
var UNSUPPORTED_NCG = __webpack_require__(154);

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(17);
var uncurryThis = __webpack_require__(81);
var defineBuiltIn = __webpack_require__(19);
var regexpExec = __webpack_require__(98);
var fails = __webpack_require__(2);
var wellKnownSymbol = __webpack_require__(4);
var createNonEnumerableProperty = __webpack_require__(46);

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(7);
var anObject = __webpack_require__(10);
var isCallable = __webpack_require__(5);
var classof = __webpack_require__(31);
var regexpExec = __webpack_require__(98);

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw $TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(202);
var hasOwn = __webpack_require__(12);
var wrappedWellKnownSymbolModule = __webpack_require__(162);
var defineProperty = __webpack_require__(24).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionManager; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(135);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}var ActionManager=/*#__PURE__*/function(){function ActionManager(_ref){var user=_ref.user,projectName=_ref.projectName,trackOnce=_ref.trackOnce,enableDebugMode=_ref.enableDebugMode;_classCallCheck(this,ActionManager);this.user=user||{};this.projectName=projectName;this.trackOnce=trackOnce||false;this.JotFormActions=null;this.registerJotformAction=this.registerJotformAction.bind(this);this.sentEvents={};this.enableDebugMode=enableDebugMode||false;}_createClass(ActionManager,[{key:"setupJotFormActions",value:function setupJotFormActions(){var _global=global,JotFormActions=_global.JotFormActions;if(typeof JotFormActions!=='function')return;this.JotFormActions=JotFormActions(this.projectName);}},{key:"tick",value:function tick(){var _this$JotFormActions;var _ref2=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref2$actor=_ref2.actor,actor=_ref2$actor===void 0?'':_ref2$actor,_ref2$action=_ref2.action,action=_ref2$action===void 0?'':_ref2$action,_ref2$target=_ref2.target,target=_ref2$target===void 0?'':_ref2$target;(_this$JotFormActions=this.JotFormActions)===null||_this$JotFormActions===void 0?void 0:_this$JotFormActions.tick({actor:actor,action:action,target:target});if(this.trackOnce){this.sentEvents["".concat(action).concat(target)]=true;}}},{key:"logDebugAction",value:function logDebugAction(_ref3){var actor=_ref3.actor,action=_ref3.action,target=_ref3.target;console.log({actor:actor,action:action,target:target});var hasMissingParameter=[actor,action,target].some(function(param){return!param;});if(hasMissingParameter){console.warn('Missing parameter in actor, action or target');}this.tick({actor:actor,action:action,target:target});}},{key:"registerJotformAction",value:function registerJotformAction(_ref4){var action=_ref4.action,target=_ref4.target;if(!this.JotFormActions){this.setupJotFormActions();}if(this.trackOnce&&this.sentEvents["".concat(action).concat(target)]){return;}var _this$user=this.user,_this$user$username=_this$user.username,actor=_this$user$username===void 0?null:_this$user$username,accountType=_this$user.account_type;var isEnvProd=global.JOTFORM_ENV==='PRODUCTION';var isJotFormer=['ADMIN','SUPPORT','INTERN'].indexOf(accountType===null||accountType===void 0?void 0:accountType.name)>-1;if(this.enableDebugMode){this.logDebugAction({actor:actor,action:action,target:target});return;}if(!this.JotFormActions||!actor||!isEnvProd||isJotFormer)return;this.tick({actor:actor,action:action,target:target});}}]);return ActionManager;}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50)))

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(63);
var call = __webpack_require__(7);
var uncurryThis = __webpack_require__(1);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(99);
var anObject = __webpack_require__(10);
var isNullOrUndefined = __webpack_require__(41);
var isRegExp = __webpack_require__(117);
var requireObjectCoercible = __webpack_require__(25);
var speciesConstructor = __webpack_require__(131);
var advanceStringIndex = __webpack_require__(122);
var toLength = __webpack_require__(53);
var toString = __webpack_require__(9);
var getMethod = __webpack_require__(49);
var arraySlice = __webpack_require__(87);
var callRegExpExec = __webpack_require__(100);
var regexpExec = __webpack_require__(98);
var stickyHelpers = __webpack_require__(94);
var fails = __webpack_require__(2);

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis(/./.exec);
var push = uncurryThis($push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = isNullOrUndefined(separator) ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(7);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(99);
var anObject = __webpack_require__(10);
var isNullOrUndefined = __webpack_require__(41);
var toLength = __webpack_require__(53);
var toString = __webpack_require__(9);
var requireObjectCoercible = __webpack_require__(25);
var getMethod = __webpack_require__(49);
var advanceStringIndex = __webpack_require__(122);
var regExpExec = __webpack_require__(100);

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(52);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(47);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw $TypeError('Incorrect invocation');
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(12);
var isCallable = __webpack_require__(5);
var toObject = __webpack_require__(32);
var sharedKey = __webpack_require__(95);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(167);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1);

module.exports = uncurryThis([].slice);


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(2);
var isCallable = __webpack_require__(5);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(29);
var toAbsoluteIndex = __webpack_require__(105);
var lengthOfArrayLike = __webpack_require__(39);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(7);
var aCallable = __webpack_require__(38);
var anObject = __webpack_require__(10);
var tryToString = __webpack_require__(64);
var getIteratorMethod = __webpack_require__(90);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),
/* 113 */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var defineGlobalProperty = __webpack_require__(115);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 116 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
var classof = __webpack_require__(31);
var wellKnownSymbol = __webpack_require__(4);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(4);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(10);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1);
var isCallable = __webpack_require__(5);
var store = __webpack_require__(114);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(2);
var global = __webpack_require__(3);

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(123).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1);
var toIntegerOrInfinity = __webpack_require__(52);
var toString = __webpack_require__(9);
var requireObjectCoercible = __webpack_require__(25);

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 124 */
/***/ (function(module, exports) {

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw $TypeError('Not enough arguments');
  return passed;
};


/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
var persOnbForOrderLanding2=function persOnbForOrderLanding2(){var abTestConfig={TEST_NAME:'persOnbForOrderLanding2',CONTROL_VARIANT:'3272',TEST_VARIANT:'3282',defaultReferrer:'/myforms/?action=orderFormTemplates/',urlParams:{enableParam:'signup-and-land-create-wizard=true',disableParam:'signup-and-land-create-wizard=false'}};var isEnvAndUserEligable=function isEnvAndUserEligable(user){var isEnvProd=global.JOTFORM_ENV==='PRODUCTION';var isMobileApp=typeof window.sendMessageToJFMobile==='function';var accountType=user&&user.account_type&&user.account_type.name;var isJotFormer=accountType&&['ADMIN','SUPPORT','INTERN'].indexOf(accountType)>=0;var isOrderFormLanding=window.location.pathname==='/order-form-creator/';var isEu=window.location.href.indexOf('eu.jotform.com')>-1;return isEnvProd&&!isMobileApp&&!isJotFormer&&isOrderFormLanding&&!isEu;};var init=function init(user){var forceEnableWithUrlParams=window.location.href.indexOf(abTestConfig.urlParams.enableParam)>-1;var forceDisableWithUrlParams=window.location.href.indexOf(abTestConfig.urlParams.disableParam)>-1;if(forceEnableWithUrlParams){window.location.href=abTestConfig.defaultReferrer;return;}if(forceDisableWithUrlParams||!isEnvAndUserEligable(user)){window.location.reload();return;}var _user$abTestInfo=user.abTestInfo;_user$abTestInfo=_user$abTestInfo===void 0?{}:_user$abTestInfo;var id=_user$abTestInfo.id,referrer=_user$abTestInfo.referrer;if(id===abTestConfig.TEST_VARIANT){window.location.href=referrer;}else{window.location.reload();}};return{init:init};};/* harmony default export */ __webpack_exports__["default"] = (persOnbForOrderLanding2);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50)))

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABTestVariantCache; });
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ABTestVariantCacheClass=function ABTestVariantCacheClass(){_classCallCheck(this,ABTestVariantCacheClass);};var ABTestVariantCache=new ABTestVariantCacheClass();

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(45);
var call = __webpack_require__(7);
var anObject = __webpack_require__(10);
var tryToString = __webpack_require__(64);
var isArrayIteratorMethod = __webpack_require__(140);
var lengthOfArrayLike = __webpack_require__(39);
var isPrototypeOf = __webpack_require__(47);
var getIterator = __webpack_require__(112);
var getIteratorMethod = __webpack_require__(90);
var iteratorClose = __webpack_require__(132);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var $map = __webpack_require__(51).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(88);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(28);
var defineBuiltInAccessor = __webpack_require__(35);
var wellKnownSymbol = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(8);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10);
var aConstructor = __webpack_require__(191);
var isNullOrUndefined = __webpack_require__(41);
var wellKnownSymbol = __webpack_require__(4);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(7);
var anObject = __webpack_require__(10);
var getMethod = __webpack_require__(49);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(4);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1);
var requireObjectCoercible = __webpack_require__(25);
var toString = __webpack_require__(9);
var whitespaces = __webpack_require__(113);

var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var $some = __webpack_require__(51).some;
var arrayMethodIsStrict = __webpack_require__(56);

var STRICT_METHOD = arrayMethodIsStrict('some');

// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);__webpack_require__(43);__webpack_require__(44);__webpack_require__(15);__webpack_require__(6);__webpack_require__(14);__webpack_require__(20);function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var freeGlobal=__webpack_require__(216);/** Detect free variable `self`. */var freeSelf=(typeof self==="undefined"?"undefined":_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();module.exports=root;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var root=__webpack_require__(136);/** Built-in value references. */var _Symbol=root.Symbol;module.exports=_Symbol;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(12);
var ownKeys = __webpack_require__(200);
var getOwnPropertyDescriptorModule = __webpack_require__(62);
var definePropertyModule = __webpack_require__(24);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(232);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(4);
var Iterators = __webpack_require__(68);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(4);
var create = __webpack_require__(54);
var defineProperty = __webpack_require__(24).f;

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var call = __webpack_require__(7);
var IS_PURE = __webpack_require__(30);
var FunctionName = __webpack_require__(66);
var isCallable = __webpack_require__(5);
var createIteratorConstructor = __webpack_require__(165);
var getPrototypeOf = __webpack_require__(107);
var setPrototypeOf = __webpack_require__(77);
var setToStringTag = __webpack_require__(36);
var createNonEnumerableProperty = __webpack_require__(46);
var defineBuiltIn = __webpack_require__(19);
var wellKnownSymbol = __webpack_require__(4);
var Iterators = __webpack_require__(68);
var IteratorsCore = __webpack_require__(166);

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),
/* 143 */
/***/ (function(module, exports) {

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(117);

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw $TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(4);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var $values = __webpack_require__(261).values;

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),
/* 147 */
/***/ (function(module, exports) {

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var fails = __webpack_require__(2);
var createElement = __webpack_require__(93);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var fails = __webpack_require__(2);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(58);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1);
var hasOwn = __webpack_require__(12);
var toIndexedObject = __webpack_require__(29);
var indexOf = __webpack_require__(111).indexOf;
var hiddenKeys = __webpack_require__(86);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(7);
var hasOwn = __webpack_require__(12);
var isPrototypeOf = __webpack_require__(47);
var regExpFlags = __webpack_require__(119);

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1);
var fails = __webpack_require__(2);
var isCallable = __webpack_require__(5);
var hasOwn = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(8);
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__(66).CONFIGURABLE;
var inspectSource = __webpack_require__(120);
var InternalStateModule = __webpack_require__(26);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(2);
var global = __webpack_require__(3);

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(149);
var definePropertyModule = __webpack_require__(24);
var anObject = __webpack_require__(10);
var toIndexedObject = __webpack_require__(29);
var objectKeys = __webpack_require__(71);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(28);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var apply = __webpack_require__(63);
var bind = __webpack_require__(45);
var isCallable = __webpack_require__(5);
var hasOwn = __webpack_require__(12);
var fails = __webpack_require__(2);
var html = __webpack_require__(156);
var arraySlice = __webpack_require__(108);
var createElement = __webpack_require__(93);
var validateArgumentsLength = __webpack_require__(124);
var IS_IOS = __webpack_require__(158);
var IS_NODE = __webpack_require__(89);

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global.location;
});

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var eventListener = function (event) {
  run(event.data);
};

var globalPostMessageDefer = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    global.addEventListener('message', eventListener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(80);

// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),
/* 159 */
/***/ (function(module, exports) {

var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    var tail = this.tail;
    if (tail) tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      var next = this.head = entry.next;
      if (next === null) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;


/***/ }),
/* 160 */
/***/ (function(module, exports) {

/* global Deno -- Deno case */
module.exports = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var NativePromiseConstructor = __webpack_require__(72);
var checkCorrectnessOfIteration = __webpack_require__(133);
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(73).CONSTRUCTOR;

module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
});


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(4);

exports.f = wellKnownSymbol;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(58);

/* eslint-disable es/no-symbol -- safe */
module.exports = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(51).forEach;
var arrayMethodIsStrict = __webpack_require__(56);

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(166).IteratorPrototype;
var create = __webpack_require__(54);
var createPropertyDescriptor = __webpack_require__(55);
var setToStringTag = __webpack_require__(36);
var Iterators = __webpack_require__(68);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(2);
var isCallable = __webpack_require__(5);
var isObject = __webpack_require__(18);
var create = __webpack_require__(54);
var getPrototypeOf = __webpack_require__(107);
var defineBuiltIn = __webpack_require__(19);
var wellKnownSymbol = __webpack_require__(4);
var IS_PURE = __webpack_require__(30);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(2);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 168 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(93);

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(45);
var call = __webpack_require__(7);
var toObject = __webpack_require__(32);
var callWithSafeIterationClosing = __webpack_require__(254);
var isArrayIteratorMethod = __webpack_require__(140);
var isConstructor = __webpack_require__(92);
var lengthOfArrayLike = __webpack_require__(39);
var createProperty = __webpack_require__(82);
var getIterator = __webpack_require__(112);
var getIteratorMethod = __webpack_require__(90);

var $Array = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(8);
var uncurryThis = __webpack_require__(1);
var call = __webpack_require__(7);
var fails = __webpack_require__(2);
var objectKeys = __webpack_require__(71);
var getOwnPropertySymbolsModule = __webpack_require__(97);
var propertyIsEnumerableModule = __webpack_require__(96);
var toObject = __webpack_require__(32);
var IndexedObject = __webpack_require__(85);

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(2);
var wellKnownSymbol = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(8);
var IS_PURE = __webpack_require__(30);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = !fails(function () {
  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || (!searchParams.size && (IS_PURE || !DESCRIPTORS))
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABTestManager; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(214);
/* harmony import */ var core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(129);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(176);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(146);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(48);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(65);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _ActionManager__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(102);
/* harmony import */ var _AbTestVariantCache__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(127);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}// "@jotforminc/abtest-manager": "7.7.0"
// DUPLICATE AND MODIFIED VERSION OF THE PACKAGE FOR PERFORMANCE CONCERNS
// CDN FILES CANT BENEFIT FROM THE THREE SHAKING
// THIS LIB INCREASING THE BUNDLE SIZE UNNECESSARILY
var ABTestManager=/*#__PURE__*/function(){function ABTestManager(_ref){var _document,_document$location,_this$user,_this$user$account_ty;var user=_ref.user,testName=_ref.testName,urlParam=_ref.urlParam,debugMode=_ref.debugMode,isTestEnabled=_ref.isTestEnabled,testVariantCode=_ref.testVariantCode,controlVariantCode=_ref.controlVariantCode,cacheVariantCodeAtLocalStorage=_ref.cacheVariantCodeAtLocalStorage,customUserChecks=_ref.customUserChecks,setUserSetting=_ref.setUserSetting;_classCallCheck(this,ABTestManager);this.user=user||{};this.testName=testName;this.urlParam=urlParam||'';this.isTestEnabled=isTestEnabled||false;this.customUserChecks=customUserChecks||{};this.cacheVariantCodeAtLocalStorage=cacheVariantCodeAtLocalStorage||false;this.isSingleTestVariant=typeof testVariantCode==='string'&&testVariantCode;this.isMultipleTestVariant=_typeof(testVariantCode)==='object'&&Array.isArray(testVariantCode);this.testConfig={testName:testName,controlVariantCode:controlVariantCode,testVariantCode:testVariantCode,urlParam:urlParam,setUserSetting:setUserSetting};this.searchParams=new URLSearchParams(((_document=document)===null||_document===void 0?void 0:(_document$location=_document.location)===null||_document$location===void 0?void 0:_document$location.search)||'');this.isEnvProd=global.JOTFORM_ENV==='PRODUCTION';this.isMobileApp=global.navigator.userAgent.indexOf('JotForm Mobile')>-1||global.navigator.userAgent.indexOf('JFCEMobile')>-1;this.localStorageVariantKey="".concat(this.testName,"VariantCode");this.isJotFormer=['ADMIN','SUPPORT','INTERN'].indexOf((_this$user=this.user)===null||_this$user===void 0?void 0:(_this$user$account_ty=_this$user.account_type)===null||_this$user$account_ty===void 0?void 0:_this$user$account_ty.name)>-1;this.isVariantCodeSingletonCached=!!this.getVariantFromSingletonCache()||false;this.isVariantCodeLocalStorageCached=!!this.getVariantFromLocalStorage()||false;// debug mode
var debugModeDefaults={forceUserEligible:false,forceTestVariant:false,forceControlVariant:false,logTestState:false};this.debugMode=_objectSpread(_objectSpread({},debugModeDefaults),debugMode);if(this.isDebugModeOn){this.showDebugModeWarnings();}// jotform actions
this.actionManager=new _ActionManager__WEBPACK_IMPORTED_MODULE_20__[/* ActionManager */ "a"](_objectSpread({user:this.user,projectName:this.testName},this.isDebugModeOn?{enableDebugMode:true}:{}));var shouldRegisterActions=this.isTestEnabled&&this.isUserEligible||this.isDebugModeOn||this.hasTestVariantUrlParam||this.hasControlVariantUrlParam||this.hasTestVariantUrlParamAmongMultiple();this.registerABTestAction=shouldRegisterActions?this.actionManager.registerJotformAction:function(f){return f;};}// are base checks valid
_createClass(ABTestManager,[{key:"getVariantFromSingletonCache",// get/set variant cache
value:function getVariantFromSingletonCache(){return _AbTestVariantCache__WEBPACK_IMPORTED_MODULE_21__[/* ABTestVariantCache */ "a"][this.testName]||'';}},{key:"setVariantToSingletonCache",value:function setVariantToSingletonCache(variation){if(!this.getVariantFromSingletonCache()){_AbTestVariantCache__WEBPACK_IMPORTED_MODULE_21__[/* ABTestVariantCache */ "a"][this.testName]=variation;}if(this.isDebugModeOn){console.warn("Warning: ".concat(this.testName," A/B test singleton cached variation code: ").concat(variation));}}// get/set variant local storage
},{key:"getVariantFromLocalStorage",value:function getVariantFromLocalStorage(){return window.localStorage.getItem(this.localStorageVariantKey)||'';}},{key:"setVariantToLocalStorage",value:function setVariantToLocalStorage(variation){if(this.getVariantFromLocalStorage())return;window.localStorage.setItem(this.localStorageVariantKey,variation);if(this.isDebugModeOn){console.warn("Warning: ".concat(this.testName," A/B test localStorage cached variation code: ").concat(variation));}}// check current variant matches any of the multiple variants
},{key:"includesAnyTestVariant",value:function includesAnyTestVariant(currentVariant,multipleVariants){return multipleVariants.map(function(variant){return variant.code;}).includes(currentVariant);}// is variant code equal to test variant
},{key:"variantResolver",// variant resolver
value:function variantResolver(cb){if(typeof cb!=='function')return;if(this.isSingleTestVariant&&this.isVariantCodeEqualTestVariant){cb(true);}else if(this.isMultipleTestVariant){var isTestVariant=this.isVariantCodeEqualTestVariant;cb([isTestVariant,this.cachedVariantCode]);}else{cb(false);}}// get test variant
},{key:"getTestVariant",value:function getTestVariant(){var _this=this;return new Promise(function(resolve,reject){fetch("/API/user/abtest/".concat(_this.testName,"/variation").concat(_this.testConfig.setUserSetting?'?setUserSetting=true':'')).then(function(response){return response.json();}).then(function(res){var variation=res.content.variation;variation=variation?variation.toString():variation;resolve(variation);if(_this.isDebugModeOn){console.warn("Warning: ".concat(_this.testName," A/B test variant request success."));}}).catch(reject);});}},{key:"hasTestVariantUrlParamAmongMultiple",value:function hasTestVariantUrlParamAmongMultiple(){var _this2=this;if(!this.isMultipleTestVariant)return false;var multipleVariants=this.testConfig.testVariantCode;var result=false;multipleVariants.forEach(function(variant){if(_this2.searchParams.get("".concat(variant.urlParam))==='true'){result=[true,variant.code];}});return result;}// is test variant
},{key:"isTestVariant",value:function isTestVariant(){var _this3=this;return new Promise(function(resolve,reject){var _this3$debugMode=_this3.debugMode,forceTestVariant=_this3$debugMode.forceTestVariant,forceControlVariant=_this3$debugMode.forceControlVariant;// checks for enabling
if(_this3.isSingleTestVariant&&(forceTestVariant||_this3.hasTestVariantUrlParam)){resolve(true);return;}// checks for multiple variant enabling
var multipleEnablerResult=_this3.hasTestVariantUrlParamAmongMultiple();if(_this3.isMultipleTestVariant&&multipleEnablerResult){resolve(multipleEnablerResult);return;}// check for settings cache
// feature: do not allow user settings variant code for multiple variants for now...
if(!_this3.isMultipleTestVariant&&_this3.testConfig.setUserSetting&&_this3.user[_this3.testName]){resolve(_this3.user[_this3.testName]===_this3.testConfig.testVariantCode);return;}// checks for disabling
if(!_this3.isTestEnabled||forceControlVariant||_this3.hasControlVariantUrlParam||!_this3.isUserEligible){var controlVariantCode=_this3.testConfig.controlVariantCode;var result=_this3.isSingleTestVariant?false:[false,controlVariantCode];resolve(result);return;}// is variant code singleton cached or local storage cached
if(_this3.isVariantCodeSingletonCached||_this3.isVariantCodeLocalStorageCached){_this3.variantResolver(function(result){return resolve(result);});return;}// get variant code from api
_this3.getTestVariant().then(function(variation){// between component mount and unmount ABTestHelper instance is created from scratch
// so caching can be useful to prevent repeating network requests
// cache level 1: singleton cache
_this3.setVariantToSingletonCache(variation);// optional cache level 2: local storage cache
if(variation&&_this3.cacheVariantCodeAtLocalStorage){_this3.setVariantToLocalStorage(variation);}if(_this3.isDebugModeOn){_this3.showDebugModeWarnings();}_this3.variantResolver(function(result){return resolve(result);});}).catch(reject);});}// is debug mode on
},{key:"showDebugModeWarnings",// show debugMode warnings
value:function showDebugModeWarnings(){var _this4=this;var _this$debugMode=this.debugMode,forceUserEligible=_this$debugMode.forceUserEligible,forceTestVariant=_this$debugMode.forceTestVariant,forceControlVariant=_this$debugMode.forceControlVariant,logTestState=_this$debugMode.logTestState;var forceFlags=[forceUserEligible,forceTestVariant,forceControlVariant,logTestState];if(forceFlags.includes(true)){console.warn("Warning: ".concat(this.testName," A/B test is running on debug mode!"));// log debug mode flags
Object.keys(this.debugMode).forEach(function(forceFlagKey){if(!_this4.debugMode[forceFlagKey])return;console.warn("".concat(forceFlagKey," property is ").concat(_this4.debugMode[forceFlagKey]));});var warnData={isTestEnabled:this.isTestEnabled,testConfig:this.testConfig,variantCaches:{singletonCachedVariantCode:this.getVariantFromSingletonCache(),localStorageCachedVariantCode:this.getVariantFromLocalStorage()},baseChecks:{isJotFormer:this.isJotFormer,isEnvProd:this.isEnvProd,isMobileApp:this.isMobileApp},customUserChecks:this.customUserChecks};console.warn("Warning: ".concat(this.testName," test state:"),warnData);}}},{key:"areBaseChecksValid",get:function get(){return this.isEnvProd&&!this.isJotFormer&&!this.isMobileApp;}// are custom user checks valid
},{key:"areCustomUserChecksValid",get:function get(){return Object.values(this.customUserChecks).length>0?Object.values(this.customUserChecks).every(function(customCheck){return customCheck;}):true;}// is user eligible
},{key:"isUserEligible",get:function get(){var forceUserEligible=this.debugMode.forceUserEligible;if(forceUserEligible)return true;var isValid=this.areBaseChecksValid&&this.areCustomUserChecksValid;if(isValid){return true;}if(!isValid&&this.isDebugModeOn){console.warn("Warning: ".concat(this.testName," A/B test user is not eligible."));}return false;}// has test variant url param
},{key:"hasTestVariantUrlParam",get:function get(){return this.searchParams.get("".concat(this.urlParam))==='true';}// has control variant url param
},{key:"hasControlVariantUrlParam",get:function get(){return this.searchParams.get("".concat(this.urlParam))==='false';}},{key:"cachedVariantCode",get:function get(){return this.getVariantFromSingletonCache()||this.getVariantFromLocalStorage();}},{key:"isVariantCodeEqualTestVariant",get:function get(){var testVariantCode=this.testConfig.testVariantCode;if(this.isSingleTestVariant){return this.cachedVariantCode===testVariantCode;}if(this.isMultipleTestVariant){return this.includesAnyTestVariant(this.cachedVariantCode,testVariantCode);}return false;}},{key:"isDebugModeOn",get:function get(){return Object.values(this.debugMode).includes(true);}}]);return ABTestManager;}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50)))

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var debounce=__webpack_require__(215),isObject=__webpack_require__(70);/** Error message constants. */var FUNC_ERROR_TEXT='Expected a function';/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */function throttle(func,wait,options){var leading=true,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}if(isObject(options)){leading='leading'in options?!!options.leading:leading;trailing='trailing'in options?!!options.trailing:trailing;}return debounce(func,wait,{'leading':leading,'maxWait':wait,'trailing':trailing});}module.exports=throttle;

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initABTestStickyFooterBanner; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _abtestManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33);
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}var initABTestStickyFooterBanner=/*#__PURE__*/function(){var _ref=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(user){var _user$usage,_user$account_type,_user$account_type$li,_user$account_type2;var formUsage,formLimit,belowLimits,isGuestUser,abTestManager,_yield$abTestManager$,_yield$abTestManager$2,isTestVariant,variantCode,container,_window,_window$user,_global,JotFormActions,blogStickyFooterBannerJFA,actionActor,cta;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:formUsage=user===null||user===void 0?void 0:(_user$usage=user.usage)===null||_user$usage===void 0?void 0:_user$usage.form_count;formLimit=user===null||user===void 0?void 0:(_user$account_type=user.account_type)===null||_user$account_type===void 0?void 0:(_user$account_type$li=_user$account_type.limits)===null||_user$account_type$li===void 0?void 0:_user$account_type$li.formCount;belowLimits=formUsage&&formLimit&&parseInt(formUsage,10)<parseInt(formLimit,10);isGuestUser=(user===null||user===void 0?void 0:(_user$account_type2=user.account_type)===null||_user$account_type2===void 0?void 0:_user$account_type2.name)==='GUEST';if(!(belowLimits===false||!isGuestUser)){_context.next=6;break;}return _context.abrupt("return");case 6:abTestManager=new _abtestManager__WEBPACK_IMPORTED_MODULE_7__[/* ABTestManager */ "a"]({isTestEnabled:true,testName:'blogStickyFooterBanner',controlVariantCode:'7361',testVariantCode:[{code:'7371',urlParam:'sticky-footer-banner-b'},{code:'7381',urlParam:'sticky-footer-banner-c'}],cacheVariantCodeAtLocalStorage:true,urlParam:'sticky-footer-banner-a',user:user});_context.prev=7;_context.next=10;return abTestManager.isTestVariant();case 10:_yield$abTestManager$=_context.sent;_yield$abTestManager$2=_slicedToArray(_yield$abTestManager$,2);isTestVariant=_yield$abTestManager$2[0];variantCode=_yield$abTestManager$2[1];container=document.querySelector("div[data-variant=\"".concat(variantCode,"\"]"));if(!container){_context.next=25;break;}container.classList.remove('hide');document.querySelectorAll('div.sticky-common-banner.hide').forEach(function(hiddenContainer){hiddenContainer.remove();});_global=global,JotFormActions=_global.JotFormActions;if(!(typeof JotFormActions!=='function')){_context.next=21;break;}return _context.abrupt("return");case 21:blogStickyFooterBannerJFA=JotFormActions('blogStickyFooterBanner');actionActor=((_window=window)===null||_window===void 0?void 0:(_window$user=_window.user)===null||_window$user===void 0?void 0:_window$user.username)||'unknown';cta=document.querySelectorAll('.stickyFooterBannerCTA');if(cta.length>0){blogStickyFooterBannerJFA.tick({actor:actionActor,action:'seen',target:"banner_variant_".concat(variantCode)});cta.forEach(function(button){button.addEventListener('click',function(){console.log('clicked',variantCode);blogStickyFooterBannerJFA.tick({actor:actionActor,action:'click',target:"banner_variant_".concat(variantCode)});});});}case 25:_context.next=29;break;case 27:_context.prev=27;_context.t0=_context["catch"](7);case 29:case"end":return _context.stop();}}},_callee,null,[[7,27]]);}));return function initABTestStickyFooterBanner(_x){return _ref.apply(this,arguments);};}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50)))

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var toObject = __webpack_require__(32);
var nativeKeys = __webpack_require__(71);
var fails = __webpack_require__(2);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var uncurryThis = __webpack_require__(1);
var IndexedObject = __webpack_require__(85);
var toIndexedObject = __webpack_require__(29);
var arrayMethodIsStrict = __webpack_require__(56);

var nativeJoin = uncurryThis([].join);

var ES3_STRINGS = IndexedObject != Object;
var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: FORCED }, {
  join: function join(separator) {
    return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var global = __webpack_require__(3);
var uncurryThis = __webpack_require__(1);
var isForced = __webpack_require__(109);
var inheritIfRequired = __webpack_require__(184);
var createNonEnumerableProperty = __webpack_require__(46);
var getOwnPropertyNames = __webpack_require__(78).f;
var isPrototypeOf = __webpack_require__(47);
var isRegExp = __webpack_require__(117);
var toString = __webpack_require__(9);
var getRegExpFlags = __webpack_require__(152);
var stickyHelpers = __webpack_require__(94);
var proxyAccessor = __webpack_require__(227);
var defineBuiltIn = __webpack_require__(19);
var fails = __webpack_require__(2);
var hasOwn = __webpack_require__(12);
var enforceInternalState = __webpack_require__(26).enforce;
var setSpecies = __webpack_require__(130);
var wellKnownSymbol = __webpack_require__(4);
var UNSUPPORTED_DOT_ALL = __webpack_require__(121);
var UNSUPPORTED_NCG = __webpack_require__(154);

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError = global.SyntaxError;
var exec = uncurryThis(RegExpPrototype.exec);
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      result += chr + charAt(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      chr = chr + charAt(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec(IS_NCG, stringSlice(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString(pattern);
    flags = flags === undefined ? '' : toString(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  defineBuiltIn(global, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var $trim = __webpack_require__(134).trim;
var forcedStringTrimMethod = __webpack_require__(262);

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var $filter = __webpack_require__(51).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(88);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var defineBuiltIn = __webpack_require__(19);

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var fails = __webpack_require__(2);
var toObject = __webpack_require__(32);
var nativeGetPrototypeOf = __webpack_require__(107);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(167);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var assign = __webpack_require__(171);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(5);
var isObject = __webpack_require__(18);
var setPrototypeOf = __webpack_require__(77);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(7);
var isObject = __webpack_require__(18);
var isSymbol = __webpack_require__(83);
var getMethod = __webpack_require__(49);
var ordinaryToPrimitive = __webpack_require__(225);
var wellKnownSymbol = __webpack_require__(4);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var toISOString = __webpack_require__(255);

// `Date.prototype.toISOString` method
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit has a broken implementations
$({ target: 'Date', proto: true, forced: Date.prototype.toISOString !== toISOString }, {
  toISOString: toISOString
});


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);__webpack_require__(43);__webpack_require__(44);__webpack_require__(15);__webpack_require__(6);__webpack_require__(14);__webpack_require__(20);function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/**
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
 */function isObjectLike(value){return value!=null&&_typeof(value)=='object';}module.exports=isObjectLike;

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(31);
var toIndexedObject = __webpack_require__(29);
var $getOwnPropertyNames = __webpack_require__(78).f;
var arraySlice = __webpack_require__(87);

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var arraySlice = __webpack_require__(87);

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice(array, 0, middle), comparefn),
    mergeSort(arraySlice(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

module.exports = mergeSort;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var isConstructor = __webpack_require__(92);
var tryToString = __webpack_require__(64);

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol=__webpack_require__(137),getRawTag=__webpack_require__(266),objectToString=__webpack_require__(267);/** `Object#toString` result references. */var nullTag='[object Null]',undefinedTag='[object Undefined]';/** Built-in value references. */var symToStringTag=_Symbol?_Symbol.toStringTag:undefined;/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}module.exports=baseGetTag;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37);// shim for using process in browser
var process=module.exports={};// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){//normal enviroments in sane situations
return setTimeout(fun,0);}// if setTimeout wasn't available but was latter defined
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedSetTimeout(fun,0);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cachedSetTimeout.call(null,fun,0);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){//normal enviroments in sane situations
return clearTimeout(marker);}// if clearTimeout wasn't available but was latter defined
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedClearTimeout(marker);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cachedClearTimeout.call(null,marker);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};// v8 likes predictible objects
function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[];};process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var lastIndexOf = __webpack_require__(203);

// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(28);
var defineWellKnownSymbol = __webpack_require__(101);
var setToStringTag = __webpack_require__(36);

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag(getBuiltIn('Symbol'), 'Symbol');


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var setToStringTag = __webpack_require__(36);

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var setToStringTag = __webpack_require__(36);

// Math[@@toStringTag] property
// https://tc39.es/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1);
var aCallable = __webpack_require__(38);

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var isCallable = __webpack_require__(5);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(28);
var uncurryThis = __webpack_require__(1);
var getOwnPropertyNamesModule = __webpack_require__(78);
var getOwnPropertySymbolsModule = __webpack_require__(97);
var anObject = __webpack_require__(10);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 201 */
/***/ (function(module, exports) {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);

module.exports = global;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-lastindexof -- safe */
var apply = __webpack_require__(63);
var toIndexedObject = __webpack_require__(29);
var toIntegerOrInfinity = __webpack_require__(52);
var lengthOfArrayLike = __webpack_require__(39);
var arrayMethodIsStrict = __webpack_require__(56);

var min = Math.min;
var $lastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return apply($lastIndexOf, this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = lengthOfArrayLike(O);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toIntegerOrInfinity(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : $lastIndexOf;


/***/ }),
/* 204 */
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */var reWhitespace=/\s/;/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function trimmedEndIndex(string){var index=string.length;while(index--&&reWhitespace.test(string.charAt(index))){}return index;}module.exports=trimmedEndIndex;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);__webpack_require__(43);__webpack_require__(44);__webpack_require__(15);__webpack_require__(6);__webpack_require__(14);__webpack_require__(20);function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var baseGetTag=__webpack_require__(192),isObjectLike=__webpack_require__(187);/** `Object#toString` result references. */var symbolTag='[object Symbol]';/**
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
 */function isSymbol(value){return _typeof(value)=='symbol'||isObjectLike(value)&&baseGetTag(value)==symbolTag;}module.exports=isSymbol;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(8);
var defineBuiltInAccessor = __webpack_require__(35);
var regExpFlags = __webpack_require__(119);
var fails = __webpack_require__(2);

// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp = global.RegExp;
var RegExpPrototype = RegExp.prototype;

var FORCED = DESCRIPTORS && fails(function () {
  var INDICES_SUPPORT = true;
  try {
    RegExp('.', 'd');
  } catch (error) {
    INDICES_SUPPORT = false;
  }

  var O = {};
  // modern V8 bug
  var calls = '';
  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

  var addGetter = function (key, chr) {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(O, key, { get: function () {
      calls += chr;
      return true;
    } });
  };

  var pairs = {
    dotAll: 's',
    global: 'g',
    ignoreCase: 'i',
    multiline: 'm',
    sticky: 'y'
  };

  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

  for (var key in pairs) addGetter(key, pairs[key]);

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var result = Object.getOwnPropertyDescriptor(RegExpPrototype, 'flags').get.call(O);

  return result !== expected || calls !== expected;
});

// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED) defineBuiltInAccessor(RegExpPrototype, 'flags', {
  configurable: true,
  get: regExpFlags
});


/***/ }),
/* 207 */
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(52);
var toString = __webpack_require__(9);
var requireObjectCoercible = __webpack_require__(25);

var $RangeError = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n == Infinity) throw $RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var uncurryThis = __webpack_require__(81);
var getOwnPropertyDescriptor = __webpack_require__(62).f;
var toLength = __webpack_require__(53);
var toString = __webpack_require__(9);
var notARegExp = __webpack_require__(144);
var requireObjectCoercible = __webpack_require__(25);
var correctIsRegExpLogic = __webpack_require__(145);
var IS_PURE = __webpack_require__(30);

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var nativeStartsWith = uncurryThis(''.startsWith);
var stringSlice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString(searchString);
    return nativeStartsWith
      ? nativeStartsWith(that, search, index)
      : stringSlice(that, index, index + search.length) === search;
  }
});


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
__webpack_require__(253);


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var setPrototypeOf = __webpack_require__(77);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(101);

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var uncurryThis = __webpack_require__(1);
var isArray = __webpack_require__(67);

var nativeReverse = uncurryThis([].reverse);
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray(this)) this.length = this.length;
    return nativeReverse(this);
  }
});


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var $every = __webpack_require__(51).every;
var arrayMethodIsStrict = __webpack_require__(56);

var STRICT_METHOD = arrayMethodIsStrict('every');

// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
$({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var isObject=__webpack_require__(70),now=__webpack_require__(263),toNumber=__webpack_require__(264);/** Error message constants. */var FUNC_ERROR_TEXT='Expected a function';/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max,nativeMin=Math.min;/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=false,maxing=false,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}wait=toNumber(wait)||0;if(isObject(options)){leading=!!options.leading;maxing='maxWait'in options;maxWait=maxing?nativeMax(toNumber(options.maxWait)||0,wait):maxWait;trailing='trailing'in options?!!options.trailing:trailing;}function invokeFunc(time){var args=lastArgs,thisArg=lastThis;lastArgs=lastThis=undefined;lastInvokeTime=time;result=func.apply(thisArg,args);return result;}function leadingEdge(time){// Reset any `maxWait` timer.
lastInvokeTime=time;// Start the timer for the trailing edge.
timerId=setTimeout(timerExpired,wait);// Invoke the leading edge.
return leading?invokeFunc(time):result;}function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,timeWaiting=wait-timeSinceLastCall;return maxing?nativeMin(timeWaiting,maxWait-timeSinceLastInvoke):timeWaiting;}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return lastCallTime===undefined||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait;}function timerExpired(){var time=now();if(shouldInvoke(time)){return trailingEdge(time);}// Restart the timer.
timerId=setTimeout(timerExpired,remainingWait(time));}function trailingEdge(time){timerId=undefined;// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
if(trailing&&lastArgs){return invokeFunc(time);}lastArgs=lastThis=undefined;return result;}function cancel(){if(timerId!==undefined){clearTimeout(timerId);}lastInvokeTime=0;lastArgs=lastCallTime=lastThis=timerId=undefined;}function flush(){return timerId===undefined?result:trailingEdge(now());}function debounced(){var time=now(),isInvoking=shouldInvoke(time);lastArgs=arguments;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined){return leadingEdge(lastCallTime);}if(maxing){// Handle invocations in a tight loop.
clearTimeout(timerId);timerId=setTimeout(timerExpired,wait);return invokeFunc(lastCallTime);}}if(timerId===undefined){timerId=setTimeout(timerExpired,wait);}return result;}debounced.cancel=cancel;debounced.flush=flush;return debounced;}module.exports=debounce;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(42);__webpack_require__(43);__webpack_require__(44);__webpack_require__(15);__webpack_require__(6);__webpack_require__(14);__webpack_require__(20);function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==="undefined"?"undefined":_typeof(global))=='object'&&global&&global.Object===Object&&global;module.exports=freeGlobal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50)))

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(274);


/***/ }),
/* 218 */
/***/ (function(module, exports) {

// Polyfill for creating CustomEvents on IE9/10/11
// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill
(function(){if(typeof window==='undefined'){return;}try{var ce=new window.CustomEvent('test',{cancelable:true});ce.preventDefault();if(ce.defaultPrevented!==true){// IE has problems with .preventDefault() on custom events
// http://stackoverflow.com/questions/23349191
throw new Error('Could not prevent default');}}catch(e){var CustomEvent=function CustomEvent(event,params){var evt,origPrevent;params=params||{};params.bubbles=!!params.bubbles;params.cancelable=!!params.cancelable;evt=document.createEvent('CustomEvent');evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);origPrevent=evt.preventDefault;evt.preventDefault=function(){origPrevent.call(this);try{Object.defineProperty(this,'defaultPrevented',{get:function get(){return true;}});}catch(e){this.defaultPrevented=true;}};return evt;};CustomEvent.prototype=window.Event.prototype;window.CustomEvent=CustomEvent;// expose definition to window
}})();

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(220);


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(221);

module.exports = parent;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(222);

module.exports = parent;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(223);

module.exports = parent;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(178);
__webpack_require__(60);
__webpack_require__(228);
__webpack_require__(17);
__webpack_require__(206);
__webpack_require__(229);
__webpack_require__(230);
__webpack_require__(104);
__webpack_require__(59);
__webpack_require__(48);
__webpack_require__(103);


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(5);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(7);
var isCallable = __webpack_require__(5);
var isObject = __webpack_require__(18);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 226 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(24).f;

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var UNSUPPORTED_DOT_ALL = __webpack_require__(121);
var classof = __webpack_require__(31);
var defineBuiltInAccessor = __webpack_require__(35);
var getInternalState = __webpack_require__(26).get;

var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;

// `RegExp.prototype.dotAll` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall
if (DESCRIPTORS && UNSUPPORTED_DOT_ALL) {
  defineBuiltInAccessor(RegExpPrototype, 'dotAll', {
    configurable: true,
    get: function dotAll() {
      if (this === RegExpPrototype) return undefined;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof(this) === 'RegExp') {
        return !!getInternalState(this).dotAll;
      }
      throw $TypeError('Incompatible receiver, RegExp required');
    }
  });
}


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var MISSED_STICKY = __webpack_require__(94).MISSED_STICKY;
var classof = __webpack_require__(31);
var defineBuiltInAccessor = __webpack_require__(35);
var getInternalState = __webpack_require__(26).get;

var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;

// `RegExp.prototype.sticky` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
if (DESCRIPTORS && MISSED_STICKY) {
  defineBuiltInAccessor(RegExpPrototype, 'sticky', {
    configurable: true,
    get: function sticky() {
      if (this === RegExpPrototype) return;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof(this) === 'RegExp') {
        return !!getInternalState(this).sticky;
      }
      throw $TypeError('Incompatible receiver, RegExp required');
    }
  });
}


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(17);
var $ = __webpack_require__(0);
var call = __webpack_require__(7);
var isCallable = __webpack_require__(5);
var anObject = __webpack_require__(10);
var toString = __webpack_require__(9);

var DELEGATES_TO_EXEC = function () {
  var execCalled = false;
  var re = /[ac]/;
  re.exec = function () {
    execCalled = true;
    return /./.exec.apply(this, arguments);
  };
  return re.test('abc') === true && execCalled;
}();

var nativeTest = /./.test;

// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  test: function (S) {
    var R = anObject(this);
    var string = toString(S);
    var exec = R.exec;
    if (!isCallable(exec)) return call(nativeTest, R, string);
    var result = call(exec, R, string);
    if (result === null) return false;
    anObject(result);
    return true;
  }
});


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1);
var toObject = __webpack_require__(32);

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(67);
var isConstructor = __webpack_require__(92);
var isObject = __webpack_require__(18);
var wellKnownSymbol = __webpack_require__(4);

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(118);
var classof = __webpack_require__(61);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var IS_PURE = __webpack_require__(30);
var IS_NODE = __webpack_require__(89);
var global = __webpack_require__(3);
var call = __webpack_require__(7);
var defineBuiltIn = __webpack_require__(19);
var setPrototypeOf = __webpack_require__(77);
var setToStringTag = __webpack_require__(36);
var setSpecies = __webpack_require__(130);
var aCallable = __webpack_require__(38);
var isCallable = __webpack_require__(5);
var isObject = __webpack_require__(18);
var anInstance = __webpack_require__(106);
var speciesConstructor = __webpack_require__(131);
var task = __webpack_require__(157).set;
var microtask = __webpack_require__(235);
var hostReportErrors = __webpack_require__(238);
var perform = __webpack_require__(125);
var Queue = __webpack_require__(159);
var InternalStateModule = __webpack_require__(26);
var NativePromiseConstructor = __webpack_require__(72);
var PromiseConstructorDetection = __webpack_require__(73);
var newPromiseCapabilityModule = __webpack_require__(74);

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : undefined;
    if (state.state == PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var bind = __webpack_require__(45);
var getOwnPropertyDescriptor = __webpack_require__(62).f;
var macrotask = __webpack_require__(157).set;
var Queue = __webpack_require__(159);
var IS_IOS = __webpack_require__(158);
var IS_IOS_PEBBLE = __webpack_require__(236);
var IS_WEBOS_WEBKIT = __webpack_require__(237);
var IS_NODE = __webpack_require__(89);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var microtask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!microtask) {
  var queue = new Queue();

  var flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify();
      throw error;
    }
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind(macrotask, global);
    notify = function () {
      macrotask(flush);
    };
  }

  microtask = function (fn) {
    if (!queue.head) notify();
    queue.add(fn);
  };
}

module.exports = microtask;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(80);

module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != 'undefined';


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(80);

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),
/* 238 */
/***/ (function(module, exports) {

module.exports = function (a, b) {
  try {
    // eslint-disable-next-line no-console -- safe
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  } catch (error) { /* empty */ }
};


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var IS_DENO = __webpack_require__(160);
var IS_NODE = __webpack_require__(89);

module.exports = !IS_DENO && !IS_NODE
  && typeof window == 'object'
  && typeof document == 'object';


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var call = __webpack_require__(7);
var aCallable = __webpack_require__(38);
var newPromiseCapabilityModule = __webpack_require__(74);
var perform = __webpack_require__(125);
var iterate = __webpack_require__(128);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(161);

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var IS_PURE = __webpack_require__(30);
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(73).CONSTRUCTOR;
var NativePromiseConstructor = __webpack_require__(72);
var getBuiltIn = __webpack_require__(28);
var isCallable = __webpack_require__(5);
var defineBuiltIn = __webpack_require__(19);

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var call = __webpack_require__(7);
var aCallable = __webpack_require__(38);
var newPromiseCapabilityModule = __webpack_require__(74);
var perform = __webpack_require__(125);
var iterate = __webpack_require__(128);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(161);

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var call = __webpack_require__(7);
var newPromiseCapabilityModule = __webpack_require__(74);
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(73).CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var getBuiltIn = __webpack_require__(28);
var IS_PURE = __webpack_require__(30);
var NativePromiseConstructor = __webpack_require__(72);
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(73).CONSTRUCTOR;
var promiseResolve = __webpack_require__(245);

var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  }
});


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10);
var isObject = __webpack_require__(18);
var newPromiseCapability = __webpack_require__(74);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var global = __webpack_require__(3);
var call = __webpack_require__(7);
var uncurryThis = __webpack_require__(1);
var IS_PURE = __webpack_require__(30);
var DESCRIPTORS = __webpack_require__(8);
var NATIVE_SYMBOL = __webpack_require__(58);
var fails = __webpack_require__(2);
var hasOwn = __webpack_require__(12);
var isPrototypeOf = __webpack_require__(47);
var anObject = __webpack_require__(10);
var toIndexedObject = __webpack_require__(29);
var toPropertyKey = __webpack_require__(84);
var $toString = __webpack_require__(9);
var createPropertyDescriptor = __webpack_require__(55);
var nativeObjectCreate = __webpack_require__(54);
var objectKeys = __webpack_require__(71);
var getOwnPropertyNamesModule = __webpack_require__(78);
var getOwnPropertyNamesExternal = __webpack_require__(189);
var getOwnPropertySymbolsModule = __webpack_require__(97);
var getOwnPropertyDescriptorModule = __webpack_require__(62);
var definePropertyModule = __webpack_require__(24);
var definePropertiesModule = __webpack_require__(155);
var propertyIsEnumerableModule = __webpack_require__(96);
var defineBuiltIn = __webpack_require__(19);
var defineBuiltInAccessor = __webpack_require__(35);
var shared = __webpack_require__(57);
var sharedKey = __webpack_require__(95);
var hiddenKeys = __webpack_require__(86);
var uid = __webpack_require__(110);
var wellKnownSymbol = __webpack_require__(4);
var wrappedWellKnownSymbolModule = __webpack_require__(162);
var defineWellKnownSymbol = __webpack_require__(101);
var defineSymbolToPrimitive = __webpack_require__(247);
var setToStringTag = __webpack_require__(36);
var InternalStateModule = __webpack_require__(26);
var $forEach = __webpack_require__(51).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError = global.TypeError;
var QObject = global.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  defineBuiltIn(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  defineBuiltIn($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    defineBuiltInAccessor(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(7);
var getBuiltIn = __webpack_require__(28);
var wellKnownSymbol = __webpack_require__(4);
var defineBuiltIn = __webpack_require__(19);

module.exports = function () {
  var Symbol = getBuiltIn('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call(valueOf, this);
    }, { arity: 1 });
  }
};


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var getBuiltIn = __webpack_require__(28);
var hasOwn = __webpack_require__(12);
var toString = __webpack_require__(9);
var shared = __webpack_require__(57);
var NATIVE_SYMBOL_REGISTRY = __webpack_require__(163);

var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  'for': function (key) {
    var string = toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  }
});


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var hasOwn = __webpack_require__(12);
var isSymbol = __webpack_require__(83);
var tryToString = __webpack_require__(64);
var shared = __webpack_require__(57);
var NATIVE_SYMBOL_REGISTRY = __webpack_require__(163);

var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(tryToString(sym) + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var getBuiltIn = __webpack_require__(28);
var apply = __webpack_require__(63);
var call = __webpack_require__(7);
var uncurryThis = __webpack_require__(1);
var fails = __webpack_require__(2);
var isCallable = __webpack_require__(5);
var isSymbol = __webpack_require__(83);
var arraySlice = __webpack_require__(108);
var getReplacerFunction = __webpack_require__(251);
var NATIVE_SYMBOL = __webpack_require__(58);

var $String = String;
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')();
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = getReplacerFunction(replacer);
  if (!isCallable($replacer) && (it === undefined || isSymbol(it))) return; // IE8 returns string on undefined
  args[1] = function (key, value) {
    // some old implementations (like WebKit) could pass numbers as keys
    if (isCallable($replacer)) value = call($replacer, this, $String(key), value);
    if (!isSymbol(value)) return value;
  };
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1);
var isArray = __webpack_require__(67);
var isCallable = __webpack_require__(5);
var classof = __webpack_require__(31);
var toString = __webpack_require__(9);

var push = uncurryThis([].push);

module.exports = function (replacer) {
  if (isCallable(replacer)) return replacer;
  if (!isArray(replacer)) return;
  var rawLength = replacer.length;
  var keys = [];
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    if (typeof element == 'string') push(keys, element);
    else if (typeof element == 'number' || classof(element) == 'Number' || classof(element) == 'String') push(keys, toString(element));
  }
  var keysLength = keys.length;
  var root = true;
  return function (key, value) {
    if (root) {
      root = false;
      return value;
    }
    if (isArray(this)) return value;
    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
  };
};


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var NATIVE_SYMBOL = __webpack_require__(58);
var fails = __webpack_require__(2);
var getOwnPropertySymbolsModule = __webpack_require__(97);
var toObject = __webpack_require__(32);

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED = !NATIVE_SYMBOL || fails(function () { getOwnPropertySymbolsModule.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$({ target: 'Object', stat: true, forced: FORCED }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
  }
});


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var global = __webpack_require__(3);

// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$({ global: true, forced: global.globalThis !== global }, {
  globalThis: global
});


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10);
var iteratorClose = __webpack_require__(132);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(1);
var fails = __webpack_require__(2);
var padStart = __webpack_require__(256).start;

var $RangeError = RangeError;
var $isFinite = isFinite;
var abs = Math.abs;
var DatePrototype = Date.prototype;
var nativeDateToISOString = DatePrototype.toISOString;
var thisTimeValue = uncurryThis(DatePrototype.getTime);
var getUTCDate = uncurryThis(DatePrototype.getUTCDate);
var getUTCFullYear = uncurryThis(DatePrototype.getUTCFullYear);
var getUTCHours = uncurryThis(DatePrototype.getUTCHours);
var getUTCMilliseconds = uncurryThis(DatePrototype.getUTCMilliseconds);
var getUTCMinutes = uncurryThis(DatePrototype.getUTCMinutes);
var getUTCMonth = uncurryThis(DatePrototype.getUTCMonth);
var getUTCSeconds = uncurryThis(DatePrototype.getUTCSeconds);

// `Date.prototype.toISOString` method implementation
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit fails here:
module.exports = (fails(function () {
  return nativeDateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  nativeDateToISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!$isFinite(thisTimeValue(this))) throw $RangeError('Invalid time value');
  var date = this;
  var year = getUTCFullYear(date);
  var milliseconds = getUTCMilliseconds(date);
  var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
  return sign + padStart(abs(year), sign ? 6 : 4, 0) +
    '-' + padStart(getUTCMonth(date) + 1, 2, 0) +
    '-' + padStart(getUTCDate(date), 2, 0) +
    'T' + padStart(getUTCHours(date), 2, 0) +
    ':' + padStart(getUTCMinutes(date), 2, 0) +
    ':' + padStart(getUTCSeconds(date), 2, 0) +
    '.' + padStart(milliseconds, 3, 0) +
    'Z';
} : nativeDateToISOString;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var uncurryThis = __webpack_require__(1);
var toLength = __webpack_require__(53);
var toString = __webpack_require__(9);
var $repeat = __webpack_require__(208);
var requireObjectCoercible = __webpack_require__(25);

var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var ceil = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = toString(requireObjectCoercible($this));
    var intMaxLength = toLength(maxLength);
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : toString(fillString);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr == '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringSlice(stringFiller, 0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

module.exports = {
  // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart
  start: createMethod(false),
  // `String.prototype.padEnd` method
  // https://tc39.es/ecma262/#sec-string.prototype.padend
  end: createMethod(true)
};


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var fails = __webpack_require__(2);
var uncurryThis = __webpack_require__(1);
var toString = __webpack_require__(9);
var trim = __webpack_require__(134).trim;
var whitespaces = __webpack_require__(113);

var $parseInt = global.parseInt;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(14);
var $ = __webpack_require__(0);
var DESCRIPTORS = __webpack_require__(8);
var USE_NATIVE_URL = __webpack_require__(172);
var global = __webpack_require__(3);
var bind = __webpack_require__(45);
var uncurryThis = __webpack_require__(1);
var defineBuiltIn = __webpack_require__(19);
var defineBuiltInAccessor = __webpack_require__(35);
var anInstance = __webpack_require__(106);
var hasOwn = __webpack_require__(12);
var assign = __webpack_require__(171);
var arrayFrom = __webpack_require__(170);
var arraySlice = __webpack_require__(87);
var codeAt = __webpack_require__(123).codeAt;
var toASCII = __webpack_require__(259);
var $toString = __webpack_require__(9);
var setToStringTag = __webpack_require__(36);
var validateArgumentsLength = __webpack_require__(124);
var URLSearchParamsModule = __webpack_require__(260);
var InternalStateModule = __webpack_require__(26);

var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;

var NativeURL = global.URL;
var TypeError = global.TypeError;
var parseInt = global.parseInt;
var floor = Math.floor;
var pow = Math.pow;
var charAt = uncurryThis(''.charAt);
var exec = uncurryThis(/./.exec);
var join = uncurryThis([].join);
var numberToString = uncurryThis(1.0.toString);
var pop = uncurryThis([].pop);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);
var toLowerCase = uncurryThis(''.toLowerCase);
var unshift = uncurryThis([].unshift);

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[a-z]/i;
// eslint-disable-next-line regexp/no-obscure-range -- safe
var ALPHANUMERIC = /[\d+-.a-z]/i;
var DIGIT = /\d/;
var HEX_START = /^0x/i;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\da-f]+$/i;
/* eslint-disable regexp/no-control-character -- safe */
var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/;
var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
var TAB_AND_NEW_LINE = /[\t\n\r]/g;
/* eslint-enable regexp/no-control-character -- safe */
var EOF;

// https://url.spec.whatwg.org/#ipv4-number-parser
var parseIPv4 = function (input) {
  var parts = split(input, '.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.length--;
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && charAt(part, 0) == '0') {
      radix = exec(HEX_START, part) ? 16 : 8;
      part = stringSlice(part, radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!exec(radix == 10 ? DEC : radix == 8 ? OCT : HEX, part)) return input;
      number = parseInt(part, radix);
    }
    push(numbers, number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = pop(numbers);
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// https://url.spec.whatwg.org/#concept-ipv6-parser
// eslint-disable-next-line max-statements -- TODO
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var chr = function () {
    return charAt(input, pointer);
  };

  if (chr() == ':') {
    if (charAt(input, 1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (chr()) {
    if (pieceIndex == 8) return;
    if (chr() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && exec(HEX, chr())) {
      value = value * 16 + parseInt(chr(), 16);
      pointer++;
      length++;
    }
    if (chr() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (chr()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (chr() == '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!exec(DIGIT, chr())) return;
        while (exec(DIGIT, chr())) {
          number = parseInt(chr(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece == 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (chr() == ':') {
      pointer++;
      if (!chr()) return;
    } else if (chr()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

// https://url.spec.whatwg.org/#host-serializing
var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      unshift(result, host % 256);
      host = floor(host / 256);
    } return join(result, '.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += numberToString(host[index], 16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (chr, set) {
  var code = codeAt(chr, 0);
  return code > 0x20 && code < 0x7F && !hasOwn(set, chr) ? chr : encodeURIComponent(chr);
};

// https://url.spec.whatwg.org/#special-scheme
var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

// https://url.spec.whatwg.org/#windows-drive-letter
var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && exec(ALPHA, charAt(string, 0))
    && ((second = charAt(string, 1)) == ':' || (!normalized && second == '|'));
};

// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (
    string.length == 2 ||
    ((third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

// https://url.spec.whatwg.org/#single-dot-path-segment
var isSingleDot = function (segment) {
  return segment === '.' || toLowerCase(segment) === '%2e';
};

// https://url.spec.whatwg.org/#double-dot-path-segment
var isDoubleDot = function (segment) {
  segment = toLowerCase(segment);
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

var URLState = function (url, isBase, base) {
  var urlString = $toString(url);
  var baseState, failure, searchParams;
  if (isBase) {
    failure = this.parse(urlString);
    if (failure) throw TypeError(failure);
    this.searchParams = null;
  } else {
    if (base !== undefined) baseState = new URLState(base, true);
    failure = this.parse(urlString, null, baseState);
    if (failure) throw TypeError(failure);
    searchParams = getInternalSearchParamsState(new URLSearchParams());
    searchParams.bindURL(this);
    this.searchParams = searchParams;
  }
};

URLState.prototype = {
  type: 'URL',
  // https://url.spec.whatwg.org/#url-parsing
  // eslint-disable-next-line max-statements -- TODO
  parse: function (input, stateOverride, base) {
    var url = this;
    var state = stateOverride || SCHEME_START;
    var pointer = 0;
    var buffer = '';
    var seenAt = false;
    var seenBracket = false;
    var seenPasswordToken = false;
    var codePoints, chr, bufferCodePoints, failure;

    input = $toString(input);

    if (!stateOverride) {
      url.scheme = '';
      url.username = '';
      url.password = '';
      url.host = null;
      url.port = null;
      url.path = [];
      url.query = null;
      url.fragment = null;
      url.cannotBeABaseURL = false;
      input = replace(input, LEADING_C0_CONTROL_OR_SPACE, '');
      input = replace(input, TRAILING_C0_CONTROL_OR_SPACE, '$1');
    }

    input = replace(input, TAB_AND_NEW_LINE, '');

    codePoints = arrayFrom(input);

    while (pointer <= codePoints.length) {
      chr = codePoints[pointer];
      switch (state) {
        case SCHEME_START:
          if (chr && exec(ALPHA, chr)) {
            buffer += toLowerCase(chr);
            state = SCHEME;
          } else if (!stateOverride) {
            state = NO_SCHEME;
            continue;
          } else return INVALID_SCHEME;
          break;

        case SCHEME:
          if (chr && (exec(ALPHANUMERIC, chr) || chr == '+' || chr == '-' || chr == '.')) {
            buffer += toLowerCase(chr);
          } else if (chr == ':') {
            if (stateOverride && (
              (url.isSpecial() != hasOwn(specialSchemes, buffer)) ||
              (buffer == 'file' && (url.includesCredentials() || url.port !== null)) ||
              (url.scheme == 'file' && !url.host)
            )) return;
            url.scheme = buffer;
            if (stateOverride) {
              if (url.isSpecial() && specialSchemes[url.scheme] == url.port) url.port = null;
              return;
            }
            buffer = '';
            if (url.scheme == 'file') {
              state = FILE;
            } else if (url.isSpecial() && base && base.scheme == url.scheme) {
              state = SPECIAL_RELATIVE_OR_AUTHORITY;
            } else if (url.isSpecial()) {
              state = SPECIAL_AUTHORITY_SLASHES;
            } else if (codePoints[pointer + 1] == '/') {
              state = PATH_OR_AUTHORITY;
              pointer++;
            } else {
              url.cannotBeABaseURL = true;
              push(url.path, '');
              state = CANNOT_BE_A_BASE_URL_PATH;
            }
          } else if (!stateOverride) {
            buffer = '';
            state = NO_SCHEME;
            pointer = 0;
            continue;
          } else return INVALID_SCHEME;
          break;

        case NO_SCHEME:
          if (!base || (base.cannotBeABaseURL && chr != '#')) return INVALID_SCHEME;
          if (base.cannotBeABaseURL && chr == '#') {
            url.scheme = base.scheme;
            url.path = arraySlice(base.path);
            url.query = base.query;
            url.fragment = '';
            url.cannotBeABaseURL = true;
            state = FRAGMENT;
            break;
          }
          state = base.scheme == 'file' ? FILE : RELATIVE;
          continue;

        case SPECIAL_RELATIVE_OR_AUTHORITY:
          if (chr == '/' && codePoints[pointer + 1] == '/') {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            pointer++;
          } else {
            state = RELATIVE;
            continue;
          } break;

        case PATH_OR_AUTHORITY:
          if (chr == '/') {
            state = AUTHORITY;
            break;
          } else {
            state = PATH;
            continue;
          }

        case RELATIVE:
          url.scheme = base.scheme;
          if (chr == EOF) {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = base.query;
          } else if (chr == '/' || (chr == '\\' && url.isSpecial())) {
            state = RELATIVE_SLASH;
          } else if (chr == '?') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.path.length--;
            state = PATH;
            continue;
          } break;

        case RELATIVE_SLASH:
          if (url.isSpecial() && (chr == '/' || chr == '\\')) {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          } else if (chr == '/') {
            state = AUTHORITY;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            state = PATH;
            continue;
          } break;

        case SPECIAL_AUTHORITY_SLASHES:
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          if (chr != '/' || charAt(buffer, pointer + 1) != '/') continue;
          pointer++;
          break;

        case SPECIAL_AUTHORITY_IGNORE_SLASHES:
          if (chr != '/' && chr != '\\') {
            state = AUTHORITY;
            continue;
          } break;

        case AUTHORITY:
          if (chr == '@') {
            if (seenAt) buffer = '%40' + buffer;
            seenAt = true;
            bufferCodePoints = arrayFrom(buffer);
            for (var i = 0; i < bufferCodePoints.length; i++) {
              var codePoint = bufferCodePoints[i];
              if (codePoint == ':' && !seenPasswordToken) {
                seenPasswordToken = true;
                continue;
              }
              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
              if (seenPasswordToken) url.password += encodedCodePoints;
              else url.username += encodedCodePoints;
            }
            buffer = '';
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && url.isSpecial())
          ) {
            if (seenAt && buffer == '') return INVALID_AUTHORITY;
            pointer -= arrayFrom(buffer).length + 1;
            buffer = '';
            state = HOST;
          } else buffer += chr;
          break;

        case HOST:
        case HOSTNAME:
          if (stateOverride && url.scheme == 'file') {
            state = FILE_HOST;
            continue;
          } else if (chr == ':' && !seenBracket) {
            if (buffer == '') return INVALID_HOST;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PORT;
            if (stateOverride == HOSTNAME) return;
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && url.isSpecial())
          ) {
            if (url.isSpecial() && buffer == '') return INVALID_HOST;
            if (stateOverride && buffer == '' && (url.includesCredentials() || url.port !== null)) return;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PATH_START;
            if (stateOverride) return;
            continue;
          } else {
            if (chr == '[') seenBracket = true;
            else if (chr == ']') seenBracket = false;
            buffer += chr;
          } break;

        case PORT:
          if (exec(DIGIT, chr)) {
            buffer += chr;
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && url.isSpecial()) ||
            stateOverride
          ) {
            if (buffer != '') {
              var port = parseInt(buffer, 10);
              if (port > 0xFFFF) return INVALID_PORT;
              url.port = (url.isSpecial() && port === specialSchemes[url.scheme]) ? null : port;
              buffer = '';
            }
            if (stateOverride) return;
            state = PATH_START;
            continue;
          } else return INVALID_PORT;
          break;

        case FILE:
          url.scheme = 'file';
          if (chr == '/' || chr == '\\') state = FILE_SLASH;
          else if (base && base.scheme == 'file') {
            if (chr == EOF) {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = base.query;
            } else if (chr == '?') {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = base.query;
              url.fragment = '';
              state = FRAGMENT;
            } else {
              if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
                url.host = base.host;
                url.path = arraySlice(base.path);
                url.shortenPath();
              }
              state = PATH;
              continue;
            }
          } else {
            state = PATH;
            continue;
          } break;

        case FILE_SLASH:
          if (chr == '/' || chr == '\\') {
            state = FILE_HOST;
            break;
          }
          if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
            if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);
            else url.host = base.host;
          }
          state = PATH;
          continue;

        case FILE_HOST:
          if (chr == EOF || chr == '/' || chr == '\\' || chr == '?' || chr == '#') {
            if (!stateOverride && isWindowsDriveLetter(buffer)) {
              state = PATH;
            } else if (buffer == '') {
              url.host = '';
              if (stateOverride) return;
              state = PATH_START;
            } else {
              failure = url.parseHost(buffer);
              if (failure) return failure;
              if (url.host == 'localhost') url.host = '';
              if (stateOverride) return;
              buffer = '';
              state = PATH_START;
            } continue;
          } else buffer += chr;
          break;

        case PATH_START:
          if (url.isSpecial()) {
            state = PATH;
            if (chr != '/' && chr != '\\') continue;
          } else if (!stateOverride && chr == '?') {
            url.query = '';
            state = QUERY;
          } else if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            state = PATH;
            if (chr != '/') continue;
          } break;

        case PATH:
          if (
            chr == EOF || chr == '/' ||
            (chr == '\\' && url.isSpecial()) ||
            (!stateOverride && (chr == '?' || chr == '#'))
          ) {
            if (isDoubleDot(buffer)) {
              url.shortenPath();
              if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                push(url.path, '');
              }
            } else if (isSingleDot(buffer)) {
              if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                push(url.path, '');
              }
            } else {
              if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                if (url.host) url.host = '';
                buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
              }
              push(url.path, buffer);
            }
            buffer = '';
            if (url.scheme == 'file' && (chr == EOF || chr == '?' || chr == '#')) {
              while (url.path.length > 1 && url.path[0] === '') {
                shift(url.path);
              }
            }
            if (chr == '?') {
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            }
          } else {
            buffer += percentEncode(chr, pathPercentEncodeSet);
          } break;

        case CANNOT_BE_A_BASE_URL_PATH:
          if (chr == '?') {
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case QUERY:
          if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            if (chr == "'" && url.isSpecial()) url.query += '%27';
            else if (chr == '#') url.query += '%23';
            else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case FRAGMENT:
          if (chr != EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
          break;
      }

      pointer++;
    }
  },
  // https://url.spec.whatwg.org/#host-parsing
  parseHost: function (input) {
    var result, codePoints, index;
    if (charAt(input, 0) == '[') {
      if (charAt(input, input.length - 1) != ']') return INVALID_HOST;
      result = parseIPv6(stringSlice(input, 1, -1));
      if (!result) return INVALID_HOST;
      this.host = result;
    // opaque host
    } else if (!this.isSpecial()) {
      if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
      result = '';
      codePoints = arrayFrom(input);
      for (index = 0; index < codePoints.length; index++) {
        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
      }
      this.host = result;
    } else {
      input = toASCII(input);
      if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
      result = parseIPv4(input);
      if (result === null) return INVALID_HOST;
      this.host = result;
    }
  },
  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
  cannotHaveUsernamePasswordPort: function () {
    return !this.host || this.cannotBeABaseURL || this.scheme == 'file';
  },
  // https://url.spec.whatwg.org/#include-credentials
  includesCredentials: function () {
    return this.username != '' || this.password != '';
  },
  // https://url.spec.whatwg.org/#is-special
  isSpecial: function () {
    return hasOwn(specialSchemes, this.scheme);
  },
  // https://url.spec.whatwg.org/#shorten-a-urls-path
  shortenPath: function () {
    var path = this.path;
    var pathSize = path.length;
    if (pathSize && (this.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
      path.length--;
    }
  },
  // https://url.spec.whatwg.org/#concept-url-serializer
  serialize: function () {
    var url = this;
    var scheme = url.scheme;
    var username = url.username;
    var password = url.password;
    var host = url.host;
    var port = url.port;
    var path = url.path;
    var query = url.query;
    var fragment = url.fragment;
    var output = scheme + ':';
    if (host !== null) {
      output += '//';
      if (url.includesCredentials()) {
        output += username + (password ? ':' + password : '') + '@';
      }
      output += serializeHost(host);
      if (port !== null) output += ':' + port;
    } else if (scheme == 'file') output += '//';
    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
    if (query !== null) output += '?' + query;
    if (fragment !== null) output += '#' + fragment;
    return output;
  },
  // https://url.spec.whatwg.org/#dom-url-href
  setHref: function (href) {
    var failure = this.parse(href);
    if (failure) throw TypeError(failure);
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-origin
  getOrigin: function () {
    var scheme = this.scheme;
    var port = this.port;
    if (scheme == 'blob') try {
      return new URLConstructor(scheme.path[0]).origin;
    } catch (error) {
      return 'null';
    }
    if (scheme == 'file' || !this.isSpecial()) return 'null';
    return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
  },
  // https://url.spec.whatwg.org/#dom-url-protocol
  getProtocol: function () {
    return this.scheme + ':';
  },
  setProtocol: function (protocol) {
    this.parse($toString(protocol) + ':', SCHEME_START);
  },
  // https://url.spec.whatwg.org/#dom-url-username
  getUsername: function () {
    return this.username;
  },
  setUsername: function (username) {
    var codePoints = arrayFrom($toString(username));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.username = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-password
  getPassword: function () {
    return this.password;
  },
  setPassword: function (password) {
    var codePoints = arrayFrom($toString(password));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.password = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-host
  getHost: function () {
    var host = this.host;
    var port = this.port;
    return host === null ? ''
      : port === null ? serializeHost(host)
      : serializeHost(host) + ':' + port;
  },
  setHost: function (host) {
    if (this.cannotBeABaseURL) return;
    this.parse(host, HOST);
  },
  // https://url.spec.whatwg.org/#dom-url-hostname
  getHostname: function () {
    var host = this.host;
    return host === null ? '' : serializeHost(host);
  },
  setHostname: function (hostname) {
    if (this.cannotBeABaseURL) return;
    this.parse(hostname, HOSTNAME);
  },
  // https://url.spec.whatwg.org/#dom-url-port
  getPort: function () {
    var port = this.port;
    return port === null ? '' : $toString(port);
  },
  setPort: function (port) {
    if (this.cannotHaveUsernamePasswordPort()) return;
    port = $toString(port);
    if (port == '') this.port = null;
    else this.parse(port, PORT);
  },
  // https://url.spec.whatwg.org/#dom-url-pathname
  getPathname: function () {
    var path = this.path;
    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
  },
  setPathname: function (pathname) {
    if (this.cannotBeABaseURL) return;
    this.path = [];
    this.parse(pathname, PATH_START);
  },
  // https://url.spec.whatwg.org/#dom-url-search
  getSearch: function () {
    var query = this.query;
    return query ? '?' + query : '';
  },
  setSearch: function (search) {
    search = $toString(search);
    if (search == '') {
      this.query = null;
    } else {
      if ('?' == charAt(search, 0)) search = stringSlice(search, 1);
      this.query = '';
      this.parse(search, QUERY);
    }
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-searchparams
  getSearchParams: function () {
    return this.searchParams.facade;
  },
  // https://url.spec.whatwg.org/#dom-url-hash
  getHash: function () {
    var fragment = this.fragment;
    return fragment ? '#' + fragment : '';
  },
  setHash: function (hash) {
    hash = $toString(hash);
    if (hash == '') {
      this.fragment = null;
      return;
    }
    if ('#' == charAt(hash, 0)) hash = stringSlice(hash, 1);
    this.fragment = '';
    this.parse(hash, FRAGMENT);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLPrototype);
  var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : undefined;
  var state = setInternalState(that, new URLState(url, false, base));
  if (!DESCRIPTORS) {
    that.href = state.serialize();
    that.origin = state.getOrigin();
    that.protocol = state.getProtocol();
    that.username = state.getUsername();
    that.password = state.getPassword();
    that.host = state.getHost();
    that.hostname = state.getHostname();
    that.port = state.getPort();
    that.pathname = state.getPathname();
    that.search = state.getSearch();
    that.searchParams = state.getSearchParams();
    that.hash = state.getHash();
  }
};

var URLPrototype = URLConstructor.prototype;

var accessorDescriptor = function (getter, setter) {
  return {
    get: function () {
      return getInternalURLState(this)[getter]();
    },
    set: setter && function (value) {
      return getInternalURLState(this)[setter](value);
    },
    configurable: true,
    enumerable: true
  };
};

if (DESCRIPTORS) {
  // `URL.prototype.href` accessors pair
  // https://url.spec.whatwg.org/#dom-url-href
  defineBuiltInAccessor(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));
  // `URL.prototype.origin` getter
  // https://url.spec.whatwg.org/#dom-url-origin
  defineBuiltInAccessor(URLPrototype, 'origin', accessorDescriptor('getOrigin'));
  // `URL.prototype.protocol` accessors pair
  // https://url.spec.whatwg.org/#dom-url-protocol
  defineBuiltInAccessor(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));
  // `URL.prototype.username` accessors pair
  // https://url.spec.whatwg.org/#dom-url-username
  defineBuiltInAccessor(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));
  // `URL.prototype.password` accessors pair
  // https://url.spec.whatwg.org/#dom-url-password
  defineBuiltInAccessor(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));
  // `URL.prototype.host` accessors pair
  // https://url.spec.whatwg.org/#dom-url-host
  defineBuiltInAccessor(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));
  // `URL.prototype.hostname` accessors pair
  // https://url.spec.whatwg.org/#dom-url-hostname
  defineBuiltInAccessor(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));
  // `URL.prototype.port` accessors pair
  // https://url.spec.whatwg.org/#dom-url-port
  defineBuiltInAccessor(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));
  // `URL.prototype.pathname` accessors pair
  // https://url.spec.whatwg.org/#dom-url-pathname
  defineBuiltInAccessor(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));
  // `URL.prototype.search` accessors pair
  // https://url.spec.whatwg.org/#dom-url-search
  defineBuiltInAccessor(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));
  // `URL.prototype.searchParams` getter
  // https://url.spec.whatwg.org/#dom-url-searchparams
  defineBuiltInAccessor(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));
  // `URL.prototype.hash` accessors pair
  // https://url.spec.whatwg.org/#dom-url-hash
  defineBuiltInAccessor(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
defineBuiltIn(URLPrototype, 'toJSON', function toJSON() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
defineBuiltIn(URLPrototype, 'toString', function toString() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  if (nativeCreateObjectURL) defineBuiltIn(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL));
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  if (nativeRevokeObjectURL) defineBuiltIn(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));
}

setToStringTag(URLConstructor, 'URL');

$({ global: true, constructor: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var uncurryThis = __webpack_require__(1);

var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;

var $RangeError = RangeError;
var exec = uncurryThis(regexSeparators.exec);
var floor = Math.floor;
var fromCharCode = String.fromCharCode;
var charCodeAt = uncurryThis(''.charCodeAt);
var join = uncurryThis([].join);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var split = uncurryThis(''.split);
var toLowerCase = uncurryThis(''.toLowerCase);

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = charCodeAt(string, counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = charCodeAt(string, counter++);
      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
        push(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        push(output, value);
        counter--;
      }
    } else {
      push(output, value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  while (delta > baseMinusTMin * tMax >> 1) {
    delta = floor(delta / baseMinusTMin);
    k += base;
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      push(output, fromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    push(output, delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      throw $RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw $RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        var k = base;
        while (true) {
          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          push(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor(qMinusT / baseMinusT);
          k += base;
        }

        push(output, fromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        handledCPCount++;
      }
    }

    delta++;
    n++;
  }
  return join(output, '');
};

module.exports = function (input) {
  var encoded = [];
  var labels = split(replace(toLowerCase(input), regexSeparators, '\u002E'), '.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    push(encoded, exec(regexNonASCII, label) ? 'xn--' + encode(label) : label);
  }
  return join(encoded, '.');
};


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(15);
var $ = __webpack_require__(0);
var global = __webpack_require__(3);
var call = __webpack_require__(7);
var uncurryThis = __webpack_require__(1);
var DESCRIPTORS = __webpack_require__(8);
var USE_NATIVE_URL = __webpack_require__(172);
var defineBuiltIn = __webpack_require__(19);
var defineBuiltInAccessor = __webpack_require__(35);
var defineBuiltIns = __webpack_require__(181);
var setToStringTag = __webpack_require__(36);
var createIteratorConstructor = __webpack_require__(165);
var InternalStateModule = __webpack_require__(26);
var anInstance = __webpack_require__(106);
var isCallable = __webpack_require__(5);
var hasOwn = __webpack_require__(12);
var bind = __webpack_require__(45);
var classof = __webpack_require__(61);
var anObject = __webpack_require__(10);
var isObject = __webpack_require__(18);
var $toString = __webpack_require__(9);
var create = __webpack_require__(54);
var createPropertyDescriptor = __webpack_require__(55);
var getIterator = __webpack_require__(112);
var getIteratorMethod = __webpack_require__(90);
var validateArgumentsLength = __webpack_require__(124);
var wellKnownSymbol = __webpack_require__(4);
var arraySort = __webpack_require__(190);

var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
var safeGetBuiltIn = function (name) {
  if (!DESCRIPTORS) return global[name];
  var descriptor = getOwnPropertyDescriptor(global, name);
  return descriptor && descriptor.value;
};

var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp = global.RegExp;
var TypeError = global.TypeError;
var decodeURIComponent = global.decodeURIComponent;
var encodeURIComponent = global.encodeURIComponent;
var charAt = uncurryThis(''.charAt);
var join = uncurryThis([].join);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var splice = uncurryThis([].splice);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = replace(it, plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = replace(result, percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replacements = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replacements[match];
};

var serialize = function (it) {
  return replace(encodeURIComponent(it), find, replacer);
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
}, true);

var URLSearchParamsState = function (init) {
  this.entries = [];
  this.url = null;

  if (init !== undefined) {
    if (isObject(init)) this.parseObject(init);
    else this.parseQuery(typeof init == 'string' ? charAt(init, 0) === '?' ? stringSlice(init, 1) : init : $toString(init));
  }
};

URLSearchParamsState.prototype = {
  type: URL_SEARCH_PARAMS,
  bindURL: function (url) {
    this.url = url;
    this.update();
  },
  parseObject: function (object) {
    var iteratorMethod = getIteratorMethod(object);
    var iterator, next, step, entryIterator, entryNext, first, second;

    if (iteratorMethod) {
      iterator = getIterator(object, iteratorMethod);
      next = iterator.next;
      while (!(step = call(next, iterator)).done) {
        entryIterator = getIterator(anObject(step.value));
        entryNext = entryIterator.next;
        if (
          (first = call(entryNext, entryIterator)).done ||
          (second = call(entryNext, entryIterator)).done ||
          !call(entryNext, entryIterator).done
        ) throw TypeError('Expected sequence with length 2');
        push(this.entries, { key: $toString(first.value), value: $toString(second.value) });
      }
    } else for (var key in object) if (hasOwn(object, key)) {
      push(this.entries, { key: key, value: $toString(object[key]) });
    }
  },
  parseQuery: function (query) {
    if (query) {
      var attributes = split(query, '&');
      var index = 0;
      var attribute, entry;
      while (index < attributes.length) {
        attribute = attributes[index++];
        if (attribute.length) {
          entry = split(attribute, '=');
          push(this.entries, {
            key: deserialize(shift(entry)),
            value: deserialize(join(entry, '='))
          });
        }
      }
    }
  },
  serialize: function () {
    var entries = this.entries;
    var result = [];
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      push(result, serialize(entry.key) + '=' + serialize(entry.value));
    } return join(result, '&');
  },
  update: function () {
    this.entries.length = 0;
    this.parseQuery(this.url.query);
  },
  updateURL: function () {
    if (this.url) this.url.update();
  }
};

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance(this, URLSearchParamsPrototype);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var state = setInternalState(this, new URLSearchParamsState(init));
  if (!DESCRIPTORS) this.length = state.entries.length;
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

defineBuiltIns(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    push(state.entries, { key: $toString(name), value: $toString(value) });
    if (!DESCRIPTORS) this.length++;
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = $toString(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) splice(entries, index, 1);
      else index++;
    }
    if (!DESCRIPTORS) this.length = entries.length;
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) push(result, entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = $toString(name);
    var val = $toString(value);
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) splice(entries, index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) push(entries, { key: key, value: val });
    if (!DESCRIPTORS) this.length = entries.length;
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    arraySort(state.entries, function (a, b) {
      return a.key > b.key ? 1 : -1;
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
defineBuiltIn(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' });

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
defineBuiltIn(URLSearchParamsPrototype, 'toString', function toString() {
  return getInternalParamsState(this).serialize();
}, { enumerable: true });

// `URLSearchParams.prototype.size` getter
// https://github.com/whatwg/url/pull/734
if (DESCRIPTORS) defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
  get: function size() {
    return getInternalParamsState(this).entries.length;
  },
  configurable: true,
  enumerable: true
});

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, constructor: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL && isCallable(Headers)) {
  var headersHas = uncurryThis(HeadersPrototype.has);
  var headersSet = uncurryThis(HeadersPrototype.set);

  var wrapRequestOptions = function (init) {
    if (isObject(init)) {
      var body = init.body;
      var headers;
      if (classof(body) === URL_SEARCH_PARAMS) {
        headers = init.headers ? new Headers(init.headers) : new Headers();
        if (!headersHas(headers, 'content-type')) {
          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
        return create(init, {
          body: createPropertyDescriptor(0, $toString(body)),
          headers: createPropertyDescriptor(0, headers)
        });
      }
    } return init;
  };

  if (isCallable(nativeFetch)) {
    $({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
      fetch: function fetch(input /* , init */) {
        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      }
    });
  }

  if (isCallable(NativeRequest)) {
    var RequestConstructor = function Request(input /* , init */) {
      anInstance(this, RequestPrototype);
      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
    };

    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;

    $({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
      Request: RequestConstructor
    });
  }
}

module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var uncurryThis = __webpack_require__(1);
var objectKeys = __webpack_require__(71);
var toIndexedObject = __webpack_require__(29);
var $propertyIsEnumerable = __webpack_require__(96).f;

var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push);

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable(O, key)) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var PROPER_FUNCTION_NAME = __webpack_require__(66).PROPER;
var fails = __webpack_require__(2);
var whitespaces = __webpack_require__(113);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var root=__webpack_require__(136);/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */var now=function now(){return root.Date.now();};module.exports=now;

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);__webpack_require__(76);var baseTrim=__webpack_require__(265),isObject=__webpack_require__(70),isSymbol=__webpack_require__(205);/** Used as references for various `Number` constants. */var NAN=0/0;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Built-in method references without a dependency on `root`. */var freeParseInt=parseInt;/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}module.exports=toNumber;

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);__webpack_require__(17);__webpack_require__(59);var trimmedEndIndex=__webpack_require__(204);/** Used to match leading whitespace. */var reTrimStart=/^\s+/;/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,''):string;}module.exports=baseTrim;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);__webpack_require__(60);var _Symbol=__webpack_require__(137);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto.toString;/** Built-in value references. */var symToStringTag=_Symbol?_Symbol.toStringTag:undefined;/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result;}module.exports=getRawTag;

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);__webpack_require__(60);/** Used for built-in method references. */var objectProto=Object.prototype;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto.toString;/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function objectToString(value){return nativeObjectToString.call(value);}module.exports=objectToString;

/***/ }),
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/custom-event-polyfill/polyfill.js
var polyfill = __webpack_require__(218);

// EXTERNAL MODULE: ./node_modules/core-js/features/regexp/index.js
var regexp = __webpack_require__(219);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(27);

// CONCATENATED MODULE: ./src/js/utils/api.js
function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},_typeof(obj);}function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function _regeneratorRuntime(){return exports;};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value;},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key];}try{define({},"");}catch(err){define=function define(obj,key,value){return obj[key]=value;};}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator;}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)};}catch(err){return{type:"throw",arg:err};}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,function(){return this;});var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){define(prototype,method,function(arg){return this._invoke(method,arg);});});}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject);},function(err){invoke("throw",err,resolve,reject);}):PromiseImpl.resolve(value).then(function(unwrapped){result.value=unwrapped,resolve(result);},function(error){return invoke("throw",error,resolve,reject);});}reject(record.arg);}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl(function(resolve,reject){invoke(method,arg,resolve,reject);});}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg();}});}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult();}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult;}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg);}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done};}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg);}};}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(undefined===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=undefined,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=undefined),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel);}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry);}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record;}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0);}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=undefined,next.done=!0,next;};return next.next=next;}}return{next:doneResult};}function doneResult(){return{value:undefined,done:!0};}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name));},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun;},exports.awrap=function(arg){return{__await:arg};},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,function(){return this;}),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next();});},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,function(){return this;}),define(Gp,"toString",function(){return"[object Generator]";}),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next;}return next.done=!0,next;};},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined);},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval;},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=undefined),!!caught;}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc);}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc);}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break;}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record);},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel;},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel;}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=undefined),ContinueSentinel;}},exports;}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}var requestTranslation=function requestTranslation(keywords,lang){if(Array.isArray(keywords)){console.error('Given {keywords} parameter must be an Array');return keywords;}var translatedList=fetch("https://api.jotform.com/translationList?lang=".concat(lang,"&data=").concat(keywords),{method:'POST'}).then(function(res){return res.json();}).then(function(res){return res.content;});return translatedList;};var SDR_SOURCES={PRODUCTS_MENU:'HeaderProductsMenu',SUPPORT_MENU:'HeaderSupportMenu',MOBILE_MENU:'HeaderMobileMenu'};var addAutomatedSDREmail=function addAutomatedSDREmail(source){return fetch("/API/addAutomatedSDREmail?source=".concat(source));};// Fetches invoices to be passed to the account box in order to show overdue invoice warnings
var getUnpaidInvoices=/*#__PURE__*/function(){var _ref=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(){var response,_ref2,_ref2$content$mostOve,mostOverdueInvoice;return _regeneratorRuntime().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:_context.next=2;return fetch('/API/enterprise/invoice/getUnpaidInvoices');case 2:response=_context.sent;if(!response){_context.next=9;break;}_context.next=6;return response.json();case 6:_context.t0=_context.sent;_context.next=10;break;case 9:_context.t0={};case 10:_ref2=_context.t0;_ref2$content$mostOve=_ref2.content.mostOverdueInvoice;mostOverdueInvoice=_ref2$content$mostOve===void 0?{}:_ref2$content$mostOve;return _context.abrupt("return",Array.isArray(mostOverdueInvoice)?mostOverdueInvoice[0]||{}:mostOverdueInvoice||{});case 14:case"end":return _context.stop();}},_callee);}));return function getUnpaidInvoices(){return _ref.apply(this,arguments);};}();
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(23);

// EXTERNAL MODULE: ./src/js/utils/utils.js
var utils = __webpack_require__(16);

// CONCATENATED MODULE: ./src/js/utils/user.js
/* eslint-disable no-param-reassign */var handleEUCheck=function handleEUCheck(userData){// Send current continent code of user to check if its in EU
var continentCode=userData.location.continent_code;if(continentCode==='EU'){var GDPRcont=document.querySelectorAll('.jfHeader-authFormFooter');for(var i=GDPRcont.length-1;i>=0;i--){GDPRcont[i].style.display=GDPRcont[i].className.search('nonEU')===-1?'block':'none';}window.isEU=true;}else{window.isEU=false;}};var exceptionallyOverwriteUserData=function exceptionallyOverwriteUserData(userData){userData.username=userData.email;// Form users dont have a username
userData.usage={};userData.account_type={limits:{},name:'FORM_USER'};};var exceptionallyModifyUserDataWithPaypalTransactionData=function exceptionallyModifyUserDataWithPaypalTransactionData(userData){if(window.payPalTransactionData){var paypalTargetPlan=window.payPalTransactionData.targetPlan.toUpperCase();userData.account_type.name=paypalTargetPlan;if(window.planList){userData.account_type.limits=window.planList[paypalTargetPlan].limits;}}};var user_handleFormUserOperations=function handleFormUserOperations(responseData){var userData=responseData.content.credentials;var isFormUser=responseData.content.type==='FORM_USER';if(isFormUser){exceptionallyOverwriteUserData(userData);['.jfHeader-userLimitList','#upgradeSection','#menuSettingsButton'].forEach(function(value){var elementToHide=document.querySelector(value);if(elementToHide){elementToHide.style.display='none';}});Array.from(document.querySelectorAll('.js-planName')).forEach(function(x){x.style.display='none';});Array.from(document.querySelectorAll('.jfHeader-userName')).forEach(function(x){x.innerHTML="&nbsp;".concat(userData.username);});var defaultImg=Object(utils["t" /* isEnterprise */])()?'https://cdn.jotfor.ms/images/enterprise_empty_avatar.png':'https://cdn.jotfor.ms/assets/img/v4/avatar/Podo-Guest.png';Array.from(document.querySelectorAll('.jfHeader-menuListLink.isAvatar')).forEach(function(x){x.style.backgroundImage="url(\"".concat(defaultImg,"\")");});}};var attachUserToWindow=function attachUserToWindow(userData,isFormUser){if(typeof window.user==='undefined'){window.user=userData;}else if(userData.email!==null&&window.user.email==null||userData.username&&!window.user.username||userData.location&&!window.user.location){Object.assign(window.user,userData);}window.dispatchEvent(new window.CustomEvent('jfheader-user-ready'));window.comprehensiveUserData=userData;window.comprehensiveUserData.isFormUser=isFormUser;window.dispatchEvent(new window.CustomEvent('jfheader-comprehensive-user-data-ready'));};var importTurkishSupport=function importTurkishSupport(userData){if(false){}};var modifyFooterForKVKK=function modifyFooterForKVKK(userData){if(typeof window.footerFunction!=='undefined'&&window.footerFunction){// Move KVKK + Address Fields to Footer
window.footerCustomFunction(userData);}};var attachAllowMyAppsToWindow=function attachAllowMyAppsToWindow(userData){window.allowMyApps=userData.allowMyApps===true;};var initMyAppsMenu=function initMyAppsMenu(userData){if(typeof window.initMyAppsMenu==='function'&&userData.allowMyApps===true){window.initMyAppsMenu();}};var initAppPicker=function initAppPicker(){if(typeof window.initAppPicker==='function'){window.initAppPicker();}};var modifyJfHeaderSaleMode=function modifyJfHeaderSaleMode(userData){if(typeof window.jfHeader_saleMode!=='undefined'&&['GUEST','FREE','BRONZE','SILVER'].indexOf(userData.account_type.name)===-1){window.jfHeader_saleMode=undefined;}};var user_createCombinedInfoUrl=function createCombinedInfoUrl(){var combinedInfoUrl='/API/user/combinedinfo?loc=1&campaign=1';var pathName=window.location.pathname;var addLangSwitchNotification=['/myforms/'].includes(pathName);var addSignLaunchNotification=['/myforms/'].includes(pathName);var addEnterpriseGovernmentSDR=['/myforms/'].includes(pathName);if(Object(utils["t" /* isEnterprise */])()){return combinedInfoUrl;}if(addEnterpriseGovernmentSDR){combinedInfoUrl+='&governmentSDR=1';}if(addSignLaunchNotification){combinedInfoUrl+='&sign=1';}if(addLangSwitchNotification){var navLang=window.navigator.userLanguage||window.navigator.language;combinedInfoUrl+="&navLang=".concat(navLang);}return combinedInfoUrl;};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(21);

// CONCATENATED MODULE: ./src/js/utils/polyfills.js
/* eslint-disable */function addPolyfills(){if(window.Element&&!Element.prototype.closest){Element.prototype.closest=function(s){var matches=(this.document||this.ownerDocument).querySelectorAll(s);var i;var el=this;do{i=matches.length;while(--i>=0&&matches.item(i)!==el){}}while(i<0&&(el=el.parentElement));return el;};}if(window.Node&&!Node.prototype.contains){Node.prototype.contains=function contains(node){if(!(0 in arguments)){throw new TypeError('1 argument is required');}do{if(this===node){return true;}}while(node=node&&node.parentNode);return false;};}if(window.document&&!document.contains){document.contains=Element.prototype.contains=function contains(node){if(!(0 in arguments)){throw new TypeError('1 argument is required');}do{if(this===node){return true;}}while(node=node&&node.parentNode);return false;};}if(!String.prototype.includes){String.prototype.includes=function(search,start){'use strict';if(typeof start!=='number'){start=0;}if(start+search.length>this.length){return false;}else{return this.indexOf(search,start)!==-1;}};}};
// CONCATENATED MODULE: ./src/js/utils/translations.js
var DEFAULT_LANGUAGE='en-US';function initLocale(){if(typeof String.prototype.locale!=='function'){// eslint-disable-next-line no-extend-native
String.prototype.locale=function(){return this;};}}var getLangCode=function getLangCode(){var footerLanguageEl=document.querySelector('#jfFooterLanguage');var languageBoxEl=document.querySelector('#language-box');if(footerLanguageEl){return footerLanguageEl.value;}if(languageBoxEl){return languageBoxEl.value;}return'en-US';};var checkLangCode=function checkLangCode(){if(!window.langCode){window.langCode=getLangCode();}};var prepareTranslations=function prepareTranslations(){var language=getLangCode();if(language&&language!==DEFAULT_LANGUAGE){var _window$Translations2;if(window.Locale){var _window$Translations,_window;(_window$Translations=window.Translations)===null||_window$Translations===void 0?void 0:_window$Translations.addTranslationToDictionary(language,(_window=window)===null||_window===void 0?void 0:_window.Locale.language);return Promise.resolve();}return(_window$Translations2=window.Translations)===null||_window$Translations2===void 0?void 0:_window$Translations2.addDictionary(language);}return Promise.resolve();};
// CONCATENATED MODULE: ./src/js/utils/loginFlow.js
function loginFlow_typeof(obj){"@babel/helpers - typeof";return loginFlow_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},loginFlow_typeof(obj);}function loginFlow_regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */loginFlow_regeneratorRuntime=function _regeneratorRuntime(){return exports;};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value;},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key];}try{define({},"");}catch(err){define=function define(obj,key,value){return obj[key]=value;};}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator;}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)};}catch(err){return{type:"throw",arg:err};}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,function(){return this;});var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){define(prototype,method,function(arg){return this._invoke(method,arg);});});}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==loginFlow_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject);},function(err){invoke("throw",err,resolve,reject);}):PromiseImpl.resolve(value).then(function(unwrapped){result.value=unwrapped,resolve(result);},function(error){return invoke("throw",error,resolve,reject);});}reject(record.arg);}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl(function(resolve,reject){invoke(method,arg,resolve,reject);});}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg();}});}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult();}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult;}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg);}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done};}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg);}};}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(undefined===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=undefined,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=undefined),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel);}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry);}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record;}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0);}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=undefined,next.done=!0,next;};return next.next=next;}}return{next:doneResult};}function doneResult(){return{value:undefined,done:!0};}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name));},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun;},exports.awrap=function(arg){return{__await:arg};},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,function(){return this;}),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next();});},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,function(){return this;}),define(Gp,"toString",function(){return"[object Generator]";}),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next;}return next.done=!0,next;};},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined);},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval;},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=undefined),!!caught;}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc);}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc);}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break;}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record);},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel;},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel;}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=undefined),ContinueSentinel;}},exports;}function loginFlow_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function loginFlow_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){loginFlow_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){loginFlow_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}var loginFlow_loadSocialMediaClient=function loadSocialMediaClient(socialMedia){return new Promise(function(resolve,reject){try{var bodyEl=document.querySelector('body');if(bodyEl.classList.contains("isloaded-".concat(socialMedia,"js"))){return resolve();}var id;var src;if(socialMedia==='facebook'){id='facebook-jssdk';src='https://connect.facebook.net/en_US/sdk.js';}else if(socialMedia==='google'){id='google-jssdk-new';src='https://accounts.google.com/gsi/client';}else if(socialMedia==='microsoft'){id='microsoft-jssdk';src='https://www.jotform.com/js/msal/msal-browser.js';}Object(utils["x" /* loadJS */])(id,src,function(){bodyEl.classList.add("isloaded-".concat(socialMedia,"js"));resolve();});}catch(err){reject(err);}});};var loginFlow_loadLoginFlow=function loadLoginFlow(onLoad){if(window.loginFlowHelper){if(onLoad)onLoad(window.loginFlowHelper);return Promise.resolve(window.loginFlowHelper);}return __webpack_require__.e(/* import() | common-login */ 4).then(__webpack_require__.bind(null, 3531)).then(/*#__PURE__*/function(){var _ref=loginFlow_asyncToGenerator(/*#__PURE__*/loginFlow_regeneratorRuntime().mark(function _callee(loginFlowModule){var LoginFlowHelper;return loginFlow_regeneratorRuntime().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:LoginFlowHelper=loginFlowModule.default;_context.prev=1;_context.next=4;return prepareTranslations();case 4:_context.prev=4;window.loginFlowHelper=new LoginFlowHelper();return _context.finish(4);case 7:case"end":return _context.stop();}},_callee,null,[[1,,4,7]]);}));return function(_x){return _ref.apply(this,arguments);};}()).then(function(){if(onLoad)onLoad(window.loginFlowHelper);return window.loginFlowHelper;});};var customRedirectionOnSignUp=function customRedirectionOnSignUp(){if(typeof window.setCustomFunction_signup!=='undefined'&&window.setCustomFunction_signup){window.customFunction_signup();return true;}};var customRedirectionOnLogIn=function customRedirectionOnLogIn(){if(typeof window.setCustomFunction_login!=='undefined'&&window.setCustomFunction_login){window.customFunction_login();return true;}};var loginFlow_loadGoogleJS=function loadGoogleJS(){return Object(utils["l" /* getBodyEl */])().classList.contains('isloaded-googlejs')?Promise.resolve():loginFlow_loadSocialMediaClient('google');};var loginFlow_loadFacebookJS=function loadFacebookJS(){return Object(utils["l" /* getBodyEl */])().classList.contains('isloaded-facebookjs')?Promise.resolve():loginFlow_loadSocialMediaClient('facebook');};var loginFlow_loadMicrosotfJS=function loadMicrosotfJS(){return Object(utils["l" /* getBodyEl */])().classList.contains('isloaded-microsoftjs')?Promise.resolve():loginFlow_loadSocialMediaClient('microsoft');};var toggleSignupLoaders=function toggleSignupLoaders(act){var action=typeof act==='undefined'?'hide':act;Array.prototype.forEach.call(document.querySelectorAll('.signup-loading'),function(el){// eslint-disable-next-line no-param-reassign
if(action==='hide'){el.style.display='none';el.parentElement.classList.remove('socialbtn-loading-wrapper');}// eslint-disable-next-line no-param-reassign
if(action==='show'){el.style.display='block';el.parentElement.classList.add('socialbtn-loading-wrapper');}});};var createSocialTermsFlow=function createSocialTermsFlow(user){var pathname=window.location.pathname;var preveventFlow=['/login/','/signup/'].includes(pathname);// because these pages are using cdn and they create the same name of the helper object with the one
// common header creates then pages overwrites the helper object window.loginFlowHelper
// also they are working in react context and has their own social terms flow
if(preveventFlow)return{};var socialTermsSecretManager=window.loginFlowHelper.createSocialTermsSecretManager();return{// when the google/facebook token arrives and jotform api req triggers
onSocialLoginStart:function onSocialLoginStart(_ref2){var socialSignupThunk=_ref2.socialSignupThunk;socialTermsSecretManager.set('socialSignupThunk',socialSignupThunk);},// when jotform api return a hash because requires user to accept terms and conditions
onSocialTermsRequired:function onSocialTermsRequired(){var _ref3=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},socialLoginHash=_ref3.socialLoginHash,socialUserProfile=_ref3.socialUserProfile,idToken=_ref3.idToken;socialTermsSecretManager.set('socialLoginHash',socialLoginHash);// render terms and conditions modal
window.loginFlowHelper.renderStandaloneSocialTermsModal({user:user,socialUserProfile:socialUserProfile,onSocialTermsContinue:function onSocialTermsContinue(isTermsChecked){if(isTermsChecked){var hash=socialTermsSecretManager.get('socialLoginHash');var continueSocialSignup=socialTermsSecretManager.get('socialSignupThunk');if(typeof continueSocialSignup==='function'&&hash){continueSocialSignup(hash,idToken);}}},onSocialTermsClose:function onSocialTermsClose(){socialTermsSecretManager.removeAll();toggleSignupLoaders('hide');}});}};};var trackLoginFlow=function trackLoginFlow(action,target){var _window$user;var newLoginFlowTracker=typeof JotFormActions!=='undefined'?window.JotFormActions('LoginFlowCommonHeader'):undefined;if(!newLoginFlowTracker&&typeof JotFormActions!=='undefined'){newLoginFlowTracker=window.JotFormActions('LoginFlowCommonHeader');}if((_window$user=window.user)===null||_window$user===void 0?void 0:_window$user.username){var log={actor:window.user.username,action:action,target:target};if(window.JOTFORM_ENV==='PRODUCTION'&&newLoginFlowTracker){newLoginFlowTracker.tick(log);}}};
// CONCATENATED MODULE: ./src/js/utils/isOverflown.js
var isOverflown=function isOverflown(element){var enterpriseLink=document.getElementById('enterpriseHeaderMainLink');if(document.querySelector('html.jfHeader-sticky-on')){return;}if(element.classList.contains('overflown')){element.classList.remove('overflown');element.classList.remove('level2');element.classList.remove('level3');if(enterpriseLink){enterpriseLink.classList.remove('hide');}}if(element.scrollWidth>element.clientWidth){element.classList.add('noTransition');element.classList.add('overflown');var elem=element.querySelector('.jfHeader-menuList').querySelectorAll('.jfHeader-menuListItem');var visible=[];var i=0;for(i=0;i<elem.length;i++){if(elem[i].offsetParent!==null){visible.push(elem[i]);}}// eslint-disable-next-line no-param-reassign
element.querySelector('.jfHeader-menuList').style.flex=visible.length;if(element.scrollWidth>element.clientWidth){element.classList.add('level2');setTimeout(function(){if(element.scrollWidth>element.clientWidth){element.classList.add('level3');}setTimeout(function(){if(enterpriseLink&&element.scrollWidth>element.clientWidth){enterpriseLink.classList.add('hide');}},250);},250);}}else{element.classList.remove('noTransition');}};var fitNavigationToScreen=function fitNavigationToScreen(){setTimeout(function(){isOverflown(document.querySelector('.jfHeader-content'));},100);};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(59);

// CONCATENATED MODULE: ./src/js/utils/commonAccountBox.js
function commonAccountBox_typeof(obj){"@babel/helpers - typeof";return commonAccountBox_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},commonAccountBox_typeof(obj);}function commonAccountBox_regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */commonAccountBox_regeneratorRuntime=function _regeneratorRuntime(){return exports;};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value;},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key];}try{define({},"");}catch(err){define=function define(obj,key,value){return obj[key]=value;};}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator;}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)};}catch(err){return{type:"throw",arg:err};}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,function(){return this;});var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){define(prototype,method,function(arg){return this._invoke(method,arg);});});}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==commonAccountBox_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject);},function(err){invoke("throw",err,resolve,reject);}):PromiseImpl.resolve(value).then(function(unwrapped){result.value=unwrapped,resolve(result);},function(error){return invoke("throw",error,resolve,reject);});}reject(record.arg);}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl(function(resolve,reject){invoke(method,arg,resolve,reject);});}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg();}});}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult();}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult;}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg);}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done};}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg);}};}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(undefined===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=undefined,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=undefined),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel);}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry);}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record;}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0);}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=undefined,next.done=!0,next;};return next.next=next;}}return{next:doneResult};}function doneResult(){return{value:undefined,done:!0};}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name));},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun;},exports.awrap=function(arg){return{__await:arg};},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,function(){return this;}),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next();});},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,function(){return this;}),define(Gp,"toString",function(){return"[object Generator]";}),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next;}return next.done=!0,next;};},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined);},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval;},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=undefined),!!caught;}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc);}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc);}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break;}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record);},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel;},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel;}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=undefined),ContinueSentinel;}},exports;}function commonAccountBox_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function commonAccountBox_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){commonAccountBox_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){commonAccountBox_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}var isInited=false;var isLoadingClassName='isLoading';var openClassName='isAccountBoxOpen';var avatarButtonSelector='#jfHeaderAvatar';var accountBoxWrapperSelector='.account-box-react-wrapper';var avatarEl=document.querySelector(avatarButtonSelector);var hamburgerButtonEl=document.querySelector('.jfHeader-hamburger');var accountBoxWrapperEl=document.querySelector(accountBoxWrapperSelector);var accountBoxMobileButtonEl=document.querySelector('.js-toggleMobileAccountBox');var accountBoxOverlayEl=document.querySelector('.js-accountBoxOverlay');var accountBoxEl=document.querySelector('.js-accountBox');var loadEnterpriseComponentsUtils=function loadEnterpriseComponentsUtils(){return __webpack_require__.e(/* import() | enterprise-components-utils */ 5).then(__webpack_require__.bind(null, 3525)).then(function(module){return module;});};var loadAccountBoxModule=function loadAccountBoxModule(){return __webpack_require__.e(/* import() | account-box-standalone */ 2).then(__webpack_require__.bind(null, 3523)).then(function(module){return module.default;});};var toggleAccountBox=function toggleAccountBox(){return accountBoxWrapperEl.classList.toggle(openClassName);};var hideLoader=function hideLoader(){return accountBoxWrapperEl.classList.remove(isLoadingClassName);};var closeAccountBox=function closeAccountBox(){return accountBoxWrapperEl.classList.remove(openClassName);};var handleAccountBoxClickOutside=function handleAccountBoxClickOutside(e){var isOpen=accountBoxWrapperEl.classList.contains(openClassName);var targetContains=avatarEl.contains(e.target)||accountBoxWrapperEl.contains(e.target);if(isOpen&&!targetContains){closeAccountBox();}};function fillUserInfo(user){var avatar=user.avatarUrl;var isHIPAA=user.isHIPAA&&user.isHIPAA==='1';var locPathName=window.location.pathname.replace(/\/$/,'');var isonPage=locPathName==='/pricing'||locPathName.includes('/myaccount')||locPathName==='/myforms';if(typeof user.avatarUrl!=='undefined'){avatar=avatar.replace('http://','https://');}if(isHIPAA&&isonPage){Object(utils["b" /* addClass */])(document.querySelector('.jfHeader-logoWrapper'),'hipaa-secure-account');document.querySelector('.hipaa-secure-account').setAttribute('badge-text','HIPAA Compliant'.locale());if(document.querySelector('.jNewHeader-appSelector')){document.querySelector('.jNewHeader-appSelector').classList.add('withBadge');}}var accountBoxName=user.name!==null&&user.name.length>0?user.name:user.username;var headerV2UserName=document.querySelector('.jfHeaderV2-userName');// eslint-disable-next-line no-param-reassign
Array.from(document.querySelectorAll('.jfHeader-userName')).forEach(function(x){x.innerHTML=(headerV2UserName?'':'&nbsp;')+accountBoxName;});// eslint-disable-next-line no-param-reassign
Array.from(document.querySelectorAll('.jfHeader-menuListLink.isAvatar')).forEach(function(x){x.style.backgroundImage="url(\"".concat(avatar,"\")");});}var hideUserProfile=function hideUserProfile(){var userProfileEl=document.getElementById('jfHeader-userProfile');if(userProfileEl){userProfileEl.style.display='none';}};var init=/*#__PURE__*/function(){var _ref=commonAccountBox_asyncToGenerator(/*#__PURE__*/commonAccountBox_regeneratorRuntime().mark(function _callee(userData,isFormUser){var showAdminConsole,initAccountBoxStandalone,_yield$loadEnterprise,isBillingTabActive,mostOverdueInvoice;return commonAccountBox_regeneratorRuntime().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:showAdminConsole=Object(utils["t" /* isEnterprise */])()&&Object(utils["r" /* isAdmin */])(userData);_context.next=3;return loadAccountBoxModule();case 3:initAccountBoxStandalone=_context.sent;_context.next=6;return loadEnterpriseComponentsUtils();case 6:_yield$loadEnterprise=_context.sent;isBillingTabActive=_yield$loadEnterprise.isBillingTabActive;_context.t0=showAdminConsole&&isBillingTabActive();if(!_context.t0){_context.next=13;break;}_context.next=12;return getUnpaidInvoices();case 12:_context.t0=_context.sent;case 13:mostOverdueInvoice=_context.t0;_context.prev=14;_context.next=17;return prepareTranslations();case 17:_context.prev=17;initAccountBoxStandalone({isFormUser:isFormUser,user:userData,isAccountBoxOpened:false,targetSelector:'#js-account-box-react',toggleAccountBox:function toggleAccountBox(f){return f;},isEnterprise:Object(utils["t" /* isEnterprise */])(),showAdminConsole:showAdminConsole,mostOverdueInvoice:mostOverdueInvoice});isInited=true;return _context.finish(17);case 21:case"end":return _context.stop();}},_callee,null,[[14,,17,21]]);}));return function init(_x,_x2){return _ref.apply(this,arguments);};}();var handleAvatarClick=/*#__PURE__*/function(){var _ref2=commonAccountBox_asyncToGenerator(/*#__PURE__*/commonAccountBox_regeneratorRuntime().mark(function _callee2(userData,isFormUser){return commonAccountBox_regeneratorRuntime().wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:toggleAccountBox();if(isInited){_context2.next=5;break;}_context2.next=4;return init(userData,isFormUser);case 4:hideLoader();case 5:case"end":return _context2.stop();}},_callee2);}));return function handleAvatarClick(_x3,_x4){return _ref2.apply(this,arguments);};}();var handleHamburgerButtonClick=/*#__PURE__*/function(){var _ref3=commonAccountBox_asyncToGenerator(/*#__PURE__*/commonAccountBox_regeneratorRuntime().mark(function _callee3(userData,isFormUser){return commonAccountBox_regeneratorRuntime().wrap(function _callee3$(_context3){while(1)switch(_context3.prev=_context3.next){case 0:if(isInited){_context3.next=4;break;}_context3.next=3;return init(userData,isFormUser);case 3:hideLoader();case 4:case"end":return _context3.stop();}},_callee3);}));return function handleHamburgerButtonClick(_x5,_x6){return _ref3.apply(this,arguments);};}();// Mobile Account Box Event
var toggleMobileAccountBox=/*#__PURE__*/function(){var _ref4=commonAccountBox_asyncToGenerator(/*#__PURE__*/commonAccountBox_regeneratorRuntime().mark(function _callee4(){return commonAccountBox_regeneratorRuntime().wrap(function _callee4$(_context4){while(1)switch(_context4.prev=_context4.next){case 0:if(accountBoxEl.classList.contains('isExpanded')){accountBoxOverlayEl.style.display='none';accountBoxEl.classList.remove('isExpanded');}else{accountBoxOverlayEl.style.display='block';accountBoxEl.classList.add('isExpanded');}case 1:case"end":return _context4.stop();}},_callee4);}));return function toggleMobileAccountBox(){return _ref4.apply(this,arguments);};}();var initCommonAccountBox=/*#__PURE__*/function(){var _ref5=commonAccountBox_asyncToGenerator(/*#__PURE__*/commonAccountBox_regeneratorRuntime().mark(function _callee5(userData,isFormUser){return commonAccountBox_regeneratorRuntime().wrap(function _callee5$(_context5){while(1)switch(_context5.prev=_context5.next){case 0:document.addEventListener('click',handleAccountBoxClickOutside,true);avatarEl.addEventListener('click',function(){return handleAvatarClick(userData,isFormUser);});hamburgerButtonEl.addEventListener('click',function(){return handleHamburgerButtonClick(userData,isFormUser);});accountBoxMobileButtonEl.addEventListener('click',function(){return toggleMobileAccountBox();});accountBoxOverlayEl.addEventListener('click',toggleMobileAccountBox);case 5:case"end":return _context5.stop();}},_callee5);}));return function initCommonAccountBox(_x7,_x8){return _ref5.apply(this,arguments);};}();
// CONCATENATED MODULE: ./src/js/utils/index.js

// CONCATENATED MODULE: ./src/js/accessibility/loginFlowAccessibility.js
function isHidden(el){var style=window.getComputedStyle(el);return style.display==='none';}var loginFlowAccessibility=function loginFlowAccessibility(){document.addEventListener('keydown',function(e){var isTabPressed=e.key==='Tab'||e.keyCode===9;if(!isTabPressed)return;var focussableElementList=document.querySelector('.jfHeader-modalViewContent').querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');if(!focussableElementList.length)return;var visibleElements=[];for(var i=0,max=focussableElementList.length;i<max;i++){if(!isHidden(focussableElementList[i])){visibleElements.push(focussableElementList[i]);}}var firstFocusableElement=visibleElements[0];// get first element to be focused inside modal
var lastFocusableElement=visibleElements[visibleElements.length-1];if(e.shiftKey){// if shift key pressed for shift + tab combination
if(document.activeElement===firstFocusableElement){lastFocusableElement.focus();// add focus for the last focusable element
e.preventDefault();}}else if(document.activeElement===lastFocusableElement){// if focused has reached to last focusable element then focus first focusable element after pressing tab
firstFocusableElement.focus();// add focus for the first focusable element
e.preventDefault();}});};/* harmony default export */ var accessibility_loginFlowAccessibility = (loginFlowAccessibility);
// CONCATENATED MODULE: ./src/js/openLoginFlow.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var openLoginFlow_openLoginFlow=function openLoginFlow(_ref){var page=_ref.page,tracking=_ref.tracking,greetingMessage=_ref.greetingMessage,greetingDescription=_ref.greetingDescription,_ref$extraModalProps=_ref.extraModalProps,extraModalProps=_ref$extraModalProps===void 0?{}:_ref$extraModalProps;var prevRoute;var screen;var loginFlowProps=_objectSpread(_objectSpread({},extraModalProps),{},{greetingDescription:greetingDescription,greetingMessage:greetingMessage,user:window.user,showLogoOnSignupOptions:false,includeConfirm:true,forceUser:true,noDefaultWrapper:true,appleSigninEnabled:true,appName:'jfHeader',shrinkConfirmOnMobile:true,onUserLogin:function onUserLogin(user,_ref2){var newUser=_ref2.newUser;Object(utils["q" /* initPersOnbForOrderLanding2Test */])(user);var action=newUser?'signup':'login';trackLoginFlow(action,tracking!==null&&tracking!==void 0?tracking:screen);window.closeModal();return newUser?customRedirectionOnSignUp():customRedirectionOnLogIn();},onNavigationChange:function onNavigationChange(nextRoute){if(!prevRoute||['signupOptions','loginOptions','signupWithEmail'].includes(prevRoute)){if(nextRoute==='signupOptions'){screen='login-modal-signup-link';trackLoginFlow('open',tracking!==null&&tracking!==void 0?tracking:screen);}else if(nextRoute==='loginOptions'){screen='signup-modal-login-link';trackLoginFlow('open',tracking!==null&&tracking!==void 0?tracking:screen);}}if(nextRoute==='signupWithEmail'){screen='signupWithEmail';trackLoginFlow('open',tracking!==null&&tracking!==void 0?tracking:screen);}prevRoute=nextRoute;},onGoogleLoginClick:function onGoogleLoginClick(){return trackLoginFlow('open','google');},onFBLoginClick:function onFBLoginClick(){return trackLoginFlow('open','facebook');},onAppleLoginClick:function onAppleLoginClick(){return trackLoginFlow('open','apple');}});if(page==='s1'){screen='signup';loginFlowProps.initialScreen='signupOptions';loginFlowProps.buttonNames={microsoft:'modal-microsoft-signup-jfheader',google:'modal-google-signup-jfheader',facebook:'modal-facebook-signup-jfheader',apple:'modal-apple-signup-jfheader',emailLogin:'modal-standart-login-button',emailSignup:'modal-header-createmyaccount'};}else if(page==='s2'){screen='login';loginFlowProps.forceLogin='true';loginFlowProps.buttonNames={microsoft:'modal-microsoft-login-jfheader',google:'modal-google-login-jfheader',facebook:'modal-facebook-login-jfheader',apple:'modal-apple-login-jfheader',emailLogin:'modal-standart-login-button',emailSignup:'modal-header-createmyaccount'};}else if(page==='s3'){screen='signupWithEmail';loginFlowProps.initialScreen='signupWithEmail';loginFlowProps.buttonNames={microsoft:'modal-microsoft-signup-jfheader',google:'modal-google-signup-jfheader',facebook:'modal-facebook-signup-jfheader',apple:'modal-apple-signup-jfheader',emailLogin:'modal-standart-login-button',emailSignup:'modal-header-createmyaccount'};}else if(page==='s3b'){screen='signupOptions';loginFlowProps.showFormOnSignupOptions=true;loginFlowProps.initialScreen=screen;loginFlowProps.buttonNames={microsoft:'modal-microsoft-signup-jfheader',google:'modal-google-signup-jfheader',facebook:'modal-facebook-signup-jfheader',apple:'modal-apple-signup-jfheader',emailLogin:'modal-standart-login-button',emailSignup:'modal-header-createmyaccount'};}return loginFlow_loadLoginFlow().then(function(loginFlowHelper){loginFlowHelper.init(loginFlowProps);trackLoginFlow('open',tracking!==null&&tracking!==void 0?tracking:screen);});};var openLoginFlow_showModal_=function showModal_(_ref3){var page=_ref3.page,tracking=_ref3.tracking,hideClose=_ref3.hideClose,onClosed=_ref3.onClosed,onOpened=_ref3.onOpened;console.log(tracking);// Check if the device is mobile
if(window.innerWidth<=768&&document.documentElement.classList.contains('isHamburgerOpen')){document.querySelector('.jfHeader-content').classList.add('isExpanded');}Object(utils["b" /* addClass */])(Object(utils["l" /* getBodyEl */])(),'isModalOpen');Object(utils["i" /* disableScroll */])();document.querySelector('.modalView').classList.add('isOpen');document.querySelector('.modalView').setAttribute('aria-hidden','false');document.querySelector('.jfHeader-authForm-close.newModalInlineButton').addEventListener('click',function(event){window.closeModal(event);if(onClosed){onClosed();}},false);for(var i=0;i<document.querySelectorAll('.modalpage').length;i++){document.querySelectorAll('.modalpage')[i].classList.add('hide');}document.querySelector(".modalpage.".concat(page)).classList.remove('hide');Object(utils["b" /* addClass */])(Object(utils["l" /* getBodyEl */])(),'isModalOpen');Object(utils["i" /* disableScroll */])();document.querySelector(".modalpage.".concat(page)).classList.add('isOpen');if(hideClose){document.querySelector('.jfHeader-authForm-close.newModalInlineButton').style.display='none';}if(onOpened){onOpened();}accessibility_loginFlowAccessibility();};var attachLoginFlowOpenerToWindow=function attachLoginFlowOpenerToWindow(){window.showModal=function(){var page=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'s1';var tracking=arguments.length>1?arguments[1]:undefined;var hideClose=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var greetingMessage=arguments.length>3?arguments[3]:undefined;var greetingDescription=arguments.length>4?arguments[4]:undefined;var callbacks=arguments.length>5&&arguments[5]!==undefined?arguments[5]:{};var extraModalProps=arguments.length>6&&arguments[6]!==undefined?arguments[6]:{};var onClosed=callbacks.onClosed,onOpened=callbacks.onOpened;openLoginFlow_showModal_({page:'s5',tracking:tracking,hideClose:hideClose,onClosed:onClosed,onOpened:onOpened});if(page!=='s5'){return openLoginFlow_openLoginFlow({page:page,tracking:tracking,greetingDescription:greetingDescription,greetingMessage:greetingMessage,extraModalProps:extraModalProps});}};};var openLoginFlow_attachLoginFlowCloserToWindow=function attachLoginFlowCloserToWindow(){window.closeModal=function closeModal(){toggleSignupLoaders('hide');// Check if the device is mobile
if(window.innerWidth<=768&&!document.documentElement.classList.contains('isHamburgerOpen')){document.querySelector('.jfHeader-content').classList.remove('isExpanded');var hamburgerLabel=document.querySelector('.jfHeader-hamburger > label');if(hamburgerLabel){hamburgerLabel.classList.remove('active');}}Object(utils["z" /* removeClass */])(Object(utils["l" /* getBodyEl */])(),'isModalOpen');Object(utils["j" /* enableScroll */])();document.querySelector('.modalView').classList.remove('isOpen');document.querySelector('.modalView').setAttribute('aria-hidden','true');document.removeEventListener('click',utils["e" /* clickOutsideEvent */],false);document.removeEventListener('keydown',utils["w" /* keydownEscapeEvent */],false);window.dispatchEvent(new window.CustomEvent('jfheader-modal-closed'));};};var openLoginFlow_listenAppSignInOnFailure=function listenAppSignInOnFailure(){document.addEventListener('AppleIDSignInOnFailure',function(error){toggleSignupLoaders();console.log(error);});};
// CONCATENATED MODULE: ./src/js/attachObsoleteSignupLoadingFunctionToWindow.js
// it has been used on the pricing page, so we decided to keep this function.
var attachObsoleteSignupLoadingFunctionToWindow=function attachObsoleteSignupLoadingFunctionToWindow(){var bannerSignupLoading=document.querySelector('.auth-section .signup-loading');var signupModalSignupLoading=document.querySelector('.modalpage.s1 .signup-loading');var loginModalLoading=document.querySelector('.modalpage.s2 .signup-loading');window.signupLoaderTimeout=null;window.handleSignupLoading=function handleSignupLoading(eventTarget){clearTimeout(window.signupLoaderTimeout);// Banner section signup buttons
if(eventTarget.parentNode.className.includes('auth-section')){bannerSignupLoading.style.display='block';}else if(eventTarget.parentNode.parentNode.parentNode.classList.contains('s1')){signupModalSignupLoading.style.display='block';}else if(eventTarget.parentNode.parentNode.parentNode.classList.contains('s2')){loginModalLoading.style.display='block';}else if(eventTarget.classList.contains('js-naked-social-signup')){Array.prototype.forEach.call(document.querySelectorAll('.signup-loading'),function(el){// eslint-disable-next-line no-param-reassign
el.style.display='block';});}};};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(104);

// CONCATENATED MODULE: ./src/js/listenAndHandleCardThemesClick.js
var listenAndHandleCardThemesClick=function listenAndHandleCardThemesClick(){var cardThemes=document.querySelector('#card-themes');if(cardThemes){cardThemes.addEventListener('click',function(e){e.preventDefault();var req=new window.XMLHttpRequest();req.open('GET','/API/form/new?formType=cardForm&themeId=59647bf8cf3bfe639c0b7cb1');req.send();req.onreadystatechange=function(){if(this.readyState===4&&this.status===200){var resp=JSON.parse(this.responseText);var hostname=window.location.hostname;if(window.location.hostname.match(/(apps|widgets).jotform.com/)!=null){hostname='www.jotform.com';}window.location.href="".concat(window.location.protocol,"//").concat(hostname,"/build/").concat(resp.content.id,"/cardthemes");}else if(this.status!==200){/* TODO:: handle errors */}};return false;});}};
// CONCATENATED MODULE: ./src/js/listenResizeForIsOverFlown.js
var listenResizeForIsOverFlown_listenResizeForIsOverFlown=function listenResizeForIsOverFlown(){var rtime;var timeout=false;var delta=200;var resizeend=function resizeend(){if(new Date()-rtime<delta){setTimeout(resizeend,delta);}else{timeout=false;setTimeout(function(){isOverflown(document.querySelector('.jfHeader-content'));},500);}};window.addEventListener('resize',function(){rtime=new Date();if(timeout===false){timeout=true;setTimeout(resizeend,delta);}});};
// CONCATENATED MODULE: ./src/js/deletedFormNotification.js
// /* eslint-disable */
// Deleted JotForms notifier
function deletedFormNotification(){var checkUTM=Object(utils["o" /* getUrlParameter */])('utm_campaign');if(checkUTM==='form-deleted'){var div=document.createElement('div');var getHeader=document.querySelector('.jfHeader');div.innerHTML='<span id="close-banner">'// eslint-disable-next-line max-len
+'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;pointer-events: none" xml:space="preserve">'+'<path style="fill: #FFFFFF" d="M2.8,27.2c0.7,0.7,1.9,0.7,2.6,0c0,0,0,0,0,0l9.6-9.6l9.6,9.6c0.7,0.7,1.9,0.7,2.6,0c0.7-0.7,0.7-1.9,'+'0-2.6l0,0L17.6,15l9.6-9.6c0.7-0.7,0.7-1.9,0-2.6c-0.7-0.7-1.9-0.7-2.6,0L15,12.4L5.4,2.8c-0.7-0.7-1.9-0.7-2.6,0s-0.7,1.9,0,2.6l9.6,'+'9.6l-9.6,9.6C2.1,25.3,2.1,26.5,2.8,27.2z"/>'+'</svg>'+'</span>'+'<p class="locale margin">Oops! The form you would like to see is deleted. What about creating your own?</p>'+'<a class="locale productHuntLink" href="javascript:void(0)">Create a New Form</a>';div.setAttribute('id','deletedFormNotification');document.body.classList.add('notificationOn');document.body.classList.remove('notificationOff');getHeader.insertBefore(div,getHeader.firstChild);// Close Button
if(document.querySelector('#deletedFormNotification')!=null){document.querySelector('#close-banner').onclick=function(){document.body.classList.add('notificationOff');document.body.classList.remove('notificationOn');};}var notifierCTA=document.querySelector('#deletedFormNotification');if(notifierCTA!=null){notifierCTA.onclick=function(e){if(e.target.id!=='close-banner'){window.open('/signup/','_blank').focus();}};}}}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(75);

// CONCATENATED MODULE: ./src/js/loadIntegrationImages.js
var initIntegrationImages=function initIntegrationImages(){Array.prototype.slice.call(document.querySelectorAll('.jfHeader .integrationImage')).forEach(function(el){el.setAttribute('src',el.dataset.src);});};var loadIntegrationImages=function loadIntegrationImages(){var isIntegrationImagesExecuted=false;document.addEventListener('mousemove',function(){if(!isIntegrationImagesExecuted){isIntegrationImagesExecuted=true;initIntegrationImages();}});document.addEventListener('touchstart',function(){if(!isIntegrationImagesExecuted){isIntegrationImagesExecuted=true;initIntegrationImages();}});};
// CONCATENATED MODULE: ./src/js/listenSmoothScroll.js
var listenSmoothScroll_listenSmoothScroll=function listenSmoothScroll(){document.addEventListener('scroll',Object(utils["h" /* debounce */])(function(){document.documentElement.style.setProperty('--scroll-y',"".concat(window.scrollY,"px"));document.documentElement.style.scrollBehavior='smooth';},100));};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(20);

// CONCATENATED MODULE: ./src/js/lazyLoadLoginFlow.js
function lazyLoadLoginFlow_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function lazyLoadLoginFlow_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){lazyLoadLoginFlow_ownKeys(Object(source),true).forEach(function(key){lazyLoadLoginFlow_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{lazyLoadLoginFlow_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function lazyLoadLoginFlow_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var lazyLoadLoginFlow_openSocialLoginFlow=function openSocialLoginFlow(type){var handlerMap={google:'handleGoogleClick',facebook:'handleFBClick',microsoft:'handleMSClick'};var activeMethod=handlerMap[type];trackLoginFlow('open',type);window.loginFlowHelper[activeMethod](lazyLoadLoginFlow_objectSpread({showLogoOnSignupOptions:false,includeConfirm:true,forceUser:true,buttonNames:{google:'google-homepage-hero',facebook:'facebook-homepage-hero'},onUserLogin:function onUserLogin(user,_ref){var newUser=_ref.newUser;Object(utils["q" /* initPersOnbForOrderLanding2Test */])(user);trackLoginFlow(newUser?'signup':'login',type);toggleSignupLoaders('hide');window.closeModal();return newUser?customRedirectionOnSignUp():customRedirectionOnLogIn();}},createSocialTermsFlow(window.user)),// 2fa response callback
function(){window.showModal('s5');},// error callback
function(error){console.error(error);toggleSignupLoaders('hide');},// email auth callback
function(){window.showModal('s5');});};var lazyLoadLoginFlow_attachLoginFlowToTrioButtons=function attachLoginFlowToTrioButtons(){var socialButtons=document.querySelectorAll('button.google, button.facebook, button.microsoft');socialButtons.forEach(function(el){el.addEventListener('mouseup',function(event){var socialMedia='microsoft';if(event.target.className.includes('facebook')){socialMedia='facebook';}if(event.target.className.includes('google')){socialMedia='google';}if(!window.loginFlowHelper){Promise.all([loginFlow_loadLoginFlow(),loginFlow_loadFacebookJS(),loginFlow_loadGoogleJS(),loginFlow_loadMicrosotfJS()]).then(function(){toggleSignupLoaders('show');lazyLoadLoginFlow_openSocialLoginFlow(socialMedia);});return;}toggleSignupLoaders('show');lazyLoadLoginFlow_openSocialLoginFlow(socialMedia);});});};var lazyLoadLoginFlow_lazyLoadLoginFlow=function lazyLoadLoginFlow(){// Pages
if(document.querySelector('.introSection-buttons')!==null){// Please use closest func w/ IE capability
Object(utils["d" /* addEventListenerOnce */])(document.querySelector('.introSection-buttons').parentNode.parentNode.parentNode,'mouseover',function(){loginFlow_loadLoginFlow();loginFlow_loadFacebookJS();loginFlow_loadGoogleJS();loginFlow_loadMicrosotfJS();});}// Homepage
if(document.querySelector('body.homepage')!==null){if('ontouchstart'in window||window.navigator.maxTouchPoints>0||window.navigator.msMaxTouchPoints>0){loginFlow_loadLoginFlow();loginFlow_loadFacebookJS();loginFlow_loadGoogleJS();loginFlow_loadMicrosotfJS();}else{Object(utils["d" /* addEventListenerOnce */])(document.querySelector('body.homepage'),'mouseover',function(){loginFlow_loadLoginFlow();loginFlow_loadFacebookJS();loginFlow_loadGoogleJS();loginFlow_loadMicrosotfJS();});}}// Touch
if('ontouchstart'in window||window.navigator.maxTouchPoints>0||window.navigator.msMaxTouchPoints>0){Object(utils["d" /* addEventListenerOnce */])(document,'touchstart',function(){loginFlow_loadLoginFlow();loginFlow_loadFacebookJS();loginFlow_loadGoogleJS();loginFlow_loadMicrosotfJS();});}else{Object(utils["d" /* addEventListenerOnce */])(document.querySelector('.jfHeader-mobileWrapper'),'mouseover',function(){return loginFlow_loadLoginFlow();});Object(utils["d" /* addEventListenerOnce */])(document.querySelector('ul.jfHeader-menuList#loginSignup'),'mouseover',function(){return loginFlow_loadLoginFlow();});}if(document.querySelector('button.google, button.facebook, button.microsoft')!==null){lazyLoadLoginFlow_attachLoginFlowToTrioButtons();}else{window.addEventListener('load',function(){lazyLoadLoginFlow_attachLoginFlowToTrioButtons();});}};
// CONCATENATED MODULE: ./src/js/stickyHeader.js
var stickyHeader_initStickyHeader=function initStickyHeader(){var stickyHeader={body:document.querySelector('body'),jfHeader:document.querySelector('.jfHeader'),jfHWrapper:document.querySelector('.jfHeader-wrapper'),classEvents:function classEvents(){var bodyTop=(window.pageYOffset||document.scrollTop)-(document.clientTop||0);if(bodyTop>0){document.documentElement.classList.add('jfHeader-sticky-on');stickyHeader.body.style.paddingTop="".concat(stickyHeader.jfHeader.clientHeight,"px");}else{document.documentElement.classList.remove('jfHeader-sticky-on');stickyHeader.body.style.paddingTop='0px';if(!document.querySelector('.jfHeader-content').classList.contains('overflown')){isOverflown(document.querySelector('.jfHeader-content'));}}return false;},init:function init(){if(stickyHeader.jfHeader&&stickyHeader.jfHWrapper){stickyHeader.body.style.paddingTop=stickyHeader.jfHeader.clientHeight-stickyHeader.jfHWrapper.clientHeight;}window.addEventListener('scroll',function(){stickyHeader.classEvents();});window.addEventListener('resize',function(){stickyHeader.classEvents();});}};if(document.querySelector('.jfHeader').classList.contains('jfHeader-sticky')){stickyHeader.init();}};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__(146);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(179);

// CONCATENATED MODULE: ./src/js/accessibility/navigationAccessibility.js
var ARROW_KEYS={UP:'ArrowUp',DOWN:'ArrowDown',LEFT:'ArrowLeft',RIGHT:'ArrowRight'};var isNextKey=function isNextKey(e){return[ARROW_KEYS.DOWN,ARROW_KEYS.RIGHT].includes(e.key);};var isPrevKey=function isPrevKey(e){return[ARROW_KEYS.UP,ARROW_KEYS.LEFT].includes(e.key);};var isArrowKey=function isArrowKey(e){var _e$key;return e===null||e===void 0?void 0:(_e$key=e.key)===null||_e$key===void 0?void 0:_e$key.startsWith('Arrow');};var isSelectorProvided=function isSelectorProvided(selector){return selector&&typeof selector==='string';};/**
 * Moves focus to next or previous element and
 * calls optional callback with the event and the newly focused element.
 *
 * @param {KeyboardEvent} event
 * @param {Function} onElementClick
 * @param {Boolean|string} selector
 * @returns {void}
 */var a11yListNavigation=function a11yListNavigation(event){var onElementClick=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var selector=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;try{var _nextElement,_nextElement2;var currentTarget=event.currentTarget;if(!isArrowKey(event))return;var nextElement;if(isNextKey(event)){nextElement=currentTarget===null||currentTarget===void 0?void 0:currentTarget.nextElementSibling;if(isSelectorProvided(selector)){var _currentTarget$closes,_currentTarget$closes2;nextElement=currentTarget===null||currentTarget===void 0?void 0:(_currentTarget$closes=currentTarget.closest(selector.split('>')[0].trim()))===null||_currentTarget$closes===void 0?void 0:(_currentTarget$closes2=_currentTarget$closes.nextElementSibling)===null||_currentTarget$closes2===void 0?void 0:_currentTarget$closes2.querySelector(selector.split('>')[1].trim());}}else if(isPrevKey(event)){nextElement=currentTarget===null||currentTarget===void 0?void 0:currentTarget.previousElementSibling;if(isSelectorProvided(selector)){var _currentTarget$closes3,_currentTarget$closes4;nextElement=currentTarget===null||currentTarget===void 0?void 0:(_currentTarget$closes3=currentTarget.closest(selector.split('>')[0].trim()))===null||_currentTarget$closes3===void 0?void 0:(_currentTarget$closes4=_currentTarget$closes3.previousElementSibling)===null||_currentTarget$closes4===void 0?void 0:_currentTarget$closes4.querySelector(selector.split('>')[1].trim());}}if(!nextElement){return;}if((_nextElement=nextElement)===null||_nextElement===void 0?void 0:_nextElement.hasAttribute('chromevoxignoreariahidden')){// Chromevox adds a reduntant div element to focus on in case
// it lands on an unfocusable element, this element however
// breaks the navigation flow, so we are removing this item.
nextElement.remove();return a11yListNavigation(event,onElementClick);}(_nextElement2=nextElement)===null||_nextElement2===void 0?void 0:_nextElement2.focus();if(onElementClick){var nextEvent=new window.KeyboardEvent('keydown');Object.defineProperty(nextEvent,'target',{writable:false,value:nextElement});onElementClick(nextEvent,nextElement);}}catch(error){console.error(error);}};var ACTION_KEYS={ENTER:'Enter',SPACE:' '};var isActionKeyPressed=function isActionKeyPressed(e){return Object.values(ACTION_KEYS).indexOf(e.key)>-1;};var a11yClickHandler=function a11yClickHandler(event){var handler=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;try{if(!isActionKeyPressed(event)){return;}if(handler){handler(event);}}catch(e){console.error(e);}};
// CONCATENATED MODULE: ./src/js/navigation.js
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2;}function navigation_typeof(obj){"@babel/helpers - typeof";return navigation_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},navigation_typeof(obj);}function focusOnFirstItem(modalWrapper){var focussableItemList=modalWrapper.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');if(!focussableItemList.length)return;focussableItemList[0].focus();}// Hamburger icon color and set mobileSignup
if(document.querySelector('.jfHeader-mobileSignup')){var navigation_element=document.querySelector('.top-bar');var style=window.getComputedStyle(navigation_element,'::before');var color=style.getPropertyValue('background-color');if(color!=='rgb(255, 255, 255)'){document.querySelector('.jfHeader-mobileSignup').classList.add('revertseCTA');}}var loadJotformActions=function loadJotformActions(){if(typeof JotFormActions!=='undefined'){if(typeof window.trackHeaderActions==='undefined'){window.trackHeaderActions=window.JotFormActions('header-actions');}}else{var script=document.createElement('script');script.setAttribute('src','//cdn.jotfor.ms/assets/js/actions.js');document.getElementsByTagName('head')[0].appendChild(script);script.onload=function(){if(typeof window.trackHeaderActions==='undefined'){window.trackHeaderActions=window.JotFormActions('header-actions');}};}};function navigationActions(){var jfHeader=document.querySelector('.jfHeader');var subExist=document.querySelector('.jfHeader-subMenuItemLink.current');var activeSubParents=subExist===null||subExist===void 0?void 0:subExist.parentNode.parentNode.parentNode.parentNode.querySelector('.jfHeader-dynamicLink');if(window.innerWidth<=768){// Set eventListener for dropdowns on mobile
/* added current class to parent menu item (landing) */if(jfHeader.classList.contains('custom-content')&&subExist){activeSubParents.classList.add('current','active');}var handleClickMobileSubMenuItem=function handleClickMobileSubMenuItem(event,element){if(!element)return;var anyExist=document.querySelector('.jfHeader-menuListLink.active');if(!anyExist){element.querySelector('.jfHeader-menuListLink').classList.add('active');}else if(anyExist!==event.target){anyExist.classList.remove('active');element.querySelector('.jfHeader-menuListLink').classList.add('active');}else{element.querySelector('.jfHeader-menuListLink').classList.remove('active');}};var menuListItems=Array.from(document.querySelectorAll('.jfHeader-menuListItem.hasSubMenu'));menuListItems.forEach(function(el){el.addEventListener('keydown',function(event){a11yClickHandler(event,function(e){return handleClickMobileSubMenuItem(e,el);});});var menuListLink=el.querySelector('.jfHeader-menuListLink');if(!menuListLink)return;menuListLink.addEventListener('click',function(event){return handleClickMobileSubMenuItem(event,el);});});}else{/* added current class to parent menu item (landing) */if(jfHeader.classList.contains('custom-content')&&subExist){activeSubParents.classList.add('current');}var subMenuBoxes=Array.from(document.querySelectorAll('.jfHeader-subMenu'));var accountBox=document.querySelector('.account-box-react-wrapper');var closeAllOpenedSubMenuBoxes=function closeAllOpenedSubMenuBoxes(){subMenuBoxes.forEach(function(subMenu){if(window.getComputedStyle(subMenu).display!=='none'){// eslint-disable-next-line no-param-reassign
subMenu.style.display='none';}});if(accountBox)accountBox.classList.remove('isAccountBoxOpen');};// Clear active menu when the focus lost to other menu items.
Array.from(document.querySelectorAll('.jfHeader-menuListItem:not(.hasSubMenu)')).forEach(function(elOthers){if(elOthers.querySelector('.jfHeader-menuListLink')){elOthers.querySelector('.jfHeader-menuListLink').addEventListener('focus',function(){var menuItems=document.querySelectorAll('.jfHeader-menuListLink');for(var i=0;i<menuItems.length;i++){menuItems[i].classList.remove('active');}if(document.querySelector('.jfHeader-appPicker')!=null){document.querySelector('.jfHeader-appPicker>div').classList.remove('appBoxOpened');}closeAllOpenedSubMenuBoxes();});}});var subMenuItems=Array.from(document.querySelectorAll('.jfHeader .jfHeader-menuListItem.hasSubMenu .jfHeader-menuListLink'));var handleClickSubMenuItem=function handleClickSubMenuItem(el){var sibling=el.nextElementSibling;if(sibling){var isBlocked=window.getComputedStyle(sibling,null).display;sibling.style.display=isBlocked!=='block'?'block':'none';}};// show/hide option on click
subMenuItems.forEach(function(el){if(el){var isAvatarElement=el.classList.contains('isAvatar');if(!isAvatarElement){// We remove display settings from element, because CSS hover features not working
el.addEventListener('mouseleave',function(){var sibling=el.nextElementSibling;if(sibling){sibling.style.display='';}});el.addEventListener('click',function(){return handleClickSubMenuItem(el);});el.addEventListener('keydown',function(event){a11yClickHandler(event,function(){return handleClickSubMenuItem(el);});});}el.addEventListener('focus',closeAllOpenedSubMenuBoxes);}});if(accountBox){accountBox.addEventListener('keydown',function(event){var key=event.key,shiftKey=event.shiftKey;if(key!=='Tab')return;if(shiftKey)return;if(!accountBox.contains(document.activeElement))return;var accountBoxListItems=Array.from(document.querySelectorAll('.jNewHeader-accountLinkListItem'));accountBoxListItems.forEach(function(accountBoxEl,index){var accountBoxStillActive=accountBoxEl.contains(document.activeElement);var isLastAccountBoxElement=accountBoxListItems.length-1===index;if(isLastAccountBoxElement&&accountBoxStillActive){accountBox.classList.remove('isAccountBoxOpen');}});},true);}}}function manipulateLinkInPlatform(el){var itemHref=el.getAttribute('href');switch(itemHref){case'/all-teams':el.href="/platform/salesforce".concat(itemHref);el.target='_self';break;case'/support':el.href="/platform/salesforce".concat(itemHref);el.target='_blank';break;case'/':case'/myforms':el.href='/platform/salesforce/myforms';el.target='_self';break;default:break;}}function handleUI(){loadJotformActions();var handleClickAccountBoxButtons=function handleClickAccountBoxButtons(element){var self=element;var subMenu=self.querySelector('.jfHeader-subMenu');if(subMenu==null){if(self.firstElementChild.getAttribute('data-name')==='login'){if((typeof dataLayer==="undefined"?"undefined":navigation_typeof(dataLayer))==='object'){window.dataLayer.push({event:'Login',eventAction:'View'});}if(window.trackHeaderActions){window.trackHeaderActions.tick({actor:window.user&&window.user.username?window.user.username:'',action:'click',target:'header-login'});}Object(utils["b" /* addClass */])(Object(utils["l" /* getBodyEl */])(),'isModalOpen');Object(utils["i" /* disableScroll */])();Object(utils["b" /* addClass */])(self.parentElement.lastElementChild,'isOpen');window.showModal('s2');var modalContentWrapper=document.querySelector('.jfHeader-modalViewContent');modalContentWrapper.setAttribute('aria-label','Login modal area');focusOnFirstItem(modalContentWrapper);}else if(self.firstElementChild.getAttribute('data-name')==='signup'){if((typeof dataLayer==="undefined"?"undefined":navigation_typeof(dataLayer))==='object'){window.dataLayer.push({event:'Signup',eventAction:'View'});}if(window.trackHeaderActions){window.trackHeaderActions.tick({actor:window.user&&window.user.username?window.user.username:'',action:'click',target:'header-signup'});}Object(utils["b" /* addClass */])(Object(utils["l" /* getBodyEl */])(),'isModalOpen');Object(utils["i" /* disableScroll */])();Object(utils["b" /* addClass */])(self.parentElement.lastElementChild,'isOpen');window.showModal('s1');var _modalContentWrapper=document.querySelector('.jfHeader-modalViewContent');_modalContentWrapper.setAttribute('aria-label','Sign up modal area');focusOnFirstItem(_modalContentWrapper);}setTimeout(function(){document.addEventListener('click',utils["e" /* clickOutsideEvent */],false);document.addEventListener('keydown',utils["w" /* keydownEscapeEvent */],false);document.querySelector('.jfHeader-authForm-close.newModalInlineButton').addEventListener('click',window.closeModal,false);},10);}else if(subMenu.className.indexOf('isOpen')<0){Array.prototype.forEach.call(document.querySelectorAll('.jfHeader-subMenu'),function(el){Object(utils["z" /* removeClass */])(el,'isOpen');});Object(utils["b" /* addClass */])(subMenu,'isOpen');Object(utils["k" /* focusToFirstInput */])(subMenu);}Array.prototype.forEach.call(element.querySelectorAll('.jfHeader-authForm-close'),function(closeBtn){closeBtn.addEventListener('click',function(evt){evt.stopPropagation();if(subMenu.querySelector('form#jfHeader-loginForm')){document.getElementById('forgotPasswordForm').style.display='none';document.getElementById('jfHeader-loginForm').style.display='block';}Object(utils["z" /* removeClass */])(Object(utils["l" /* getBodyEl */])(),'isModalOpen');Object(utils["j" /* enableScroll */])();Object(utils["z" /* removeClass */])(subMenu,'isOpen');Object(utils["l" /* getBodyEl */])().style.overflow='initial';});});};var accountBoxItems=document.querySelectorAll('.jfHeader-accountBox .jfHeader-menuListItem.hasSubMenu');Array.from(accountBoxItems).forEach(function(el){el.addEventListener('click',function(){return handleClickAccountBoxButtons(el);});el.addEventListener('keydown',function(event){a11yClickHandler(event,function(){setTimeout(function(){handleClickAccountBoxButtons(el);});});});});// Hamburger icon color and set mobileSignup
if(document.querySelector('.jfHeader-mobileSignup')){var _element=document.querySelector('.top-bar');var _style=window.getComputedStyle(_element,'::before');var _color=_style.getPropertyValue('background-color');if(_color!=='rgb(255, 255, 255)'){document.querySelector('.jfHeader-mobileSignup').classList.add('revertseCTA');}}var handleClickMobileSignupBtn=function handleClickMobileSignupBtn(e){e.stopPropagation();var isEnterprise=!!(window.JOTFORM_ENV&&window.JOTFORM_ENV==='ENTERPRISE');if(isEnterprise){document.querySelector('.jfHeader-mobileSignup').classList.add('hide');}if((typeof dataLayer==="undefined"?"undefined":navigation_typeof(dataLayer))==='object'){window.dataLayer.push({event:'Signup',eventAction:'View'});}if(window.trackHeaderActions){window.trackHeaderActions.tick({actor:window.user&&window.user.username?window.user.username:'',action:'click',target:'header-mobileHeaderSignup'});}window.showModal('s1');document.addEventListener('click',utils["e" /* clickOutsideEvent */],false);};var mobileSignupButton=document.querySelector('.jfHeader-mobileSignup');if(mobileSignupButton){mobileSignupButton.addEventListener('click',handleClickMobileSignupBtn);mobileSignupButton.addEventListener('keydown',function(event){a11yClickHandler(event,function(e){setTimeout(function(){handleClickMobileSignupBtn(e);});});});}document.querySelector('.jfHeader-hamburger').addEventListener('click',function(e){var hamburgerIcon=e.target.querySelector('label');var el=document.querySelector('.jfHeader-content');if(el.className.indexOf('isExpanded')>=0){// menu wrapper height
document.querySelector('.jfHeader-menuWrapper').style.height='';// <END> menu wrapper height
Object(utils["z" /* removeClass */])(el,'isExpanded');Object(utils["z" /* removeClass */])(hamburgerIcon,'active');e.target.setAttribute('aria-label','menu');document.documentElement.classList.remove('isHamburgerOpen');if(window.trackHeaderActions){window.trackHeaderActions.tick({actor:window.user&&window.user.username?window.user.username:'',action:'click',target:'header-hamburgerExpanded'});}}else{Object(utils["b" /* addClass */])(el,'isExpanded');Object(utils["b" /* addClass */])(hamburgerIcon,'active');e.target.setAttribute('aria-label','close menu');document.documentElement.classList.add('isHamburgerOpen');window.dispatchEvent(new window.CustomEvent('account-box-opened'));if(window.trackHeaderActions){window.trackHeaderActions.tick({actor:window.user&&window.user.username?window.user.username:'',action:'click',target:'header-hamburgerClosed'});}// menu wrapper height
document.querySelector('.jfHeader-menuWrapper').style.height="".concat(window.innerHeight-document.querySelector('.jfHeader-mobileWrapper').clientHeight,"px");// <END> menu wrapper height
}});window.addEventListener('resize',Object(utils["h" /* debounce */])(function(){var jfHeader=document.querySelector('.jfHeader');var el=document.querySelector('.jfHeader-content');var hamburgerIcon=document.querySelector('.jfHeader-hamburger .hamburger-wrapper');if(window.innerWidth>768){if(el.className.indexOf('isExpanded')>=0){Object(utils["z" /* removeClass */])(el,'isExpanded');Object(utils["z" /* removeClass */])(hamburgerIcon,'active');document.querySelector('.jfHeader-hamburger').setAttribute('aria-label','menu');document.documentElement.classList.remove('isHamburgerOpen');}// hide drowdown
var dropDownExist=document.querySelector('.jfHeader-menuListLink.active');if(dropDownExist){dropDownExist.classList.remove('active');}// <END> hide drowdown
}else{/* added current class to parent menu item (landing) */var subExist=document.querySelector('.jfHeader-subMenuItemLink.current');if(jfHeader.classList.contains('custom-content')&&subExist){var activeSubParents=subExist.parentNode.parentNode.parentNode.parentNode.querySelector('.jfHeader-dynamicLink');activeSubParents.classList.add('current','active');}/* <END> added current class to parent menu item */}},500,false));// menu wrapper height without debounce
window.addEventListener('resize',function(){if(window.innerWidth>768){document.querySelector('.jfHeader-menuWrapper').style.height='';}else{// menu wrapper height
document.querySelector('.jfHeader-menuWrapper').style.height="".concat(window.innerHeight-document.querySelector('.jfHeader-mobileWrapper').clientHeight,"px");// <END> menu wrapper height
}});// <END> menu wrapper height without debounce
navigationActions();// Send XHR for campaign assets preferences
window.setNeverShowSignupUserInformation=function setNeverShowSignupUserInformation(status){fetch('/API/user/settings',{method:'POST',headers:{accept:'application/json, text/javascript, */*; q=0.01','content-type':'application/x-www-form-urlencoded; charset=UTF-8'},body:"showMyformsInformationModal=".concat(status)});};function getHeaderLogger(){var isNewHeader=document.querySelector('header').classList.contains('js-header-v2');return isNewHeader?window.megaMenuHeader:window.jfHeaderCTA;}var headerLinkEls=document.querySelectorAll('.js-tracking');var shouldLogActions=headerLinkEls.length>0&&window.JOTFORM_ENV!=='DEVELOPMENT';Array.from(headerLinkEls).forEach(function(linkEl){linkEl.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();var targetHref=e.currentTarget&&e.currentTarget.href;var textName=e.currentTarget&&e.currentTarget.dataset&&e.currentTarget.dataset.textName;if(textName==='dedicated-support-contact-sales'){addAutomatedSDREmail(SDR_SOURCES.SUPPORT_MENU);}if(shouldLogActions){var _getHeaderLogger;(_getHeaderLogger=getHeaderLogger())===null||_getHeaderLogger===void 0?void 0:_getHeaderLogger.tick({actor:window.user.username,action:'headerMenu-click',target:textName});}if(targetHref){setTimeout(function(){window.location.href=targetHref;},250);}});});if(window.__jfrouter&&window.__jfrouter['PLATFORM_ENV']&&window.__jfrouter['PLATFORM_ENV']==='salesforce'){var enterpriseMenuItems=document.querySelectorAll('.jfHeader-enterpriseMenu');var enterpriseLogoLink=document.querySelector('.jfHeader-logoLink');Array.from([].concat(_toConsumableArray(enterpriseMenuItems),[enterpriseLogoLink])).forEach(function(el){manipulateLinkInPlatform(el);});}}
// CONCATENATED MODULE: ./src/js/initCampaign.js
var initCampaign=function initCampaign(userData){// previous checker
// !usage && ((typeof userData?.campaign !== undefined && userData?.campaign?.status) || userData?.location?.country_code === 'TR') || userData?.campaign?.assetsAvailable
try{__webpack_require__.e(/* import() | campaigns-main */ 3).then(__webpack_require__.bind(null, 3522)).then(function(Campaign){if(window.location.href.indexOf('debugInitCampaign=1')!==-1){console.log('Campaign',Campaign);console.log('userData',userData);}// eslint-disable-next-line no-param-reassign
Campaign.campaignJS.userData=userData;Campaign.setCampaignData.init(userData);}).catch(function(error){return console.error(error);});}catch(e){console.error(e);}};
// CONCATENATED MODULE: ./src/js/initGoogleOneTapLoader.js
function initGoogleOneTapLoader_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function initGoogleOneTapLoader_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){initGoogleOneTapLoader_ownKeys(Object(source),true).forEach(function(key){initGoogleOneTapLoader_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{initGoogleOneTapLoader_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function initGoogleOneTapLoader_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var initGoogleOneTapLoader_initGoogleOneTapLoader=function initGoogleOneTapLoader(_ref){var userData=_ref.userData;var listener=function listener(){if(!window.preventHeaderGoogleOneTap&&!(typeof window.GOOGLE_SIGNON==='undefined'||typeof window.JOTFORM_ENV==='undefined'||window.JOTFORM_ENV==='ENTERPRISE'||window.JOTFORM_ENV==='TESTING'||window.JOTFORM_ENV==='DEVELOPMENT'||userData&&userData.account_type&&userData.account_type.name!=='GUEST'||document.querySelector('.jfh-custom-cta'))){loginFlow_loadLoginFlow(function(){window.loginFlowHelper.initGoogleOneTap(initGoogleOneTapLoader_objectSpread(initGoogleOneTapLoader_objectSpread({showLogoOnSignupOptions:false,includeConfirm:true,forceUser:true,buttonNames:{googleOneTap:'GoogleOnetap'},onUserLogin:function onUserLogin(user,_ref2){var newUser=_ref2.newUser;Object(utils["q" /* initPersOnbForOrderLanding2Test */])(user);trackLoginFlow(newUser?'signup':'login','google-one-tap');window.closeModal();return newUser?customRedirectionOnSignUp():customRedirectionOnLogIn();}},createSocialTermsFlow(window.user)),{},{onGoogleOneTapPromptOpened:function onGoogleOneTapPromptOpened(){return trackLoginFlow('open','google-one-tap');}}),// 2fa response callback
function(){return window.showModal('s5');},// email auth response callback
function(){return window.showModal('s5');});});}};Object(utils["d" /* addEventListenerOnce */])(Object(utils["l" /* getBodyEl */])(),'mouseover',listener);};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__(76);

// CONCATENATED MODULE: ./src/js/checkUnreadMessages.js
function checkUnreadMessages(){var isUserGuest=window.comprehensiveUserData&&window.comprehensiveUserData.account_type&&window.comprehensiveUserData.account_type.name==='GUEST';if(isUserGuest){return;}var isEnterprise=window.JOTFORM_ENV&&window.JOTFORM_ENV==='ENTERPRISE';var hasUnreadSupportAnswers=window.user&&window.user.unreadSupportAnswerCount&&parseInt(window.user.unreadSupportAnswerCount,10)>=1;if(!isEnterprise&&hasUnreadSupportAnswers){var unreadMessagesCountEl=document.querySelector('.jfHeader-unread-messages-count');var unreadMessagesDotEl=document.querySelector('.jfHeader-unread-messages-dot');var unreadMessagesLink=document.querySelector('.js-unread-messages-link');if(unreadMessagesCountEl&&unreadMessagesDotEl&&unreadMessagesLink){unreadMessagesCountEl.style.display='block';unreadMessagesCountEl.innerHTML=window.user.unreadSupportAnswerCount;unreadMessagesDotEl.style.display='inline-block';unreadMessagesLink.setAttribute('aria-label','My support requests. {count} unread support request(s) available.'.locale().replace('{count}',window.user.unreadSupportAnswerCount));}}}
// CONCATENATED MODULE: ./src/js/showUserMenuWithoutReload.js
var showUserMenuWithoutReload=function showUserMenuWithoutReload(){if(window.showUserMenuWithoutReload){var loginSignupEl=document.getElementById('loginSignup');var userProfilEl=document.getElementById('jfHeader-userProfile');var accountLinkList=document.querySelector('.jfHeader-accountLinkList.jfHeader-subMenuBox');if(loginSignupEl){loginSignupEl.style.display='none';}if(userProfilEl){userProfilEl.style.display='block';}if(accountLinkList){accountLinkList.insertAdjacentHTML('beforeend','<li id="logoutSelector" class="jfHeader-accountLinkListItem"><a class="locale jfHeader-accountLinkListItemLink" href="/logout.php">Logout</a></li>');}}};
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(65);

// CONCATENATED MODULE: ./src/js/enterpriseNonProfitModal/enabledPages.js
var enabledPages=['/how-to-start-a-nonprofit/','/nonprofit/unlocking-nonprofit-growth-with-tech/','/nonprofit-fundraising/','/nonprofit/crm-for-nonprofits/','/nonprofit/nonprofit-marketing-strategies-and-tools/','/nonprofit/google-pay-for-nonprofits/','/nonprofit/nonprofit-discount/','/nonprofit/blackbaud-alternative/','/nonprofit/discount-software-for-nonprofit-organizations/','/nonprofit/donation-management-software/','/nonprofit/wordpress-plug-ins-for-nonprofits/','/nonprofit/boost-nonprofit-finance/','/nonprofit/how-to-write-a-grant-proposal-for-nonprofit/','/nonprofit/little-green-light-vs-salesforce/','/nonprofit/marketing-automation-for-nonprofits/','/nonprofit/donation-tools-to-raise-money/','/nonprofit/donorperfect-vs-etapestry/','/nonprofit/donorperfect-vs-raisers-edge/','/nonprofit/best-nonprofit-websites/','/nonprofit/donor-management/','/nonprofit/donation-forms/','/nonprofit/nonprofit-management/','/nonprofit/how-to-set-up-a-givingtuesday-donation-system-using-jotform/','/nonprofit/how-to-write-a-nonprofit-mission-statement/','/nonprofit/the-5-ways-to-help-nonprofit/','/nonprofit/grant-management/','/nonprofit/table-templates-for-nonprofits/','/nonprofit/donation-forms-during-covid-19/','/nonprofit/great-donation-button/','/nonprofit/how-to-organize-a-5k/','/nonprofit/costly-donation-form-mistakes/','/nonprofit/ebook-maximizing-donations/','/nonprofit/how-to-start-a-scholarship-fund/','/nonprofit/paypal-donate-button-alternative/','/nonprofit/documentary-filmmaking/','/nonprofit/how-to-get-people-to-donate-money-to-you/','/nonprofit/midtown-case-study/','/nonprofit/nonprofit-museum-case-study/','/nonprofit/upcoming-free-webinars-for-nonprofits/','/nonprofit/eat-ballard-case-study/','/nonprofit/how-to-organize-a-potluck/','/nonprofit/how-to-set-up-an-emergency-rental-assistance-program/','/nonprofit/jotform-tables-for-giving/','/nonprofit/united-states-generosity-index/','/nonprofit/how-to-collect-donations-with-carrd/','/nonprofit/how-to-set-up-a-relief-fund/','/nonprofit/how-to-start-an-online-petition/','/nonprofit/membership-management-software/','/nonprofit/wordpress-donation-plugins/','/nonprofit/creating-donation-forms/','/nonprofit/charity-fundraising-ideas/','/paypal-for-nonprofits/','/nonprofit/online-fundraising-platforms-for-nonprofits/','/nonprofit/fundraising-software/','/blog/nonprofit-organizations/','/nonprofit/fundraising-during-pandemic-crisis/','/volunteer-management/','/help/480-chapter-7-the-importance-of-transparency/','/nonprofit/fundraising-calendar/','/help/477-chapter-4-essential-software-to-increase-donations-for-your-nonprofit/','/help/482-chapter-8-why-nonprofit-branding-matters-to-donors/','/nonprofit/apple-pay-for-nonprofits/','/nonprofit/using-qr-codes-to-maximize-donations/','/blog/nonprofit-survey-questions/','/nonprofit/donorsearch-vs-wealthengine/','/nonprofit/donorscape-vs-wealthengine/','/nonprofit/year-end-fundraising/','/nonprofit/virtual-fundraising-ideas/','/help/484-chapter-10-social-media-for-nonprofits/','/help/485-chapter-11-revenue-streams-for-nonprofits/','/nonprofit/5-steps-for-better-online-fundraising/','/nonprofit/how-to-create-a-donation-page/','/nonprofit/virtual-fundraiser/','/blog/airtable-for-nonprofits/','/nonprofit/nonprofit-forms-webinar/','/how-to-start-a-church/','/nonprofit/giving-tuesday-donation-forms/','/app-templates/category/nonprofit-app-templates','/products/store-builder/templates/nonprofit-app-templates','/blog/blackbaud-vs-salesforce/','/help/474-chapter-3-moving-your-nonprofits-website-onto-a-mobile-platform/','/nonprofit/5-tips-for-nonprofit-volunteer-management/','/table-templates/category/nonprofit','/blog/zoom-for-nonprofits/','/electronic-signature-for-nonprofit/','/nonprofit/clickup-for-nonprofits/','/help/486-chapter-12-keeping-donors-engaged/','/help/476-chapter-1-how-to-include-a-donate-button-on-your-website/','/help/478-chapter-5-the-anatomy-of-an-effective-donation-form/','/approval-templates/category/nonprofit','/help/479-chapter-6-giving-back-to-your-donors-with-thank-you-gifts/','/nonprofit/how-paypal-assists-nonprofits-examples/','/nonprofit/volunteer-management-software/','/nonprofit/volunteer-recruitment/','/nonprofit/volunteer-tracking/','/nonprofit/volunteer-screening/','/nonprofit/volunteer-training/','/nonprofit/','/nonprofit/boosting-volunteer-recruitment/','/nonprofit/volunteer-survey-questions/','/nonprofit/volunteer-application-form/','/nonprofit/how-to-write-a-waiver-for-volunteer-work/','/nonprofit/increase-nonprofit-volunteer-turnout/','/animal-shelter/faq/','/blog/finding-animal-shelter-volunteers/','/blog/fundraising-ideas-for-churches/','/form-templates/category/charity','/online-church/faq/','/online-church/features/','/online-payments/templates/charity','/animal-shelter/','/blog/church-management-software-systems/','/blog/church-website-builder/','/blog/how-to-make-a-church-app/','/blog/shopify-donation-app/','/blog/user-spotlight-underdog-animal-rescue/','/form-templates/category/fundraiser-forms','/form-templates/category/volunteer-and-community-service','/online-church/','/pdf-templates/e-sign/church'];
// CONCATENATED MODULE: ./src/js/enterpriseNonProfitModal/initEnterpriseNonProfitModal.js
function initEnterpriseNonProfitModal_typeof(obj){"@babel/helpers - typeof";return initEnterpriseNonProfitModal_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},initEnterpriseNonProfitModal_typeof(obj);}function initEnterpriseNonProfitModal_regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */initEnterpriseNonProfitModal_regeneratorRuntime=function _regeneratorRuntime(){return exports;};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value;},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key];}try{define({},"");}catch(err){define=function define(obj,key,value){return obj[key]=value;};}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator;}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)};}catch(err){return{type:"throw",arg:err};}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,function(){return this;});var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){define(prototype,method,function(arg){return this._invoke(method,arg);});});}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==initEnterpriseNonProfitModal_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject);},function(err){invoke("throw",err,resolve,reject);}):PromiseImpl.resolve(value).then(function(unwrapped){result.value=unwrapped,resolve(result);},function(error){return invoke("throw",error,resolve,reject);});}reject(record.arg);}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl(function(resolve,reject){invoke(method,arg,resolve,reject);});}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg();}});}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult();}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult;}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg);}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done};}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg);}};}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(undefined===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=undefined,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=undefined),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel);}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry);}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record;}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0);}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=undefined,next.done=!0,next;};return next.next=next;}}return{next:doneResult};}function doneResult(){return{value:undefined,done:!0};}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name));},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun;},exports.awrap=function(arg){return{__await:arg};},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,function(){return this;}),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next();});},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,function(){return this;}),define(Gp,"toString",function(){return"[object Generator]";}),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next;}return next.done=!0,next;};},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined);},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval;},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=undefined),!!caught;}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc);}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc);}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break;}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record);},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel;},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel;}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=undefined),ContinueSentinel;}},exports;}function initEnterpriseNonProfitModal_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function initEnterpriseNonProfitModal_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){initEnterpriseNonProfitModal_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){initEnterpriseNonProfitModal_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}var loadEnterpriseNonProfitModal=function loadEnterpriseNonProfitModal(){return __webpack_require__.e(/* import() | enterprise-non-profit-modal */ 6).then(__webpack_require__.bind(null, 3526)).then(function(module){return module.default;});};var initEnterpriseNonProfitModal=/*#__PURE__*/function(){var _ref=initEnterpriseNonProfitModal_asyncToGenerator(/*#__PURE__*/initEnterpriseNonProfitModal_regeneratorRuntime().mark(function _callee(userData){var _window$user;var isEnabled,urlParam,localStorageKey,urlParams,hasUrlParam,isEnterprise,isAvailableInPage,isGuestUser,shouldRenderForGuest,shouldRenderForRegularUser,shouldRender,initModal;return initEnterpriseNonProfitModal_regeneratorRuntime().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:isEnabled=false;urlParam='enpm';localStorageKey='enterpriseNonProfitWebinarModalSeenAt';urlParams=new URLSearchParams(window.location.search);hasUrlParam=urlParams.has(urlParam);isEnterprise=window.JOTFORM_ENV==='ENTERPRISE';isAvailableInPage=enabledPages.includes(window.location.pathname);isGuestUser=Object(utils["u" /* isGuest */])(window.user);shouldRenderForGuest=isGuestUser&&isEnabled&&isAvailableInPage&&!isEnterprise&&!window.localStorage.getItem(localStorageKey);shouldRenderForRegularUser=!isGuestUser&&isEnabled&&isAvailableInPage&&!isEnterprise&&!((_window$user=window.user)===null||_window$user===void 0?void 0:_window$user.enterpriseNonProfitWebinarModalSeenAt);shouldRender=shouldRenderForGuest||shouldRenderForRegularUser||hasUrlParam;if(shouldRender){_context.next=13;break;}return _context.abrupt("return");case 13:// hotfix for guest users, user settings data return undefined from backend
if(isGuestUser){window.localStorage.setItem(localStorageKey,Object(utils["m" /* getCurrentDateWithoutTimeZone */])());}_context.next=16;return loadEnterpriseNonProfitModal();case 16:initModal=_context.sent;initModal({user:userData,targetSelector:'#enterprise-promotions-modal-root'});case 18:case"end":return _context.stop();}},_callee);}));return function initEnterpriseNonProfitModal(_x){return _ref.apply(this,arguments);};}();/* harmony default export */ var enterpriseNonProfitModal_initEnterpriseNonProfitModal = (initEnterpriseNonProfitModal);
// CONCATENATED MODULE: ./src/js/enterpriseNonProfitModal/index.js

// CONCATENATED MODULE: ./src/js/healthcareReportModal/enabledPages.js
var enabledPages_enabledPages=['/blog/healthcare/','/pdf-templates/e-sign/healthcare','/pdf-templates/healthcare','/table-templates/category/healthcare','/hipaa/templates/','/hipaa/webinar/hipaa-webinar-for-healthcare-providers/','/app-templates/category/healthcare-app-templates','/hipaa/webinar/remote-healthcare-webinar/','/hipaa/webinar/hipaa-compliance-mistakes-webinar/','/what-is-hipaa-compliance/','/form-templates/category/health','/blog/how-to-organize-your-vaccine-distribution-with-jotform/','/approval-templates/category/healthcare','/blog/hipaa-violations/','/hipaa/webinar/managing-vaccine-distribution/','/blog/contactless-screening-for-covid-19/','/blog/shared-decision-making-in-healthcare/','/blog/what-is-a-baa/','/blog/announcing-jotform-health-app/','/form-templates/category/health-coach-forms','/products/approvals/healthcare/','/blog/hippa-compliant/','/form-templates/category/physician-forms','/electronic-signature-for-healthcare/','/form-templates/category/psychologist-forms','/blog/hipaa-compliant-survey-tools/','/form-templates/category/dentist-forms','/form-templates/category/nurse-forms','/form-templates/category/dietitian-forms','/form-templates/category/therapist-forms','/blog/employee-health-screening/','/form-templates/category/esthetician-forms','/form-templates/category/pharmacist-forms','/blog/patients-right-to-access-under-hipaa-webinar/','/home-health-care-forms/','/hipaa/','/hipaa/best-hipaa-compliant-cloud-storage-solutions/','/blog/best-hipaa-compliant-software-products/','/hipaa/features/','/newsletters/announcing-our-new-touchless-mobile-kiosk-and-jotform-health-app/','/blog/best-hipaa-compliant-email-providers/','/blog/when-do-you-need-to-use-hipaa-medical-records-release-form/'];
// CONCATENATED MODULE: ./src/js/healthcareReportModal/initHealthcareReportModal.js
function initHealthcareReportModal_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function initHealthcareReportModal_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){initHealthcareReportModal_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){initHealthcareReportModal_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}var loadHealthcareReportModal=function loadHealthcareReportModal(){return __webpack_require__.e(/* import() | healthcare-report-modal */ 7).then(__webpack_require__.bind(null, 3528)).then(function(module){return module.default;});};var initHealthcareReportModal=/*#__PURE__*/function(){var _ref=initHealthcareReportModal_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(userData){var _window$user,_document$documentEle;var isEnabled,isInitiated,urlParam,seetAtKey,urlParams,hasUrlParam,isEnterprise,isAvailableInPage,isGuestUser,shouldRenderForGuest,shouldRenderForRegularUser,shouldRender,initModal;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:isEnabled=true;isInitiated=false;urlParam='hcrm';seetAtKey='enterpriseHealthcareReportModalSeenAt';urlParams=new URLSearchParams(window.location.search);hasUrlParam=urlParams.has(urlParam);isEnterprise=window.JOTFORM_ENV==='ENTERPRISE';isAvailableInPage=enabledPages_enabledPages.includes(window.location.pathname);isGuestUser=Object(utils["u" /* isGuest */])(window.user);shouldRenderForGuest=isGuestUser&&isEnabled&&isAvailableInPage&&!isEnterprise&&!window.localStorage.getItem(seetAtKey);shouldRenderForRegularUser=!isGuestUser&&isEnabled&&isAvailableInPage&&!isEnterprise&&!((_window$user=window.user)===null||_window$user===void 0?void 0:_window$user[seetAtKey]);shouldRender=shouldRenderForGuest||shouldRenderForRegularUser||hasUrlParam;if(shouldRender){_context.next=14;break;}return _context.abrupt("return");case 14:// hotfix for guest users, user settings data return undefined from backend
if(isGuestUser){window.localStorage.setItem(seetAtKey,Object(utils["m" /* getCurrentDateWithoutTimeZone */])());}_context.next=17;return loadHealthcareReportModal();case 17:initModal=_context.sent;(_document$documentEle=document.documentElement)===null||_document$documentEle===void 0?void 0:_document$documentEle.addEventListener('mouseleave',function(){if(isInitiated)return;initModal({user:userData,targetSelector:'#healthcare-report-modal-root'});isInitiated=true;});case 19:case"end":return _context.stop();}}},_callee);}));return function initHealthcareReportModal(_x){return _ref.apply(this,arguments);};}();/* harmony default export */ var healthcareReportModal_initHealthcareReportModal = (initHealthcareReportModal);
// CONCATENATED MODULE: ./src/js/healthcareReportModal/index.js

// EXTERNAL MODULE: ./src/js/abTests/persOnbForOrderLanding2.js
var persOnbForOrderLanding2 = __webpack_require__(126);

// EXTERNAL MODULE: ./src/js/abtestManager/index.js
var abtestManager = __webpack_require__(33);

// CONCATENATED MODULE: ./src/js/abTests/linkTreeAlternativesSideBanner.js
function linkTreeAlternativesSideBanner_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function linkTreeAlternativesSideBanner_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){linkTreeAlternativesSideBanner_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){linkTreeAlternativesSideBanner_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}var initABTestLinkAlternative=/*#__PURE__*/function(){var _ref=linkTreeAlternativesSideBanner_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(user){var abTestHelper,isTestVariant,target,contentExternalSideBanner,contentExternalLink;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:abTestHelper=new abtestManager["a" /* ABTestManager */]({isTestEnabled:true,testName:'linkTreeAlternativesSideBanner',controlVariantCode:'6401',testVariantCode:'6411',cacheVariantCodeAtLocalStorage:true,urlParam:'linktree-side-banner',user:user,customUserChecks:{isLinktreeAlternamtivesPage:window.location.pathname.includes('/blog/linktree-alternatives'),isScreenSizeValid:window.innerWidth>=1024}});_context.next=3;return abTestHelper.isTestVariant();case 3:isTestVariant=_context.sent;if(isTestVariant){target=document.querySelector('ol.featured-snippet-bullet-points-list li');contentExternalSideBanner=document.getElementById('contentExternalSideBanner');contentExternalLink=document.getElementById('contentExternalLink');if(target){target.style.display='flex';target.append(contentExternalLink);}contentExternalSideBanner.classList.remove('hide');contentExternalLink.classList.remove('hide');}case 5:case"end":return _context.stop();}}},_callee);}));return function initABTestLinkAlternative(_x){return _ref.apply(this,arguments);};}();
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__(135);

// CONCATENATED MODULE: ./src/js/abTests/epBlogStickyBanner.js
function epBlogStickyBanner_typeof(obj){"@babel/helpers - typeof";return epBlogStickyBanner_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},epBlogStickyBanner_typeof(obj);}function epBlogStickyBanner_regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */epBlogStickyBanner_regeneratorRuntime=function _regeneratorRuntime(){return exports;};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value;},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key];}try{define({},"");}catch(err){define=function define(obj,key,value){return obj[key]=value;};}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator;}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)};}catch(err){return{type:"throw",arg:err};}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,function(){return this;});var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){define(prototype,method,function(arg){return this._invoke(method,arg);});});}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==epBlogStickyBanner_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject);},function(err){invoke("throw",err,resolve,reject);}):PromiseImpl.resolve(value).then(function(unwrapped){result.value=unwrapped,resolve(result);},function(error){return invoke("throw",error,resolve,reject);});}reject(record.arg);}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl(function(resolve,reject){invoke(method,arg,resolve,reject);});}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg();}});}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult();}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult;}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg);}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done};}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg);}};}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(undefined===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=undefined,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=undefined),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel);}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry);}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record;}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0);}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=undefined,next.done=!0,next;};return next.next=next;}}return{next:doneResult};}function doneResult(){return{value:undefined,done:!0};}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name));},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun;},exports.awrap=function(arg){return{__await:arg};},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,function(){return this;}),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next();});},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,function(){return this;}),define(Gp,"toString",function(){return"[object Generator]";}),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next;}return next.done=!0,next;};},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined);},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval;},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=undefined),!!caught;}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc);}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc);}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break;}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record);},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel;},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel;}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=undefined),ContinueSentinel;}},exports;}function epBlogStickyBanner_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function epBlogStickyBanner_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){epBlogStickyBanner_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){epBlogStickyBanner_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}var initABTestEpBlogStickyBanner=/*#__PURE__*/function(){var _ref=epBlogStickyBanner_asyncToGenerator(/*#__PURE__*/epBlogStickyBanner_regeneratorRuntime().mark(function _callee(user){var abTestHelper,isTestVariant,target;return epBlogStickyBanner_regeneratorRuntime().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:abTestHelper=new abtestManager["a" /* ABTestManager */]({isTestEnabled:true,testName:'epBlogStickyBanner',controlVariantCode:'8371',testVariantCode:'8381',urlParam:'ep-bsb',user:user,customUserChecks:{isPredefinedPage:['blog/what-is-an-enterprise','blog/ways-jotform-enterprise-accelerates-company-growth','blog/more-automation-in-2023-with-jotform-enterprise','blog/managing-popular-london-restaurant-brands-with-jotform-enterprise','blog/2023-enterprise-trends-and-how-to-adapt','blog/salesforce-professional-vs-enterprise','blog/quickbooks-online-vs-enterprise','blog/jotform-enterprise-field-service-management','blog/enterprise-data-storage','blog/favorite-features-of-jotform-enterprise-users','blog/soc-vs-sox'].some(function(v){return window.location.pathname.includes(v);}),isScreenSizeValid:window.innerWidth>=1180}});_context.next=3;return abTestHelper.isTestVariant();case 3:isTestVariant=_context.sent;if(isTestVariant){target=document.querySelector('.sticky-banner-enterprise');window.epBlogStickyBannerTestVariant=true;if(target){target.style.display='flex';}}case 5:case"end":return _context.stop();}},_callee);}));return function initABTestEpBlogStickyBanner(_x){return _ref.apply(this,arguments);};}();
// CONCATENATED MODULE: ./src/js/abTests/productMenuEnterpriseSection.js
function productMenuEnterpriseSection_typeof(obj){"@babel/helpers - typeof";return productMenuEnterpriseSection_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},productMenuEnterpriseSection_typeof(obj);}function productMenuEnterpriseSection_regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */productMenuEnterpriseSection_regeneratorRuntime=function _regeneratorRuntime(){return exports;};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value;},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key];}try{define({},"");}catch(err){define=function define(obj,key,value){return obj[key]=value;};}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator;}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)};}catch(err){return{type:"throw",arg:err};}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,function(){return this;});var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){define(prototype,method,function(arg){return this._invoke(method,arg);});});}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==productMenuEnterpriseSection_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject);},function(err){invoke("throw",err,resolve,reject);}):PromiseImpl.resolve(value).then(function(unwrapped){result.value=unwrapped,resolve(result);},function(error){return invoke("throw",error,resolve,reject);});}reject(record.arg);}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl(function(resolve,reject){invoke(method,arg,resolve,reject);});}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg();}});}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult();}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult;}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg);}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done};}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg);}};}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(undefined===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=undefined,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=undefined),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel);}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry);}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record;}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0);}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=undefined,next.done=!0,next;};return next.next=next;}}return{next:doneResult};}function doneResult(){return{value:undefined,done:!0};}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name));},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun;},exports.awrap=function(arg){return{__await:arg};},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,function(){return this;}),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next();});},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,function(){return this;}),define(Gp,"toString",function(){return"[object Generator]";}),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next;}return next.done=!0,next;};},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined);},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval;},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=undefined),!!caught;}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc);}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc);}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break;}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record);},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel;},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel;}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=undefined),ContinueSentinel;}},exports;}function productMenuEnterpriseSection_defineProperty(obj,key,value){key=_toPropertyKey(key);if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return productMenuEnterpriseSection_typeof(key)==="symbol"?key:String(key);}function _toPrimitive(input,hint){if(productMenuEnterpriseSection_typeof(input)!=="object"||input===null)return input;var prim=input[Symbol.toPrimitive];if(prim!==undefined){var res=prim.call(input,hint||"default");if(productMenuEnterpriseSection_typeof(res)!=="object")return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return(hint==="string"?String:Number)(input);}function productMenuEnterpriseSection_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function productMenuEnterpriseSection_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){productMenuEnterpriseSection_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){productMenuEnterpriseSection_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}// A/B Test: productMenuEnterpriseSection
var initProductMenuEnterpriseSection=/*#__PURE__*/function(){var _ref=productMenuEnterpriseSection_asyncToGenerator(/*#__PURE__*/productMenuEnterpriseSection_regeneratorRuntime().mark(function _callee3(user){var _industryContent;var hcUrlParam,eduUrlParam,npUrlParam,healthcareInd,educationInd,nonprofitInd,contactSalesButtonDataTextName,regularSectionClassName,withEnterpriseClassName,indSpecifiedSectionClassName,industryContent,trackingEls,productMenuButtonEl,productMenuEl,enterpriseSectionEl,industryOnlySectionEl,industryOnlyLinkEl,industryOnlyImageEl,isSeen,isTestInitializedOnce,urlParams,targetIndustries,userIndustry,isInTargetIndustry,abTestManager,addLinkTrackers,initAbTest;return productMenuEnterpriseSection_regeneratorRuntime().wrap(function _callee3$(_context3){while(1)switch(_context3.prev=_context3.next){case 0:hcUrlParam='hc';eduUrlParam='edu';npUrlParam='np';healthcareInd='Healthcare';educationInd='Education';nonprofitInd='Nonprofit';contactSalesButtonDataTextName='contactSales';regularSectionClassName='regular-section';withEnterpriseClassName='with-enterprise-section';indSpecifiedSectionClassName='industry-specified';industryContent=(_industryContent={},productMenuEnterpriseSection_defineProperty(_industryContent,healthcareInd,{redirectToUrl:'/blog/jotform-enterprise-one-to-one-health-spotlight',imageUrl:'https://cdn01.jotfor.ms/assets/img/jfHeader/v2/products/enterprise-usecase-logo/one-to-one-health.svg'}),productMenuEnterpriseSection_defineProperty(_industryContent,educationInd,{redirectToUrl:'/blog/jotform-enterprise-powers-pasadena-city-college/',imageUrl:'https://cdn01.jotfor.ms/assets/img/jfHeader/v2/products/enterprise-usecase-logo/pasadena-city-college.png'}),productMenuEnterpriseSection_defineProperty(_industryContent,nonprofitInd,{redirectToUrl:'/blog/case-study-three-rivers-park-district',imageUrl:'https://cdn01.jotfor.ms/assets/img/jfHeader/v2/products/enterprise-usecase-logo/county-of-marin.svg'}),_industryContent);trackingEls=document.querySelectorAll('.js-pmes-abtest-tracking');productMenuButtonEl=document.querySelector('[data-text-name="products"]');productMenuEl=document.querySelector('.jfHeader-menuWrapper .jfHeader-subMenu.products');enterpriseSectionEl=document.querySelector('.enterprise-section');industryOnlySectionEl=document.querySelector('.industryOnlySection');industryOnlyLinkEl=industryOnlySectionEl===null||industryOnlySectionEl===void 0?void 0:industryOnlySectionEl.querySelector('a');industryOnlyImageEl=industryOnlySectionEl===null||industryOnlySectionEl===void 0?void 0:industryOnlySectionEl.querySelector('img');isSeen=false;isTestInitializedOnce=false;urlParams=new URLSearchParams(window.location.search);targetIndustries=[healthcareInd,educationInd,nonprofitInd];userIndustry=urlParams.has(hcUrlParam)&&healthcareInd||urlParams.has(eduUrlParam)&&educationInd||urlParams.has(npUrlParam)&&nonprofitInd||(user===null||user===void 0?void 0:user.industry)||'';isInTargetIndustry=targetIndustries.includes(userIndustry);abTestManager=new abtestManager["a" /* ABTestManager */]({isTestEnabled:false,testName:'productMenuEnterpriseSection',controlVariantCode:'7001',testVariantCode:'7011',cacheVariantCodeAtLocalStorage:true,urlParam:'pmes',user:user// debugMode: {
//   logTestState: true,
//   forceTestVariant: true,
//   forceUserEligible: true,
// }
});addLinkTrackers=function addLinkTrackers(){Array.from(trackingEls).forEach(function(element){element===null||element===void 0?void 0:element.addEventListener('click',/*#__PURE__*/function(){var _ref2=productMenuEnterpriseSection_asyncToGenerator(/*#__PURE__*/productMenuEnterpriseSection_regeneratorRuntime().mark(function _callee(e){var target,targetWithUserInd;return productMenuEnterpriseSection_regeneratorRuntime().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:e.preventDefault();e.stopPropagation();target=e.target.dataset.textName;targetWithUserInd=isInTargetIndustry?"".concat(target,"-userInd").concat(userIndustry):target;abTestManager.registerABTestAction({action:'click',target:targetWithUserInd});if(!(target===contactSalesButtonDataTextName)){_context.next=8;break;}_context.next=8;return addAutomatedSDREmail(SDR_SOURCES.PRODUCTS_MENU);case 8:setTimeout(function(){window.location.href=e.target.href;},250);case 9:case"end":return _context.stop();}},_callee);}));return function(_x2){return _ref2.apply(this,arguments);};}());});};initAbTest=/*#__PURE__*/function(){var _ref3=productMenuEnterpriseSection_asyncToGenerator(/*#__PURE__*/productMenuEnterpriseSection_regeneratorRuntime().mark(function _callee2(){var isTestVariant,_industryContent$user,_industryContent$user2;return productMenuEnterpriseSection_regeneratorRuntime().wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:if(!(!enterpriseSectionEl||isTestInitializedOnce)){_context2.next=2;break;}return _context2.abrupt("return");case 2:isTestInitializedOnce=true;_context2.next=5;return abTestManager.isTestVariant();case 5:isTestVariant=_context2.sent;if(!isSeen){isSeen=true;addLinkTrackers();abTestManager.registerABTestAction({action:'seen',target:'productsMenu'});}if(isTestVariant){_context2.next=9;break;}return _context2.abrupt("return");case 9:// show enterprise section
productMenuEl.classList.add(withEnterpriseClassName);// prepare specified section
if(isInTargetIndustry){enterpriseSectionEl.classList.add(indSpecifiedSectionClassName);industryOnlyLinkEl.href=(_industryContent$user=industryContent[userIndustry])===null||_industryContent$user===void 0?void 0:_industryContent$user.redirectToUrl;industryOnlyImageEl.setAttribute('src',(_industryContent$user2=industryContent[userIndustry])===null||_industryContent$user2===void 0?void 0:_industryContent$user2.imageUrl);}else{enterpriseSectionEl.classList.add(regularSectionClassName);}case 11:case"end":return _context2.stop();}},_callee2);}));return function initAbTest(){return _ref3.apply(this,arguments);};}();productMenuButtonEl===null||productMenuButtonEl===void 0?void 0:productMenuButtonEl.addEventListener('click',initAbTest);productMenuButtonEl===null||productMenuButtonEl===void 0?void 0:productMenuButtonEl.addEventListener('mouseover',initAbTest);case 29:case"end":return _context3.stop();}},_callee3);}));return function initProductMenuEnterpriseSection(_x){return _ref.apply(this,arguments);};}();
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(180);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(174);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);

// CONCATENATED MODULE: ./src/js/abTests/enterpriseMobileHeaderContactSales.js
function enterpriseMobileHeaderContactSales_typeof(obj){"@babel/helpers - typeof";return enterpriseMobileHeaderContactSales_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},enterpriseMobileHeaderContactSales_typeof(obj);}function enterpriseMobileHeaderContactSales_regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */enterpriseMobileHeaderContactSales_regeneratorRuntime=function _regeneratorRuntime(){return exports;};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value;},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key];}try{define({},"");}catch(err){define=function define(obj,key,value){return obj[key]=value;};}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator;}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)};}catch(err){return{type:"throw",arg:err};}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,function(){return this;});var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){define(prototype,method,function(arg){return this._invoke(method,arg);});});}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==enterpriseMobileHeaderContactSales_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject);},function(err){invoke("throw",err,resolve,reject);}):PromiseImpl.resolve(value).then(function(unwrapped){result.value=unwrapped,resolve(result);},function(error){return invoke("throw",error,resolve,reject);});}reject(record.arg);}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl(function(resolve,reject){invoke(method,arg,resolve,reject);});}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg();}});}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult();}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult;}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg);}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done};}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg);}};}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(undefined===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=undefined,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=undefined),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel);}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry);}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record;}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0);}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=undefined,next.done=!0,next;};return next.next=next;}}return{next:doneResult};}function doneResult(){return{value:undefined,done:!0};}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name));},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun;},exports.awrap=function(arg){return{__await:arg};},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,function(){return this;}),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next();});},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,function(){return this;}),define(Gp,"toString",function(){return"[object Generator]";}),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next;}return next.done=!0,next;};},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined);},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval;},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=undefined),!!caught;}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc);}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc);}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break;}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record);},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel;},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel;}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=undefined),ContinueSentinel;}},exports;}function enterpriseMobileHeaderContactSales_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function enterpriseMobileHeaderContactSales_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){enterpriseMobileHeaderContactSales_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){enterpriseMobileHeaderContactSales_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}var isEnterprisePage=window.location.pathname.includes('/enterprise/');var isEnterprisePricingPage=window.location.pathname.includes('/enterprise/pricing/');var isScreenSizeValid=function isScreenSizeValid(){return window.innerWidth>=375&&window.innerWidth<=768;};var additionalContactSalesEl=document.querySelector('.jfHeader-mobileEnterpriseContact');// todo: update buttons with a common selector on pages repo
var contactSalesButton=document.querySelector('#hero-contact-sales-btn');var contactSalesButton2=document.querySelector('[data-jfa="introduction-cta"]');var contactSalesButton3=document.querySelector('[data-jfa="education-cta"]');var contactSalesButton4=document.querySelector('[data-jfa="hero-cta"]');var contactSalesButton5=document.querySelector('[data-jfa="hospice-management-software-cta"]');var contactSalesForm=document.querySelector('#JotformIFrame-63463511625958');var isContactSalesFormExist=isEnterprisePricingPage&&contactSalesForm;var anyContactSalesButtonExists=function anyContactSalesButtonExists(){return[contactSalesButton,contactSalesButton2,contactSalesButton3,contactSalesButton4,contactSalesButton5].filter(function(el){return el;}).length>0;};var enterpriseMobileHeaderContactSales_anyContactSalesButtonIsInViewport=function anyContactSalesButtonIsInViewport(){return[contactSalesButton,contactSalesButton2,contactSalesButton3,contactSalesButton4,contactSalesButton5].filter(function(isElementExists){return isElementExists;}).map(function(el){return Object(utils["v" /* isInViewport */])(el);}).filter(function(isVisible){return isVisible;}).length>0;};var handleClick=/*#__PURE__*/function(){var _ref=enterpriseMobileHeaderContactSales_asyncToGenerator(/*#__PURE__*/enterpriseMobileHeaderContactSales_regeneratorRuntime().mark(function _callee(){return enterpriseMobileHeaderContactSales_regeneratorRuntime().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:_context.next=2;return addAutomatedSDREmail(SDR_SOURCES.MOBILE_MENU);case 2:case"end":return _context.stop();}},_callee);}));return function handleClick(){return _ref.apply(this,arguments);};}();if(additionalContactSalesEl){additionalContactSalesEl.addEventListener('click',handleClick);}var showContactSalesButton=function showContactSalesButton(){return additionalContactSalesEl.classList.add('show');};var hideContactSalesButton=function hideContactSalesButton(){return additionalContactSalesEl.classList.remove('show');};var enterpriseMobileHeaderContactSales_checkContactSalesButton=function checkContactSalesButton(){if(!isEnterprisePage||!isScreenSizeValid()||!additionalContactSalesEl)return;// Home, Features, Solutions pages
if(anyContactSalesButtonExists()&&!enterpriseMobileHeaderContactSales_anyContactSalesButtonIsInViewport()){// show "contact sales" button goes out of the viewport on scroll
showContactSalesButton();return;}// Pricing page
if(isContactSalesFormExist&&!Object(utils["v" /* isInViewport */])(contactSalesForm)){// show on "contact" form goes out of the viewport on scroll
showContactSalesButton();return;}// Security, Resources pages
if(!anyContactSalesButtonExists()&&!isContactSalesFormExist){showContactSalesButton();return;}hideContactSalesButton();};var handleScroll=/*#__PURE__*/function(){var _ref2=enterpriseMobileHeaderContactSales_asyncToGenerator(/*#__PURE__*/enterpriseMobileHeaderContactSales_regeneratorRuntime().mark(function _callee2(){return enterpriseMobileHeaderContactSales_regeneratorRuntime().wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:enterpriseMobileHeaderContactSales_checkContactSalesButton();case 1:case"end":return _context2.stop();}},_callee2);}));return function handleScroll(){return _ref2.apply(this,arguments);};}();var enterpriseMobileHeaderContactSales_initEnterpriseMobileHeaderContactSales=function initEnterpriseMobileHeaderContactSales(){var throttledHandleScroll=throttle_default()(handleScroll,200);enterpriseMobileHeaderContactSales_checkContactSalesButton();window.addEventListener('scroll',function(){throttledHandleScroll();});window.addEventListener('resize',function(){throttledHandleScroll();});};
// EXTERNAL MODULE: ./src/js/abTests/blogStickyFooterBanner.js
var blogStickyFooterBanner = __webpack_require__(175);

// CONCATENATED MODULE: ./src/js/abTests/epMyformsLogoTooltip.js
function epMyformsLogoTooltip_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function epMyformsLogoTooltip_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){epMyformsLogoTooltip_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){epMyformsLogoTooltip_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}var epMyformsLogoTooltip_urlParam='emlt';var dismissKey='epMyformsLogoTooltipDismissed';var rootEl=document.querySelector('#myforms-whitelabeling-root');var portalEl=document.querySelector('.jfHeader-logoLink');var loadShowEnterpriseLogoTooltip=function loadShowEnterpriseLogoTooltip(){return __webpack_require__.e(/* import() | show-enterprise-logo-tooltip */ 9).then(__webpack_require__.bind(null, 3530)).then(function(module){return module.default;});};// A/B Test: epMyformsLogoTooltip
var initEpMyformsLogoTooltipAbTest=/*#__PURE__*/function(){var _ref=epMyformsLogoTooltip_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(user){var isDismissed,setDismissed,abTestManager,isTestVariant,showEnterpriseLogoTooltip;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:isDismissed=Object(utils["f" /* createLcStGetterWithKey */])(dismissKey);setDismissed=Object(utils["g" /* createLcStSetterWithKey */])(dismissKey,epMyformsLogoTooltip_urlParam);abTestManager=new abtestManager["a" /* ABTestManager */]({isTestEnabled:false,testName:'epMyformsLogoTooltip',controlVariantCode:'7561',testVariantCode:'7571',cacheVariantCodeAtLocalStorage:true,urlParam:epMyformsLogoTooltip_urlParam,user:user,customUserChecks:{isMyforms:window.location.pathname.includes('/myforms/'),isBGS:Object(utils["s" /* isBSG */])(user)}// debugMode: {
//   // forceUserEligible: true,
//   logTestState: true,
//   forceTestVariant: true
// }
});if(!(!rootEl||!portalEl||isDismissed())){_context.next=5;break;}return _context.abrupt("return");case 5:_context.next=7;return abTestManager.isTestVariant();case 7:isTestVariant=_context.sent;if(isTestVariant){_context.next=10;break;}return _context.abrupt("return");case 10:_context.next=12;return loadShowEnterpriseLogoTooltip();case 12:showEnterpriseLogoTooltip=_context.sent;showEnterpriseLogoTooltip({rootEl:rootEl,portalEl:portalEl,logAbTestAction:abTestManager.registerABTestAction,onClose:function onClose(){return setDismissed();}});case 14:case"end":return _context.stop();}}},_callee);}));return function initEpMyformsLogoTooltipAbTest(_x){return _ref.apply(this,arguments);};}();
// CONCATENATED MODULE: ./src/js/abTests/index.js

// CONCATENATED MODULE: ./src/js/fetchUser.js
function onReadyStateChange(){var onUserDataReady=arguments.length>0&&arguments[0]!==undefined?arguments[0]:function(f){return f;};if(this.readyState===4&&this.status===200){var responseData=JSON.parse(this.responseText);var userData=responseData.content.credentials;var isFormUser=responseData.content.type==='FORM_USER';user_handleFormUserOperations(responseData);exceptionallyModifyUserDataWithPaypalTransactionData(userData);onUserDataReady(userData);initGoogleOneTapLoader_initGoogleOneTapLoader({userData:userData});attachUserToWindow(userData,isFormUser);checkUnreadMessages();importTurkishSupport(userData);handleEUCheck(userData);modifyFooterForKVKK(userData);Object(utils["B" /* trackWatchman */])();attachAllowMyAppsToWindow(userData);initMyAppsMenu(userData);initAppPicker();modifyJfHeaderSaleMode();fillUserInfo(userData);showUserMenuWithoutReload();fitNavigationToScreen();initCampaign(userData);enterpriseNonProfitModal_initEnterpriseNonProfitModal(userData);healthcareReportModal_initHealthcareReportModal(userData);// A/B Test: linkTreeAlternativesSideBanner
initABTestLinkAlternative(userData);// A/B Test: epBlogStickyBanner
initABTestEpBlogStickyBanner(userData);// A/B Test: productMenuEnterpriseSection
initProductMenuEnterpriseSection(userData);// A/B Test: enterpriseMobileHeaderContactSales
enterpriseMobileHeaderContactSales_initEnterpriseMobileHeaderContactSales(userData);// This A/B Test is being used on Jotform Blog
window.initABTestStickyFooterBanner=function(user){return Object(blogStickyFooterBanner["a" /* initABTestStickyFooterBanner */])(user||userData);};// A/B Test: epMyformsLogoTooltip
initEpMyformsLogoTooltipAbTest(userData);if(!Object(utils["u" /* isGuest */])(userData)){initCommonAccountBox(userData,isFormUser);}}else if(this.status!==200){hideUserProfile();}}function fetchUser(){var onUserDataReady=arguments.length>0&&arguments[0]!==undefined?arguments[0]:function(f){return f;};var req=new window.XMLHttpRequest();var combinedInfoUrl=user_createCombinedInfoUrl();req.open('GET',combinedInfoUrl);req.send();req.onreadystatechange=function ready(){onReadyStateChange.bind(this)(onUserDataReady);};}
// CONCATENATED MODULE: ./src/js/jfHeader.js
// import { initNotificationCenter } from './notificationCenter';
addPolyfills();initLocale();checkLangCode();(function jfHeader(){fetchUser();Object(utils["c" /* addClassNameForWindows */])();listenAndHandleCardThemesClick();attachLoginFlowOpenerToWindow();openLoginFlow_attachLoginFlowCloserToWindow();handleUI();deletedFormNotification();Object(utils["p" /* hideAccountBoxIfCustomCtaExists */])();openLoginFlow_listenAppSignInOnFailure();stickyHeader_initStickyHeader();listenResizeForIsOverFlown_listenResizeForIsOverFlown();listenSmoothScroll_listenSmoothScroll();lazyLoadLoginFlow_lazyLoadLoginFlow();Object(utils["a" /* addBrowserClassNames */])();loadIntegrationImages();attachObsoleteSignupLoadingFunctionToWindow();})();

/***/ }),
/* 275 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__275__;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=https://cdn.jotfor.ms/common-header/assets/jfHeader.js.map