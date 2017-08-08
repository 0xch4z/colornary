'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toJSON = exports.toRgba = exports.toRgb = exports.toHex = exports.toHsla = exports.toHsl = undefined;

var _parseColor = require('../utils/parse-color');

var _parseColor2 = _interopRequireDefault(_parseColor);

var _hsl = require('./hsl');

var hsl = _interopRequireWildcard(_hsl);

var _hsla = require('./hsla');

var hsla = _interopRequireWildcard(_hsla);

var _rgb = require('./rgb');

var rgb = _interopRequireWildcard(_rgb);

var _rgba = require('./rgba');

var rgba = _interopRequireWildcard(_rgba);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var conversions = {
  hsl: hsl,
  hsla: hsla,
  rgb: rgb,
  rgba: rgba
};

/**
 * Convets color to Hsl
 * 
 * @param {string|object} color
 * @return {string} - Hsl string  
 */
var toHsl = exports.toHsl = function toHsl(_color) {
  var colorObject = (0, _parseColor2.default)(_color);
  var type = colorObject.type,
      color = colorObject.color;

  return conversions[type].toHsl(color);
};

/**
 * Convets color to Hsla
 * 
 * @param {string|object} color
 * @return {string} - Hsla string  
 */
var toHsla = exports.toHsla = function toHsla(_color) {
  var colorObject = (0, _parseColor2.default)(_color);
  var type = colorObject.type,
      color = colorObject.color;

  return conversions[type].toHsla(color);
};

/**
 * Converts color to Hex
 * 
 * @param {string|object} color
 * @returns {string} - Hex string
 */
var toHex = exports.toHex = function toHex(_color) {
  var colorObject = (0, _parseColor2.default)(_color);
  var type = colorObject.type,
      color = colorObject.color;

  return conversions[type].toHex(color);
};

/**
 * Converts color to RGB
 * 
 * @param {string|object} color
 * @returns {string} - RGB CSS string
 */
var toRgb = exports.toRgb = function toRgb(_color) {
  var colorObject = (0, _parseColor2.default)(_color);
  var type = colorObject.type,
      color = colorObject.color;

  return conversions[type].toRgb(color);
};

/**
 * Converts color to RGBA
 * 
 * @param {string|object} color
 * @returns {string} - RGBA CSS string
 */
var toRgba = exports.toRgba = function toRgba(_color) {
  var colorObject = (0, _parseColor2.default)(_color);
  var type = colorObject.type,
      color = colorObject.color;

  return conversions[type].toRgba(color);
};

/**
 * Converts color to JSON
 * 
 * @param {string|object} color
 * @returns {object} - Color JSON
 */
var toJSON = exports.toJSON = function toJSON(color) {
  return (0, _parseColor2.default)(color).color;
};