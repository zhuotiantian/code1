var jump = function (nums) {
  var len = nums.length, step = 0, maxPosition = 0, end = 0;
  for (var i = 0; i < len - 1; i++) {
    //可跳跃范围内最大的位置
    maxPosition = Math.max (maxPosition, nums[i] + i);
    //如果到达边界，将边界后移
    if (i === end) {
      end = maxPosition;
      step++;
    }
  }
  return step;
};
jump ([2, 3, 1, 1, 4]);
