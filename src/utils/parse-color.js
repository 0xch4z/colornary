import { equalArrays } from './';

/**
 * Parses RGB string
 * @param {string} rgbString
 * @returns {object} - parsed color
 */
const parseRgbString = (rgbString) => {
  // deconstruct rgb
  const values = rgbString.match(/(2[0-5]\d|1\d{2}|\d{1,2})/g)
    .map(n => parseInt(n, 10));
  console.log(values.length);
  if (values.length !== 3) throw new Error('Invalid RGB String');
  const color = { r: values[0], g: values[1], b: values[2] };
  // return color object
  return { color, format: 'string', type: 'rgb' };
};

/**
 * Parses RGBA string
 * @param {string} rgbaString
 * @returns {object} - parsed color
 */
const parseRgbaString = (rgbaString) => {
  // deconstruct rgba string
  const values = rgbaString.match(/(2[0-5]\d|1\d{2}|\d{1,2}),/g)
    .map(s => parseInt(s.slice(0, -1), 10));
  if (values.length !== 3) throw new Error('Invalid RGBA String');
  const alpha = parseFloat(rgbaString.match(/(1(\.0)?|0(\.\d+)?)\)/)[0].slice(0, -1));
  const color = { r: values[0], g: values[1], b: values[2], a: alpha };
  // return color object
  return { color, format: 'string', type: 'rgba' };
};

/**
 * Parses HSL string
 * @param {string} hslString 
 * @returns {object} - parsed color
 */
const parseHslString = (hslString) => {
  // TODO: NORMALIZE HUE FORMATS
  // deconstruct hsl string
  const hue = hslString.match(/\((360|3[0-5]\d|[12]\d{2}|[1-9]?\d|\d)deg/g)[0].slice(1);
  const perc = hslString.match(/(\s|,)(100|[1-9]?\d)%(,|\))/g)
    .map(s => s.slice(1, -1));
  if (perc.length !== 2) throw new Error('Invalid HSL String');
  const color = { h: hue, s: perc[0], l: perc[1] };
  // return color object
  return { color, format: 'string', type: 'hsl' };
};

/**
 * Parses HSLA string
 * @param {string} hslaString 
 * @returns {object} - parsed color
 */
const parseHslaString = (hslaString) => {
  // TODO: NORMALIZE HUE FORMATS
  // deconstruct hsla string
  const hue = hslaString.match(/(360|3[0-5]\d|[12]\d{2}|\d{1,2})deg/)[0];
  const perc = hslaString.match(/(\s|,)(100|[1-9]?\d)%,/g)
    .map(s => s.slice(1, -1));
  if (perc.length !== 2) throw new Error('Invalid HSLA String');
  const alpha = Number(hslaString.match(/(\s|,)(1(\.0)?|0(\.\d+)?)\)/)[0].slice(1, -1));
  const color = { h: hue, s: perc[0], l: perc[1], a: alpha };
  // return color object
  return { color, format: 'string', type: 'hsla' };
};

/**
 * Parses hex string
 * @param {string} hexString
 * @returns {object} - parsed color
 */
const parseHexString = (hexString) => {
  // deconstruct hex string
  let hex = hexString.slice(1);
  // normalize shorthand hex
  hex = hex.length === 3 ? hex.split('').map(d => d.repeat(2)).join('') : hex;
  console.log(hex);
  const color = {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
  };
  // return color object
  return { color, format: 'string', type: 'rgb', hex: true };
};

/**
 * Parses color string (mid reducer)
 * @param {string} colorString 
 * @returns {object} - referred parsed color
 */
const parseColorString = (colorString) => {
  let color;
  // determine type and defer to type parser
  if (/^rgb\s?\(/.test(colorString)) color = parseRgbString(colorString);
  else if (/^rgba\s?\(/.test(colorString)) color = parseRgbaString(colorString);
  else if (/^hsl\s?\(/.test(colorString)) color = parseHslString(colorString);
  else if (/^hsla\s?\(/.test(colorString)) color = parseHslaString(colorString);
  else if (/^#[a-f0-9]{3,6}$/i.test(colorString)) color = parseHexString(colorString);
  else throw new Error('Unsupported color type');
  return color;
};

/**
 * Parses color object
 * @param {object} colorString
 * @returns {object} - parsed color
 */
const parseColorObject = (colorObject) => {
  const keys = Object.keys(colorObject).map(c => c.toLowerCase());
  let type;
  if (equalArrays(keys, 'rgb'.split(''))) type = 'rgb';
  else if (equalArrays(keys, 'rgba'.split(''))) type = 'rgba';
  else if (equalArrays(keys, 'hsl'.split(''))) type = 'hsl';
  else if (equalArrays(keys, 'hsla'.split(''))) type = 'hsla';
  else throw new Error('Unsupported color type');
  return { color: colorObject, format: 'json', type };
};

/**
 * Parses color (reducer)
 * @param {any} color - color to convert
 * @returns {object} - referred parsed color
 */
export default (color) => {
  let parsedColor;
  try {
    switch (typeof color) {
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
