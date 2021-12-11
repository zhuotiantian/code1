//版本一：仅实现返回函数功能
Function.prototype.bind1 = function (context) {
  const self = this;
  return function () {
    self.apply(context);
  };
};

//版本二：实现执行bind时的传参
Function.prototype.bind2 = function (context) {
  const self = this;
  const args = [...arguments].slice(1);
  return function () {
    self.apply(context, [...args, ...arguments]);
  };
};

//版本三：实现bind函数使用new操作符创建新的对象
// 需要判断当前函数是否通过new操作符调用，如果是，则需要忽略传入的this值
Function.prototype.bind2 = function (context) {
  const self = this;
  const args = [...arguments].slice(1);
  const temp = function () {};
  const resultFn = function () {
    // 判断函数是否通过new操作符执行
    debugger;
    return self.apply(this instanceof resultFn ? this : context, [...args, ...arguments]);
  };
  //此处需要考虑原型，实例才能继承绑定函数的原型
  //同时需要考虑修改返回函数的原型时是否会影响原函数的原型，所以需要用一个空函数进行中转
  temp.prototype = this.prototype;
  resultFn.prototype = new temp();
  return resultFn;
};

// bind   可以绑定this并传入参数
// 构造函数也可以使用bind
const obj = {
  name: "1111",
  say: function () {
    console.log(this.name);
  },
};

// const say = obj.say;,
// say();
const say1 = obj.say.bind({ name: 1 });
// say1("0");

new say1();

/**
 * bind的实现需要注意以下几点
 * 1、改变this的指向同时接收参数
 * 2、绑定函数在执行时还可以传入参数
 * 3、绑定函数同时可以通过new 的方式执行，此时会忽略传入的this
 */
