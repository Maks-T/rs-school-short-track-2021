/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mtx = matrix;
  let error = 0;
  for (let i = 0; i < mtx.length; i++) {
    for (let j = 0; j < mtx[0].length; j++) {
      if (!mtx[i][j]) {
        mtx[i][j] = 0;
        try {
          if (mtx[i - 1][j - 1] === true) mtx[i][j]++;
        } catch (e) {
          error++;
        }
        try {
          if (mtx[i - 1][j] === true) mtx[i][j]++;
        } catch (e) {
          error++;
        }
        try {
          if (mtx[i - 1][j + 1] === true) mtx[i][j]++;
        } catch (e) {
          error++;
        }
        try {
          if (mtx[i][j - 1] === true) mtx[i][j]++;
        } catch (e) {
          error++;
        }
        try {
          if (mtx[i][j + 1] === true) mtx[i][j]++;
        } catch (e) {
          error++;
        }
        try {
          if (mtx[i + 1][j - 1] === true) mtx[i][j]++;
        } catch (e) {
          error++;
        }
        try {
          if (mtx[i + 1][j] === true) mtx[i][j]++;
        } catch (e) {
          error++;
        }
        try {
          if (mtx[i + 1][j + 1] === true) mtx[i][j]++;
        } catch (e) {
          error++;
        }
      }
    }
  }
  error = 1;
  const resMtx = mtx.map((item) => {
    const itm = item.map((elem) => {
      if (elem === true) return error;
      return elem;
    });
    return itm;
  });
  return resMtx;
}

module.exports = minesweeper;
