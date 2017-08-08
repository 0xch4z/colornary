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
 * Convets color to Hsl
 * 
 * @param {string|object} color
 * @return {string} - Hsl string  
 */
export const toHsl = (_color) => {
  const colorObject = parseColor(_color);
  const { type, color } = colorObject;
  return conversions[type].toHsl(color);
};


/**
 * Convets color to Hsla
 * 
 * @param {string|object} color
 * @return {string} - Hsla string  
 */
export const toHsla = (_color) => {
  const colorObject = parseColor(_color);
  const { type, color } = colorObject;
  return conversions[type].toHsla(color);
};


/**
 * Converts color to Hex
 * 
 * @param {string|object} color
 * @returns {string} - Hex string
 */
export const toHex = (_color) => {
  const colorObject = parseColor(_color);
  const { type, color } = colorObject;
  return conversions[type].toHex(color);
};


/**
 * Converts color to RGB
 * 
 * @param {string|object} color
 * @returns {string} - RGB CSS string
 */
export const toRgb = (_color) => {
  const colorObject = parseColor(_color);
  const { type, color } = colorObject;
  return conversions[type].toRgb(color);
};


/**
 * Converts color to RGBA
 * 
 * @param {string|object} color
 * @returns {string} - RGBA CSS string
 */
export const toRgba = (_color) => {
  const colorObject = parseColor(_color);
  const { type, color } = colorObject;
  return conversions[type].toRgba(color);
};


/**
 * Converts color to JSON
 * 
 * @param {string|object} color
 * @returns {object} - Color JSON
 */
export const toJSON = color => parseColor(color).color;

