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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(9);
var isBuffer = __webpack_require__(30);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(32);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(10);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(10);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TeamAPI = (function () {
    function TeamAPI(client) {
        this.client = client;
    }
    Object.defineProperty(TeamAPI, "URL", {
        get: function () {
            return {
                TEAMS: '/teams',
            };
        },
        enumerable: true,
        configurable: true
    });
    TeamAPI.prototype.postTeam = function (team) {
        var config = {
            data: team,
            method: 'post',
            url: "" + TeamAPI.URL.TEAMS,
        };
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.headers['location'];
        });
    };
    TeamAPI.prototype.putTeam = function (team) {
        var config = {
            data: {
                name: team.name,
                icon: team.icon,
            },
            method: 'put',
            url: TeamAPI.URL.TEAMS + "/" + team.id,
        };
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.data;
        });
    };
    TeamAPI.prototype.getTeams = function () {
        var config = {
            method: 'get',
            url: "" + TeamAPI.URL.TEAMS,
        };
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.data;
        });
    };
    TeamAPI.prototype.getTeam = function (teamId) {
        var config = {
            method: 'get',
            url: TeamAPI.URL.TEAMS + "/" + teamId,
        };
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.data;
        });
    };
    TeamAPI.prototype.deleteTeam = function (teamId) {
        var config = {
            method: 'delete',
            url: TeamAPI.URL.TEAMS + "/" + teamId,
        };
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.data;
        });
    };
    return TeamAPI;
}());
exports.default = TeamAPI;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SparkMD5 = __webpack_require__(23);
exports.bufferToString = function (buffer) {
    return new TextDecoder('utf-8').decode(new Uint8Array(buffer));
};
exports.base64MD5FromBuffer = function (buffer) {
    return window.btoa(SparkMD5.ArrayBuffer.hash(buffer, true));
};
exports.concatToBuffer = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return new Blob(items);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter = __webpack_require__(6);
var AccessTokenStore = (function (_super) {
    __extends(AccessTokenStore, _super);
    function AccessTokenStore(tokenStore) {
        var _this = _super.call(this) || this;
        _this.tokenStore = tokenStore;
        _this.ACCESS_TOKEN_KEY = 'access-token';
        _this.ACCESS_TOKEN_TABLE = 'authentication';
        return _this;
    }
    AccessTokenStore.prototype.delete = function () {
        var _this = this;
        return this.tokenStore
            .delete(this.ACCESS_TOKEN_TABLE, this.ACCESS_TOKEN_KEY)
            .then(function () { return (_this.accessToken = undefined); });
    };
    AccessTokenStore.prototype.updateToken = function (accessToken) {
        var _this = this;
        if (this.accessToken !== accessToken) {
            return this.tokenStore
                .delete(this.ACCESS_TOKEN_TABLE, this.ACCESS_TOKEN_KEY)
                .then(function () { return _this.tokenStore.create(_this.ACCESS_TOKEN_TABLE, _this.ACCESS_TOKEN_KEY, accessToken); })
                .then(function () { return (_this.accessToken = accessToken); });
        }
        return Promise.resolve(this.accessToken);
    };
    AccessTokenStore.prototype.init = function () {
        var _this = this;
        return this.tokenStore
            .read(this.ACCESS_TOKEN_TABLE, this.ACCESS_TOKEN_KEY)
            .then(function (accessToken) { return (_this.accessToken = accessToken); });
    };
    AccessTokenStore.TOPIC = {
        ACCESS_TOKEN_REFRESH: 'AccessTokenStore.TOPIC.ACCESS_TOKEN_REFRESH',
    };
    return AccessTokenStore;
}(EventEmitter));
exports.default = AccessTokenStore;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AssetRetentionPolicy;
(function (AssetRetentionPolicy) {
    AssetRetentionPolicy["ETERNAL"] = "eternal";
    AssetRetentionPolicy["PERSISTENT"] = "persistent";
    AssetRetentionPolicy["VOLATILE"] = "volatile";
})(AssetRetentionPolicy || (AssetRetentionPolicy = {}));
exports.default = AssetRetentionPolicy;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContentType_1 = __webpack_require__(26);
exports.ContentType = ContentType_1.default;
var HttpClient_1 = __webpack_require__(27);
exports.HttpClient = HttpClient_1.default;
var StatusCode_1 = __webpack_require__(50);
exports.StatusCode = StatusCode_1.default;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(33);
var buildURL = __webpack_require__(35);
var parseHeaders = __webpack_require__(36);
var isURLSameOrigin = __webpack_require__(37);
var createError = __webpack_require__(11);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(38);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(39);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(34);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Context = (function () {
    function Context(userID, clientID) {
        this.clientID = clientID;
        this.userID = userID;
    }
    return Context;
}());
exports.default = Context;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var AccessTokenStore_1 = __webpack_require__(5);
var EventEmitter = __webpack_require__(6);
var auth_1 = __webpack_require__(16);
var asset_1 = __webpack_require__(19);
var env_1 = __webpack_require__(24);
var http_1 = __webpack_require__(8);
var engine_1 = __webpack_require__(51);
var team_1 = __webpack_require__(58);
var user_1 = __webpack_require__(64);
var tcp_1 = __webpack_require__(66);
var buffer = __webpack_require__(4);
var Client = (function (_super) {
    __extends(Client, _super);
    function Client(config) {
        var _this = _super.call(this) || this;
        _this.asset = {
            api: undefined,
        };
        _this.auth = {
            api: undefined,
        };
        _this.client = {
            http: undefined,
            ws: undefined,
        };
        _this.context = undefined;
        _this.user = {
            api: undefined,
        };
        _this.teams = {
            team: { api: undefined },
            member: { api: undefined },
            invitation: { api: undefined },
        };
        _this.config = __assign({ store: new engine_1.MemoryEngine('wire'), urls: Client.BACKEND.PRODUCTION }, config);
        _this.accessTokenStore = new AccessTokenStore_1.default(_this.config.store);
        _this.client.http = new http_1.HttpClient(_this.config.urls.rest, _this.accessTokenStore);
        _this.client.ws = new tcp_1.WebSocketClient(_this.config.urls.ws, _this.accessTokenStore);
        _this.asset.api = new asset_1.AssetAPI(_this.client.http);
        _this.auth.api = new auth_1.AuthAPI(_this.client.http, _this.config.store);
        _this.user.api = new user_1.UserAPI(_this.client.http);
        _this.teams.team.api = new team_1.TeamAPI(_this.client.http);
        _this.teams.member.api = new team_1.MemberAPI(_this.client.http);
        _this.teams.invitation.api = new team_1.InvitationAPI(_this.client.http);
        _this.client.http.authAPI = _this.auth.api;
        return _this;
    }
    Client.prototype.init = function () {
        var _this = this;
        return this.accessTokenStore
            .init()
            .then(function (accessToken) { return (accessToken ? accessToken : _this.auth.api.postAccess()); })
            .then(function (accessToken) { return _this.accessTokenStore.updateToken(accessToken); })
            .then(function (accessToken) { return _this.createContext(accessToken.user); });
    };
    Client.prototype.login = function (loginData) {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.context && _this.logout(); })
            .then(function () { return _this.auth.api.postLogin(loginData); })
            .then(function (accessToken) { return _this.accessTokenStore.updateToken(accessToken); })
            .then(function (accessToken) { return _this.createContext(accessToken.user); });
    };
    Client.prototype.register = function (registerData) {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.context && _this.logout(); })
            .then(function () { return _this.auth.api.postRegister(registerData); })
            .then(function () { return _this.init(); });
    };
    Client.prototype.logout = function () {
        var _this = this;
        return this.auth.api
            .postLogout()
            .then(function () { return _this.disconnect(); })
            .then(function () { return _this.accessTokenStore.delete(); })
            .then(function () { return (_this.context = undefined); });
    };
    Client.prototype.connect = function () {
        var _this = this;
        return this.client.ws.connect(this.context.clientID).then(function (socket) {
            socket.onmessage = function (event) {
                var notification = JSON.parse(buffer.bufferToString(event.data));
                _this.emit(Client.TOPIC.WEB_SOCKET_MESSAGE, notification);
            };
            return socket;
        });
    };
    Client.prototype.createContext = function (userID) {
        if (this.context) {
            throw new Error("There is already a context with user ID '" + userID + "'.");
        }
        this.context = new auth_1.Context(userID);
        return this.context;
    };
    Client.prototype.disconnect = function () {
        this.client.ws.disconnect();
    };
    Client.TOPIC = {
        WEB_SOCKET_MESSAGE: 'Client.TOPIC.WEB_SOCKET_MESSAGE',
    };
    Client.BACKEND = env_1.Backend;
    return Client;
}(EventEmitter));
module.exports = Client;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AccessTokenStore_1 = __webpack_require__(5);
exports.AccessTokenStore = AccessTokenStore_1.default;
var AuthAPI_1 = __webpack_require__(17);
exports.AuthAPI = AuthAPI_1.default;
var Context_1 = __webpack_require__(14);
exports.Context = Context_1.default;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cookie_1 = __webpack_require__(18);
var AuthAPI = (function () {
    function AuthAPI(client, engine) {
        this.client = client;
        this.engine = engine;
    }
    Object.defineProperty(AuthAPI, "URL", {
        get: function () {
            return {
                ACCESS: '/access',
                ACTIVATE: '/activate',
                COOKIES: '/cookies',
                INVITATIONS: '/invitations',
                LOGIN: '/login',
                LOGOUT: 'logout',
                REGISTER: '/register',
            };
        },
        enumerable: true,
        configurable: true
    });
    AuthAPI.prototype.postCookiesRemove = function (login, labels) {
        var config = {
            data: {
                email: login.email,
                labels: labels,
                password: login.password.toString(),
            },
            method: 'post',
            url: AuthAPI.URL.COOKIES + "/remove",
        };
        return this.client.sendRequest(config);
    };
    AuthAPI.prototype.postLogin = function (login) {
        var _this = this;
        login.password = login.password.toString();
        var config = {
            data: login,
            withCredentials: true,
            method: 'post',
            url: AuthAPI.URL.LOGIN + "?persist=" + login.persist.toString(),
        };
        return this.client.sendJSONRequest(config).then(function (response) { return cookie_1.retrieveCookie(response, _this.engine); });
    };
    AuthAPI.prototype.postLogout = function () {
        var config = {
            withCredentials: true,
            method: 'post',
            url: AuthAPI.URL.ACCESS + "/" + AuthAPI.URL.LOGOUT,
        };
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.data;
        });
    };
    AuthAPI.prototype.postAccess = function (expiredAccessToken) {
        var config = {
            headers: {},
            withCredentials: true,
            method: 'post',
            url: "" + AuthAPI.URL.ACCESS,
        };
        if (expiredAccessToken) {
            config.headers['Authorization'] = expiredAccessToken.token_type + " " + decodeURIComponent(expiredAccessToken.access_token);
        }
        return cookie_1.sendRequestWithCookie(this.client, config, this.engine).then(function (response) { return response.data; });
    };
    AuthAPI.prototype.postRegister = function (register, challengeCookie) {
        if (challengeCookie === void 0) { challengeCookie = true; }
        var config = {
            data: register,
            withCredentials: true,
            method: 'post',
            url: AuthAPI.URL.REGISTER + "?challenge_cookie=" + challengeCookie,
        };
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.data;
        });
    };
    return AuthAPI;
}());
exports.default = AuthAPI;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveCookie = function (response, engine) {
    return Promise.resolve(response.data);
};
exports.sendRequestWithCookie = function (client, config) {
    return client._sendRequest(config);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AssetAPI_1 = __webpack_require__(20);
exports.AssetAPI = AssetAPI_1.default;
var AssetRetentionPolicy_1 = __webpack_require__(7);
exports.AssetRetentionPolicy = AssetRetentionPolicy_1.default;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AssetUtil_1 = __webpack_require__(21);
var random_1 = __webpack_require__(22);
var AssetRetentionPolicy_1 = __webpack_require__(7);
var buffer_1 = __webpack_require__(4);
var AssetAPI = (function () {
    function AssetAPI(client) {
        this.client = client;
    }
    AssetAPI.prototype.getAsset = function (key, token) {
        if (!AssetUtil_1.isValidKey(key)) {
            throw TypeError('Expected key to only contain alphanumeric values and dashes.');
        }
        if (token && !AssetUtil_1.isValidToken(token)) {
            throw TypeError('Expected token to be base64 encoded string.');
        }
        return this.client
            .sendRequest({
            method: 'get',
            url: AssetAPI.ASSET_URL + "/" + key,
            responseType: 'arraybuffer',
            params: {
                asset_token: token,
            },
        }, true)
            .then(function (response) {
            return response.data;
        });
    };
    AssetAPI.prototype.postAsset = function (asset, options) {
        var BOUNDARY = "Frontier" + random_1.unsafeAlphanumeric();
        var metadata = JSON.stringify(Object.assign({
            public: true,
            retention: AssetRetentionPolicy_1.default.PERSISTENT,
        }, options));
        var body = '';
        body += "--" + BOUNDARY + "\r\n";
        body += 'Content-Type: application/json;charset=utf-8\r\n';
        body += "Content-length: " + metadata.length + "\r\n";
        body += '\r\n';
        body += metadata + "\r\n";
        body += "--" + BOUNDARY + "\r\n";
        body += 'Content-Type: application/octet-stream\r\n';
        body += "Content-length: " + asset.length + "\r\n";
        body += "Content-MD5: " + buffer_1.base64MD5FromBuffer(asset.buffer) + "\r\n";
        body += '\r\n';
        var footer = "\r\n--" + BOUNDARY + "--\r\n";
        return this.client
            .sendRequest({
            method: 'post',
            url: AssetAPI.ASSET_URL,
            headers: {
                'Content-Type': "multipart/mixed; boundary=" + BOUNDARY,
            },
            data: buffer_1.concatToBuffer(body, asset, footer),
        })
            .then(function (response) {
            return response.data;
        });
    };
    AssetAPI.ASSET_URL = '/assets/v3';
    return AssetAPI;
}());
exports.default = AssetAPI;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidKey = function (key) {
    return /^[A-Za-z0-9-]+$/.test(key);
};
exports.isValidToken = function (token) {
    return /^[A-Za-z0-9+/=\-]+$/.test(token);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.unsafeAlphanumeric = function (length) {
    if (length === void 0) { length = 32; }
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var range = Array.from(Array(length).keys());
    return range.reduce(function (acc, index) {
        return acc + chars[Math.floor(Math.random() * chars.length)];
    }, '');
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
    if (true) {
        // Node/CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    } else {
        // Browser globals (with support for web workers)
        var glob;

        try {
            glob = window;
        } catch (e) {
            glob = self;
        }

        glob.SparkMD5 = factory();
    }
}(function (undefined) {

    'use strict';

    /*
     * Fastest md5 implementation around (JKM md5).
     * Credits: Joseph Myers
     *
     * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
     * @see http://jsperf.com/md5-shootout/7
     */

    /* this function is much faster,
      so if possible we use it. Some IEs
      are the only ones I know of that
      need the idiotic second function,
      generated by an if clause.  */
    var add32 = function (a, b) {
        return (a + b) & 0xFFFFFFFF;
    },
        hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32((a << s) | (a >>> (32 - s)), b);
    }

    function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];

        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;

        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;

        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;

        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b  = (b << 21 | b >>> 11) + c | 0;

        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    }

    function md5blk(s) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
    }

    function md5blk_array(a) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
    }

    function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
        }
        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);
        return state;
    }

    function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
        // containing the last element of the parent array if the sub array specified starts
        // beyond the length of the parent array - weird.
        // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
        a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);

        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << ((i % 4) << 3);
        }

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);

        return state;
    }

    function rhex(n) {
        var s = '',
            j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
        }
        return s;
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i]);
        }
        return x.join('');
    }

    // In some cases the fast add32 function cannot be used..
    if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
        add32 = function (x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        };
    }

    // ---------------------------------------------------

    /**
     * ArrayBuffer slice polyfill.
     *
     * @see https://github.com/ttaubert/node-arraybuffer-slice
     */

    if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = (val | 0) || 0;

                if (val < 0) {
                    return Math.max(val + length, 0);
                }

                return Math.min(val, length);
            }

            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength,
                    begin = clamp(from, length),
                    end = length,
                    num,
                    target,
                    targetArray,
                    sourceArray;

                if (to !== undefined) {
                    end = clamp(to, length);
                }

                if (begin > end) {
                    return new ArrayBuffer(0);
                }

                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);

                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);

                return target;
            };
        })();
    }

    // ---------------------------------------------------

    /**
     * Helpers.
     */

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
        }

        return str;
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
           buff = new ArrayBuffer(length),
           arr = new Uint8Array(buff),
           i;

        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
    }

    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);

        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);

        return returnUInt8Array ? result : result.buffer;
    }

    function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
    }

    // ---------------------------------------------------

    /**
     * SparkMD5 OOP implementation.
     *
     * Use this class to perform an incremental md5, otherwise use the
     * static methods instead.
     */

    function SparkMD5() {
        // call reset to init the instance
        this.reset();
    }

    /**
     * Appends a string.
     * A conversion will be applied if an utf8 string is detected.
     *
     * @param {String} str The string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.append = function (str) {
        // Converts the string to utf8 bytes if necessary
        // Then append as binary
        this.appendBinary(toUtf8(str));

        return this;
    };

    /**
     * Appends a binary string.
     *
     * @param {String} contents The binary string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;

        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = hex(this._hash);

        if (raw) {
            ret = hexToBinaryString(ret);
        }

        this.reset();

        return ret;
    };

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.reset = function () {
        this._buff = '';
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.prototype.getState = function () {
        return {
            buff: this._buff,
            length: this._length,
            hash: this._hash
        };
    };

    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;

        return this;
    };

    /**
     * Releases memory used by the incremental buffer and other additional
     * resources. If you plan to use the instance again, use reset instead.
     */
    SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
    };

    /**
     * Finish the final calculation based on the tail.
     *
     * @param {Array}  tail   The tail (will be modified)
     * @param {Number} length The length of the remaining buffer
     */
    SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(this._hash, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
    };

    /**
     * Performs the md5 hash on a string.
     * A conversion will be applied if utf8 string is detected.
     *
     * @param {String}  str The string
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.hash = function (str, raw) {
        // Converts the string to utf8 bytes if necessary
        // Then compute it using the binary function
        return SparkMD5.hashBinary(toUtf8(str), raw);
    };

    /**
     * Performs the md5 hash on a binary string.
     *
     * @param {String}  content The binary string
     * @param {Boolean} raw     True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    // ---------------------------------------------------

    /**
     * SparkMD5 OOP implementation for array buffers.
     *
     * Use this class to perform an incremental md5 ONLY for array buffers.
     */
    SparkMD5.ArrayBuffer = function () {
        // call reset to init the instance
        this.reset();
    };

    /**
     * Appends an array buffer.
     *
     * @param {ArrayBuffer} arr The array to be appended
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;

        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = (i - 64) < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = hex(this._hash);

        if (raw) {
            ret = hexToBinaryString(ret);
        }

        this.reset();

        return ret;
    };

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);

        // Convert buffer to a string
        state.buff = arrayBuffer2Utf8Str(state.buff);

        return state;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        // Convert string to buffer
        state.buff = utf8Str2ArrayBuffer(state.buff, true);

        return SparkMD5.prototype.setState.call(this, state);
    };

    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;

    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

    /**
     * Performs the md5 hash on an array buffer.
     *
     * @param {ArrayBuffer} arr The array buffer
     * @param {Boolean}     raw True to get the raw string, false to get the hex one
     *
     * @return {String} The result
     */
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    return SparkMD5;
}));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Backend_1 = __webpack_require__(25);
exports.Backend = Backend_1.default;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Backend = (function () {
    function Backend() {
    }
    Backend.PRODUCTION = {
        name: 'prod',
        rest: 'https://prod-nginz-https.wire.com',
        ws: 'wss://prod-nginz-ssl.wire.com',
    };
    Backend.STAGING = {
        name: 'staging',
        rest: 'https://staging-nginz-https.zinfra.io',
        ws: 'wss://staging-nginz-ssl.zinfra.io',
    };
    return Backend;
}());
exports.default = Backend;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContentType = (function () {
    function ContentType() {
    }
    ContentType.APPLICATION_JSON = 'application/json;charset=UTF-8';
    return ContentType;
}());
exports.default = ContentType;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __webpack_require__(28);
var http_1 = __webpack_require__(8);
var PriorityQueue_1 = __webpack_require__(47);
var HttpClient = (function () {
    function HttpClient(baseURL, accessTokenStore) {
        this.accessTokenStore = accessTokenStore;
        this.baseURL = baseURL;
        this.requestQueue = new PriorityQueue_1.default({
            maxRetries: 0,
            retryDelay: 1000,
        });
    }
    Object.defineProperty(HttpClient.prototype, "authAPI", {
        set: function (authAPI) {
            this._authAPI = authAPI;
        },
        enumerable: true,
        configurable: true
    });
    HttpClient.prototype.createUrl = function (url) {
        return "" + this.baseURL + url;
    };
    HttpClient.prototype._sendRequest = function (config, tokenAsParam) {
        var _this = this;
        if (tokenAsParam === void 0) { tokenAsParam = false; }
        config.baseURL = this.baseURL;
        if (this.accessTokenStore.accessToken) {
            var _a = this.accessTokenStore.accessToken, token_type = _a.token_type, access_token = _a.access_token;
            if (tokenAsParam) {
                config.params = __assign({}, config.params, { access_token: access_token });
            }
            else {
                config.headers = __assign({}, config.headers, { Authorization: token_type + " " + access_token });
            }
        }
        return axios_1.default.request(config).catch(function (error) {
            if (error.response && error.response.status === 401) {
                var expiredAccessToken_1 = undefined;
                if (_this.accessTokenStore.accessToken && _this.accessTokenStore.accessToken.access_token) {
                    expiredAccessToken_1 = _this.accessTokenStore.accessToken;
                }
                return _this.accessTokenStore
                    .delete()
                    .then(function () { return _this._authAPI.postAccess(expiredAccessToken_1); })
                    .then(function (accessToken) { return _this.accessTokenStore.updateToken(accessToken); })
                    .then(function () { return _this._sendRequest(config, tokenAsParam); });
            }
            return Promise.reject(error);
        });
    };
    HttpClient.prototype.sendRequest = function (config, tokenAsParam) {
        var _this = this;
        if (tokenAsParam === void 0) { tokenAsParam = false; }
        return this.requestQueue.add(function () { return _this._sendRequest(config, tokenAsParam); });
    };
    HttpClient.prototype.sendJSONRequest = function (config) {
        config.headers = __assign({}, config.headers, { 'Content-Type': http_1.ContentType.APPLICATION_JSON });
        return this.sendRequest(config);
    };
    return HttpClient;
}());
exports.default = HttpClient;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(29);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(9);
var Axios = __webpack_require__(31);
var defaults = __webpack_require__(1);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(13);
axios.CancelToken = __webpack_require__(45);
axios.isCancel = __webpack_require__(12);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(46);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(1);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(40);
var dispatchRequest = __webpack_require__(41);
var isAbsoluteURL = __webpack_require__(43);
var combineURLs = __webpack_require__(44);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(11);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(42);
var isCancel = __webpack_require__(12);
var defaults = __webpack_require__(1);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(13);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = __webpack_require__(48);
var Priority_1 = __webpack_require__(49);
var PriorityQueue = (function () {
    function PriorityQueue(config) {
        this.defaults = {
            comparator: function (a, b) {
                if (a.priority === b.priority)
                    return a.timestamp - b.timestamp;
                return b.priority - a.priority;
            },
            maxRetries: Infinity,
            retryDelay: 1000
        };
        this.isPending = false;
        this.queue = [];
        this.config = Object.assign(this.defaults, config);
    }
    PriorityQueue.prototype.add = function (thunkedPromise, priority) {
        var _this = this;
        if (priority === void 0) { priority = Priority_1.default.MEDIUM; }
        if (typeof thunkedPromise !== 'function')
            thunkedPromise = function () { return thunkedPromise; };
        return new Promise(function (resolve, reject) {
            var queueObject = new Item_1.default();
            queueObject.fn = thunkedPromise;
            queueObject.priority = priority;
            queueObject.reject = reject;
            queueObject.resolve = resolve;
            queueObject.retry = _this.config.maxRetries;
            queueObject.timestamp = Date.now() + _this.size;
            _this.queue.push(queueObject);
            _this.queue.sort(_this.config.comparator);
            _this.run();
        });
    };
    Object.defineProperty(PriorityQueue.prototype, "size", {
        get: function () {
            return this.queue.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PriorityQueue.prototype, "first", {
        get: function () {
            return this.queue[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PriorityQueue.prototype, "last", {
        get: function () {
            return this.queue[this.queue.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    PriorityQueue.prototype.resolveItems = function () {
        var _this = this;
        var queueObject = this.first;
        if (!queueObject) {
            return;
        }
        Promise.resolve(queueObject.fn())
            .then(function (result) {
            return [true, function () { return queueObject.resolve(result); }];
        })
            .catch(function (error) {
            if (queueObject.retry > 0) {
                queueObject.retry -= 1;
                setTimeout(function () { return _this.resolveItems(); }, _this.config.retryDelay);
                return [false];
            }
            else {
                queueObject.reject(error);
                return [true];
            }
        })
            .then(function (_a) {
            var shouldContinue = _a[0], wrappedResolve = _a[1];
            if (shouldContinue) {
                if (wrappedResolve)
                    wrappedResolve();
                _this.isPending = false;
                var nextItem = _this.queue.shift();
                if (nextItem) {
                    _this.resolveItems();
                }
            }
        });
    };
    PriorityQueue.prototype.run = function () {
        if (!this.isPending && this.first) {
            this.isPending = true;
            this.resolveItems();
        }
    };
    PriorityQueue.prototype.toString = function () {
        return this.queue.map(function (item, index) {
            return "\"" + index + "\": " + item.fn.toString().replace(/(\r\n|\n|\r|\s+)/gm, '');
        }).join('\r\n');
    };
    return PriorityQueue;
}());
exports.default = PriorityQueue;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Item = (function () {
    function Item() {
    }
    return Item;
}());
exports.default = Item;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Priority;
(function (Priority) {
    Priority[Priority["LOW"] = 0] = "LOW";
    Priority[Priority["MEDIUM"] = 5] = "MEDIUM";
    Priority[Priority["HIGH"] = 9] = "HIGH";
})(Priority || (Priority = {}));
exports.default = Priority;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StatusCode = (function () {
    function StatusCode() {
    }
    StatusCode.ACCEPTED = 202;
    StatusCode.BAD_GATEWAY = 502;
    StatusCode.BAD_REQUEST = 400;
    StatusCode.CONFLICT = 409;
    StatusCode.CONNECTIVITY_PROBLEM = 0;
    StatusCode.CREATED = 201;
    StatusCode.FORBIDDEN = 403;
    StatusCode.INTERNAL_SERVER_ERROR = 500;
    StatusCode.NO_CONTENT = 204;
    StatusCode.NOT_FOUND = 404;
    StatusCode.OK = 200;
    StatusCode.PRECONDITION_FAILED = 412;
    StatusCode.REQUEST_TIMEOUT = 408;
    StatusCode.REQUEST_TOO_LARGE = 413;
    StatusCode.TOO_MANY_REQUESTS = 429;
    StatusCode.UNAUTHORIZED = 401;
    return StatusCode;
}());
exports.default = StatusCode;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FileEngine_1 = __webpack_require__(52);
exports.FileEngine = FileEngine_1.default;
var IndexedDBEngine_1 = __webpack_require__(55);
exports.IndexedDBEngine = IndexedDBEngine_1.default;
var MemoryEngine_1 = __webpack_require__(56);
exports.MemoryEngine = MemoryEngine_1.default;
var LocalStorageEngine_1 = __webpack_require__(57);
exports.LocalStorageEngine = LocalStorageEngine_1.default;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __webpack_require__(53);
var path = __webpack_require__(54);
var FileEngine = (function () {
    function FileEngine(storeName, options) {
        if (options === void 0) { options = {
            fileExtension: '.dat'
        }; }
        this.storeName = storeName;
        this.options = options;
        this.storeName = path.normalize(storeName);
        this.options = options;
    }
    FileEngine.prototype.resolvePath = function (tableName, primaryKey) {
        var _this = this;
        var isPathTraversal = function () {
            var testPaths = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                testPaths[_i] = arguments[_i];
            }
            for (var _a = 0, testPaths_1 = testPaths; _a < testPaths_1.length; _a++) {
                var testPath = testPaths_1[_a];
                if (typeof testPath !== 'undefined' && (testPath.includes('.') || testPath.includes('/') || testPath.includes('\\'))) {
                    return true;
                }
            }
            return false;
        };
        return new Promise(function (resolve, reject) {
            if (isPathTraversal(tableName, primaryKey)) {
                throw new Error('Path traversal has been detected. Aborting.');
            }
            return resolve(path.join(_this.storeName, tableName, (primaryKey ? "" + primaryKey + _this.options.fileExtension : '')));
        });
    };
    FileEngine.prototype.create = function (tableName, primaryKey, entity) {
        return this.resolvePath(tableName, primaryKey).then(function (file) {
            if (typeof entity === 'object') {
                try {
                    entity = JSON.stringify(entity);
                }
                catch (error) {
                    entity = entity.toString();
                }
            }
            return fs.outputFile(file, entity).then(function () { return primaryKey; });
        });
    };
    FileEngine.prototype.delete = function (tableName, primaryKey) {
        return this.resolvePath(tableName, primaryKey).then(function (file) {
            return fs.remove(file).then(function () { return primaryKey; }).catch(function () { return false; });
        });
    };
    FileEngine.prototype.deleteAll = function (tableName) {
        return this.resolvePath(tableName).then(function (directory) {
            return fs.remove(directory).then(function () { return true; }).catch(function () { return false; });
        });
    };
    FileEngine.prototype.read = function (tableName, primaryKey) {
        return this.resolvePath(tableName, primaryKey).then(function (file) {
            return new Promise(function (resolve, reject) {
                fs.readFile(file, { encoding: 'utf8', flag: 'r' }, function (error, data) {
                    if (error) {
                        if (error.code === 'ENOENT') {
                            resolve(undefined);
                        }
                        else {
                            reject(error);
                        }
                    }
                    else {
                        try {
                            data = JSON.parse(data);
                        }
                        catch (error) { }
                        resolve(data);
                    }
                });
            });
        });
    };
    FileEngine.prototype.readAll = function (tableName) {
        var _this = this;
        return this.resolvePath(tableName).then(function (directory) {
            return new Promise(function (resolve, reject) {
                fs.readdir(directory, function (error, files) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        var recordNames = files.map(function (file) { return path.basename(file, path.extname(file)); });
                        var promises = recordNames.map(function (primaryKey) { return _this.read(tableName, primaryKey); });
                        Promise.all(promises).then(function (records) { return resolve(records); });
                    }
                });
            });
        });
    };
    FileEngine.prototype.readAllPrimaryKeys = function (tableName) {
        return this.resolvePath(tableName).then(function (directory) {
            return new Promise(function (resolve) {
                fs.readdir(directory, function (error, files) {
                    if (error) {
                        if (error.code === 'ENOENT') {
                            resolve([]);
                        }
                        else {
                            throw new Error(error);
                        }
                    }
                    else {
                        var fileNames = files.map(function (file) { return path.parse(file).name; });
                        resolve(fileNames);
                    }
                });
            });
        });
    };
    FileEngine.prototype.update = function (tableName, primaryKey, changes) {
        var _this = this;
        return this.resolvePath(tableName, primaryKey).then(function (file) {
            return _this.read(tableName, primaryKey)
                .then(function (record) {
                if (typeof record === 'string') {
                    record = JSON.parse(record);
                }
                var updatedRecord = __assign({}, record, changes);
                return JSON.stringify(updatedRecord);
            })
                .then(function (updatedRecord) { return _this.create(tableName, primaryKey, updatedRecord); });
        });
    };
    return FileEngine;
}());
exports.default = FileEngine;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IndexedDBEngine = (function () {
    function IndexedDBEngine(db) {
        this.db = db;
        this.storeName = db.name;
    }
    IndexedDBEngine.prototype.create = function (tableName, primaryKey, entity) {
        var _this = this;
        return this.db[tableName].add(entity, primaryKey)
            .catch(function (error) {
            if (error.name === 'ConstraintError') {
                return _this.delete(tableName, primaryKey).then(function () { return _this.create(tableName, primaryKey, entity); });
            }
            else {
                throw error;
            }
        });
    };
    IndexedDBEngine.prototype.delete = function (tableName, primaryKey) {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.db[tableName].delete(primaryKey); })
            .then(function () { return primaryKey; });
    };
    IndexedDBEngine.prototype.deleteAll = function (tableName) {
        return this.db[tableName].clear().then(function () { return true; });
    };
    IndexedDBEngine.prototype.read = function (tableName, primaryKey) {
        return this.db[tableName].get(primaryKey);
    };
    IndexedDBEngine.prototype.readAll = function (tableName) {
        return this.db[tableName].toArray();
    };
    IndexedDBEngine.prototype.readAllPrimaryKeys = function (tableName) {
        return this.db[tableName].toCollection().keys();
    };
    IndexedDBEngine.prototype.update = function (tableName, primaryKey, changes) {
        return this.db[tableName].update(primaryKey, changes)
            .then(function (updatedRecords) { return primaryKey; });
    };
    return IndexedDBEngine;
}());
exports.default = IndexedDBEngine;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MemoryEngine = (function () {
    function MemoryEngine(storeName) {
        this.storeName = storeName;
        this.stores = {};
        this.stores[storeName] = {};
    }
    MemoryEngine.prototype.prepareTable = function (tableName) {
        if (!this.stores[this.storeName][tableName]) {
            this.stores[this.storeName][tableName] = {};
        }
    };
    MemoryEngine.prototype.create = function (tableName, primaryKey, entity) {
        var _this = this;
        this.prepareTable(tableName);
        return Promise.resolve().then(function () {
            _this.stores[_this.storeName][tableName][primaryKey] = entity;
            return primaryKey;
        });
    };
    MemoryEngine.prototype.delete = function (tableName, primaryKey) {
        var _this = this;
        this.prepareTable(tableName);
        return Promise.resolve().then(function () {
            delete _this.stores[_this.storeName][tableName][primaryKey];
            return primaryKey;
        });
    };
    MemoryEngine.prototype.deleteAll = function (tableName) {
        var _this = this;
        return Promise.resolve().then(function () {
            delete _this.stores[_this.storeName][tableName];
            return true;
        });
    };
    MemoryEngine.prototype.read = function (tableName, primaryKey) {
        var _this = this;
        this.prepareTable(tableName);
        return Promise.resolve().then(function () {
            return _this.stores[_this.storeName][tableName][primaryKey];
        });
    };
    MemoryEngine.prototype.readAll = function (tableName) {
        this.prepareTable(tableName);
        var promises = [];
        for (var _i = 0, _a = Object.keys(this.stores[this.storeName][tableName]); _i < _a.length; _i++) {
            var primaryKey = _a[_i];
            promises.push(this.read(tableName, primaryKey));
        }
        return Promise.all(promises);
    };
    MemoryEngine.prototype.readAllPrimaryKeys = function (tableName) {
        this.prepareTable(tableName);
        return Promise.resolve(Object.keys(this.stores[this.storeName][tableName]));
    };
    MemoryEngine.prototype.update = function (tableName, primaryKey, changes) {
        var _this = this;
        this.prepareTable(tableName);
        return this.read(tableName, primaryKey).then(function (entity) {
            return Object.assign(entity, changes);
        }).then(function (updatedEntity) {
            return _this.create(tableName, primaryKey, updatedEntity);
        });
    };
    return MemoryEngine;
}());
exports.default = MemoryEngine;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LocalStorageEngine = (function () {
    function LocalStorageEngine(storeName) {
        this.storeName = storeName;
    }
    LocalStorageEngine.prototype.create = function (tableName, primaryKey, entity) {
        var _this = this;
        return Promise.resolve().then(function () {
            var key = _this.storeName + "@" + tableName + "@" + primaryKey;
            window.localStorage.setItem(key, JSON.stringify(entity));
            return primaryKey;
        });
    };
    LocalStorageEngine.prototype.delete = function (tableName, primaryKey) {
        var _this = this;
        return Promise.resolve().then(function () {
            var key = _this.storeName + "@" + tableName + "@" + primaryKey;
            window.localStorage.removeItem(key);
            return primaryKey;
        });
    };
    LocalStorageEngine.prototype.deleteAll = function (tableName) {
        var _this = this;
        return Promise.resolve().then(function () {
            Object.keys(localStorage).forEach(function (key) {
                var prefix = _this.storeName + "@" + tableName + "@";
                if (key.startsWith(prefix)) {
                    localStorage.removeItem(key);
                }
            });
            return true;
        });
    };
    LocalStorageEngine.prototype.read = function (tableName, primaryKey) {
        var _this = this;
        return Promise.resolve().then(function () {
            var key = _this.storeName + "@" + tableName + "@" + primaryKey;
            return JSON.parse(window.localStorage.getItem(key)) || undefined;
        });
    };
    LocalStorageEngine.prototype.readAll = function (tableName) {
        var _this = this;
        var promises = [];
        Object.keys(localStorage).forEach(function (key) {
            var prefix = _this.storeName + "@" + tableName + "@";
            if (key.startsWith(prefix)) {
                var primaryKey = key.replace(prefix, '');
                promises.push(_this.read(tableName, primaryKey));
            }
        });
        return Promise.all(promises);
    };
    LocalStorageEngine.prototype.readAllPrimaryKeys = function (tableName) {
        var _this = this;
        var primaryKeys = [];
        Object.keys(localStorage).forEach(function (primaryKey) {
            var prefix = _this.storeName + "@" + tableName + "@";
            if (primaryKey.startsWith(prefix)) {
                primaryKeys.push(primaryKey.replace(prefix, ''));
            }
        });
        return Promise.resolve(primaryKeys);
    };
    LocalStorageEngine.prototype.update = function (tableName, primaryKey, changes) {
        var _this = this;
        return this.read(tableName, primaryKey).then(function (entity) {
            return Object.assign(entity, changes);
        }).then(function (updatedEntity) {
            return _this.create(tableName, primaryKey, updatedEntity);
        });
    };
    return LocalStorageEngine;
}());
exports.default = LocalStorageEngine;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var invitation_1 = __webpack_require__(59);
exports.InvitationAPI = invitation_1.InvitationAPI;
var member_1 = __webpack_require__(61);
exports.MemberAPI = member_1.MemberAPI;
var team_1 = __webpack_require__(63);
exports.TeamAPI = team_1.TeamAPI;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InvitationAPI_1 = __webpack_require__(60);
exports.InvitationAPI = InvitationAPI_1.default;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TeamAPI_1 = __webpack_require__(3);
var InvitationAPI = (function () {
    function InvitationAPI(client) {
        this.client = client;
    }
    Object.defineProperty(InvitationAPI, "URL", {
        get: function () {
            return {
                INVITATIONS: 'invitations',
            };
        },
        enumerable: true,
        configurable: true
    });
    InvitationAPI.prototype.getInvitation = function (teamId, invitationId) {
        var config = {
            method: 'get',
            url: TeamAPI_1.default.URL.TEAMS + "/" + teamId + "/" + InvitationAPI.URL.INVITATIONS + "/" + invitationId,
        };
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.data;
        });
    };
    InvitationAPI.prototype.getInvitations = function (teamId) {
        var config = {
            method: 'get',
            url: TeamAPI_1.default.URL.TEAMS + "/" + teamId + "/" + InvitationAPI.URL.INVITATIONS,
        };
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.data;
        });
    };
    InvitationAPI.prototype.deleteInvitation = function (teamId, invitationId) {
        var config = {
            method: 'delete',
            url: TeamAPI_1.default.URL.TEAMS + "/" + teamId + "/" + InvitationAPI.URL.INVITATIONS + "/" + invitationId,
        };
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.data;
        });
    };
    InvitationAPI.prototype.postInvitation = function (teamId, invitation) {
        var config = {
            data: invitation,
            method: 'post',
            url: TeamAPI_1.default.URL.TEAMS + "/" + teamId + "/" + InvitationAPI.URL.INVITATIONS,
        };
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.data;
        });
    };
    InvitationAPI.prototype.getInvitationFromCode = function (invitationCode) {
        var config = {
            method: 'get',
            url: TeamAPI_1.default.URL.TEAMS + "/" + InvitationAPI.URL.INVITATIONS + "/info?code=" + invitationCode,
        };
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.data;
        });
    };
    return InvitationAPI;
}());
exports.default = InvitationAPI;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MemberAPI_1 = __webpack_require__(62);
exports.MemberAPI = MemberAPI_1.default;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TeamAPI_1 = __webpack_require__(3);
var MemberAPI = (function () {
    function MemberAPI(client) {
        this.client = client;
    }
    Object.defineProperty(MemberAPI, "URL", {
        get: function () {
            return {
                MEMBERS: 'members',
            };
        },
        enumerable: true,
        configurable: true
    });
    MemberAPI.prototype.getMembers = function (teamId) {
        var config = {
            method: 'get',
            url: TeamAPI_1.default.URL.TEAMS + "/" + teamId + "/" + MemberAPI.URL.MEMBERS,
        };
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.data;
        });
    };
    MemberAPI.prototype.deleteMember = function (teamId, userId, password) {
        var config = {
            data: {
                password: password,
            },
            method: 'delete',
            url: TeamAPI_1.default.URL.TEAMS + "/" + teamId + "/" + MemberAPI.URL.MEMBERS + "/" + userId,
        };
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.data;
        });
    };
    MemberAPI.prototype.postMembers = function (teamId, member) {
        var config = {
            data: {
                member: member,
            },
            method: 'post',
            url: TeamAPI_1.default.URL.TEAMS + "/" + teamId + "/" + MemberAPI.URL.MEMBERS,
        };
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.data;
        });
    };
    MemberAPI.prototype.putMembers = function (teamId, member) {
        var config = {
            data: {
                member: member,
            },
            method: 'put',
            url: TeamAPI_1.default.URL.TEAMS + "/" + teamId + "/" + MemberAPI.URL.MEMBERS,
        };
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.data;
        });
    };
    return MemberAPI;
}());
exports.default = MemberAPI;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TeamAPI_1 = __webpack_require__(3);
exports.TeamAPI = TeamAPI_1.default;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserAPI_1 = __webpack_require__(65);
exports.UserAPI = UserAPI_1.default;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserAPI = (function () {
    function UserAPI(client) {
        this.client = client;
    }
    Object.defineProperty(UserAPI, "URL", {
        get: function () {
            return {
                CONNECTIONS: '/connections',
                PROPERTIES: '/properties',
                SELF: '/self',
                SEARCHABLE: 'searchable',
                USERS: '/users',
            };
        },
        enumerable: true,
        configurable: true
    });
    UserAPI.prototype.getSelf = function () {
        var config = {
            method: 'get',
            url: UserAPI.URL.SELF,
        };
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.data;
        });
    };
    UserAPI.prototype.putSearchable = function (data) {
        var config = {
            data: data,
            method: 'put',
            url: UserAPI.URL.SELF + "/" + UserAPI.URL.SEARCHABLE,
        };
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.data;
        });
    };
    UserAPI.prototype.getSearchable = function () {
        var config = {
            method: 'get',
            url: UserAPI.URL.SELF + "/" + UserAPI.URL.SEARCHABLE,
        };
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.data;
        });
    };
    UserAPI.prototype.getUsers = function (parameters) {
        var config = {
            method: 'get',
            url: UserAPI.URL.USERS,
        };
        if (parameters.handles) {
            config.url += "?handles=" + parameters.handles.join(',');
        }
        if (parameters.ids) {
            config.url += "?ids=" + parameters.ids.join(',');
        }
        return this.client.sendJSONRequest(config).then(function (response) {
            return response.data;
        });
    };
    return UserAPI;
}());
exports.default = UserAPI;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WebSocketClient_1 = __webpack_require__(67);
exports.WebSocketClient = WebSocketClient_1.default;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Html5WebSocket = __webpack_require__(68);
var ReconnectingWebsocket = __webpack_require__(69);
var WebSocketClient = (function () {
    function WebSocketClient(baseURL, accessTokenStore) {
        this.baseURL = baseURL;
        this.accessTokenStore = accessTokenStore;
        this.PING_INTERVAL = 30000;
    }
    WebSocketClient.prototype.connect = function (clientId) {
        var _this = this;
        this.clientId = clientId;
        var getUrl = function () {
            var url = _this.baseURL + "/await?access_token=" + _this.accessTokenStore.accessToken.access_token;
            if (_this.clientId) {
                url += "&client=" + _this.clientId;
            }
            return url;
        };
        var reconnectingOptions = {
            connectionTimeout: 4000,
            constructor: typeof window !== 'undefined' ? WebSocket : Html5WebSocket,
            debug: false,
            maxReconnectionDelay: 30000,
            maxRetries: Infinity,
            minReconnectionDelay: 4000,
            reconnectionDelayGrowFactor: 1.3,
        };
        this.socket = new ReconnectingWebsocket(getUrl, undefined, reconnectingOptions);
        this.socket.binaryType = 'arraybuffer';
        return new Promise(function (resolve) {
            _this.socket.onopen = function () {
                var pinger = setInterval(function () {
                    _this.socket.send('Wire is so much nicer with Internet!');
                }, _this.PING_INTERVAL);
                _this.socket.onclose = function () {
                    clearInterval(pinger);
                };
                resolve(_this.socket);
            };
        });
    };
    WebSocketClient.prototype.disconnect = function () {
        if (this.socket) {
            this.socket.close();
            this.socket = undefined;
        }
    };
    return WebSocketClient;
}());
exports.default = WebSocketClient;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WebSocket;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isWebSocket = function (constructor) {
    return constructor && constructor.CLOSING === 2;
};
var isGlobalWebSocket = function () {
    return typeof WebSocket !== 'undefined' && isWebSocket(WebSocket);
};
var getDefaultOptions = function () { return ({
    constructor: isGlobalWebSocket() ? WebSocket : null,
    maxReconnectionDelay: 10000,
    minReconnectionDelay: 1500,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4000,
    maxRetries: Infinity,
    debug: false,
}); };
var bypassProperty = function (src, dst, name) {
    Object.defineProperty(dst, name, {
        get: function () { return src[name]; },
        set: function (value) { src[name] = value; },
        enumerable: true,
        configurable: true,
    });
};
var initReconnectionDelay = function (config) {
    return (config.minReconnectionDelay + Math.random() * config.minReconnectionDelay);
};
var updateReconnectionDelay = function (config, previousDelay) {
    var newDelay = previousDelay * config.reconnectionDelayGrowFactor;
    return (newDelay > config.maxReconnectionDelay)
        ? config.maxReconnectionDelay
        : newDelay;
};
var LEVEL_0_EVENTS = ['onopen', 'onclose', 'onmessage', 'onerror'];
var reassignEventListeners = function (ws, oldWs, listeners) {
    Object.keys(listeners).forEach(function (type) {
        listeners[type].forEach(function (_a) {
            var listener = _a[0], options = _a[1];
            ws.addEventListener(type, listener, options);
        });
    });
    if (oldWs) {
        LEVEL_0_EVENTS.forEach(function (name) { ws[name] = oldWs[name]; });
    }
};
var ReconnectingWebsocket = function (url, protocols, options) {
    var _this = this;
    if (options === void 0) { options = {}; }
    var ws;
    var connectingTimeout;
    var reconnectDelay = 0;
    var retriesCount = 0;
    var shouldRetry = true;
    var savedOnClose = null;
    var listeners = {};
    // require new to construct
    if (!(this instanceof ReconnectingWebsocket)) {
        throw new TypeError("Failed to construct 'ReconnectingWebSocket': Please use the 'new' operator");
    }
    // Set config. Not using `Object.assign` because of IE11
    var config = getDefaultOptions();
    Object.keys(config)
        .filter(function (key) { return options.hasOwnProperty(key); })
        .forEach(function (key) { return config[key] = options[key]; });
    if (!isWebSocket(config.constructor)) {
        throw new TypeError('Invalid WebSocket constructor. Set `options.constructor`');
    }
    var log = config.debug ? function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return console.log.apply(console, ['RWS:'].concat(params));
    } : function () { };
    /**
     * Not using dispatchEvent, otherwise we must use a DOM Event object
     * Deferred because we want to handle the close event before this
     */
    var emitError = function (code, msg) { return setTimeout(function () {
        var err = new Error(msg);
        err.code = code;
        if (Array.isArray(listeners.error)) {
            listeners.error.forEach(function (_a) {
                var fn = _a[0];
                return fn(err);
            });
        }
        if (ws.onerror) {
            ws.onerror(err);
        }
    }, 0); };
    var handleClose = function () {
        log('handleClose', { shouldRetry: shouldRetry });
        retriesCount++;
        log('retries count:', retriesCount);
        if (retriesCount > config.maxRetries) {
            emitError('EHOSTDOWN', 'Too many failed connection attempts');
            return;
        }
        if (!reconnectDelay) {
            reconnectDelay = initReconnectionDelay(config);
        }
        else {
            reconnectDelay = updateReconnectionDelay(config, reconnectDelay);
        }
        log('handleClose - reconnectDelay:', reconnectDelay);
        if (shouldRetry) {
            setTimeout(connect, reconnectDelay);
        }
    };
    var connect = function () {
        if (!shouldRetry) {
            return;
        }
        log('connect');
        var oldWs = ws;
        var wsUrl = (typeof url === 'function') ? url() : url;
        ws = new config.constructor(wsUrl, protocols);
        connectingTimeout = setTimeout(function () {
            log('timeout');
            ws.close();
            emitError('ETIMEDOUT', 'Connection timeout');
        }, config.connectionTimeout);
        log('bypass properties');
        for (var key in ws) {
            // @todo move to constant
            if (['addEventListener', 'removeEventListener', 'close', 'send'].indexOf(key) < 0) {
                bypassProperty(ws, _this, key);
            }
        }
        ws.addEventListener('open', function () {
            clearTimeout(connectingTimeout);
            log('open');
            reconnectDelay = initReconnectionDelay(config);
            log('reconnectDelay:', reconnectDelay);
            retriesCount = 0;
        });
        ws.addEventListener('close', handleClose);
        reassignEventListeners(ws, oldWs, listeners);
        // because when closing with fastClose=true, it is saved and set to null to avoid double calls
        ws.onclose = ws.onclose || savedOnClose;
        savedOnClose = null;
    };
    log('init');
    connect();
    this.close = function (code, reason, _a) {
        if (code === void 0) { code = 1000; }
        if (reason === void 0) { reason = ''; }
        var _b = _a === void 0 ? {} : _a, _c = _b.keepClosed, keepClosed = _c === void 0 ? false : _c, _d = _b.fastClose, fastClose = _d === void 0 ? true : _d, _e = _b.delay, delay = _e === void 0 ? 0 : _e;
        log('close - params:', { reason: reason, keepClosed: keepClosed, fastClose: fastClose, delay: delay });
        shouldRetry = !keepClosed;
        if (delay) {
            reconnectDelay = delay;
        }
        ws.close(code, reason);
        if (fastClose) {
            var fakeCloseEvent_1 = {
                code: code,
                reason: reason,
                wasClean: true,
            };
            // execute close listeners soon with a fake closeEvent
            // and remove them from the WS instance so they
            // don't get fired on the real close.
            handleClose();
            ws.removeEventListener('close', handleClose);
            // run and remove level2
            if (Array.isArray(listeners.close)) {
                listeners.close.forEach(function (_a) {
                    var listener = _a[0], options = _a[1];
                    listener(fakeCloseEvent_1);
                    ws.removeEventListener('close', listener, options);
                });
            }
            // run and remove level0
            if (ws.onclose) {
                savedOnClose = ws.onclose;
                ws.onclose(fakeCloseEvent_1);
                ws.onclose = null;
            }
        }
    };
    this.send = function (data) {
        ws.send(data);
    };
    this.addEventListener = function (type, listener, options) {
        if (Array.isArray(listeners[type])) {
            if (!listeners[type].some(function (_a) {
                var l = _a[0];
                return l === listener;
            })) {
                listeners[type].push([listener, options]);
            }
        }
        else {
            listeners[type] = [[listener, options]];
        }
        ws.addEventListener(type, listener, options);
    };
    this.removeEventListener = function (type, listener, options) {
        if (Array.isArray(listeners[type])) {
            listeners[type] = listeners[type].filter(function (_a) {
                var l = _a[0];
                return l !== listener;
            });
        }
        ws.removeEventListener(type, listener, options);
    };
};
module.exports = ReconnectingWebsocket;


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_commonjs_Client__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_commonjs_Client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dist_commonjs_Client__);


window.onload = function() {
  function initBackendLabel() {
    const backendInfo = document.getElementById('wire-login-form-backend');
    backendInfo.textContent = BACKEND_ENV.rest;
    backendInfo.setAttribute('href', '?env=' + BACKEND_ENV.name);
  }

  function initLoginButton(client) {
    LOGIN_BUTTON.onclick = function(event) {
      event.preventDefault();
      console.log('Login button has been clicked.');

      const email = document.getElementById('wire-login-form-email').value;
      const password = document.getElementById('wire-login-form-password').value;

      const login = {
        email: email,
        password: password,
        persist: false
      };

      return Promise.resolve()
        .then(() => {
          // Trying to login (works only if there is already a valid cookie stored in the browser)
          return client.init();
        }).catch((error) => {
          return client.login(login);
        }).then((context) => {
          console.log('Login successful', context);

          LOGIN_BUTTON.className = 'valid';
          LOGIN_BUTTON.firstChild.data = "😊";

          LOGOUT_BUTTON.className = 'valid';

          return client.connect();
        }).catch((error) => {
          console.error(`Login failed: ${error.message}`, error);
          LOGIN_BUTTON.className = 'invalid';
          LOGIN_BUTTON.firstChild.data = "😞";
        });

      return false;
    };
  }

  function initLogoutButton(client) {
    LOGOUT_BUTTON.onclick = function(event) {
      event.preventDefault();

      client.logout().then(() => {
        console.log('Logout successful');

        LOGIN_BUTTON.className = 'valid';
        LOGIN_BUTTON.firstChild.data = 'login';

        LOGOUT_BUTTON.classList.remove('valid');
      }).catch((error) => {
        console.error(`Logout failed: ${error.message}`, error);
        LOGOUT_BUTTON.className = 'invalid';
      });

      return false;
    };
  }

  const BACKEND_ENV = __WEBPACK_IMPORTED_MODULE_0__dist_commonjs_Client___default.a.BACKEND.PRODUCTION;
  const LOGIN_BUTTON = document.getElementById('wire-login-form-submit');
  const LOGOUT_BUTTON = document.getElementById('wire-logout-form-submit');

  const client = new __WEBPACK_IMPORTED_MODULE_0__dist_commonjs_Client___default.a(BACKEND_ENV);

  client.on(__WEBPACK_IMPORTED_MODULE_0__dist_commonjs_Client___default.a.TOPIC.WEB_SOCKET_MESSAGE, (notification) => {
    console.log('Received notification via WebSocket', notification);
  });

  client.accessTokenStore.on('AccessTokenStore.TOPIC.ACCESS_TOKEN_REFRESH', (accessToken) => {
    console.log('Acquired AccessToken', accessToken);
  });

  window.wire = Object.assign({}, {client: client});

  initBackendLabel();
  initLoginButton(client);
  initLogoutButton(client);
};


/***/ })
/******/ ]);
//# sourceMappingURL=demo.js.map