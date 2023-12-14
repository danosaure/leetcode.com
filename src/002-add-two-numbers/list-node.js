class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  equals(listNode) {
    if (this.val === listNode.val) {
      if (this.next === null && listNode.next === null) {
        return true;
      }
      return this.next.equals(listNode.next);
    }
    return false;
  }

  toString() {
    return [this.val].concat(this.next ? this.next.toString() : []);
  }
}

module.exports = ListNode;
