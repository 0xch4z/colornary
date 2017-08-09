'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var _conversions = require('../conversions');

var convert = _interopRequireWildcard(_conversions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Convenience toHsla method
 * 
 * Parses a given color, determines it's type, converts
 * it to HSLA if it is not HSLA already. Finally It returns
 * the color and a handy closure that returns the color back
 * to it's original type.
 */
var convenienceToHsla = function convenienceToHsla($color) {
  var parsed = (0, _utils.parseColor)($color);
  var subScript = 'to' + parsed.type[0].toUpperCase() + parsed.type.slice(1);
  var color = subScript.includes('Hsla') ? parsed.color : convert.toJSON(convert.toHsla($color));
  var toOriginalColorType = function toOriginalColorType(newColor) {
    return convert[subScript](newColor);
  };
  return { color: color, toOriginalColorType: toOriginalColorType };
};

exports.default = convenienceToHsla;