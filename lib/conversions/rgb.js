'use strict';

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