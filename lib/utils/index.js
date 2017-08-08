'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseColor = require('./parse-color');

Object.defineProperty(exports, 'parseColor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_parseColor).default;
  }
});

var _equalArrays = require('./equal-arrays');

Object.defineProperty(exports, 'equalArrays', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_equalArrays).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }