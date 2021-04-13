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
  const mainArr = [];
  const copyN1 = n.toString();

  for (let i = 0; i < copyN1.length; i++) {
    mainArr.push(copyN1);
  }

  const resultArr = [];
  for (let i = 0; i < mainArr.length; i++) {
    resultArr.push(Number(mainArr[i].slice(0, i) + mainArr[i].slice(i + 1)));
  }
  return Math.max.apply(null, resultArr);
}

module.exports = deleteDigit;
