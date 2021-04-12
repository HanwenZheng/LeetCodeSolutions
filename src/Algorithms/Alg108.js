function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
let sortedArrayToBST = (nums) => {
  let root = new TreeNode();
  populate(root, nums);
  return root;
};

let populate = (node, nums) => {
  if (nums.length === 0) return;

  let mid = Math.ceil(nums.length / 2) - 1;
  node.val = nums[mid];

  let leftArr = nums.slice(0, mid);
  let rightArr = nums.slice(mid + 1, nums.length);
  if (leftArr.length > 0) populate((node.left = new TreeNode()), leftArr);
  if (rightArr.length > 0) populate((node.right = new TreeNode()), rightArr);
};

sortedArrayToBST([-10, -3, 0, 5, 9]);
