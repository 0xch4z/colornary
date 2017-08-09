# Colornary 🎨 [WIP - NOT FINISHED]
[![Travis](https://img.shields.io/travis/Charliekenney23/colornary.svg)](https://travis-ci.org/Charliekenney23/colornary)
[![npm](https://img.shields.io/npm/v/colornary.svg)](https://www.npmjs.com/package/colornary)

A lightweight javascript library for converting and manipulating colors.

### API Usage ℹ️
- **Conversion API**
  - toRgb(color) - *converts given color to RGB.*
  - toRgba(color) - *converts given color to RGBA.*
  - toHsl(color) - *converts given color to HSL.*
  - toHsla(color) - *converts given color to HSLA.*
  - toHex(color) - *converts given color to Hex.*
- **Manipulation API**
  - lighten(color, factor) - *lightens color by a given factor (where factor is a decimal between 1 and 0), defaults to .1 (or 10%)*
  - darken(color, factor) - *darkens color by a given factor (where factor is a decimal between 1 and 0), defaults to .1 (or 10%)*
  - saturate(color, factor) - *saturates color by a given factor (where factor is a decimal between 1 and 0), defaults to .1 (or 10%).*
  - desaturate(color, factor) - *desaturates color by a given factor (where factor is a decimal between 1 and 0), defaults to .1 (or 10%)*
  - opacify(color, factor) - *opacifies color by a given factor (where factor is a decimal between 1 and 0), defaults to .1 (or 10%).*
  - transparentize(color, factor) - *transparentizes color by a given factor (where factor is a decimal between 1 and 0), defaults to .1 (or 10%)*

### Supported Color Formats ✅
- Rgb / RgbJson
- Rgba / RgbaJson 
- Hsl / Hsl
- Hsla / HslaJson
- Hex

### Contributing ✚
Pull requests of any kind are welcome; whether it's adding a feature, improving documentation, or fixing a bug. However, there are some standard guidlines to follow when contributing code. Please read the following guide before opening a pull request.
#### Guidelines for opening issues
- Check for a similar existing issue.
- Provide steps to reproduce the bug.
- Provide a log/result of the bug.
#### Guidelines for commiting code
- Provide documentation for new/improved features.
- Add exhaustive testing for new features.
- Follow linting rules and check build quality.
