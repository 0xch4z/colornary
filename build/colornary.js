(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["colornary"] = factory();
	else
		root["colornary"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseColor = __webpack_require__(2);

Object.defineProperty(exports, 'parseColor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_parseColor).default;
  }
});

var _equalArrays = __webpack_require__(6);

Object.defineProperty(exports, 'equalArrays', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_equalArrays).default;
  }
});

var _convenienceToHsla = __webpack_require__(7);

Object.defineProperty(exports, 'convenienceToHsla', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_convenienceToHsla).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toJSON = exports.toRgba = exports.toRgb = exports.toHex = exports.toHsla = exports.toHsl = undefined;

var _parseColor = __webpack_require__(2);

var _parseColor2 = _interopRequireDefault(_parseColor);

var _hsl = __webpack_require__(3);

var hsl = _interopRequireWildcard(_hsl);

var _hsla = __webpack_require__(8);

var hsla = _interopRequireWildcard(_hsla);

var _rgb = __webpack_require__(4);

var rgb = _interopRequireWildcard(_rgb);

var _rgba = __webpack_require__(9);

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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _ = __webpack_require__(0);

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
  return parsedColor;
};

exports.default = parseColor;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * HSL => HSL
 * 
 * Deconstructs the HSL color object and formats the hsl
 * values to a HSL CSS string.
 * @param {object} hslColor
 * @returns {string} - HSL CSS string
 */
var toHsl = exports.toHsl = function toHsl(hslColor) {
  var h = hslColor.h,
      s = hslColor.s,
      l = hslColor.l;

  return 'hsl(' + h + ',' + s * 100 + '%,' + l * 100 + '%)';
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
  return 'hsla' + toHsl(hslaColor).slice(3, -1) + ',1)';
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
 * @todo make less ~ lossy
 * @param {object} hslColor
 * @returns {string} - RGB CSS string
 */
var toRgb = exports.toRgb = function toRgb(hslColor) {
  var h = hslColor.h,
      s = hslColor.s,
      l = hslColor.l;

  var red = void 0,
      green = void 0,
      blue = void 0;
  var chroma = (1 - Math.abs(2 * l - 1)) * s;
  var hueDiv = h / 60;
  var sec = chroma * (1 - Math.abs(hueDiv % 2 - 1));
  hueDiv = Math.round(hueDiv);
  switch (hueDiv) {
    case 0:
      red = chroma;green = sec;blue = 0;
      break;
    case 1:
      red = sec;green = chroma;blue = 0;
      break;
    case 2:
      red = 0;green = chroma;blue = sec;
      break;
    case 3:
      red = 0;green = sec;blue = chroma;
      break;
    case 4:
      red = sec;green = 0;blue = chroma;
      break;
    case 5:
      red = chroma;green = 0;blue = sec;
      break;
  }
  return 'rgb(' + [red, green, blue].map(function (c) {
    var adjColor = c + (l - chroma / 2);
    return Math.round(adjColor * 255);
  }).join(',') + ')';
};

/**
 * HSL => Hex
 * 
 * For an indepth description, look at the HSL => RGB hex; the
 * only difference is the output. The rgb values are formatted
 * to a Hex CSS string.
 * @todo make less ~ lossy
 * @param {object} hslColor
 * @returns {string} - Hex CSS string
 */
var toHex = exports.toHex = function toHex(hslColor) {
  var h = hslColor.h,
      s = hslColor.s,
      l = hslColor.l;

  var red = void 0,
      green = void 0,
      blue = void 0;
  var chroma = (1 - Math.abs(2 * l - 1)) * s;
  var hueDiv = h / 60;
  var sec = chroma * (1 - Math.abs(hueDiv % 2 - 1));
  hueDiv = Math.round(hueDiv);
  switch (hueDiv) {
    case 0:
      red = chroma;green = sec;blue = 0;
      break;
    case 1:
      red = sec;green = chroma;blue = 0;
      break;
    case 2:
      red = 0;green = chroma;blue = sec;
      break;
    case 3:
      red = 0;green = sec;blue = chroma;
      break;
    case 4:
      red = sec;green = 0;blue = chroma;
      break;
    case 5:
      red = chroma;green = 0;blue = sec;
      break;
  }
  return '#' + [red, green, blue].map(function (c) {
    var adjColor = c + (l - chroma / 2);
    var hex = Math.round(adjColor * 255).toString(16);
    return hex.length === 2 ? hex : '0' + hex;
  }).join('');
};

/**
 * HSL => RGBA
 * 
 * Returns result of previously defined toRgb function, changes
 * the prefix to `rgba`, and adds a default alpha channel of 1.
 * @param {object} hslColor
 * @returns {string} - RGBA CSS string
 */
var toRgba = exports.toRgba = function toRgba(hslColor) {
  return 'rgba' + toRgb(hslColor).slice(3, -1) + ',1)';
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * RGB => HSL
 * 
 * Deconstructs the RGB color object and formats the values
 * to percents. The chroma value is calculated by subtracting the 
 * min and max values. If the chroma/delta is 0, the hue and 
 * saturation are 0 and the color is greyscale (exit early). Otherwise,
 * switch on the max value to calculate the hue. Finally, the values
 * are mapped to a HSL CSS string.
 * @param {object} rgbColor
 * @returns {string} - HSL CSS string
 */
var toHsl = exports.toHsl = function toHsl(rgbColor) {
  var red = rgbColor.r / 255;
  var green = rgbColor.g / 255;
  var blue = rgbColor.b / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var chroma = max - min;
  var luminance = void 0,
      saturation = void 0,
      hue = void 0;
  // Calculate luminance
  luminance = (min + max) / 2;
  // No further calculations needed; Achromatic
  if (chroma === 0) return 'hsl(0,0%,' + parseInt(luminance * 100, 10) + '%)';
  // Calculate saturation
  saturation = luminance > 0.5 ? chroma / (2.0 - max - min) : chroma / (max + min);
  // Calculate hue
  switch (max) {
    case red:
      hue = ((green - blue) / chroma + (green < blue ? 6 : 0)) * 60;break;
    case green:
      hue = ((blue - red) / chroma + 2) * 60;break;
    case blue:
      hue = ((red - green) / chroma + 4) * 60;break;
  }
  hue = Math.round(hue);
  saturation = Math.round(saturation * 100);
  luminance = Math.round(luminance * 100);
  return 'hsl(' + hue + ',' + saturation + '%,' + luminance + '%)';
};

/**
 * RGB => HSLA
 * 
 * Returns result of previously declared toHsl function, changes
 * the prefix to `hsla` and appends a default alpha channel of 1.
 * @param {object} rgbColor
 * @returns {string} - HSLA CSS string
 */
var toHsla = exports.toHsla = function toHsla(rgbColor) {
  return 'hsla' + toHsl(rgbColor).slice(3, -1) + ',1)';
};

/**
 * RGB => Hex
 * 
 * Deconstructs RGB color object and maps its values to a Hex
 * CSS string format.
 * @param {object} rgbColor
 * @returns {string} - Hex CSS string
 */
var toHex = exports.toHex = function toHex(rgbColor) {
  var r = rgbColor.r,
      g = rgbColor.g,
      b = rgbColor.b;

  return '#' + [r, g, b].map(function (n) {
    var num = n.toString(16);
    return num.length === 2 ? num : '0' + num;
  }).join('');
};

/**
 * RGB => RGB
 * 
 * Deconstructs RGB color object and maps its values to a RGB
 * CSS string format.
 * @param {object} rgbColor
 * @return {string} - RGB CSS string
 */
var toRgb = exports.toRgb = function toRgb(rgbColor) {
  var r = rgbColor.r,
      g = rgbColor.g,
      b = rgbColor.b;

  return 'rgb(' + r + ',' + g + ',' + b + ')';
};

/**
 * RGB => RGBA
 * 
 * Returns result of previously declared toRgb function, changes
 * the prefix to `rgba` and appends a default alpha channel of 1.
 * @param {object} rgbColor
 * @return {string} - RGBA CSS string
 */
var toRgba = exports.toRgba = function toRgba(rgbColor) {
  return 'rgba' + toRgb(rgbColor).slice(3, -1) + ',1)';
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _conversions = __webpack_require__(1);

Object.defineProperty(exports, 'toHsl', {
  enumerable: true,
  get: function get() {
    return _conversions.toHsl;
  }
});
Object.defineProperty(exports, 'toHsla', {
  enumerable: true,
  get: function get() {
    return _conversions.toHsla;
  }
});
Object.defineProperty(exports, 'toHex', {
  enumerable: true,
  get: function get() {
    return _conversions.toHex;
  }
});
Object.defineProperty(exports, 'toRgb', {
  enumerable: true,
  get: function get() {
    return _conversions.toRgb;
  }
});
Object.defineProperty(exports, 'toRgba', {
  enumerable: true,
  get: function get() {
    return _conversions.toRgba;
  }
});

var _manipulations = __webpack_require__(10);

Object.defineProperty(exports, 'darken', {
  enumerable: true,
  get: function get() {
    return _manipulations.darken;
  }
});
Object.defineProperty(exports, 'lighten', {
  enumerable: true,
  get: function get() {
    return _manipulations.lighten;
  }
});
Object.defineProperty(exports, 'saturate', {
  enumerable: true,
  get: function get() {
    return _manipulations.saturate;
  }
});
Object.defineProperty(exports, 'desaturate', {
  enumerable: true,
  get: function get() {
    return _manipulations.desaturate;
  }
});
Object.defineProperty(exports, 'opacify', {
  enumerable: true,
  get: function get() {
    return _manipulations.opacify;
  }
});
Object.defineProperty(exports, 'transparentize', {
  enumerable: true,
  get: function get() {
    return _manipulations.transparentize;
  }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Determines if two arrays are equal
 * @param {array} arr1 
 * @param {array} arr2
 */
var equalsArray = function equalsArray(arr1, arr2) {
  if (arr1 === arr2) return true;
  if (arr1 == null || arr2 == null) return false;
  if (arr1.length !== arr2.length) return false;
  // sort arrays
  var a = arr1.sort();
  var b = arr2.sort();
  for (var i = 0; i < arr1.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

exports.default = equalsArray;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _conversions = __webpack_require__(1);

var convert = _interopRequireWildcard(_conversions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Convenience toHsla method
 * 
 * Parses a given color, determines it's type, converts
 * it to HSLA if it is not HSLA already. Finally It returns
 * the color and a handy closure that returns the color back
 * to it's original type.
 */
var convenienceToHsla = function convenienceToHsla($color) {
  var parsed = (0, _utils.parseColor)($color);
  var subScript = 'to' + parsed.type[0].toUpperCase() + parsed.type.slice(1);
  var color = subScript.includes('Hsla') ? parsed.color : convert.toJSON(convert.toHsla($color));
  var toOriginalColorType = function toOriginalColorType(newColor) {
    return convert[subScript](newColor);
  };
  return { color: color, toOriginalColorType: toOriginalColorType };
};

exports.default = convenienceToHsla;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toRgba = exports.toRgb = exports.toHex = exports.toHsla = exports.toHsl = undefined;

var _hsl = __webpack_require__(3);

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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toRgba = exports.toRgb = exports.toHex = exports.toHsla = exports.toHsl = undefined;

var _rgb = __webpack_require__(4);

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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _luminance = __webpack_require__(11);

Object.defineProperty(exports, 'lighten', {
  enumerable: true,
  get: function get() {
    return _luminance.lighten;
  }
});
Object.defineProperty(exports, 'darken', {
  enumerable: true,
  get: function get() {
    return _luminance.darken;
  }
});

var _saturation = __webpack_require__(12);

Object.defineProperty(exports, 'saturate', {
  enumerable: true,
  get: function get() {
    return _saturation.saturate;
  }
});
Object.defineProperty(exports, 'desaturate', {
  enumerable: true,
  get: function get() {
    return _saturation.desaturate;
  }
});

var _opacity = __webpack_require__(13);

Object.defineProperty(exports, 'opacify', {
  enumerable: true,
  get: function get() {
    return _opacity.opacify;
  }
});
Object.defineProperty(exports, 'transparentize', {
  enumerable: true,
  get: function get() {
    return _opacity.transparentize;
  }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.darken = exports.lighten = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(0);

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

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.desaturate = exports.saturate = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(0);

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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transparentize = exports.opacify = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(0);

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

/***/ })
/******/ ]);
});
//# sourceMappingURL=colornary.js.map