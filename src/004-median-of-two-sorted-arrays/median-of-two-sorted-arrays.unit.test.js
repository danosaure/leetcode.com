const expect = require('chai').expect;

const medianOfTwoSortedArrays = require('./median-of-two-sorted-arrays');

describe(__filename, () => {
  it('[1] & []', () => {
    expect(medianOfTwoSortedArrays([1], [])).to.equal(1);
  });

  it('[2,3] & []', () => {
    expect(medianOfTwoSortedArrays([2, 3], [])).to.equal(2.5);
  });

  it('[4,5,6] & []', () => {
    expect(medianOfTwoSortedArrays([4, 5, 6], [])).to.equal(5);
  });

  it('[] & [7]', () => {
    expect(medianOfTwoSortedArrays([], [7])).to.equal(7);
  });

  it('[] & [8,9]', () => {
    expect(medianOfTwoSortedArrays([], [8, 9])).to.equal(8.5);
  });

  it('[] & [10,11,12]', () => {
    expect(medianOfTwoSortedArrays([], [10, 11, 12])).to.equal(11);
  });

  it('[13,14] & [15,16]', () => {
    expect(medianOfTwoSortedArrays([13, 14], [15, 16])).to.equal(14.5);
  });

  it('[17,18] & [18,19]', () => {
    expect(medianOfTwoSortedArrays([17, 18], [18, 19])).to.equal(18);
  });

  it('[20,25] & [24,27]', () => {
    expect(medianOfTwoSortedArrays([20, 25], [24, 27])).to.equal(24.5);
  });

  it('Case 1: [1,3], [2]', () => {
    expect(medianOfTwoSortedArrays([1, 3], [2])).to.equal(2);
  });

  it('Case 2: [1,2], [3,4]', () => {
    expect(medianOfTwoSortedArrays([1, 2], [3, 4])).to.equal(2.5);
  });
});
