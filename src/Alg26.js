/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let holder = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (holder === nums[i]) {
      nums.splice(i, 1);
      i--;
    }
    holder = nums[i];
  }
  return nums.length;
};

console.log(removeDuplicates([1, 1, 3]));
