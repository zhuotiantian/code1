var reverse = function (x) {
  let reverseNumber = Math.abs(x).toString().split("").reverse().join("").replace(/^0/, "");
  let result = Number(x >= 0 ? reverseNumber : -reverseNumber)
  return (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) ? 0 : result;
};
console.log(reverse(1534236469));
