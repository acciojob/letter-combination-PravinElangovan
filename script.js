function letterCombinations(input_digit) {
  const phoneMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  const result = [];

  if (!input_digit) {
    return result;
  }

  const dfs = (digits, i, combination) => {
    if (i === digits.length) {
      result.push(combination);
      return;
    }

    const letters = phoneMap[digits[i]];
    for (let j = 0; j < letters.length; j++) {
      dfs(digits, i + 1, combination + letters[j]);
    }
  };

  dfs(input_digit, 0, '');

  return result.sort();
}


module.exports = letterCombinations;
