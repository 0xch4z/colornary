# Colornary 🎨 [WIP - NOT FINISHED]
[![Travis](https://img.shields.io/travis/Charliekenney23/colornary.svg)](https://travis-ci.org/Charliekenney23/colornary)
[![npm](https://img.shields.io/npm/v/colornary.svg)](https://www.npmjs.com/package/colornary)

A lightweight javascript library for converting and manipulating colors.

### API Usage ℹ️
- **Conversion API**
  - toRgb(color) - *converts given color to RGB.*
  - toRgba(color) - *converts given color to RGBA.*
  - toHsl(color) - *converts given color to HSL.*
  - toHsla(color) - *converts given color to HSL in JSON format.*
  - toHex(color) - *converts given color to HSLA.*
- **Manipulation API**
  - lightenColor(color) - *returns lighter shade of given color.*
  - darkenColor(color) - *returns darker shade of given color.*

### Supported Color Formats ✅
- Rgb / RgbJson
- Rgba / RgbaJson 
- Hsl / Hsl
- Hsla / HslaJson
- Hex

### Goals for v0.1.0 📝
- Add HSL/HSLA/RGB/RGBA/HEX/HSLAJSON/HSLJSON/RGBJSON/RGBAJSON/HEXJSON convertors
- Add universal darken method
- Add universal lighten method
- Make browser bundle
- Implement simple conversion api with methods:
  - toRgb(color)
  - toRgba(color)
  - toHsl(color)
  - toHsla(color)
  - toHex(color)
- Implement simple manipulation api with methods:
  - darken(color)
  - lighten(color)

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
