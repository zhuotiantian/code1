//求三数之和等于零
var threeSum = function (nums) {
  var sortNums = nums.sort((a, b) => {
      return a - b
    }),
    result = [],
    len = sortNums.length;
  //若第一个值大于0，则直接返回
  if (sortNums[i] > 0 || sortNums[len - 1] < 0 || len === 0 || len < 3) return result;
  for (var i = 0; i < len - 2;) {
    let c = i + 1,
      j = nums.length - 1;
    while (c < j) {
      if (c === j || sortNums[i] * sortNums[j] > 0) break;
      //若两指针相遇或者三个值都大于0,满足条件
      var sum = sortNums[i] + sortNums[j] + sortNums[c];
      if (sum == 0) {
        result.push([sortNums[i], sortNums[j], sortNums[c]]);
      };
      if (sum < 0) { //若和小于0，则左边指针向右移动
        //如果遇到指针向后移动，遇到相同的值则跳过继续向后移动，直到遇到不同的值重新执行循环
        while (c < j && sortNums[c] === sortNums[++c]) {}
      } else { //若和大于于0，则右边指针向左移动
        while (c < j && sortNums[j] === sortNums[--j]) {}
      };
    };
    //遇到相同的值跳过
    while (sortNums[i] == sortNums[++i]) {}
  };
  return result
};
// threeSum([-1, 0, 1, 2, -1, -4]);

//三数之和最接近target的和
//解法：固定一个值，使用双指针
var threeSumClosest = function (nums, target) {
  let sortNums = nums.sort((a, b) => {
      return a - b
    }),
    len = nums.length,
    closestNum = sortNums[0] + sortNums[1] + sortNums[2];
  if (sortNums.every(e => {
      return e === 0
    })) return 0;
  if (len <= 3) return sortNums.reduce((total, current) => {
    return total + current
  });
  for (let i = 0; i < len; i++) {
    let left = i + 1,
      right = len - 1;

    while (left < right) {
      if (left === right) break;
      let sum = sortNums[i] + sortNums[left] + sortNums[right];
      let oldDistance = Math.abs(closestNum - target);
      let nowDistance = Math.abs(sum - target);
      //当前距离若比上次距离小，更新保存的最短距离的值
      if (oldDistance > nowDistance) {
        closestNum = sum;
      };
      //若和比target大，从右向左缩小范围
      if (sum > target) {
        right--;
      } else if (sum < target) { //若和比target小，从左向右缩小范围
        left++;
      } else { //若两个值相等，则最小距离为0，直接输出结果
        return closestNum
      }
    };
  };
  return closestNum;
};
// console.log(threeSumClosest([1, 1, -1, -1, 3], -1));


//求解四数之和与target相等的集合
//固定两个值，使用双指针
var fourSum = function (nums, target) {
  let result = [],
    sortNums = nums.sort((a, b) => {
      return a - b
    }),
    len = sortNums.length;
  console.log(...sortNums);
  if (len <= 3) return [];
  if (len === 4) {
    let sum = sortNums.reduce((total, next) => {
      return total + next
    });
    if (sum === target) {
      return [nums]
    } else {
      return []
    }
  };
  for (var i = 0; i < len - 3;) {
    let j = i + 1;
    while (j < len - 2) {
      let left = j + 1,
        right = len - 1;
      while (left < right) {
        let sum = sortNums[i] + sortNums[j] + sortNums[left] + sortNums[right];
        if (sum == target) {
          result.push([sortNums[i], sortNums[j], sortNums[left], sortNums[right]]);
        };
        if (sum > target) {
          while (left < right && sortNums[right] === sortNums[--right]) {}
        } else {
          while (left < right && sortNums[left] === sortNums[++left]) {}
        };
      }
      while (sortNums[j] === sortNums[++j]) {}
    };
    while (sortNums[i] === sortNums[++i]) {}
  };
  return result
};
console.log(fourSum([0, 4, -5, 2, -2, 4, 2, -1, 4], 12));
