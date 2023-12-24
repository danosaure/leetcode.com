const MIN_X = Math.pow(-2, 31);
const MAX_X = Math.pow(2, 31) - 1;

module.exports = (x) => {
  const [first, ...remains] = ('' + x).split('');
  const reversed = remains.reverse().join('');

  try {
    const reversedNumber = parseInt(`${first === '-' ? '-' : ''}${reversed}${first === '-' ? '' : first}`);
    if (reversedNumber < MIN_X || reversedNumber > MAX_X) {
      return 0;
    }
    return reversedNumber;
  } catch (e) {
    return 0;
  }
};
