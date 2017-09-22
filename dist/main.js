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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * get a radom string or number of given range
 * @author islishude
 * @license MIT
 * @version 1.0.0
 */
exports.__esModule = true;
/**
 * get a number of given range
 * @param min {number} the min number
 * @param max {number} the max number
 * @return {number} a radom number
 */
function getNum(min, max) {
    // if the params are not number,reports error
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('param invalidate,should be a number');
    }
    // if the order is not incorrect,exchange param position
    if (min > max) {
        _a = [max, min], min = _a[0], max = _a[1];
    }
    // if number is not in safe range,reports error
    if (min < Number.MIN_SAFE_INTEGER || max > Number.MAX_SAFE_INTEGER) {
        throw new Error('param should be in safe range');
    }
    // if min param is equal with max param,return min
    if (min === max) {
        return min;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
    var _a;
}
exports.getNum = getNum;
/**
 * get a radom string
 * @param length {number} default is 6
 * @return <string> a radom string,default length is 6
 */
function getStr(length) {
    if (length === void 0) { length = 6; }
    var str = 'abcdefghijklmnopqrstuvwxyz';
    var _str = '';
    str += str.toUpperCase();
    str += '0123456789';
    for (var i = 0; i < length; i++) {
        var rand = Math.floor(Math.random() * str.length);
        _str += str[rand];
    }
    return _str;
}
exports.getStr = getStr;


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map