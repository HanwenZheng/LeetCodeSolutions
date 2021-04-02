/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function (x) {
  if (x === 0) return 0;
  let prev = x / 2;
  let cur = x / 2;
  while (true) {
    cur = (cur + x / cur) / 2;
    if (prev - cur < 1) return Math.floor(cur).toFixed(0);
    prev = cur;
  }
};

console.log(mySqrt(0));
