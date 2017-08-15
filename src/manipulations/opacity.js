import { convenienceToHsla } from '../utils';


/**
 * Alters color's alpha chanel
 * 
 * Parses color, converts it to HSLA (for easy manipulation),
 * reduces/increases the alpha channel according to the factor
 * if possible. Finally, it is converted to it's original format 
 * and returned via a convenience closure.
 * @param {string|object} $color 
 * @param {number} factor
 * @returns {string} - [type] CSS string
 */
const alterOpacity = ($color, factor) => {
  if (factor > 1 || factor < -1) throw new Error('Invalid factor');
  const { color, toOriginalColorType } = convenienceToHsla($color);
  let alpha = color.a;
  const adjAlpha = alpha + factor;
  // keep alpha channel bound to range of [0 - 1]
  if (adjAlpha <= 1 && adjAlpha >= 0) alpha = adjAlpha;
  else { console.warn('alpha out of bounds'); alpha = adjAlpha > 0.5 ? 1 : 0; }
  return toOriginalColorType({ ...color, a: alpha });
};


/**
 * Opacifies color
 * 
 * Calls alterOpacity function with a positive factor, making
 * the alpha channel increase by the factor.
 * @param {*}  
 * @param {*} factor 
 */
export const opacify = (color, factor = 0.1) => alterOpacity(color, factor);


/**
 * Transparentizes color
 * 
 * Calls alterOpacity function with a negative factor, making
 * the alpha channel decrease by the factor.
 * @param {*} color 
 * @param {*} factor 
 */
export const transparentize = (color, factor = 0.1) => alterOpacity(color, -factor);
