const expect = require('chai').expect;

const ListNode = require('./list-node');
const addTwoNumbers = require('./002-add-two-numbers');

describe(__filename, () => {
  it('Case 1', () => {
    let l1 = new ListNode(3);
    l1 = new ListNode(4, l1);
    l1 = new ListNode(2, l1);

    let l2 = new ListNode(4);
    l2 = new ListNode(6, l2);
    l2 = new ListNode(5, l2);

    let expected = new ListNode(8);
    expected = new ListNode(0, expected);
    expected = new ListNode(7, expected);

    const result = addTwoNumbers(l1, l2);

    expect(result.equals(expected)).to.be.true();
  });

  it('Case 2', () => {
    let l1 = new ListNode(0);
    let l2 = new ListNode(0);
    const result = addTwoNumbers(l1, l2);
    let expected = new ListNode(0);
    expect(result.equals(expected)).to.be.true();
  });

  it('Case 3', () => {
    let l1 = new ListNode(9);
    l1 = new ListNode(9, l1);
    l1 = new ListNode(9, l1);
    l1 = new ListNode(9, l1);
    l1 = new ListNode(9, l1);
    l1 = new ListNode(9, l1);
    l1 = new ListNode(9, l1);

    let l2 = new ListNode(9);
    l2 = new ListNode(9, l2);
    l2 = new ListNode(9, l2);
    l2 = new ListNode(9, l2);

    let expected = new ListNode(1);
    expected = new ListNode(0, expected);
    expected = new ListNode(0, expected);
    expected = new ListNode(0, expected);
    expected = new ListNode(9, expected);
    expected = new ListNode(9, expected);
    expected = new ListNode(9, expected);
    expected = new ListNode(8, expected);

    const result = addTwoNumbers(l1, l2);

    expect(result.equals(expected)).to.be.true();
  });
});
