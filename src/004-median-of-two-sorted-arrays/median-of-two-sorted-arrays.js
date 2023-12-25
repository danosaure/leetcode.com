module.exports = (nums1, nums2) => {
  const totalLength = nums1.length + nums2.length;
  const oddLength = Boolean(totalLength % 2);
  const medianCount = Math.floor(totalLength / 2) - (oddLength ? 0 : 1);

  for (let i = 0, idx1 = 0, idx2 = 0, medianValue = null; i <= medianCount; i++) {
    const num1 = nums1[idx1];
    const num2 = nums2[idx2];

    if (num1 === undefined) {
      medianValue = num2;
      idx2++;
    } else if (num2 === undefined) {
      medianValue = num1;
      idx1++;
    } else if (num1 <= num2) {
      medianValue = num1;
      idx1++;
    } else {
      medianValue = num2;
      idx2++;
    }

    if (i === medianCount) {
      if (oddLength) {
        return medianValue;
      }

      const nextNum1 = nums1[idx1];
      const nextNum2 = nums2[idx2];

      let nextValue = null;
      if (nextNum1 === undefined) {
        nextValue = nextNum2;
      } else if (nextNum2 === undefined) {
        nextValue = nextNum1;
      } else if (nextNum1 <= nextNum2) {
        nextValue = nextNum1;
      } else {
        nextValue = nextNum2;
      }

      return (medianValue + nextValue) / 2;
    }
  }
};
