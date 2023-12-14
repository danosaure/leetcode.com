/**
 * @param {number} x
 * @return {boolean}
 */
module.exports = (x) => {
  if (x < 0) {
    return false;
  } else if (x < 10) {
    return true;
  }
  const s = '' + x;

  len = s.length;

  if (s[len - 1] === '0') {
    return false;
  }

  limit = Math.floor(len / 2);
  for (i = 0; i < limit; i++) {
    if (s[i] !== s[len - i - 1]) {
      return false;
    }
  }
  return true;
};
