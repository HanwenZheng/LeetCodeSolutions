function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
let isSameTree = function (p, q) {
  if (!p || !q) {
    return !p && !q;
  }

  // not structurally same
  if (
    (p.left && !q.left) ||
    (!p.left && q.left) ||
    (p.right && !q.right) ||
    (!p.right && q.right)
  ) {
    return false;
  }

  let l, r;

  if (p.left && q.left) l = isSameTree(p.left, q.left);
  else l = true;

  if (p.right && q.right) r = isSameTree(p.right, q.right);
  else r = true;

  return p.val === q.val && l && r;
};
