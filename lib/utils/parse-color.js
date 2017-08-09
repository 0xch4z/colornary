'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _ = require('./');

/**
 * Parses RGB string
 * Assumes format `rgb([red], [green], [blue])`
 * 
 * Deconstructs RGB CSS string: gets all three, 0-255 values
 * (red, green, blue). The values are then mapped to a color
 * object for manipulation/conversion.
 * @param {string} rgbString
 * @throws if missing rgb values
 * @returns {object} - parsed RGB color object
 */
var parseRgbString = function parseRgbString(rgbString) {
  // deconstruct rgb
  var values = rgbString.match(/(2[0-5]\d|1\d{2}|\d{1,2})/g).map(function (n) {
    return parseInt(n, 10);
  });
  if (values.length !== 3) throw new Error('Invalid RGB String');
  var color = { r: values[0], g: values[1], b: values[2] };
  // return color object
  return { color: color, format: 'string', type: 'rgb' };
};

/**
 * Parses RGBA string
 * Assumes format: `rgba([red], [green], [blue], [alpha])`
 * 
 * Deconstructs RGBA CSS string: first getting all three, 0-255
 * values (red, green, blue), then the alpha channel. The values
 * are then mapped to a color object for manipulation/conversion.
 * @param {string} rgbaString
 * @throws if missing RGB / alpha values
 * @returns {object} - parsed RGB color object
 */
var parseRgbaString = function parseRgbaString(rgbaString) {
  // deconstruct rgba string
  var values = rgbaString.match(/(2[0-5]\d|1\d{2}|\d{1,2}),/g).map(function (s) {
    return parseInt(s.slice(0, -1), 10);
  });
  if (values.length !== 3) throw new Error('Invalid RGBA String');
  var alpha = parseFloat(rgbaString.match(/(1(\.0)?|0(\.\d+)?)\)/)[0].slice(0, -1));
  var color = { r: values[0], g: values[1], b: values[2], a: alpha };
  // return color object
  return { color: color, format: 'string', type: 'rgba' };
};

/**
 * Parses HSL string
 * Assumes format: `hsl([hue], [saturation], [luminance])`
 * 
 * Deconstructs HSL CSS string: first getting the hue, then the
 * percentages (saturation and luminance). The values are then
 * mapped to a color object for manipulation/conversion.
 * @param {string} hslString
 * @throws if missing HSL values
 * @returns {object} - parsed HSL color object
 */
var parseHslString = function parseHslString(hslString) {
  // Deconstruct hsl string
  var degPattern = '(360|3[0-5]\\d|[12]\\d{2}|[1-9]?\\d|\\d)(deg)?';
  var turnPattern = '(1(\\.0+)?|0(\\.\\d+)?)';
  var hue = hslString.match(new RegExp('\\((' + degPattern + '|' + turnPattern + ')', 'g'));
  var perc = hslString.match(/[\s,](100|[1-9]?\d)%/g).map(function (s) {
    return parseInt(s.slice(1, -1), 10) / 100;
  });
  if (perc.length !== 2 || hue.length !== 1) throw new Error('Invalid HSL String');
  // Normalize hue
  if (/deg/.test(hue)) hue = hue[0].slice(1).replace('deg', '');else if (/turn/.test(hue)) hue = parseInt(hue[0].slice(1).replace('turn', ''), 10) * 360;else hue = hue[0].slice(1);
  hue = parseInt(hue, 10);
  var color = { h: hue, s: perc[0], l: perc[1] };
  // Return color object
  return { color: color, format: 'string', type: 'hsl' };
};

/**
 * Parses HSLA string
 * Assumes format: `hsla([hue], [saturation], [luminance], [alpha])`
 * 
 * Deconstructs HSLA CSS string: first getting the hue, then the
 * percentages (saturation and luminance), finally, the alpha
 * channel. The values are then mapped to a color object for
 * manipulation/conversion.
 * @param {string} hslaString
 * @throws if missing HSL / alpha values
 * @returns {object} - parsed HSLA color object
 */
var parseHslaString = function parseHslaString(hslaString) {
  // Deconstruct hsl string
  var degPattern = '(360|3[0-5]\\d|[12]\\d{2}|[1-9]?\\d|\\d)(deg)?';
  var turnPattern = '(1(\\.0+)?|0(\\.\\d+)?)';
  var hue = hslaString.match(new RegExp('\\((' + degPattern + '|' + turnPattern + ')', 'g'));
  var perc = hslaString.match(/[\s,](100|[1-9]?\d)%/g).map(function (s) {
    return parseInt(s.slice(1, -1), 10) / 100;
  });
  var alpha = Number(hslaString.match(/(,|\s)(1(\.\d+)?|0(\.\d+)?)\)/)[0].slice(1, -1));
  if (perc.length !== 2 || hue.length !== 1) throw new Error('Invalid HSL String');
  // Normalize hue
  if (/deg/.test(hue)) hue = hue[0].slice(1).replace('deg', '');else if (/turn/.test(hue)) hue = parseInt(hue[0].slice(1).replace('turn', ''), 10) * 360;else hue = hue[0].slice(1);
  hue = parseInt(hue, 10);
  var color = { h: hue, s: perc[0], l: perc[1], a: alpha };
  // Return color object
  return { color: color, format: 'string', type: 'hsla' };
};

/**
 * Parses hex string
 * Assumes format: `#[red][green][blue]`
 * 
 * Deconstructs hex CSS string: getting all hex values (red, 
 * green, blue) and parsing them as integers. The values are then
 * mapped to a color object for manipulation/conversion. 
 * @param {string} hexString
 * @returns {object} - parsed RGB(hex) color object
 */
var parseHexString = function parseHexString(hexString) {
  // deconstruct hex string
  var hex = hexString.slice(1);
  // normalize shorthand hex
  hex = hex.length === 3 ? hex.split('').map(function (d) {
    return d.repeat(2);
  }).join('') : hex;
  var color = {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16)
  };
  // return color object
  return { color: color, format: 'string', type: 'rgb', hex: true };
};

/**
 * Parses color string
 * Assumes CSS compatability and hue values are in degrees
 * 
 * Matches the given CSS string with a given prefix and calls
 * the corresponding parser, returning the parsed color object
 * @param {string} colorString
 * @throws if color type not matched
 * @returns {object} - parsed [deffered] color object
 */
var parseColorString = function parseColorString(colorString) {
  var color = void 0;
  // determine type and defer to type parser
  if (/^rgb\s?\(/.test(colorString)) color = parseRgbString(colorString);else if (/^rgba\s?\(/.test(colorString)) color = parseRgbaString(colorString);else if (/^hsl\s?\(/.test(colorString)) color = parseHslString(colorString);else if (/^hsla\s?\(/.test(colorString)) color = parseHslaString(colorString);else if (/^#[a-f0-9]{3,6}$/i.test(colorString)) color = parseHexString(colorString);else throw new Error('Unsupported color type');
  return color;
};

/**
 * Parses color object
 * Assumes CSS compatability
 * 
 * Matches the given color objects keys with a given format. The
 * color is then encapsulated in a parsed color object for 
 * manipulation/conversion.
 * @param {object} colorString
 * @throws if color keys not matched
 * @returns {object} - parsed [type] color object
 */
var parseColorObject = function parseColorObject(colorObject) {
  var keys = Object.keys(colorObject).map(function (c) {
    return c.toLowerCase();
  });
  var type = void 0;
  if ((0, _.equalArrays)(keys, 'rgb'.split(''))) type = 'rgb';else if ((0, _.equalArrays)(keys, 'rgba'.split(''))) type = 'rgba';else if ((0, _.equalArrays)(keys, 'hsl'.split(''))) type = 'hsl';else if ((0, _.equalArrays)(keys, 'hsla'.split(''))) type = 'hsla';else throw new Error('Unsupported color type');
  return { color: colorObject, format: 'json', type: type };
};

/**
 * Parses color (reducer)
 * 
 * Switches on color type and calls corresponding type
 * parser.
 * @param {string|object} color - color to convert
 * @throws color type not string or object
 * @returns {object} - referred parsed color
 * 
 * @example Color string call stack
 * parseColor(`#fff`) =>
 *  parseColorString(`#fff`) =>
 *    parseHexColorString(`#fff`) 
 * 
 * @example Color object call stack
 * parseColor({ r: 255, g: 255, b: 255 }) =>
 *  parseColorObject({ r: 255, g: 255, b: 255 })
 */
var parseColor = function parseColor(color) {
  var parsedColor = void 0;
  try {
    switch (typeof color === 'undefined' ? 'undefined' : _typeof(color)) {
      case 'string':
        parsedColor = parseColorString(color);
        break;
      case 'object':
        parsedColor = parseColorObject(color);
        break;
      default:
        throw new Error('Unsupported color format');
    }
  } catch (err) {
    console.error(err);
  }
  return parsedColor;
};

exports.default = parseColor;