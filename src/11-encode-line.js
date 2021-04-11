/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const arrStr = str.split('');
  let resStr = '';
  let curChar = arrStr[0];
  let curCount = 1;

  for (let i = 1; i < arrStr.length; i++) {
    if (arrStr[i] === curChar) curCount++;
    else {
      if (curCount > 1) resStr += curCount + curChar;
      if (curCount === 1) resStr += curChar;
      curChar = arrStr[i];
      curCount = 1;
    }
    if (i === arrStr.length - 1) {
      if (curCount > 1) resStr += curCount + curChar;
      if (curCount === 1) resStr += curChar;
    }
  }
  return resStr;
}

module.exports = encodeLine;
