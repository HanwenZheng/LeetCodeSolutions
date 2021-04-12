/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];
  let obj = {};
  for (let num of nums) {
    if (obj.hasOwnProperty(num)) {
      delete obj[num];
    } else {
      obj[num] = 1;
    }
  }
  return Object.keys(obj)[0];
};
