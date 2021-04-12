function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
let ln = (val, next) => new ListNode(val, next);

let addTwoNumbers = function (l1, l2) {
  let carry = false;
  let ans = new ListNode();
  let prev = ans;
  while (l1 || l2) {
    prev.next = new ListNode();
    prev = prev.next;
    let add = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
    add += carry ? 1 : 0;
    carry = false;
    if (add > 9) {
      add -= 10;
      carry = true;
    }
    prev.val = add;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (carry) {
    prev.next = new ListNode(1);
  }
  return ans.next;
};

let ans = addTwoNumbers(ln(2, ln(4, ln(5))), ln(5, ln(6, ln(4))));
let arr = [];
while (ans) {
  arr.push(ans.val);
  ans = ans.next;
}
console.log(arr);
