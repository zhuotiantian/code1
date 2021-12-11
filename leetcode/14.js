var longestCommonPrefix = function (strs) {
  var commonStr = "";
  if (strs.length > 0) {
    commonStr = strs[0];
    for (var i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(commonStr) !== 0) {
        commonStr = commonStr.substring(0, commonStr.length - 1);
      }
    }
  }
  return commonStr
};
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
