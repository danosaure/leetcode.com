const expect = require('chai').expect;

const intToRoman = require('./int-to-roman');

describe(__filename, () => {
  it('Case 1', () => {
    expect(intToRoman(3)).to.equal('III');
  });

  it('Case 2', () => {
    expect(intToRoman(58)).to.equal('LVIII');
  });

  it('Case 3', () => {
    expect(intToRoman(1994)).to.equal('MCMXCIV');
  });
});
