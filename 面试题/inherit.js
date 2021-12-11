// 原型链继承
function Parent() {}
function Child() {}

Child.prototype = new Parent();

// 构造继承
function Parent() {}

function Child() {
  Parent.call(this, ...arguments);
}

// 组合继承
function Parent() {}
function Child() {
  Parent.call(this, ...arguments);
}
Child.prototype = new Parent();

// 寄生组合继承
function Parent() {}
function Child() {
  Parent.call(this, ...arguments);
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

// 原型式继承
function Animal(obj) {
  function F() {}
  F.prototype = obj;
  F.prototype.constructor = Animal;
  return new F();
}

// 寄生式继承
function Animal() {}

Promise.all = function (arr) {
  // TODO: this polyfill only supports array-likes
  //       it should support all iterables
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === "object" || typeof val === "function")) {
        var then = val.then;
        if (typeof then === "function") {
          var p = new Promise(then.bind(val));
          p.then(function (val) {
            res(i, val);
          }, reject);
          return;
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 1);
  });
};
// const p2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 2);
//   });
// };
// Promise.all([p1(), p2()]).then((res) => {
//   console.log(res);
// });
