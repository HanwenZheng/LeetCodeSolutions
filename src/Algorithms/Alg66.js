/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function (digits) {
  let last = digits[digits.length - 1];
  if (last < 9) {
    digits.pop();
    return [...digits, last + 1];
  }

  let increment = true;
  let i = digits.length - 1;
  while (increment) {
    if (digits[i] === undefined) return [1, ...digits];
    increment = digits[i] === 9;
    digits[i] = increment ? 0 : digits[i] + 1;
    i--;
  }
  return digits;
};

console.log(plusOne([8, 9, 9, 9]));
