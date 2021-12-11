//46

var permute = function (nums) {
  var result = [], len = nums.length;
  if (len === 0) return [[]];
  function combine (arr, item = []) {
    if (item.length === len) {
      result.push (item);
    } else {
      for (var i = 0; i < arr.length; i++) {
        var _item = item.concat ();
        var _arr = arr.concat ();
        _item.push (_arr[i]);
        _arr.splice (i, 1);
        combine (_arr, _item);
      }
    }
  }
  combine (nums);
  return result;
};
// permute ([]);

//47
var permuteUnique = function (nums) {
  var result = [],
    len = nums.length,
    nums = nums.sort ((a, b) => {
      return a - b;
    });
  if (len === 0) return [[]];
  function combine (arr, item = []) {
    if (item.length === len) {
      result.push (item);
    } else {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
          continue;
        }
        var _item = item.concat ();
        var _arr = arr.concat ();
        _item.push (_arr[i]);
        _arr.splice (i, 1);
        combine (_arr, _item);
      }
    }
  }
  combine (nums);
  return result;
};
permuteUnique ([3, 3, 0, 3]);
