'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Invalid Color Format Error
 */
var ColorFormatError = exports.ColorFormatError = function (_Error) {
  _inherits(ColorFormatError, _Error);

  function ColorFormatError(message) {
    _classCallCheck(this, ColorFormatError);

    var _this = _possibleConstructorReturn(this, (ColorFormatError.__proto__ || Object.getPrototypeOf(ColorFormatError)).call(this, message));

    _this.message = message;
    _this.name = 'ColorFormatError';
    return _this;
  }

  return ColorFormatError;
}(Error);

/**
 * Color Max Darkness Error
 */


var ColorMaxDarknessError = exports.ColorMaxDarknessError = function (_Error2) {
  _inherits(ColorMaxDarknessError, _Error2);

  function ColorMaxDarknessError(message) {
    _classCallCheck(this, ColorMaxDarknessError);

    var _this2 = _possibleConstructorReturn(this, (ColorMaxDarknessError.__proto__ || Object.getPrototypeOf(ColorMaxDarknessError)).call(this, message));

    _this2.message = message;
    _this2.name = 'ColorMaxDarknessError';
    return _this2;
  }

  return ColorMaxDarknessError;
}(Error);

/**
 * Color Max Brightness Error
 */


var ColorMaxBrightnessError = exports.ColorMaxBrightnessError = function (_Error3) {
  _inherits(ColorMaxBrightnessError, _Error3);

  function ColorMaxBrightnessError(message) {
    _classCallCheck(this, ColorMaxBrightnessError);

    var _this3 = _possibleConstructorReturn(this, (ColorMaxBrightnessError.__proto__ || Object.getPrototypeOf(ColorMaxBrightnessError)).call(this, message));

    _this3.message = message;
    _this3.name = 'ColorMaxBrightnessError';
    return _this3;
  }

  return ColorMaxBrightnessError;
}(Error);