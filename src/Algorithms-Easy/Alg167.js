/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (numbers, target) {
  let R = numbers.length - 1;
  let L = 0;

  while (R > L) {
    const sum = numbers[L] + numbers[R];
    if (sum === target) return [L + 1, R + 1];
    if (sum > target) R--;
    if (sum < target) L++;
  }
};
