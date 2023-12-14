# 9. Palindrome Number

- Easy
- Topics: Math

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

## Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

## Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

## Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

## Constraints:

- `-2^31 <= x <= 2^31 - 1`
 

***Follow up:*** Could you solve it without converting the integer to a string?


# Solution

https://leetcode.com/problems/palindrome-number/submissions/1119911332/

- Runtime: 114ms (Beats 98.20% of users with JavaScript)
- Memory: 51.69MB (Beats 14.06% of users with JavaScript)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    } else if (x < 10) {
        return true;
    }
    const s = '' + x;

    len = s.length;

    if (s[len-1] === '0') {
        return false;
    }

    limit = Math.floor(len/2);
    for (i = 0; i < limit; i++) {
        if (s[i] !== s[len - i - 1]) {
            return false;
        }
    }
    return true;
};
```
