function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
let hasCycle = function (head) {
  if (!head) return false;
  let arr = [];
  let found = false;
  while (true) {
    if (arr.includes(head)) {
      found = true;
      break;
    }
    arr.push(head);
    if (head.next) head = head.next;
    else break;
  }
  return found;
};
