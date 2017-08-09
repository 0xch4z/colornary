import { convenienceToHsla } from '../utils';


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
const alterLuminance = ($color, factor) => {
  if (factor > 1 || factor < -1) throw new Error('Invalid factor');
  const { color, toOriginalColorType } = convenienceToHsla($color);
  let lum = color.l;
  const adjLum = lum + factor;
  // keep luminance bound to range of [0 - 1]
  if (adjLum <= 1 && adjLum >= 0) lum = adjLum;
  else { console.warn('lum out of bounds'); lum = adjLum > 0.5 ? 1 : 0; }
  return toOriginalColorType({ ...color, l: lum });
};


/**
 * Lightens color
 * 
 * Calls alterLuminance function with a positive factor, making
 * the luminance value increase. 
 * @param {string|object} color
 * @param {number} factor 
 */
export const lighten = (color, factor = 0.1) => alterLuminance(color, factor);


/**
 * Darkens color
 * 
 * Calls alterLuminance function with a negitive factor, making
 * the luminance value decrease.
 * @param {string|object} color
 * @param {number} factor 
 */
export const darken = (color, factor = 0.1) => alterLuminance(color, -factor);
