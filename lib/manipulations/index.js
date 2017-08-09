'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _luminance = require('./luminance');

Object.defineProperty(exports, 'lighten', {
  enumerable: true,
  get: function get() {
    return _luminance.lighten;
  }
});
Object.defineProperty(exports, 'darken', {
  enumerable: true,
  get: function get() {
    return _luminance.darken;
  }
});

var _saturation = require('./saturation');

Object.defineProperty(exports, 'saturate', {
  enumerable: true,
  get: function get() {
    return _saturation.saturate;
  }
});
Object.defineProperty(exports, 'desaturate', {
  enumerable: true,
  get: function get() {
    return _saturation.desaturate;
  }
});

var _opacity = require('./opacity');

Object.defineProperty(exports, 'opacify', {
  enumerable: true,
  get: function get() {
    return _opacity.opacify;
  }
});
Object.defineProperty(exports, 'transparentize', {
  enumerable: true,
  get: function get() {
    return _opacity.transparentize;
  }
});