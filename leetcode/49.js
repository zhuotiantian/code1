var groupAnagrams = function (strs) {
  var result = [],
    arr = JSON.parse(JSON.stringify(strs)),
    len = arr.length,
    temp = {};
  for (var i = 0; i < len; i++) {
    arr[i] = arr[i].split("").sort((a, b) => {
      return a.localeCompare(b)
    }).join("");
  }
  for (var i = 0; i < len; i++) {
    if (temp[arr[i]]) {
      temp[arr[i]].push(strs[i]);
    } else {
      temp[arr[i]] = [strs[i]];
    }
  };
  for (var key in temp) {
    result.push(temp[key])
  }
  return result;
};
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
