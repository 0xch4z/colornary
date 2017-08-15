import { convenienceToHsla } from '../utils';


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
const alterSaturation = ($color, factor) => {
  if (factor > 1 || factor < -1) throw new Error('Invalid factor');
  const { color, toOriginalColorType } = convenienceToHsla($color);
  let sat = color.s;
  const adjSat = sat + factor;
  // keep saturation bound to range of [0 - 1]
  if (adjSat <= 1 && adjSat >= 0) sat = adjSat;
  else { console.warn('sat out of bounds'); sat = adjSat > 0.5 ? 1 : 0; }
  return toOriginalColorType({ ...color, s: sat });
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
export const saturate = (color, factor = 0.1) => alterSaturation(color, factor);


/**
 * Desaturates color
 * 
 * Calls alterSaturation function with a negative factor, making
 * the saturation value decrease by the factor.
 * @param {string|object} color 
 * @param {number} factor 
 * @returns {string} - [type] CSS string
 */
export const desaturate = (color, factor = 0.1) => alterSaturation(color, -factor);
