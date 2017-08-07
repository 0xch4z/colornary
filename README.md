# Colornary 🎨
[TODO: PUT BADGES HERE!]
A lightweight javascript library for converting and manipulating colors.

### API Usage ℹ️
- Conversion API
  - **toRGB(color)** - *converts given color to RGB.*
  - **toRGBJSON(color)** - *converts given color to RGB in JSON format.*
  - **toRGBA(color)** - *converts given color to RGBA.*
  - **toRGBAJSON(color)** - *convets given color to RGBA in JSON format.*
  - **toHSL(color)** - *converts given color to HSL.*
  - **toHSLJSON(color)** - *converts given color to HSL in JSON format.*
  - **toHSLA(color)** - *converts given color to HSLA.*
  - **toHSLAJSON(color)** - *converts given color to HSLA.*
  - **toHex(color)** - *converts given color to Hex.*
  - **toHexJSON(color)** - *converts given color to Hex.*
- Manipulation API
  - **lightenColor(color)** - *returns lighter shade of given color.*
  - **darkenColor(color)** - *returns darker shade of given color.*

### Supported Color Formats ✅
- RGB/RGBJSON
- RGBA/RGBAJSON
- HSL/HSLJSON
- HSLA/HSLAJSON
- Hex

### Goals for v0.0.1 📝
- Add HSL/HSLA/RGB/RGBA/HEX/HSLAJSON/HSLJSON/RGBJSON/RGBAJSON/HEXJSON convertors
- Add universal darken method
- Add universal lighten method
- To be lightweight and easy to use/may slightly effect performance
- Implement simple conversion api with methods:
  - toRGB(color)/toRGBJSON(color)
  - toRGBA(color)/toRGBAJSON(color)
  - toHSL(color)/toHSLJSON(color)
  - toHSLA(color)/toHSLAJSON(color)
  - toHex(color)/toHEXRGB(color)
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
