const { assert } = require('chai');
const {
  toHsl,
  toHsla,
  toHex,
  toRgb,
  toRgba,
} = require('../build');


/**
 * Creates conversion tests.
 * 
 * @param {string} format - Starting color format
 * @param {array} test - Test cases
 */
const makeConversionTests = ({ format, tests }) => {
  tests.forEach((test, index) => {
    const { input, output, outFormat } = test;
    describe(`Convert ${format} Test #${index + 1} | ${format} => ${outFormat}`, () => {
      it(`should return ${JSON.stringify(output)}`, () => {
        assert.equal(JSON.stringify(input), JSON.stringify(output));
      });
    });
  });
};


/**
 * Convert RGB Tests
 */
const convertRgbTests = {
  format: 'RGB',
  tests: [
    {
      outFormat: 'Hex',
      input: toHex('rgb(255,255,255)'),
      output: '#ffffff',
    },
    {
      outFormat: 'Hex',
      input: toHex('rgb(153,238,0)'),
      output: '#99ee00',
    },
    {
      outFormat: 'RGBA',
      input: toRgba('rgb(192,168,1)'),
      output: 'rgba(192,168,1,1)',
    },
    {
      outFormat: 'RGBA',
      input: toRgba('rgb(127,0,0)'),
      output: 'rgba(127,0,0,1)',
    },
    {
      outFormat: 'HSL',
      input: toHsl('rgb(127,0,0)'),
      output: 'hsl(0,100%,25%)',
    },
    {
      outFormat: 'HSL',
      input: toHsl('rgb(153,238,0)'),
      output: 'hsl(81,100%,47%)',
    },
    {
      outFormat: 'HSLA',
      input: toHsla('rgb(127,0,0)'),
      output: 'hsla(0,100%,25%,1)',
    },
    {
      outFormat: 'HSLA',
      input: toHsla('rgb(153,238,0)'),
      output: 'hsla(81,100%,47%,1)',
    },
  ],
};


/**
 * Convert RGBA Tests
 */
const convertRgbaTests = {
  format: 'RGBA',
  tests: [
    {
      outFormat: 'Hex',
      input: toHex('rgba(255,255,255,1.0)'),
      output: '#ffffff',
    },
    {
      outFormat: 'Hex',
      input: toHex('rgba(153,238,0,0.5)'),
      output: '#99ee00',
    },
    {
      outFormat: 'RGB',
      input: toRgb('rgba(192,168,1,1)'),
      output: 'rgb(192,168,1)',
    },
    {
      outFormat: 'RGB',
      input: toRgb('rgba(127,0,0,1)'),
      output: 'rgb(127,0,0)',
    },
    {
      outFormat: 'HSL',
      input: toHsl('rgba(127,0,0,1)'),
      output: 'hsl(0,100%,25%)',
    },
    {
      outFormat: 'HSL',
      input: toHsl('rgba(153,238,0,1)'),
      output: 'hsl(81,100%,47%)',
    },
    {
      outFormat: 'HSLA',
      input: toHsla('rgba(127,0,0,0.5)'),
      output: 'hsla(0,100%,25%,0.5)',
    },
    {
      outFormat: 'HSLA',
      input: toHsla('rgba(153,238,0,1)'),
      output: 'hsla(81,100%,47%,1)',
    },
  ],
};


/**
 * Convert Hex Tests
 */
const convertHexTests = {
  format: 'Hex',
  tests: [
    {
      outFormat: 'HSL',
      input: toHsl('#9e0'),
      output: 'hsl(81,100%,47%)',
    },
    {
      outFormat: 'HSL',
      input: toHsl('#8d9109'),
      output: 'hsl(62,88%,30%)',
    },
    {
      outFormat: 'HSLA',
      input: toHsla('#9e8290'),
      output: 'hsla(330,13%,56%,1)',
    },
    {
      outFormat: 'HSLA',
      input: toHsla('#a83'),
      output: 'hsla(43,54%,43%,1)',
    },
    {
      outFormat: 'RGB',
      input: toRgb('#fff'),
      output: 'rgb(255,255,255)',
    },
    {
      outFormat: 'RGB',
      input: toRgb('#000'),
      output: 'rgb(0,0,0)',
    },
    {
      outFormat: 'RGBA',
      input: toRgba('#fff'),
      output: 'rgba(255,255,255,1)',
    },
    {
      outFormat: 'RGBA',
      input: toRgba('#000'),
      output: 'rgba(0,0,0,1)',
    },
    {
      outFormat: 'Hex',
      input: toHex('#fe0923'),
      output: '#fe0923',
    },

  ],
};


/**
 * Convert HSL Tests
 */
const convertHslTests = {
  format: 'HSL',
  tests: [
    {
      outFormat: 'Hex',
      input: toHex('hsl(0,0%,0%)'),
      output: '#000000',
    },
    {
      outFormat: 'Hex',
      input: toHex('hsl(180,100%,50%)'),
      output: '#00ffff',
    },
    {
      outFormat: 'RGB',
      input: toRgb('hsl(300,100%,25%)'),
      output: 'rgb(128,0,128)',
    },
    {
      outFormat: 'RGB',
      input: toRgb('hsl(180,100%,25%)'),
      output: 'rgb(0,128,128)',
    },
    {
      outFormat: 'RGBA',
      input: toRgba('hsl(300,100%,25%)'),
      output: 'rgba(128,0,128,1)',
    },
    {
      outFormat: 'RGBA',
      input: toRgba('hsl(180,100%,25%)'),
      output: 'rgba(0,128,128,1)',
    },
    {
      outFormat: 'HSLA',
      input: toHsla('hsl(0,0%,0%)'),
      output: 'hsla(0,0%,0%,1)',
    },
    {
      outFormat: 'HSLA',
      input: toHsla('hsl(180,100%,50%)'),
      output: 'hsla(180,100%,50%,1)',
    },
  ],
};


/**
 * Convert HSLA Tests
 */
const convertHslaTests = {
  format: 'HSLA',
  tests: [
    {
      outFormat: 'Hex',
      input: toHex('hsla(0,0%,0%,1)'),
      output: '#000000',
    },
    {
      outFormat: 'Hex',
      input: toHex('hsla(180,100%,50%,0.5)'),
      output: '#00ffff',
    },
    {
      outFormat: 'RGB',
      input: toRgb('hsla(300,100%,25%,1)'),
      output: 'rgb(128,0,128)',
    },
    {
      outFormat: 'RGB',
      input: toRgb('hsla(180,100%,25%,0.2)'),
      output: 'rgb(0,128,128)',
    },
    {
      outFormat: 'RGBA',
      input: toRgba('hsla(300,100%,25%,1)'),
      output: 'rgba(128,0,128,1)',
    },
    {
      outFormat: 'RGBA',
      input: toRgba('hsla(180,100%,25%,0.25)'),
      output: 'rgba(0,128,128,0.25)',
    },
    {
      outFormat: 'HSLA',
      input: toHsla('hsla(0,0%,0%,1)'),
      output: 'hsla(0,0%,0%,1)',
    },
    {
      outFormat: 'HSLA',
      input: toHsla('hsla(180,100%,50%,0.3)'),
      output: 'hsla(180,100%,50%,0.3)',
    },
  ],
};


/**
 * Run Tests
 */
const allTests = [
  convertHslaTests,
  convertHslTests,
  convertRgbTests,
  convertRgbaTests,
  convertHexTests,
];
allTests.forEach(test => makeConversionTests(test));
