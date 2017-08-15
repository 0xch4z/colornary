const assert = require('chai').assert;
const parseColor = require('../build/utils/parse-color').default;


/**
 * Creates parser tests.
 * 
 * @param {string} type - Color type
 * @param {array} object - Test cases
 */
const makeParserTests = ({ type, tests }) => {
  tests.forEach((test, index) => {
    const { input, output } = test;
    describe(`Parse ${type} - Test #${index + 1} | parseColor([${type}])`, () => {
      it(`should return ${JSON.stringify(output)}`, () => {
        assert.equal(JSON.stringify(input), JSON.stringify(output));
      });
    });
  });
};


/**
 * Parse RGB Tests
 */
const parseRgbTests = {
  type: 'RGB',
  tests: [
    {
      input: parseColor('rgb(255,255,255)'),
      output: {
        color: { r: 255, g: 255, b: 255 },
        format: 'string',
        type: 'rgb',
      },
    },
    {
      input: parseColor('rgb(0, 0, 0)'),
      output: {
        color: { r: 0, g: 0, b: 0 },
        format: 'string',
        type: 'rgb',
      },
    },
  ],
};


/**
 * Parse RGBA Tests
 */
const parseRgbaTests = {
  type: 'RGBA',
  tests: [
    {
      input: parseColor('rgba(255,255,255,1.0)'),
      output: {
        color: { r: 255, g: 255, b: 255, a: 1 },
        format: 'string',
        type: 'rgba',
      },
    },
    {
      input: parseColor('rgba(0, 0, 0, 0.5)'),
      output: {
        color: { r: 0, g: 0, b: 0, a: 0.5 },
        format: 'string',
        type: 'rgba',
      },
    },
    {
      input: parseColor('rgba(0, 0, 0, 1)'),
      output: {
        color: { r: 0, g: 0, b: 0, a: 1 },
        format: 'string',
        type: 'rgba',
      },
    },
  ],
};


/**
 * Parse HSL Tests
 */
const parseHslTests = {
  type: 'HSL',
  tests: [
    {
      input: parseColor('hsl(90deg, 90%, 20%)'),
      output: {
        color: { h: 90, s: 0.9, l: 0.2 },
        format: 'string',
        type: 'hsl',
      },
    },
    {
      input: parseColor('hsl(10deg, 95%, 100%)'),
      output: {
        color: { h: 10, s: 0.95, l: 1 },
        format: 'string',
        type: 'hsl',
      },
    },
    {
      input: parseColor('hsl(10,95%,0%)'),
      output: {
        color: { h: 10, s: 0.95, l: 0 },
        format: 'string',
        type: 'hsl',
      },
    },
  ],
};


/**
 * Parse HSLA Tests
 */
const parseHslaTests = {
  type: 'HSLA',
  tests: [
    {
      input: parseColor('hsla(90deg, 90%, 90%, 1.0)'),
      output: {
        color: { h: 90, s: 0.9, l: 0.9, a: 1 },
        format: 'string',
        type: 'hsla',
      },
    },
    {
      input: parseColor('hsla(0,90%,20%,1)'),
      output: {
        color: { h: 0, s: 0.9, l: 0.2, a: 1 },
        format: 'string',
        type: 'hsla',
      },
    },
  ],
};

const parseHexTests = {
  type: 'Hex',
  tests: [
    {
      input: parseColor('#0f0'),
      output: {
        color: { r: 0, g: 255, b: 0 },
        format: 'string',
        type: 'rgb',
        hex: true,
      },
    },
    {
      input: parseColor('#9effee'),
      output: {
        color: { r: 158, g: 255, b: 238 },
        format: 'string',
        type: 'rgb',
        hex: true,
      },
    },
  ],
};


/**
 * Run Tests
 */
const allTests = [
  parseRgbTests,
  parseRgbaTests,
  parseHslTests,
  parseHslaTests,
  parseHexTests,
];
allTests.forEach(test => makeParserTests(test));
