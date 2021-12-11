//列举出n对括号所有情况


//1.深度优先遍历（回溯算法）

//当左边括号剩余数小于n时，可以生成左子树
//当左边括号数大于右边括号数时，可以生成右子树

var generateParenthesis = function (n) {
  let result = [];
  if (n !== 0) search("", n, n, result);
  return result;
};
let search = function (comment, left, right, res) {
  if (left == 0 && right == 0) {
    res.push(comment);
    return
  };
  //先添加一个左括号
  if (left > 0) {
    search(comment + "(", left - 1, right, res);
  };
  //左边剩余大于小于右边剩余，添加右括号
  if (right > 0 && left < right) {
    search(comment + ")", left, right - 1, res);
  }
};



//动态规划(效率高)

//dp[i]表示i对括号所有的组合
//dp[0]  =>  [""]
//状态转移：dp[i]="("+dp[可能有的组合数量]+")"+dp[剩余的括号数量]
//dp[i]="("+dp[j]+")"+dp[i-j-1](j=0,1,2,...,i-1)
var generateParenthesis = function (n) {
  let result = [
    [""]
  ];
  for (var i = 1; i <= n; i++) {
    var item = [];
    for (var j = 0; j < i; j++) {
      result[j].forEach(e => {
        result[i - j - 1].forEach(m => {
          item.push("(" + e + ")" + m)
        })
      })
    };
    result.push(item);
  }
  return result[n]
}
console.log(generateParenthesis(3));
