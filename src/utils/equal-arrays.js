/**
 * Determines if two arrays are equal
 * 
 * @param {array} arr1 
 * @param {array} arr2
 */
const equalsArray = (arr1, arr2) => {
  if (arr1 === arr2) return true;
  if (arr1 == null || arr2 == null) return false;
  if (arr1.length !== arr2.length) return false;
  // sort arrays
  const a = arr1.sort();
  const b = arr2.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};


export default equalsArray;
