let cal = function (n, arr) {
  arr.push(n % 26);
  let res = Math.floor(n / 26);
  if (res > 0) return cal(res, arr);
};

let convertToTitle = function (n) {
  let arr = [];
  cal(n, arr);
  // upgrade for 0s: 0->26 & next->next-1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (i !== arr.length - 1) {
        arr[i] = 26;
        arr[i + 1] -= 1;
      } else arr.pop(); // last digit after upgrade =0, remove it
    }
  }
  // reverse digits & convert to alpha
  arr.reverse();
  let ans = "";
  for (let i = 0; i < arr.length; i++) {
    ans += String.fromCharCode(64 + arr[i]);
  }
  return ans;
};
