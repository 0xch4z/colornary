import * as rgb from './rgb';

/**
 * RGBA => HSL
 * 
 * Calls rgb.toHsl method as the alpha channel is irrelavent.
 * @param {object} rgbaColor
 * @returns {string} - HSL CSS string
 */
export const toHsl = rgbaColor => rgb.toHsl(rgbaColor);


/**
 * RGBA => HSLA
 * 
 * Returns the result of rgb.toHsl, changes prefix to hsla and 
 * appends the rgbaColor's alpha channel.
 * @param {object} rgbaColor
 * @returns {string} - HSLA CSS string
 */
export const toHsla = (rgbaColor) => {
  const { a } = rgbaColor;
  return `hsla${rgb.toHsl(rgbaColor).slice(3, -1)},${a})`;
};


/**
 * RGBA => Hex
 * 
 * Calls rgb.toHex method as the alpha channel is irrelavent.
 * @param {object} rgbaColor
 * @returns {string} - Hex CSS string
 */
export const toHex = rgbaColor => rgb.toHex(rgbaColor);


/**
 * RGBA -> RGB
 * 
 * Calls rgb.toRgb method as the alpha channel is irrelavent.
 * @param {object} rgbaColor
 * @returns {string} - RGB CSS string
 */
export const toRgb = rgbaColor => rgb.toRgb(rgbaColor);


/**
 *  RGBA => RGBA
 * 
 * Returns the result of rgb.toHsl, changes prefix to rgba and
 * appends the rgbaColor's alpha channel.
 * @param {object} rgbaColor
 * @returns {string} - RGBA CSS string
 */
export const toRgba = (rgbaColor) => {
  const { a } = rgbaColor;
  return `rgba${rgb.toRgba(rgbaColor).slice(3, -1)},${a})`;
};
