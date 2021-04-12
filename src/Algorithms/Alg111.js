function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */

let minDepth = function (root) {
  if (!root) return 0;
  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.left) + 1, minDepth(root.right) + 1);
};

let calHeight = (node) => {
  return Math.max(node.left ? calHeight(node.left) + 1 : 0, node.right ? calHeight(node.right) + 1 : 0);
};
