/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const mainArr = [];
  const mySet = new Set(s1);
  const mySet2 = new Set(s2);
  const arr = [...mySet];
  [...mySet2].forEach((element) => {
    if (arr.includes(element)) {
      mainArr.push(element);
    }
  });

  const obj = {};
  for (let i = 0; i < mainArr.length; i++) {
    let count = 0;
    for (let j = 0; j < s1.length; j++) {
      if (mainArr[i] === s1[j]) {
        count += 1;
      }
    }
    obj[mainArr[i]] = count;
  }

  const obj2 = {};
  for (let i = 0; i < mainArr.length; i++) {
    let count = 0;
    for (let j = 0; j < s2.length; j++) {
      if (mainArr[i] === s2[j]) {
        count += 1;
      }
    }
    obj2[mainArr[i]] = count;
  }
  let result = 0;
  for (let l = 0; l < mainArr.length; l++) {
    if (obj[mainArr[l]] < obj2[mainArr[l]]) {
      result += obj[mainArr[l]];
    } else {
      result += obj2[mainArr[l]];
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
