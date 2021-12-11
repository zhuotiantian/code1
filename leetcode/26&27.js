var removeDuplicates = function (nums) {
  var j = 0;
  //j：最后一个不重复元素的下标
  for (var i = 1; i < nums.length; i++) {
    //遇到不重复的元素就将后面的元素加入不重复元素中
    if (nums[i] !== nums[i - 1]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};
// removeDuplicates ([1, 1, 2, 2, 2, 3, 3, 4]);


var removeElement = function (nums, val) {
  var j = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      var temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    } else {
      j = i;
    };
  };
  return j + 1
};
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
