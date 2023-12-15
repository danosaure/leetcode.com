const expect = require('chai').expect;
const escapeRegexp = require('./escape-regexp');

describe(__filename, () => {
  it('Basic expressions', () => {
    expect(escapeRegexp('a')).to.equal('a');
    expect(escapeRegexp('aa')).to.equal('aa');
    expect(escapeRegexp('.')).to.equal('.');
  });

  it('Accepts "a*"', () => {
    expect(escapeRegexp('a*')).to.equal('a*');
  });

  it('Accepts ".*"', () => {
    expect(escapeRegexp('.*')).to.equal('.*');
  });

  it('Escapes "**"', () => {
    expect(escapeRegexp('**')).to.equal('\\**');
  });

  it('Escape "a**"', () => {
    expect(escapeRegexp('a**')).to.equal('a*\\*');
  });

  it('Escape "a***"', () => {
    expect(escapeRegexp('a***')).to.equal('a*\\**');
  });
});
