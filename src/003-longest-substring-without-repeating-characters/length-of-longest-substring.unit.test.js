const expect = require('chai').expect;

const lengthOfLongestSubstring = require('./length-of-longest-substring');

describe(__filename, () => {
  it('Case 1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).to.equal(3);
  });

  it('Case 2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).to.equal(1);
  });

  it('Case 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).to.equal(3);
  });

  it('Special case empty string', () => {
    expect(lengthOfLongestSubstring('')).to.equal(0);
  });

  it('Special case 1 char string', () => {
    expect(lengthOfLongestSubstring('a')).to.equal(1);
  });

  it('Special case "cdd"', () => {
    expect(lengthOfLongestSubstring('cdd')).to.equal(2);
  });

  it('Special case "anviaj"', () => {
    expect(lengthOfLongestSubstring('anviaj')).to.equal(5);
  });

  it('Special long case alphabet', () => {
    const s = 'abcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy';
    expect(lengthOfLongestSubstring(s)).to.equal(26);
  });
});
