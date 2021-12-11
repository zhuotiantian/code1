var longestValidParentheses = function (s) {
  if (s.length < 2) return 0;
  var len = s.length,
    result = [],
    stack = [];
  for (var i = 0; i < len; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      if (stack.length > 0) {
        result.push(i);
        result.push(stack.pop());
      }
    }
  }
  if (stack.length === 0) {}
  return result.length == 0 ?
    0 :
    Math.max(...result) - Math.min(...result) + 1;
};
// console.log (longestValidParentheses ('())()'));
