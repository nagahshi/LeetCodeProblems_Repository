/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let substrings = [];
  let substring = "";
  for (const character of s) {
    if (substring.includes(character)) {
      substrings.push(substring);
      substring = "";
    }
    substring += character;
  }

  substrings.push(substring);

  return substrings.reduce(
    (previousValue, currentValue) =>
      currentValue.length > previousValue.length ? currentValue : previousValue,
    ""
  ).length;
};
