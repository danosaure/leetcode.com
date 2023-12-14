const expect = require('chai').expect;

const twoSum = require('./001-two-sum');

describe(__filename, () => {
  it('handles basic values', () => {
    expect(twoSum([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
    expect(twoSum([3, 2, 4], 6)).to.deep.equal([1, 2]);
  });

  it('handles the same value duplicated', () => {
    expect(twoSum([3, 3], 6)).to.deep.equal([0, 1]);
  });

  it('handles negative numbers', () => {
    expect(twoSum([-3, 4, 3, 90], 0)).to.deep.equal([0, 2]);
  });
});
