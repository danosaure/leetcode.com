const expect = require('chai').expect;
const romanToInt = require('./roman-to-int');

describe(__filename, () => {
  it('Case 1', () => {
    expect(romanToInt('III')).to.equal(3);
  });

  it('Case 2', () => {
    expect(romanToInt('LVIII')).to.equal(58);
  });

  it('Case 3', () => {
    expect(romanToInt('MCMXCIV')).to.equal(1994);
  });
});
