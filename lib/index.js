'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _conversions = require('./conversions');

Object.defineProperty(exports, 'toHsl', {
  enumerable: true,
  get: function get() {
    return _conversions.toHsl;
  }
});
Object.defineProperty(exports, 'toHsla', {
  enumerable: true,
  get: function get() {
    return _conversions.toHsla;
  }
});
Object.defineProperty(exports, 'toHex', {
  enumerable: true,
  get: function get() {
    return _conversions.toHex;
  }
});
Object.defineProperty(exports, 'toRgb', {
  enumerable: true,
  get: function get() {
    return _conversions.toRgb;
  }
});
Object.defineProperty(exports, 'toRgba', {
  enumerable: true,
  get: function get() {
    return _conversions.toRgba;
  }
});

var _manipulations = require('./manipulations');

Object.defineProperty(exports, 'darken', {
  enumerable: true,
  get: function get() {
    return _manipulations.darken;
  }
});
Object.defineProperty(exports, 'desaturate', {
  enumerable: true,
  get: function get() {
    return _manipulations.desaturate;
  }
});
Object.defineProperty(exports, 'lighten', {
  enumerable: true,
  get: function get() {
    return _manipulations.lighten;
  }
});
Object.defineProperty(exports, 'opacify', {
  enumerable: true,
  get: function get() {
    return _manipulations.opacify;
  }
});
Object.defineProperty(exports, 'saturate', {
  enumerable: true,
  get: function get() {
    return _manipulations.saturate;
  }
});