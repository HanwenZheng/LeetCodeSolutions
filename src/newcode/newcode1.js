let rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  console.log(compute(parseInt(line)));
});

let compute = function (n) {
  if (n < 0) return 0;
  if (n === 0) return 1;
  return compute(n - 1) + compute(n - 3);
};
