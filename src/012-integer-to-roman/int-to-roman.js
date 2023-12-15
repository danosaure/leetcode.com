const VALUES = require('./values');

module.exports = (num) => {
  const { result } = VALUES.reduce(
    ({ result, remains }, [roman, value]) => {
      while (remains >= value) {
        result += roman;
        remains -= value;
      }
      return { result, remains };
    },
    { result: '', remains: num }
  );

  return result;
};
