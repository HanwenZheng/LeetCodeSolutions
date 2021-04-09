function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

let isBalanced = function (root) {
  if (!root) return true;
  let lH = root.left ? calHeight(root.left) + 1 : 0;
  let rH = root.right ? calHeight(root.right) + 1 : 0;
  console.log("parent:", root.val, " LH:", lH, " RH:", rH);
  let parentBalance = Math.abs(lH - rH) <= 1;
  return parentBalance && isBalanced(root.left) && isBalanced(root.right);
};

let calHeight = (node) => {
  return Math.max(node.left ? calHeight(node.left) + 1 : 0, node.right ? calHeight(node.right) + 1 : 0);
};

let nt = (left, right) => new TreeNode(1, left, right);
let test = nt(nt(nt(nt(), null), null), nt(null, nt(null, nt())));
console.log(isBalanced(test));
