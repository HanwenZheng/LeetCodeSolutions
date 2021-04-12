/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  if (prices.length === 1) return 0;
  let profit = 0;
  let prev = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - prev > 0) {
      profit += prices[i] - prev;
    }
    prev = prices[i];
  }
  return profit;
};
