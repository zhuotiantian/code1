var combinationSum = function (candidates, target) {
  let result = [];
  if (candidates.includes(target)) {
    result.push([target]);
  }
  computed(result, [], candidates, target);
  console.log(...result);
  return result;
};
var computed = function (result, item = [], arr, target) {
  for (var i = 1; i <= ((target / 2) | 1); i++) {
    if (arr.includes(i)) {
      let _item = item.concat();
      _item.push(i);
      if ((target - i) >= Math.min(...arr)) {
        _item.push(target - i);
        result.push(_item);
      } else {
        computed(result, _item, arr, target - i);
      }
    }
  }
};
combinationSum([1, 2], 3)
