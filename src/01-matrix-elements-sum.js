function getMatrixElementsSum(matrix) {
  const copyMatrix = matrix;
  for (let i = 0; i < copyMatrix.length - 1; i++) {
    for (let j = 0; j < copyMatrix[i].length; j++) {
      if (copyMatrix[i][j] === 0) {
        copyMatrix[i + 1][j] = 0;
      }
    }
  }
  return copyMatrix.flat(Infinity).reduce((a, c) => (a + c));
}

module.exports = getMatrixElementsSum;
