/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let first = 0;
  let end = array.length - 1;
  let center = Math.floor((first + end) / 2);

  if (array[first] === value) return first;
  if (array[end] === value) return end;

  while (array[center] !== value) {
    if (array[center] > value) {
      end = center;
      center = Math.floor((first + end) / 2);
    }

    if (array[center] < value) {
      first = center;
      center = Math.floor((first + end) / 2);
    }
  }
  return center;
}
module.exports = findIndex;
