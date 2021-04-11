function sortByHeight(arr) {
  let k = 0;
  const output = [];
  const middleArr = [];
  arr.forEach((element) => {
    if (element !== -1) {
      middleArr.push(element);
    }
  });
  middleArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      output.push(arr[i]);
      k += 1;
    } else {
      output.push(middleArr[0]);
      middleArr.shift();
    }
  }
  return k > 0 ? output : arr.sort((a, b) => a - b);
}

module.exports = sortByHeight;
