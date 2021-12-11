//反转字符串中的单词
// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
// 示例 1:
// 输入: "Let's take LeetCode contest"
// 输出: "s'teL ekat edoCteeL tsetnoc" 
// 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
// const reverseWord = function (s) {
//   //字符串按空格进行分割，保存数组，数组的元素的先后顺序就是单词的顺序
//   return s.split(" ").map(e => {
//     return e.split("").reverse().join("");
//   }).join(" ")
// };
// export default reverseWord;

var lengthOfLongestSubstring = function (s) {
  console.log(s);
  let arr = s.split(""),
    index = 0,
    obj = {},
    result = "";
  for (let i = index; i < arr.length; i++) {
    if (obj[arr[i]]) {
      index = i;
      if (s.length == 1) {
        return s.length
      } else {
        lengthOfLongestSubstring(arr.slice(index).join());
      }
      break;
    } else {
      obj[arr[i]] = 1;
      result += arr[i]
    }
  };

};
console.log(lengthOfLongestSubstring("pwwkew"));
