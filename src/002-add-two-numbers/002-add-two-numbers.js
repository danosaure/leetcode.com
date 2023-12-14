const ListNode = require('./list-node');

const CARRY = new ListNode(1);

function addTwoNumbers(l1, l2, carry) {
  if (!l1) {
    if (carry) {
      return addTwoNumbers(carry, l2);
    }
    return l2;
  }

  if (!l2) {
    if (carry) {
      return addTwoNumbers(l1, carry);
    }
    return l1;
  }

  const value = l1.val + l2.val + ((carry && carry.val) || 0);
  carry = Math.floor(value / 10);

  return new ListNode(value % 10, addTwoNumbers(l1.next, l2.next, carry ? CARRY : null));
}

module.exports = addTwoNumbers;
