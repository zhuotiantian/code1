var divide = function (dividend, divisor) {
  if (dividend == 0) return 0
  var sum = 0,
    result = -1;
  if (divisor === 1) {
    result = dividend
  } else if (divisor === -1) {
    result = -dividend
  } else {
    while (sum <= Math.abs(dividend)) {
      sum += Math.abs(divisor);
      result++;
    };
    if (dividend * divisor < 0) {
      result = -result;
    }
  };
  if (result >= Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1
  };
  if (result <= -Math.pow(2, 31)) {
    return -Math.pow(2, 31)
  }
  return result
};
console.log(divide(-2147483648, -1));
