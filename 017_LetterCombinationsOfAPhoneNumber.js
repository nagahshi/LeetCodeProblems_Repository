/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
let sanitizeInput = function(unsanitizedDigits) {
    let regex = /(\W|_|[0-1a-zA-Z])/g;
    let sanitized = unsanitizedDigits.replace(regex, "");
    return sanitized;
  };
  const mapping = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let sanitizedDigits = sanitizeInput(digits);


  let finalArray = [];

  const backtrackRecursive = function(combination, nextDigits) {
    if (nextDigits.length === 0) {
      finalArray.push(combination);
    } else {
      for (let i = 0; i < mapping[nextDigits[0]].length; i += 1) {
        backtrackRecursive(
          combination + mapping[nextDigits[0]][i],
          nextDigits.slice(1)
        );
      }
    }
  };

  if (sanitizedDigits) {
    backtrackRecursive("", sanitizedDigits);
  }

  return finalArray;
};