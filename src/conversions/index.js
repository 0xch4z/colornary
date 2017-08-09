import parseColor from '../utils/parse-color';
import * as hsl from './hsl';
import * as hsla from './hsla';
import * as rgb from './rgb';
import * as rgba from './rgba';


const conversions = {
  hsl,
  hsla,
  rgb,
  rgba,
};


/**
 * Converts color to Hsl
 * 
 * @param {string|object} $color
 * @return {string} - Hsl string  
 */
export const toHsl = ($color) => {
  let hslColor;
  try {
    const colorObject = parseColor($color);
    const { type, color } = colorObject;
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
export const toHsla = ($color) => {
  let hslaColor;
  try {
    const colorObject = parseColor($color);
    const { type, color } = colorObject;
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
export const toHex = ($color) => {
  let hexColor;
  try {
    const colorObject = parseColor($color);
    const { type, color } = colorObject;
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
export const toRgb = ($color) => {
  let rgbColor;
  try {
    const colorObject = parseColor($color);
    const { type, color } = colorObject;
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
export const toRgba = ($color) => {
  let rgbaColor;
  try {
    const colorObject = parseColor($color);
    const { type, color } = colorObject;
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
export const toJSON = (color) => {
  let jsonColor;
  try {
    jsonColor = parseColor(color).color;
  } catch (err) {
    console.error(err);
  }
  return jsonColor;
};

