/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function (s) {
  let regx = /[a-zA-Z0-9]/;
  let arr = [];
  for (let char of s) {
    if (regx.test(char)) arr.push(char.toLowerCase());
  }
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
};
