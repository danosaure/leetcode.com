const expect = require('chai').expect;

const isPalindrome = require('./is-palindrome');

describe(__filename, () => {
  it('Case 1', () => {
    expect(isPalindrome(121)).to.be.true();
  });

  it('Case 2', () => {
    expect(isPalindrome(-121)).to.be.false();
  });

  it('Case 3', () => {
    expect(isPalindrome(10)).to.be.false();
  });

  it('With 0', () => {
    expect(isPalindrome(0)).to.be.true();
  });
});
