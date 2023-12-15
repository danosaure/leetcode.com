const expect = require('chai').expect;
const isMatch = require('./is-match');

describe(__filename, () => {
  it('Case 1', () => {
    expect(isMatch('aa', 'a')).to.be.false();
  });

  it('Case 2', () => {
    expect(isMatch('aa', 'a*')).to.be.true();
  });

  it('Case 3', () => {
    expect(isMatch('ab', '.*')).to.be.true();
  });

  it('handles "**"', () => {
    expect(isMatch('', '**')).to.be.true();
    expect(isMatch('*', '**')).to.be.true();
    expect(isMatch('**', '**')).to.be.true();
  });

  it('"abc", "a***abc"', () => {
    expect(isMatch('abc', 'a***abc')).to.be.true();
  });
});
