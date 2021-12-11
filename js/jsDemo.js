//手动实现bind
Function.prototype._bind = function (obj, ...args) {
  if (typeof this !== "function") {
    console.log("This is not a function");
  }
  let fn = this;
  let returnFn = function (...args2) {
    return fn.apply(obj || this, args2.concat(args));
  };
  //继承原来的属性
  function F() {}
  F.prototype = this.prototype;
  returnFn.prototype = new F();
  return returnFn;
};

// 函数柯里化
const curry = function (fn, args) {
  let that = this;
  let len = args.length;
  var args = args || [];
  return function () {
    let _args = Array.prototype.slice.call(arguments);
    _args = _args.concat(args);
    if (_args.length < len) {
      return curry.apply(that, fn, _args);
    }
    return fn.apply(that, _args);
  };
};

// 此情况有缺陷:必须提前知道fn的形参数量
const _curry = (fn, ...args1) => {
  return (...args2) => {
    return ((arg) => {
      return arg.length === fn.length ? fn(...arg) : curry(fn, ...arg);
    })([...args1, ...args2]);
  };
};
// console.log(curry(add)(1, 2, 3));

// 手写函数判断数据类型
function getType(obj) {
  if (obj === null) return String(obj);
  return typeof obj === "object"
    ? Object.prototype.toString
        .call(obj)
        .replace(/^\[|\]$/g, "")
        .split(" ")[1]
        .toLowerCase()
    : typeof obj;
}
// console.log(getType(() => {}));

// delete 数组中的一个元素 长度是否会减1
// let arr = [1, 2, 3];
// delete arr[0];
// console.log(arr.length);

function add(...args) {
  let add = 0;
  add = [...args].reduce((t, n) => t + n, add);
  const fn = function (...args1) {
    // return fn;
    add = [...args1].reduce((t, n) => t + n, add);
    return fn;
  };
  fn.toString = function () {
    return add;
  };
  return fn;
}
console.log(add(1, 2));
