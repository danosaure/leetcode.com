module.exports = (nums, target) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const complementIndex = hash[target - nums[i]];
    if (complementIndex !== undefined) {
      return [complementIndex, i];
    }
    hash[nums[i]] = i;
  }
};
