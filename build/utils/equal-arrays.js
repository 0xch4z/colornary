"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Determines if two arrays are equal
 * 
 * @param {array} arr1 
 * @param {array} arr2
 */
var equalsArray = function equalsArray(arr1, arr2) {
  if (arr1 === arr2) return true;
  if (arr1 == null || arr2 == null) return false;
  if (arr1.length !== arr2.length) return false;
  // sort arrays
  var a = arr1.sort();
  var b = arr2.sort();
  for (var i = 0; i < arr1.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

exports.default = equalsArray;