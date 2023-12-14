const UNITS = require('./units');
const UNIT_EXCEPTIONS = require('./unit-exceptions');

module.exports = (s) => {
  const { sToConvert, sum } = Object.entries(UNIT_EXCEPTIONS).reduce(
    ({ sToConvert, sum }, [roman, value]) => {
      const indexOfException = sToConvert.indexOf(roman);
      if (indexOfException !== -1) {
        return {
          sToConvert: sToConvert.substring(0, indexOfException) + sToConvert.substring(indexOfException + roman.length),
          sum: sum + value,
        };
      } else {
        return { sToConvert, sum };
      }
    },
    { sToConvert: s, sum: 0 }
  );

  return sToConvert.split('').reduce((sum, romanChar) => sum + UNITS[romanChar], sum);
};
