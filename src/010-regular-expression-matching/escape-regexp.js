const escapeRegexp = (p) => {
  const indexOfStar = p.indexOf('*');
  if (indexOfStar === -1) {
    return p;
  } else if (indexOfStar === 0) {
    if (p[1] === '*') {
      return '\\**' + escapeRegexp(p.substring(2));
    }
    return '\\*' + escapeRegexp(p.substring(1));
  }
  return p.substring(0, indexOfStar + 1) + escapeRegexp(p.substring(indexOfStar + 1));
};

module.exports = escapeRegexp;
