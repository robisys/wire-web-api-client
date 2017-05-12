/*! wireapp-api-client v0.0.1 */
var WireAPIClient =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AuthAPI_1 = __webpack_require__(1);
const HttpClient_1 = __webpack_require__(3);
class WireAPIClient {
    constructor(urls) {
        this.urls = urls;
        this.CONNNECTION_URL = {
            REST: undefined,
            WebSocket: undefined
        };
        this.auth = {
            api: undefined
        };
        this.http = {
            client: undefined
        };
        this.CONNNECTION_URL.REST = urls.rest;
        this.CONNNECTION_URL.WebSocket = urls.ws;
        this.http.client = new HttpClient_1.default(this.CONNNECTION_URL.REST);
        this.auth.api = new AuthAPI_1.default(this.http.client);
    }
    login(data) {
        return this.auth.api.login(data);
    }
}
exports.default = WireAPIClient;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __webpack_require__(6);
const ContentType_1 = __webpack_require__(2);
const StatusCode_1 = __webpack_require__(4);
class AuthAPI {
    constructor(client) {
        this.client = client;
    }
    static get URL() {
        return {
            ACCESS: '/access',
            ACTIVATE: '/activate',
            COOKIES: '/cookies',
            INVITATIONS: '/invitations',
            LOGIN: '/login',
            REGISTER: '/register'
        };
    }
    login(login) {
        const url = `${AuthAPI.URL.LOGIN}?persist=${login.persist}`;
        const instance = axios_1.default.create({
            baseURL: this.client.baseURL,
            headers: {
                'Content-Type': ContentType_1.default.APPLICATION_JSON,
                withCredentials: true
            }
        });
        return instance.post(url, {
            email: login.email,
            password: login.password + '',
        }).then(function (response) {
            return response.data;
        }).catch((error) => {
            if (error.response.status === StatusCode_1.default.TOO_MANY_REQUESTS && login.email) {
                return this.removeCookies(login).then(() => this.login(login));
            }
            else {
                throw error;
            }
        });
    }
    removeCookies(login, labels) {
        const url = this.client.createUrl(`${AuthAPI.URL.COOKIES}/remove`);
        return axios_1.default.post(url, {
            email: login.email,
            labels: labels,
            password: login.password,
        });
    }
}
exports.default = AuthAPI;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ContentType {
    static get APPLICATION_JSON() {
        return 'application/json;charset=UTF-8';
    }
}
exports.default = ContentType;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class HttpClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    createUrl(url) {
        return `${this.baseURL}${url}`;
    }
}
exports.default = HttpClient;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class StatusCode {
    static get TOO_MANY_REQUESTS() {
        return 429;
    }
}
exports.default = StatusCode;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const WireAPIClient_1 = __webpack_require__(0);
module.exports = WireAPIClient_1.default;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = axios;

/***/ })
/******/ ]);
//# sourceMappingURL=wireapp-api-client.js.map