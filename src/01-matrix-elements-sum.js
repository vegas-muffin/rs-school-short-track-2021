/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(/* matrix */) {
  const copyMatrix = matrix;
  for (let i = 0; i < copyMatrix.length - 1; i++) {
    for (let j = 0; j < copyMatrix[i].length; j++) {
      console.log(copyMatrix[i][j]);
      if (copyMatrix[i][j] === 0) {
        copyMatrix[i + 1][j] = 0;
      }
    }
  }
  return copyMatrix.flat(Infinity).reduce((acc, cur) => (acc += cur));
}

module.exports = getMatrixElementsSum;
