'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.darken = exports.lighten = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../utils');

/**
 * Alters color's luminance value
 * 
 * Parses color, converts it to HSLA (for easy manipulation),
 * reduces/increases the luminance value according to the factor
 * if possible. Finally, it is converted to it's original format 
 * and returned via a convenience closure.
 * @param {string|object} $color 
 * @param {number} factor
 * @returns {string} - [type] CSS string
 */
var alterLuminance = function alterLuminance($color, factor) {
  if (factor > 1 || factor < -1) throw new Error('Invalid factor');

  var _convenienceToHsla = (0, _utils.convenienceToHsla)($color),
      color = _convenienceToHsla.color,
      toOriginalColorType = _convenienceToHsla.toOriginalColorType;

  var lum = color.l;
  var adjLum = lum + factor;
  // keep luminance bound to range of [0 - 1]
  if (adjLum <= 1 && adjLum >= 0) lum = adjLum;else {
    console.warn('lum out of bounds');lum = adjLum > 0.5 ? 1 : 0;
  }
  return toOriginalColorType(_extends({}, color, { l: lum }));
};

/**
 * Lightens color
 * 
 * Calls alterLuminance function with a positive factor, making
 * the luminance value increase. 
 * @param {string|object} color
 * @param {number} factor 
 */
var lighten = exports.lighten = function lighten(color) {
  var factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
  return alterLuminance(color, factor);
};

/**
 * Darkens color
 * 
 * Calls alterLuminance function with a negitive factor, making
 * the luminance value decrease.
 * @param {string|object} color
 * @param {number} factor 
 */
var darken = exports.darken = function darken(color) {
  var factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
  return alterLuminance(color, -factor);
};