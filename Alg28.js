/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function (haystack, needle) {
  if (needle === "") return 0;
  for (let j = 0; j <= haystack.length - needle.length; j++) {
    let skip = false;
    for (let i = 0; i < needle.length; i++) {
      if (!skip && haystack[j + i] !== needle[i]) {
        skip = true;
      }
    }
    if (!skip) {
      return j;
    }
  }
  return -1;
};

console.log(strStr("123", "123"));
