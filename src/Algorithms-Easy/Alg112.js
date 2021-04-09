function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let nt = (left, right) => new TreeNode(1, left, right);

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

let hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let arr = [];
  findPathSum(arr, root);
  return arr.includes(targetSum);
};

let findPathSum = (arr, node, prevSum = 0) => {
  prevSum += node.val;
  if (!node.left && !node.right) {
    arr.push(prevSum);
    return;
  }
  node.left && findPathSum(arr, node.left, prevSum);
  node.right && findPathSum(arr, node.right, prevSum);
};

let test = nt(nt(nt(), nt()), nt());
console.log(hasPathSum(test, 2));
