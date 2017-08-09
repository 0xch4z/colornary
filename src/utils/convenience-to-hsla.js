import { parseColor } from '../utils';
import * as convert from '../conversions';


/**
 * Convenience toHsla method
 * 
 * Parses a given color, determines it's type, converts
 * it to HSLA if it is not HSLA already. Finally It returns
 * the color and a handy closure that returns the color back
 * to it's original type.
 */
const convenienceToHsla = ($color) => {
  const parsed = parseColor($color);
  const subScript = `to${parsed.type[0].toUpperCase()}${parsed.type.slice(1)}`;
  const color = subScript.includes('Hsla') ? parsed.color :
    convert.toJSON(convert.toHsla($color));
  const toOriginalColorType = newColor => convert[subScript](newColor);
  return { color, toOriginalColorType };
};

export default convenienceToHsla;
