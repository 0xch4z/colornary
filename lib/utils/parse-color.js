'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _ = require('./');

/**
 * Parses RGB string
 * @param {string} rgbString
 * @returns {object} - parsed color
 */
var parseRgbString = function parseRgbString(rgbString) {
  // deconstruct rgb
  var values = rgbString.match(/(2[0-5]\d|1\d{2}|\d{1,2})/g).map(function (n) {
    return parseInt(n, 10);
  });
  console.log(values.length);
  if (values.length !== 3) throw new Error('Invalid RGB String');
  var color = { r: values[0], g: values[1], b: values[2] };
  // return color object
  return { color: color, format: 'string', type: 'rgb' };
};

/**
 * Parses RGBA string
 * @param {string} rgbaString
 * @returns {object} - parsed color
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
 * @param {string} hslString 
 * @returns {object} - parsed color
 */
var parseHslString = function parseHslString(hslString) {
  // TODO: NORMALIZE HUE FORMATS
  // deconstruct hsl string
  var hue = hslString.match(/\((360|3[0-5]\d|[12]\d{2}|[1-9]?\d|\d)deg/g)[0].slice(1);
  var perc = hslString.match(/(\s|,)(100|[1-9]?\d)%(,|\))/g).map(function (s) {
    return s.slice(1, -1);
  });
  if (perc.length !== 2) throw new Error('Invalid HSL String');
  var color = { h: hue, s: perc[0], l: perc[1] };
  // return color object
  return { color: color, format: 'string', type: 'hsl' };
};

/**
 * Parses HSLA string
 * @param {string} hslaString 
 * @returns {object} - parsed color
 */
var parseHslaString = function parseHslaString(hslaString) {
  // TODO: NORMALIZE HUE FORMATS
  // deconstruct hsla string
  var hue = hslaString.match(/(360|3[0-5]\d|[12]\d{2}|\d{1,2})deg/)[0];
  var perc = hslaString.match(/(\s|,)(100|[1-9]?\d)%,/g).map(function (s) {
    return s.slice(1, -1);
  });
  if (perc.length !== 2) throw new Error('Invalid HSLA String');
  var alpha = Number(hslaString.match(/(\s|,)(1(\.0)?|0(\.\d+)?)\)/)[0].slice(1, -1));
  var color = { h: hue, s: perc[0], l: perc[1], a: alpha };
  // return color object
  return { color: color, format: 'string', type: 'hsla' };
};

/**
 * Parses hex string
 * @param {string} hexString
 * @returns {object} - parsed color
 */
var parseHexString = function parseHexString(hexString) {
  // deconstruct hex string
  var hex = hexString.slice(1);
  // normalize shorthand hex
  hex = hex.length === 3 ? hex.split('').map(function (d) {
    return d.repeat(2);
  }).join('') : hex;
  console.log(hex);
  var color = {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16)
  };
  // return color object
  return { color: color, format: 'string', type: 'rgb', hex: true };
};

/**
 * Parses color string (mid reducer)
 * @param {string} colorString 
 * @returns {object} - referred parsed color
 */
var parseColorString = function parseColorString(colorString) {
  var color = void 0;
  // determine type and defer to type parser
  if (/^rgb\s?\(/.test(colorString)) color = parseRgbString(colorString);else if (/^rgba\s?\(/.test(colorString)) color = parseRgbaString(colorString);else if (/^hsl\s?\(/.test(colorString)) color = parseHslString(colorString);else if (/^hsla\s?\(/.test(colorString)) color = parseHslaString(colorString);else if (/^#[a-f0-9]{3,6}$/i.test(colorString)) color = parseHexString(colorString);else throw new Error('Unsupported color type');
  return color;
};

/**
 * Parses color object
 * @param {object} colorString
 * @returns {object} - parsed color
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
 * @param {any} color - color to convert
 * @returns {object} - referred parsed color
 */

exports.default = function (color) {
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