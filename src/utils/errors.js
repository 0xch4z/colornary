/**
 * Invalid Color Format Error
 */
export class ColorFormatError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'ColorFormatError';
  }
}

/**
 * Color Max Darkness Error
 */
export class ColorMaxDarknessError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'ColorMaxDarknessError';
  }
}

/**
 * Color Max Brightness Error
 */
export class ColorMaxBrightnessError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'ColorMaxBrightnessError';
  }
}
