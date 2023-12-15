const escapeRegexp = require('./escape-regexp');

module.exports = (s, p) => {
  let r;
  try {
    r = new RegExp(`^${p}$`);
  } catch (e) {
    r = new RegExp(`^${escapeRegexp(p)}$`);
  }
  return r.test(s);
};
