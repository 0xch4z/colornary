
const { assert } = require('chai');
const {
  toHsl,
  toHsla,
  toHex,
  toRgb,
  toRgba,
} = require('../lib');


/**
 * @param {string} title
 * @param {tests} object
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
 * Run Tests
 */
const allTests = [
  convertRgbTests,
  convertHexTests,
];
allTests.forEach(test => makeConversionTests(test));
