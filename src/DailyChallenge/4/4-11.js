function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let nt = (left, right) => new TreeNode(1, left, right);

let deepestLeavesSum = function (root) {
  let depth = maxDepth(root);
  if (depth === 0) return root.val;
  let arr = [];
  maxDepthVal(root, depth, arr);
  return arr.reduce((a, b) => a + b, 0);
};

let maxDepth = (root) => {
  return Math.max(root.left ? maxDepth(root.left) + 1 : 0, root.right ? maxDepth(root.right) + 1 : 0);
};

let maxDepthVal = (root, depth, arr) => {
  if (root.left) {
    maxDepthVal(root.left, depth - 1, arr);
  }
  if (root.right) {
    maxDepthVal(root.right, depth - 1, arr);
  }
  if (depth === 0) {
    arr.push(root.val);
  }
};
