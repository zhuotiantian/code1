//f[i][j]为s1的前i个字符与s2的前j个字符是否相匹配；
//初始化：
//1.f[0][0]=true;
//2.f[0][j]=f[0][j-1]&&s2[j]===*;
//3.f[i][0]    false
//状态转移方程：
//1.若s1个第i个字符与s2的前j个字符想同，或者s2的第j个字符为“？”，则f[i][j]=f[i-1][j-1]；
//2.若s2的第j个字符为*
//    a.若s2的第j个字符匹配空串，则f[i][j]=f[i][j-1]
//    b.若s2的第j个字符匹配任何非空字符串，则f[i][j]=f[i-1][j]

var isMatch = function (s, p) {
  var result = [], sLen = s.length, pLen = p.length;
  for (var i = 0; i <= sLen; i++) {
    result[i] = [];
    for (var j = 0; j <= pLen; j++) {
      if (i === 0 && j === 0) {
        result[i][j] = true;
      } else if (i === 0 && j !== 0) {
        result[i][j] = result[i][j - 1] && p[j - 1] === '*';
      } else if (i !== 0 && j === 0) {
        result[i][j] = false;
      } else {
        if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
          result[i][j] = result[i - 1][j - 1];
        } else if (p[j - 1] === '*') {
          result[i][j] = result[i][j - 1] || result[i - 1][j];
        } else {
          result[i][j] = false;
        }
      }
    }
  }
  return result.length === 0 ? false : result[sLen][pLen];
};
console.log (isMatch ('aa', '*'));
