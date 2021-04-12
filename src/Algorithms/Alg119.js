let getRow = function (rowIndex) {
  return generate(rowIndex + 1)[rowIndex];
};

let generate = function (numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  let arr = [[1], [1, 1]];
  numRows -= 2;
  while (numRows) {
    let prev = [...arr[arr.length - 1]];
    let temp = [1, 1];
    for (let i = 1; i < prev.length; i++) {
      temp.splice(i, 0, prev[i - 1] + prev[i]);
    }
    arr.push(temp);
    numRows--;
  }
  return arr;
};
