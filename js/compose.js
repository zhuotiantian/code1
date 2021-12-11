const add = (x) => x + 10;
const multiply = (y) => y * 10;

// let compose = (f, g) => {
//   return function (x) {
//     return f(g(x));
//   };
// };

// 箭头函数与原生函数的区别
// 1.箭头函数没有自己的this和arguments,箭头函数的this和arguments都是在函数定义时绑定的外部的this和arguments，不会因为调用者的不同而发生变化
//   箭头函数可以通过es6参数收集的方式获取该函数的arguments
// 2.箭头函数不能实现构造函数；
// 3.使用call、apply均不能改变箭头函数中this的指向，箭头函数中的this永远指向定义函数时所在环境的this
// 4.箭头函数不具有proptype原型对象
// 5.箭头函数不能使用generator函数，不能使用yield关键字
// 6.箭头函数中没有this -> 没有proptype属性 -> 不能作为构造函数；

const compose = (...args) => {
  return (x) => {
    return args.reduceRight((res, next) => {
      return next(res);
    }, x);
  };
};
let calculate = compose(multiply, add);
console.log(calculate(10));
