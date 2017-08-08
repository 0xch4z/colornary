/**
 * RGB => HSL
 * 
 * Deconstructs the RGB color object and formats the values
 * to percents. The chroma value is calculated by subtracting the 
 * min and max values. If the chroma/delta is 0, the hue and 
 * saturation are 0 and the color is greyscale (exit early). Otherwise,
 * switch on the max value to calculate the hue. Finally, the values
 * are mapped to a HSL CSS string.
 * @param {object} rgbColor
 * @returns {string} - HSL CSS string
 */
export const toHsl = (rgbColor) => {
  const red = rgbColor.r / 255;
  const green = rgbColor.g / 255;
  const blue = rgbColor.b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const chroma = max - min;
  let luminance, saturation, hue;
  // Calculate luminance
  luminance = (min + max) / 2;
  // No further calculations needed; Achromatic
  if (chroma === 0) return `hsl(0,0%,${parseInt(luminance * 100, 10)}%)`;
  // Calculate saturation
  saturation = luminance > 0.5 ?
    chroma / (2.0 - max - min) :
    chroma / (max + min);
  // Calculate hue
  switch (max) {
    case red:
      hue = ((green - blue) / chroma + (green < blue ? 6 : 0)) * 60; break;
    case green:
      hue = ((blue - red) / chroma + 2) * 60; break;
    case blue:
      hue = ((red - green) / chroma + 4) * 60; break;
  }
  hue = Math.round(hue);
  saturation = Math.round(saturation * 100);
  luminance = Math.round(luminance * 100);
  return `hsl(${hue},${saturation}%,${luminance}%)`;
};


/**
 * RGB => HSLA
 * 
 * Returns result of previously declared toHsl function, changes
 * the prefix to `hsla` and appends a default alpha channel of 1.
 * @param {object} rgbColor
 * @returns {string} - HSLA CSS string
 */
export const toHsla = rgbColor => `hsla${toHsl(rgbColor).slice(3, -1)},1)`;


/**
 * RGB => Hex
 * 
 * Deconstructs RGB color object and maps its values to a Hex
 * CSS string format.
 * @param {object} rgbColor
 * @returns {string} - Hex CSS string
 */
export const toHex = (rgbColor) => {
  const { r, g, b } = rgbColor;
  return `#${[r, g, b].map((n) => {
    const num = n.toString(16);
    return num.length === 2 ? num : `0${num}`;
  }).join('')}`;
};


/**
 * RGB => RGB
 * 
 * Deconstructs RGB color object and maps its values to a RGB
 * CSS string format.
 * @param {object} rgbColor
 * @return {string} - RGB CSS string
 */
export const toRgb = (rgbColor) => {
  const { r, g, b } = rgbColor;
  return `rgb(${r},${g},${b})`;
};


/**
 * RGB => RGBA
 * 
 * Returns result of previously declared toRgb function, changes
 * the prefix to `rgba` and appends a default alpha channel of 1.
 * @param {object} rgbColor
 * @return {string} - RGBA CSS string
 */
export const toRgba = rgbColor => `rgba${toRgb(rgbColor).slice(3, -1)},1)`;
