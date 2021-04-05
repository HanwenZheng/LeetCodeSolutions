// List Node def
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let deleteDuplicates = function (head) {
  if (head === null) return head;
  let node = head;
  while (node !== null && node.next !== null) {
    if (node.val === node.next.val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return head;
};
