const { assert } = require('chai');
const {
  darken,
  lighten,
  opacify,
  transparentize,
  saturate,
  desaturate,
} = require('../build');


/**
 * @param {string} manipulation
 * @param {array} tests
 */
const makeManipulationTests = ({ manipulation, tests }) => {
  tests.forEach((test, index) => {
    const { input, output, type } = test;
    describe(`${manipulation} Test #${index + 1} | ${manipulation}([${type}])`, () => {
      it(`should return ${output}`, () => {
        assert.equal(input, output);
      });
    });
  });
};


/**
 * Opacify Manipulation Tests 
 */
const opacifyTests = {
  manipulation: 'Opacify',
  tests: [
    {
      type: 'RGBA',
      input: opacify('rgba(255,255,255,0.5)', 0.2),
      output: 'rgba(255,255,255,0.7)',
    },
    {
      type: 'HSLA',
      input: opacify('hsla(100,0%,100%,0.1)', 1.0),
      output: 'hsla(100,0%,100%,1)',
    },
  ],
};


/**
 * Transparentize Manipulation Tests 
 */
const transparentizeTests = {
  manipulation: 'Transparentize',
  tests: [
    {
      type: 'RGBA',
      input: transparentize('rgba(255,255,255,0.5)', 0.2),
      output: 'rgba(255,255,255,0.3)',
    },
    {
      type: 'HSLA',
      input: transparentize('hsla(100,0%,100%,0.1)', 0.1),
      output: 'hsla(100,0%,100%,0)',
    },
  ],
};


/**
 * Lighten Manipulation Tests 
 */
const lightenTests = {
  manipulation: 'Lighten',
  tests: [
    {
      type: 'RGB',
      input: lighten('rgb(254,254,254)'),
      output: 'rgb(255,255,255)',
    },
    {
      type: 'RGBA',
      input: lighten('rgba(0,0,0,1)', 0.1),
      output: 'rgba(26,26,26,1)',
    },
  ],
};


/**
 * Darken Manipulation Tests 
 */
const darkenTests = {
  manipulation: 'Darken',
  tests: [
    {
      type: 'RGB',
      input: darken('rgb(255,255,255)', 0.5),
      output: 'rgb(128,128,128)',
    },
    {
      type: 'HSL',
      input: darken('hsl(0,0%,100%)'),
      output: 'hsl(0,0%,90%)',
    },
  ],
};


/**
 * Saturate Manipulation Tests 
 */
const saturateTests = {
  manipulation: 'Saturate',
  tests: [
    {
      type: 'RGB',
      input: saturate('rgb(13,13,13)'),
      output: 'rgb(14,11,11)',
    },
    {
      type: 'HSL',
      input: saturate('hsl(0,0%,100%)', 0.5),
      output: 'hsl(0,50%,100%)',
    },
  ],
};


/**
 * Desaturate Manipulation Tests
 */
const desaturateTests = {
  manipulation: 'Saturate',
  tests: [
    {
      type: 'HSLA',
      input: desaturate('hsla(10,10%,0%,1)'),
      output: 'hsla(10,0%,0%,1)',
    },
    {
      type: 'HSL',
      input: desaturate('hsl(0,50%,100%)', 0.5),
      output: 'hsl(0,0%,100%)',
    },
  ],
};


/**
 * All Tests
 */
const allTests = [
  opacifyTests,
  transparentizeTests,
  lightenTests,
  darkenTests,
  saturateTests,
  desaturateTests,
];
allTests.forEach(test => makeManipulationTests(test));
