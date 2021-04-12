/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  let min = 1 + Math.pow(10, 4);
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - min);
  }
  return maxProfit;
};
