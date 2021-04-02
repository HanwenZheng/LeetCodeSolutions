/**
 * @param {number} n
 * @return {number}
 */
let climbStairs = function (n) {
  if (n === 1) return 1;
  let x1 = 1;
  let x2 = 2;
  let temp;
  for (let i = 3; i <= n; i++) {
    temp = x1 + x2;
    x1 = x2;
    x2 = temp;
  }
  return x2;
};
