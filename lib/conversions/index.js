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
 * Converts color to Hsl
 * 
 * @param {string|object} $color
 * @return {string} - Hsl string  
 */
var toHsl = exports.toHsl = function toHsl($color) {
  var hslColor = void 0;
  try {
    var colorObject = (0, _parseColor2.default)($color);
    var type = colorObject.type,
        color = colorObject.color;

    hslColor = conversions[type].toHsl(color);
  } catch (err) {
    console.error(err);
  }
  return hslColor;
};

/**
 * Converts color to Hsla
 * 
 * @param {string|object} $color
 * @return {string} - Hsla string  
 */
var toHsla = exports.toHsla = function toHsla($color) {
  var hslaColor = void 0;
  try {
    var colorObject = (0, _parseColor2.default)($color);
    var type = colorObject.type,
        color = colorObject.color;

    hslaColor = conversions[type].toHsla(color);
  } catch (err) {
    console.error(err);
  }
  return hslaColor;
};

/**
 * Converts color to Hex
 * 
 * @param {string|object} $color
 * @returns {string} - Hex string
 */
var toHex = exports.toHex = function toHex($color) {
  var hexColor = void 0;
  try {
    var colorObject = (0, _parseColor2.default)($color);
    var type = colorObject.type,
        color = colorObject.color;

    hexColor = conversions[type].toHex(color);
  } catch (err) {
    console.error(err);
  }
  return hexColor;
};

/**
 * Converts color to RGB
 * 
 * @param {string|object} $color
 * @returns {string} - RGB CSS string
 */
var toRgb = exports.toRgb = function toRgb($color) {
  var rgbColor = void 0;
  try {
    var colorObject = (0, _parseColor2.default)($color);
    var type = colorObject.type,
        color = colorObject.color;

    rgbColor = conversions[type].toRgb(color);
  } catch (err) {
    console.error(err);
  }
  return rgbColor;
};

/**
 * Converts color to RGBA
 * 
 * @param {string|object} $color
 * @returns {string} - RGBA CSS string
 */
var toRgba = exports.toRgba = function toRgba($color) {
  var rgbaColor = void 0;
  try {
    var colorObject = (0, _parseColor2.default)($color);
    var type = colorObject.type,
        color = colorObject.color;

    rgbaColor = conversions[type].toRgba(color);
  } catch (err) {
    console.error(err);
  }
  return rgbaColor;
};

/**
 * Converts color to JSON
 * 
 * @param {string|object} $color
 * @returns {object} - Color JSON
 */
var toJSON = exports.toJSON = function toJSON(color) {
  var jsonColor = void 0;
  try {
    jsonColor = (0, _parseColor2.default)(color).color;
  } catch (err) {
    console.error(err);
  }
  return jsonColor;
};