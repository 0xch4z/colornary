'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _darken = require('./darken');

Object.defineProperty(exports, 'darken', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_darken).default;
  }
});

var _desaturate = require('./desaturate');

Object.defineProperty(exports, 'desaturate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_desaturate).default;
  }
});

var _lighten = require('./lighten');

Object.defineProperty(exports, 'lighten', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lighten).default;
  }
});

var _opacify = require('./opacify');

Object.defineProperty(exports, 'opacify', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_opacify).default;
  }
});

var _saturate = require('./saturate');

Object.defineProperty(exports, 'saturate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_saturate).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }