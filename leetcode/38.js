var countAndSay = function (n) {
  var result = [];
  if (n == 1) {
    return "1"
  } else {
    result[0] = "1";
    for (var i = 1; i < n; i++) {
      result[i] = result[i - 1].match(/3+|2+|1+/g).reduce((total, next) => {
        return total + next.length + next[0]
      }, "");
    };
    return result[n - 1]
  };

};
console.log(countAndSay(5));
