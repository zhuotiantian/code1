var trap = function (height) {
  var left = 0,
    right = 0,
    len = height.length;
  for (var i = 0; i < len; i++) {
    if (height[i] !== 0) {
      left = i;
      right = i;
    }
  }
};
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
