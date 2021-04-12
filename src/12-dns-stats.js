/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  const arrNames = [];

  domains.forEach((item) => {
    const strArr = item.split('.');
    strArr.reverse();

    strArr.forEach((elem, index, arr) => {
      if (index === 0) {
        arrNames.push(`.${elem}`);
      } else {
        arrNames.push(`.${arr[index - 1]}.${elem}`);
        strArr[index] = `${arr[index - 1]}.${elem}`;
      }
    });
  });

  arrNames.forEach((item) => {
    if (item in obj) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  });

  return obj;
}

module.exports = getDNSStats;
