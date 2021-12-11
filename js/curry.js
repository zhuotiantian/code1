function curry(fn, currArgs) {
  return function () {
    let args = [].slice.call(arguments);

    // 首次调用时，若未提供最后一个参数currArgs，则不用进行args的拼接
    if (currArgs !== undefined) {
      args = args.concat(currArgs);
    }

    // 递归调用
    if (args.length < fn.length) {
      return curry(fn, args);
    }

    // 递归出口
    return fn.apply(null, args);
  };
}

function sum(a, b, c) {
  return a + b + c;
}
const curryAdd = curry(sum);
console.log(curryAdd(1)(2)(3));
