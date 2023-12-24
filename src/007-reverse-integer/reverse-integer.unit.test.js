const expect = require('chai').expect;

const reverseInteger = require('./reverse-integer');

describe(__filename, () => {
  it('Case 1', () => {
    expect(reverseInteger(123)).to.equal(321);
  });

  it('Case 2', () => {
    expect(reverseInteger(-123)).to.equal(-321);
  });

  it('Case 3', () => {
    expect(reverseInteger(120)).to.equal(21);
  });

  it('Special case 1534236469', () => {
    expect(reverseInteger(1534236469)).to.equal(0);
  });

  it('Special case 1563847412', () => {
    expect(reverseInteger(1563847412)).to.equal(0);
  });

  it('Special case -2147483412', () => {
    expect(reverseInteger(-2147483412)).to.equal(-2143847412);
  });
});
