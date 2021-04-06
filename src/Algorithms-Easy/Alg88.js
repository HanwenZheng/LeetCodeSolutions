/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function (nums1, m, nums2, n) {
  let a = 0;
  let b = 0;
  while (a < m || b < n) {
    if (a === m) {
      nums1.pop();
      nums1.splice(a, 0, nums2[b]);
      b++;
      m++;
      continue;
    }
    if (nums1[a] > nums2[b]) {
      nums1.pop();
      nums1.splice(a, 0, nums2[b]);
      m++;
      b++;
    }
    a++;
  }
};
