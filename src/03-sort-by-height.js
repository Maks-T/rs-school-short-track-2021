/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(array) {
  const arr = array;
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      let index = 1;
      if (arr[i] !== -1) {
        while (arr[i + index] === -1) {
          index++;
        }
        if (arr[i] > arr[i + index]) {
          const temp = arr[i];
          arr[i] = arr[i + index];
          arr[i + index] = temp;
        }
      }
    }
  }
  return arr;
}

module.exports = sortByHeight;
