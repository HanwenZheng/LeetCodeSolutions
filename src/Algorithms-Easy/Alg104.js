function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxDepth = function (root) {
  if (!root) return 0;
  else return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right));
};
