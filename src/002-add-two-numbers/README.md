# 2. Add Two Numbers

Medium Topics Companies

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:

    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.

Example 2:

    Input: l1 = [0], l2 = [0]
    Output: [0]

Example 3:

    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]
 
## Constraints:

- The number of nodes in each linked list is in the range [1, 100].
- 0 <= Node.val <= 9
- It is guaranteed that the list represents a number that does not have leading zeros.


# Solution

https://leetcode.com/problems/add-two-numbers/submissions/1119802898/

- Runtime: 62ms (Beats 99.77% of users with JavaScript)
- Memory: 46.46 MB (Beats 97.65% of users with JavaScript)

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

## Approach
<!-- Describe your approach to solving the problem. -->

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

## Code
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const CARRY = new ListNode(1);

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2, carry) {
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

    value = l1.val + l2.val + (carry && carry.val || 0);
    carry = Math.floor(value / 10);

    return new ListNode(value % 10, addTwoNumbers(l1.next, l2.next, carry ? CARRY : null));
};
```
