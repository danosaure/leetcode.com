/**
 * @param {string} s
 * @return {number}
 */
module.exports = (s) => {
  // console.log(`---------- s:"${s}" ----------`);

  // let maxFound = 0;

  // for (let i = 0; i < s.length; i++) {
  //   console.log(`loop 1: i=${i}, c=${s[i]}, maxFound=${maxFound}`)

  //   // If remaining is less than current max, then ignore.
  //   console.log(`    if (${s.length - i} < ${maxFound}) {`);
  //   if (s.length - i - 1 < maxFound) {
  //     console.log(`    Substring from ${i} is shorter than maxFound=${maxFound}. ***BREAK***`);
  //     break;
  //   }

  //   // Get the character at i, and check until the next occurence of it.
  //   const nextSameCharacter = s.indexOf(s[i], i + 1);
  //   const substringToCheck = s.substring(i, nextSameCharacter === -1 ? s.length : nextSameCharacter);

  //   // Is this substring shorter than something we found earlier?
  //   if (substringToCheck.length < maxFound) {
  //     continue;
  //   }

  //   console.log(`    substringToCheck="${substringToCheck}"`);
  //   const substringSet = new Set(substringToCheck);
  //   if (substringSet.size === substringToCheck.length) {
  //     console.log(`        +++ substring is non-repeat`)
  //     maxFound = Math.max(maxFound, substringToCheck.length);
  //     continue;
  //   }

  //   // Check if a shorter substring would work
  //   console.log(`        Checking shorter...`)
  //   for (let j = maxFound; j < substringToCheck.length; j++) {
  //     const shorterSubstring = substringToCheck.substring(0, j);
  //     console.log(`            - "${shorterSubstring}"`)
  //     if (shorterSubstring.length < maxFound) {
  //       console.log(`                --- too short`)
  //       break;
  //     }

  //     const shorterSubstringSet = new Set(shorterSubstring);
  //     if (shorterSubstringSet.size === shorterSubstring.length) {
  //       console.log(`                +++ Found valid "${shorterSubstring}`)
  //       maxFound = shorterSubstring.length;
  //       continue;
  //     }
  //   }
  // }

  // return maxFound;

  // let maxFound = s ? 1 : 0;
  // for (let i = 0; i < s.length; i++) {
  //   const hash = {};
  //   const charAt = s[i];
  //   hash[charAt] = i;
  //   console.log(`loop 1:    i:${i}/${charAt}, maxFound:${maxFound}`);

  //   for (let j = i + 1; j < s.length; j++) {
  //     const otherCharAt = s[j];
  //     const otherCharInHash = hash[otherCharAt];
  //     console.log(`    loop 2:    j:${j}=${otherCharAt}/${otherCharInHash}, s="${s.substring(i, j+1)}"`);
  //     if (otherCharInHash !== undefined) {
  //       console.log(`    loop 2:        hash[${otherCharAt}]:${otherCharInHash}`)
  //       console.log(`    loop 2:            --- repeating: maxFound=${maxFound}`)
  //       break;
  //     }
  //     // Need to update within range
  //     hash[otherCharAt] = j;

  //     maxFound = Math.max(maxFound, j - i + 1);
  //   }
  // }
  // return maxFound;

  let maxFound = s ? 1 : 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + maxFound + 1; j <= s.length; j++) {
      const sub = s.substring(i, j);
      const subSet = new Set(sub);
      if (sub.length === subSet.size) {
        maxFound = sub.length;
        continue;
      }
      break;
    }
  }

  return maxFound;
};
