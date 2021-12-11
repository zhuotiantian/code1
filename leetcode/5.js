/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  //当s为单个字符时一定是回文
  if (s.length <= 1) {
    return s;
  } else if (s.length == 2) {
    //当s为两个字符时：若两个字符相等，则s为最长回文子串，若不相等，s的任意子串为回文子串
    if (s[0] === s[1]) {
      return s;
    } else {
      return s[0];
    }
  } else {
    //动态规划算法
    // let len = s.length;
    // let dp = [],
    //   str = s[0]||"",
    //   maxLen = 0;
    // for (var i = 0; i < len; i++) {
    //   dp[i] = new Array(len);
    // };
    // //区间慢慢放大
    // for (let r = 0; r < s.length; r++) {
    //   for (let l = 0; l < r; l++) {
    //     //状态转移：
    //     //当l-r<=2时，即s[l,r]的长度小于等于3时，只要s[l]===s[r]，则该子串一定是回文子串
    //     //当l-r>2时，需要满足s[l]===s[r]并且dp[l+1][r-1]===true两个条件才能判定s[l,r]为回文子串
    //     if (s[l] === s[r] && (r - l <= 2 || dp[l + 1][r - 1])) {
    //       dp[l][r] = true;
    //       if (r - l + 1 > maxLen) {
    //         maxLen = r - l + 1;
    //         str = s.substring(l, r + 1);
    //       }
    //     }
    //   }
    // };
    // return str
    //中心扩展算法
    let maxLen = '';
    for (var i = 0; i < s.length - 1; i++) {
      let maxOddStrLen = centerExpend (s, i, i);
      let maxEvenStrLen = centerExpend (s, i, i + 1);
      let result = maxOddStrLen.length > maxEvenStrLen.length
        ? maxOddStrLen
        : maxEvenStrLen;
      if (result.length > maxLen.length) {
        maxLen = result;
      }
    }
    return maxLen;

    function centerExpend (s, left, right) {
      //当left=right时，回文中心是任意值，回文字符个数为奇数
      //当right=left+1时，回文中心是一个缝隙，回文字符个数为偶数
      while (left >= 0 && right < s.length) {
        if (s[left] === s[right]) {
          left--;
          right++;
        } else {
          break;
        }
      }
      return s.substring (left + 1, right);
    }
  }
};
console.log (longestPalindrome ('abba'));
