var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0"
  var result = [];
  var asc0 = "0".charCodeAt(0);
  var topNumber = (num1.length >= num2.length ? num1 : num2).split("").map(e => {
    return e.charCodeAt(0) - asc0
  });
  var bottomNumber = (num1.length < num2.length ? num1 : num2).split("").map(e => {
    return e.charCodeAt(0) - asc0
  });
  for (var bLen = bottomNumber.length, j = bLen - 1; j >= 0; j--) {
    for (var tLen = topNumber.length, i = tLen - 1; i >= 0; i--) {
      var item = (topNumber[i] * bottomNumber[j]).toString().split("").reverse();
      var k = 0,
        next = 0,
        index = bLen - j - 1 + tLen - i - 1;
      while (k < item.length || next !== 0) {
        //结果为当前位数加上一位的进位
        let sum = (result[index + k] | 0) + next;
        if (k < item.length) {
          sum += item[k] * 1;
        }
        result[index + k] = sum % 10;
        next = sum / 10 >= 1 ? 1 : 0;
        k++;
      }
    }
  }
  //去掉开头的0
  result[result.length - 1] === 0 ? result.pop() : null;
  return result.length === 0 ? "0" : result.reverse().join("")
};
console.log(multiply("123456789", "987654321"));
