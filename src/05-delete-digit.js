/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  const arrDigits = String(n).split('');
  const arrNumsArr = [];
  arrDigits.forEach((item, index) => {
    arrNumsArr.push(
      arrDigits.map((elem, i) => {
        if (index !== i) return elem;
        return '';
      }),
    );
  });
  const arrNums = arrNumsArr.map((item) => item.join(''));

  const res = Number(
    arrNums.sort((a, b) => a - b)[arrNums.length - 1],
  );

  return res;
}

module.exports = deleteDigit;
