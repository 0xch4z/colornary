'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toRgba = exports.toRgb = exports.toHex = exports.toHsla = exports.toHsl = undefined;

var _hsl = require('./hsl');

var hsl = _interopRequireWildcard(_hsl);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * HSL => HSL
 * 
 * Returns the result of hsl.toHsl, as the alpha channel is 
 * irrelavent.
 * @param {object} hslColor
 * @returns {string} - HSL CSS string
 */
var toHsl = exports.toHsl = function toHsl(hslaColor) {
  return hsl.toHsl(hslaColor);
};

/**
 * HSL => HSLA
 * 
 * Returns the result of hsl.toHsl, changes prefix to hsla and
 * appends the hslaColor's alpha channel.
 * @param {object} hslColor
 * @returns {string} - HSLA CSS string
 */
var toHsla = exports.toHsla = function toHsla(hslaColor) {
  var a = hslaColor.a;

  return 'hsla' + hsl.toHsl(hslaColor).slice(3, -1) + ',' + a + ')';
};

/**
 * HSL => Hex
 * 
 * Returns the result of hsl.toHex, as the alpha channel is 
 * irrelavent.
 * @param {object} hslColor
 * @returns {string} - Hex CSS string
 */
var toHex = exports.toHex = function toHex(hslaColor) {
  return hsl.toHex(hslaColor);
};

/**
 * HSL => RGB
 * 
 * Returns the result of hsl.toRgb, as the alpha channel is 
 * irrelavent.
 * @param {object} hslaColor
 * @returns {string} - RGB CSS string
 */
var toRgb = exports.toRgb = function toRgb(hslaColor) {
  return hsl.toRgb(hslaColor);
};

/**
 * HSL => RGBA
 * 
 * Returns the result of hsl.toRgb, changes prefix to rgba and
 * appends the hslaColor's alpha channel.
 * @param {object} hslColor
 * @returns {string} - RGBA CSS string
 */
var toRgba = exports.toRgba = function toRgba(hslaColor) {
  var a = hslaColor.a;

  return 'rgba' + hsl.toRgb(hslaColor).slice(3, -1) + ',' + a + ')';
};