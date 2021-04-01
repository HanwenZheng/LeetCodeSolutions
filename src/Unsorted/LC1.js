let twoSum = function (nums, target) {
    // nums.sort((a, b) => {return a - b});
    for (let n in nums) {
        n = parseInt(n);
        let numsR = nums.slice(n + 1);
        for (let m in numsR) {
            m = parseInt(m);
            if (nums[n] + numsR[m] === target) {
                return [n, (m + n + 1)];
            }
        }
    }
};

console.log(twoSum([3, 2, 4], 6))
