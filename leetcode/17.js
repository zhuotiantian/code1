let strs = ["", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"],
  result = [];
//回溯算法：纵向查找最优解，若无法向下查找，则再向右进行调整
var letterCombinations = function (digits) {
  (len = digits.length), (i = 0);
  result = [];
  if (len !== 0) combined("", digits);
  return result;
};
var combined = function (combination, digits) {
  if (digits.length == 0) {
    result.push(combination);
  } else {
    let letters = strs[digits.substring(0, 1) - 1];
    for (var i = 0; i < letters.length; i++) {
      combined(combination + letters[i], digits.substring(1));
    }
  }
};
// letterCombinations('23');
