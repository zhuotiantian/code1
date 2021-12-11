var findSubstring = function (s, words) {
  var sLen = s.length,
    wLen = words[0] ? words[0].length : 0,
    allWordsLen = words.length * wLen,
    result = [];
  if (wLen == 0) return result;
  words.sort();
  for (var i = 0; i < sLen; i += 1) {
    var item = s.substr(i, allWordsLen);
    if (item.length === allWordsLen) {
      var subArr = [];
      for (var j = 0; j < item.length; j += wLen) {
        subArr.push(item.substr(j, wLen));
      };
      subArr.sort();
      if (JSON.stringify(subArr) === JSON.stringify(words)) {
        result.push(i);
      }
    }
  };
  return result
};

console.log(findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", ["fooo", "barr", "wing", "ding", "wing"]));
