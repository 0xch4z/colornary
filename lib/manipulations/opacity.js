'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transparentize = exports.opacify = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../utils');

/**
 * Alters color's alpha chanel
 * 
 * Parses color, converts it to HSLA (for easy manipulation),
 * reduces/increases the alpha channel according to the factor
 * if possible. Finally, it is converted to it's original format 
 * and returned via a convenience closure.
 * @param {string|object} $color 
 * @param {number} factor
 * @returns {string} - [type] CSS string
 */
var alterOpacity = function alterOpacity($color, factor) {
  if (factor > 1 || factor < -1) throw new Error('Invalid factor');

  var _convenienceToHsla = (0, _utils.convenienceToHsla)($color),
      color = _convenienceToHsla.color,
      toOriginalColorType = _convenienceToHsla.toOriginalColorType;

  var alpha = color.a;
  var adjAlpha = alpha + factor;
  // keep alpha channel bound to range of [0 - 1]
  if (adjAlpha <= 1 && adjAlpha >= 0) alpha = adjAlpha;else {
    console.warn('alpha out of bounds');alpha = adjAlpha > 0.5 ? 1 : 0;
  }
  return toOriginalColorType(_extends({}, color, { a: alpha }));
};

/**
 * Opacifies color
 * 
 * Calls alterOpacity function with a positive factor, making
 * the alpha channel increase by the factor.
 * @param {*}  
 * @param {*} factor 
 */
var opacify = exports.opacify = function opacify(color) {
  var factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
  return alterOpacity(color, factor);
};

/**
 * Transparentizes color
 * 
 * Calls alterOpacity function with a negative factor, making
 * the alpha channel decrease by the factor.
 * @param {*} color 
 * @param {*} factor 
 */
var transparentize = exports.transparentize = function transparentize(color) {
  var factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
  return alterOpacity(color, -factor);
};