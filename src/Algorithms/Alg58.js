/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function (s) {
  let regex = /[a-zA-Z]+/;
  if (!regex.test(s)) return 0;
  let arr = s.split(" ");
  for (let i = arr.length - 1; i >= 0; i--) {
    if (regex.test(arr[i])) return arr[i].length;
  }
  return 0;
};

console.log(lengthOfLastWord("b   a    "));
