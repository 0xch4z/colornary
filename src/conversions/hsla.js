import * as hsl from './hsl';


/**
 * HSL => HSL
 * 
 * Returns the result of hsl.toHsl, as the alpha channel is 
 * irrelavent.
 * @param {object} hslColor
 * @returns {string} - HSL CSS string
 */
export const toHsl = hslaColor => hsl.toHsl(hslaColor);


/**
 * HSL => HSLA
 * 
 * Returns the result of hsl.toHsl, changes prefix to hsla and
 * appends the hslaColor's alpha channel.
 * @param {object} hslColor
 * @returns {string} - HSLA CSS string
 */
export const toHsla = (hslaColor) => {
  const { a } = hslaColor;
  return `hsla${hsl.toHsl(hslaColor).slice(3, -1)},${a})`;
};


/**
 * HSL => Hex
 * 
 * Returns the result of hsl.toHex, as the alpha channel is 
 * irrelavent.
 * @param {object} hslColor
 * @returns {string} - Hex CSS string
 */
export const toHex = hslaColor => hsl.toHex(hslaColor);


/**
 * HSL => RGB
 * 
 * Returns the result of hsl.toRgb, as the alpha channel is 
 * irrelavent.
 * @param {object} hslaColor
 * @returns {string} - RGB CSS string
 */
export const toRgb = hslaColor => hsl.toRgb(hslaColor);


/**
 * HSL => RGBA
 * 
 * Returns the result of hsl.toRgb, changes prefix to rgba and
 * appends the hslaColor's alpha channel.
 * @param {object} hslColor
 * @returns {string} - RGBA CSS string
 */
export const toRgba = (hslaColor) => {
  const { a } = hslaColor;
  return `rgba${hsl.toRgb(hslaColor).slice(3, -1)},${a})`;
};
