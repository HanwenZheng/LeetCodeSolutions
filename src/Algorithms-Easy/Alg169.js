/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];
  let dict = {};
  for (let num of nums) {
    if (num in dict) dict[num] += 1;
    else dict[num] = 1;
  }
  for (let key in dict) {
    if (dict[key] > nums.length / 2) {
      return parseInt(key);
    }
  }
};

console.log(majorityElement([3, 2, 3]));
