'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toRgba = exports.toRgb = exports.toHex = exports.toHsla = exports.toHsl = undefined;

var _rgb = require('./rgb');

var rgb = _interopRequireWildcard(_rgb);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * RGBA => HSL
 * 
 * Calls rgb.toHsl method as the alpha channel is irrelavent.
 * @param {object} rgbaColor
 * @returns {string} - HSL CSS string
 */
var toHsl = exports.toHsl = function toHsl(rgbaColor) {
  return rgb.toHsl(rgbaColor);
};

/**
 * RGBA => HSLA
 * 
 * Returns the result of rgb.toHsl, changes prefix to hsla and 
 * appends the rgbaColor's alpha channel.
 * @param {object} rgbaColor
 * @returns {string} - HSLA CSS string
 */
var toHsla = exports.toHsla = function toHsla(rgbaColor) {
  var a = rgbaColor.a;

  return 'hsla' + rgb.toHsl(rgbaColor).slice(3, -1) + ',' + a + ')';
};

/**
 * RGBA => Hex
 * 
 * Calls rgb.toHex method as the alpha channel is irrelavent.
 * @param {object} rgbaColor
 * @returns {string} - Hex CSS string
 */
var toHex = exports.toHex = function toHex(rgbaColor) {
  return rgb.toHex(rgbaColor);
};

/**
 * RGBA -> RGB
 * 
 * Calls rgb.toRgb method as the alpha channel is irrelavent.
 * @param {object} rgbaColor
 * @returns {string} - RGB CSS string
 */
var toRgb = exports.toRgb = function toRgb(rgbaColor) {
  return rgb.toRgb(rgbaColor);
};

/**
 *  RGBA => RGBA
 * 
 * Returns the result of rgb.toHsl, changes prefix to rgba and
 * appends the rgbaColor's alpha channel.
 * @param {object} rgbaColor
 * @returns {string} - RGBA CSS string
 */
var toRgba = exports.toRgba = function toRgba(rgbaColor) {
  var a = rgbaColor.a;

  return 'rgba' + rgb.toRgba(rgbaColor).slice(3, -1) + ',' + a + ')';
};