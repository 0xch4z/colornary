const assert = require('chai').assert;
const parseColor = require('../lib/utils/parse-color').default;


/**
 * @param {string} title
 * @param {tests} object
 */
const makeParserTests = ({ title, tests }) => {
  tests.forEach((test, index) => {
    const { input, output } = test;
    describe(`${title} #${index + 1}`, () => {
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
  title: 'Parse RGB - Test',
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
    {
      input: parseColor('rgb(a,255,255)'),
      error: 'unsupported color format',
    },
  ],
};


/**
 * Parse RGBA Tests
 */
const parseRgbaTests = {
  title: 'Parse RGBA - Test',
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
    {
      input: parseColor('rgba(a,255,255,1)'),
      output: undefined,
    },
    {
      input: parseColor('rgba(255,255, 255,f)'),
      output: undefined,
    },
  ],
};


/**
 * Parse HSL Tests
 */
const parseHslTests = {
  title: 'Parse HSL - Test',
  tests: [
    {
      input: parseColor('hsl(90deg, 90%, 20%)'),
      output: {
        color: { h: '90deg', s: '90%', l: '20%' },
        format: 'string',
        type: 'hsl',
      },
    },
    {
      input: parseColor('hsl(400deg, 90%, 10%)'),
      output: undefined,
    },
    {
      input: parseColor('hsl(90deg, 500%, 20%)'),
      output: undefined,
    },
    {
      input: parseColor('hsl(10deg, 95%, 100%)'),
      output: {
        color: { h: '10deg', s: '95%', l: '100%' },
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
  title: 'Parse HSLA - Test',
  tests: [
    {
      input: parseColor('hsla(90deg, 90%, 90%, 1.0)'),
      output: {
        color: { h: '90deg', s: '90%', l: '90%', a: 1.0 },
        format: 'string',
        type: 'hsla',
      },
    },
    {
      input: parseColor('hsla(0deg, 90%, 20%, 1.0)'),
      output: {
        color: { h: '0deg', s: '90%', l: '20%', a: 1.0 },
        format: 'string',
        type: 'hsla',
      },
    },
  ],
};

const parseHexTests = {
  title: 'Parse Hex = Tests',
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
