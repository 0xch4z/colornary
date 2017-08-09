const { toRgb, toHex } = require('./lib');

console.log(toRgb('hsl(0,0%,100%)'));
console.log(toHex('hsl(0,0%,100%)'));
console.log(toRgb('hsl(81,100%,47%)'));
