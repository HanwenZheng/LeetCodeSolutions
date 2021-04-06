let rl = require("readline").createInterface(process.stdin, process.stdout);
let n = 0;

rl.on("line", (line) => {
  if (n === 0) {
    n = parseInt(line);
  } else {
    let arr = line.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = parseInt(arr[i]);
    }
    console.log(solve(arr));
    n = 0;
  }
});

let solve = function (arr) {
  // case 2
  if (arr.length === 2) {
    if (arr[0] === arr[1]) {
      return arr[0];
    } else return -1;
  }
  // case >2
  let max = 0;
  // select 1
  for (let i = 0; i < arr.length; i++) {
    let koko = arr[i];
    let solo = [...arr];
    solo.splice(i, 1);
    let soloKokoSum = 0;
    for (let num of solo) {
      soloKokoSum = add(soloKokoSum, num);
    }
    if (soloKokoSum === koko) {
      let soloSum = 0;
      for (let num of solo) {
        soloSum += num;
      }
      max = Math.max(max, soloSum);
    }
  }
  return max === 0 ? -1 : max;
};

let add = function (a, b) {
  a = a.toString(2).split("");
  b = b.toString(2).split("");
  let al = a.length;
  let bl = b.length;
  if (al > bl) {
    for (let i = 0; i < al - bl; i++) {
      b.splice(0, 0, "0");
    }
  } else {
    for (let i = 0; i < bl - al; i++) {
      a.splice(0, 0, "0");
    }
  }
  let c = [];
  for (let i = 0; i < a.length; i++) c[i] = a[i] === b[i] ? "0" : "1";
  return parseInt(c.join(""), 2);
};
