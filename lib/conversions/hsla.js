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
 * Deconstructs the HSL color object and formats the hsl
 * values to a HSL CSS string.
 * @param {object} hslColor
 * @returns {string} - HSL CSS string
 */
var toHsl = exports.toHsl = function toHsl(hslaColor) {
  return hsl.toHsl(hslaColor);
};

/**
 * HSL => HSLA
 * 
 * Returns result of previously defined toRgb function, changes
 * the prefix to `hsla` and adds a default alpha channel of 1.
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
 * For an indepth description, look at the HSL => RGB hex; the
 * only difference is the output. The rgb values are formatted
 * to a Hex CSS string.
 * @param {object} hslColor
 * @returns {string} - Hex CSS string
 */
var toHex = exports.toHex = function toHex(hslaColor) {
  return hsl.toHex(hslaColor);
};

/**
 * HSL => RGB
 * 
 * Deconstructs the HSL color object, calculates the chroma by
 * getting the absolute difference of the luminance (x2) - 1 *
 * saturation. The hue is divided by 60. A temporary component
 * (sec) is calculated by multiplying the chroma (percise) by the 
 * absolute difference of 1 and the hue / 60 - 1. Now we can round
 * the hue divided. Switch on its value to assign the r,g,b percents.
 * The percents are then multiplied by 255 and rounded, to be formatted
 * to a RGB CSS string.
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
 * appends the rgbaColor's alpha channel.
 * @param {object} hslColor
 * @returns {string} - RGBA CSS string
 */
var toRgba = exports.toRgba = function toRgba(hslaColor) {
  var a = hslaColor.a;

  return 'rgba' + hsl.toRgb(hslaColor).slice(3, -1) + ',' + a + ')';
};