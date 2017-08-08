import { equalArrays } from './';

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
const parseRgbString = (rgbString) => {
  // deconstruct rgb
  const values = rgbString.match(/(2[0-5]\d|1\d{2}|\d{1,2})/g)
    .map(n => parseInt(n, 10));
  console.log(values);
  if (values.length !== 3) throw new Error('Invalid RGB String');
  const color = { r: values[0], g: values[1], b: values[2] };
  console.log(color);
  // return color object
  return { color, format: 'string', type: 'rgb' };
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
 * Assumes format: `hsl([hue], [saturation], [luminance])`
 * 
 * Deconstructs HSL CSS string: first getting the hue, then the
 * percentages (saturation and luminance). The values are then
 * mapped to a color object for manipulation/conversion.
 * @param {string} hslString
 * @throws if missing HSL values
 * @returns {object} - parsed HSL color object
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
const parseHslaString = (hslaString) => {
  // TODO: NORMALIZE HUE FORMATS
  // deconstruct hsla string
  const hue = hslaString.match(/(360|3[0-5]\d|[12]\d{2}|\d{1,2})(deg)?/)[0];
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
 * Assumes format: `#[red][green][blue]`
 * 
 * Deconstructs hex CSS string: getting all hex values (red, 
 * green, blue) and parsing them as integers. The values are then
 * mapped to a color object for manipulation/conversion. 
 * @param {string} hexString
 * @returns {object} - parsed RGB(hex) color object
 */
const parseHexString = (hexString) => {
  // deconstruct hex string
  let hex = hexString.slice(1);
  // normalize shorthand hex
  hex = hex.length === 3 ? hex.split('').map(d => d.repeat(2)).join('') : hex;
  const color = {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
  };
  // return color object
  return { color, format: 'string', type: 'rgb', hex: true };
};


/**
 * Parses color string
 * Assumes CSS compatability
 * 
 * Matches the given CSS string with a given prefix and calls
 * the corresponding parser, returning the parsed color object
 * @param {string} colorString
 * @throws if color type not matched
 * @returns {object} - parsed [deffered] color object
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
 * Assumes CSS compatability
 * 
 * Matches the given color objects keys with a given format. The
 * color is then encapsulated in a parsed color object for 
 * manipulation/conversion.
 * @param {object} colorString
 * @throws if color keys not matched
 * @returns {object} - parsed [type] color object
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
const parseColor = (color) => {
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

export default parseColor;
