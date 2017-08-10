'use strict';

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