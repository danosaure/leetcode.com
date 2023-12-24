const expect = require('chai').expect;

const longestCommonPrefix = require('./longest-common-prefix');

describe(__filename, () => {
  it('Case 1', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).to.equal('fl');
  });

  it('Case 2', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).to.equal('');
  });

  it('Only one str', () => {
    expect(longestCommonPrefix(['asingleword'])).to.equal('asingleword');
  });
});
