'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.desaturate = exports.saturate = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../utils');

/**
 * Alters color's saturation value
 * 
 * Parses color, converts it to HSLA (for easy manipulation),
 * reduces/increases the saturation value according to the factor
 * if possible. Finally, it is converted to it's original format 
 * and returned via a convenience closure.
 * @param {string|object} $color 
 * @param {number} factor
 * @returns {string} - [type] CSS string
 */
var alterSaturation = function alterSaturation($color, factor) {
  if (factor > 1 || factor < -1) throw new Error('Invalid factor');

  var _convenienceToHsla = (0, _utils.convenienceToHsla)($color),
      color = _convenienceToHsla.color,
      toOriginalColorType = _convenienceToHsla.toOriginalColorType;

  var sat = color.s;
  var adjSat = sat + factor;
  // keep saturation bound to range of [0 - 1]
  if (adjSat <= 1 && adjSat >= 0) sat = adjSat;else {
    console.warn('sat out of bounds');sat = adjSat > 0.5 ? 1 : 0;
  }
  return toOriginalColorType(_extends({}, color, { s: sat }));
};

/**
 * Saturates color
 * 
 * Calls alterSaturation function with a positive factor, making
 * the saturation value increase by the factor.
 * @param {string|object} color
 * @param {number} factor
 * @returns {string} - [type] CSS string
 */
var saturate = exports.saturate = function saturate(color) {
  var factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
  return alterSaturation(color, factor);
};

/**
 * Desaturates color
 * 
 * Calls alterSaturation function with a negative factor, making
 * the saturation value decrease by the factor.
 * @param {string|object} color 
 * @param {number} factor 
 * @returns {string} - [type] CSS string
 */
var desaturate = exports.desaturate = function desaturate(color) {
  var factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
  return alterSaturation(color, -factor);
};