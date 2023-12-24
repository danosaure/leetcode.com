/**
 * @param {string[]} strs
 * @return {string}
 */
module.exports = (strs) => {
  if (strs.length === 1) {
    return strs[0];
  }

  const maxLen = Math.min(...strs.map((str) => str.length));
  const [first, ...remains] = strs;

  let prefix = '';
  for (let i = 0; i < maxLen; i++) {
    let same = true;
    for (let j = 0; j < remains.length; j++) {
      if (remains[j][i] !== first[i]) {
        same = false;
        break;
      }
    }
    if (same) {
      prefix += first[i];
    } else {
      return prefix;
    }
  }

  return prefix;
};
