const getType = (obj) => {
  const typeString = Object.prototype.toString.call(obj);
  const reg = /(?<=\[object\s)([a-zA-Z])+/g;
  const matched = typeString.match(reg);
  return matched[0];
};

// 处理不同类型的属性值
const getObj = (origin) => {
  // 如果传入的是基本数据类型，则直接返回
  // null需要进行特殊处理
  if (typeof origin !== "object" || origin === null) {
    return origin;
  }
  if (typeof origin === "function") {
    return eval(`${origin}`);
  }
  let constructor = origin.constructor;
  if (getType(origin) !== "Object" && getType(origin) !== "Array") {
    // 使拷贝的对象与传入的对象的constructor保持一致   如Date、RegExp
    return new constructor(origin);
  }
  // 如果是对象或者数组则需要初始化一个空值
  return new constructor();
};

// 1.深度优先和广度优先实现深拷贝
function deepCloneBFS(origin) {
  let result = getObj(origin);
  let map = new Map(); // 保存已经拷贝过的值
  let queue = []; // 需要拷贝的属性队列
  if (result !== origin) {
    queue.push([origin, result]);
    map.set(origin, result);
  }

  while (queue.length) {
    let [ori, tar] = queue.shift();
    for (let key in ori) {
      const cacheValue = map.get(ori[key]);
      if (cacheValue) {
        tar[key] = cacheValue;
        continue;
      }
      tar[key] = getObj(ori[key]);
      if (tar[key] !== ori[key]) {
        queue.push([ori[key], tar[key]]);
        map.set(ori[key], tar[key]);
      }
    }
  }
  return result;
}
let obj = {
  a: "1",
  b: function () {},
  c: [1, "2"],
  d: {
    aa: 1,
    cc: {
      1: "a",
    },
  },
};
// const date = undefined;
// let copyObj = deepCloneBFS(date);

// 深度优先遍历
function deepCopyDFS(origin) {
  let stack = [];
  let map = new Map(); // 记录出现过的对象，用于处理环

  let target = getObj(origin);
  if (target !== origin) {
    stack.push([origin, target]);
    map.set(origin, target);
  }

  while (stack.length) {
    let [ori, tar] = stack.pop();
    for (let key in ori) {
      console.log(key);
      // 处理环状
      if (map.get(ori[key])) {
        tar[key] = map.get(ori[key]);
        continue;
      }

      tar[key] = getObj(ori[key]);
      if (tar[key] !== ori[key]) {
        stack.push([ori[key], tar[key]]);
        map.set(ori[key], tar[key]);
      }
    }
  }

  return target;
}

// 递归写法
function cloneDeep2(obj) {
  let result = getObj(obj);
  if (result !== obj) {
    for (let key in obj) {
      result[key] = getObj(obj[key]);
      if (result[key] !== obj[key]) {
        result[key] = cloneDeep2(obj[key]);
        continue;
      }
    }
  }
  return result;
}

// let copyObj = deepCopyDFS(obj);
// let copyObj1 = cloneDeep2(obj);
// obj.d.aa = "ddd";
// console.log(copyObj1);

// 扁平化数组、去重、排序
const arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
Array.prototype._uniq = function () {
  return [...new Set(this)];
};
Array.prototype._flat = function () {
  return this.reduce((total, current) => total.concat(Array.isArray(current) ? current._flat() : [current]), []);
};
// console.log(
//   arr
//     ._flat(Number.MAX_SAFE_INTEGER)
//     ._uniq()
//     .sort((a, b) => a - b)
// );

// 实现一个new
function _new(fn, ...arg) {
  // 模拟构造函数的原型继承
  // 直接使用构造函数的原型属性生成新的对象
  const obj = Object.create(fn.prototype);
  const res = fn.call(obj, ...arg);
  return res instanceof Object ? res : obj;
}

// 请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']，合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']
let arr1 = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"];
let arr2 = ["A", "B", "C", "D"];
let arr3 = [...arr1, ...arr2.map((e) => e + "3")].sort().map((e) => (e.includes("3") ? e[0] : e));

// 实现 (5).add(3).minus(2) 功能。
// Number.prototype.add = function (i = 0) {
//   return this.valueOf() + i;
// };
// Number.prototype.minus = function (i = 0) {
//   return this.valueOf() - 1;
// };
/**
 * 需要考虑小数精度的情况
 */
Number.MAX_SAFE_DIGITS = Number.MAX_SAFE_INTEGER.toString().length - 2;
Number.prototype.digits = function () {
  let result = (this.valueOf().toString().split(".")[1] || "").length;
  return result > Number.MAX_SAFE_DIGITS ? Number.MAX_SAFE_DIGITS : result;
};

Number.prototype.add = function (i = 0) {
  if (typeof i !== "number") {
    throw new Error("请输入正确的数字");
  }
  const v = this.valueOf();
  const thisDigits = this.digits();
  const iDigits = i.digits();
  const baseNum = Math.pow(10, Math.max(thisDigits, iDigits));
  const result = (v * baseNum + i * baseNum) / baseNum;
  if (result > 0) {
    return result > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : result;
  } else {
    return result < Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : result;
  }
};

Number.prototype.minus = function (i = 0) {
  if (typeof i !== "number") {
    throw new Error("请输入正确的数字");
  }
  const v = this.valueOf();
  const thisDigits = this.digits();
  const iDigits = i.digits();
  const baseNum = Math.pow(10, Math.max(thisDigits, iDigits));
  const result = (v * baseNum - i * baseNum) / baseNum;
  if (result > 0) {
    return result > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : result;
  } else {
    return result < Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : result;
  }
};

// 冒泡排序以及冒泡排序的优化
function bubble(arr = []) {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
/**
 * 优化思路：已经排好序的部分不需要再次排序
 */
function bubble2(arr = []) {
  let i = arr.length;
  while (i > 0) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    i--;
  }
  return arr;
}
/**使用flag减少交换顺序的次数
 *
 */
function bubble3(arr = []) {
  let len = arr.length;
  let flag = true;
  while (flag) {
    flag = false;
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }
  }
  return arr;
}
// console.log(bubble3([10, 1, 33, 4, 50, 3]));
let obj1 = { 1: 222, 2: 123, 5: 888 };
const result = Array.from({ length: 12 }).map((_, index) => obj[index + 1] || null);

//实现一个lazyMan类
class LazyManClass {
  constructor(name) {
    this.name = name;
    this.queue = [];
    console.log(`Hi I am ${name}`);
    setTimeout(() => {
      this.run();
    }, 0);
    return this;
  }
  sleep(time) {
    const fn = () => {
      setTimeout(() => {
        console.log(`等待了${time}秒...`);
        this.run();
      }, time * 1000);
    };
    this.queue.push(fn);
    return this;
  }
  sleepFirst(time) {
    const fn = () => {
      setTimeout(() => {
        console.log(`等待了${time}秒...`);
        this.run();
      }, time * 1000);
    };
    this.queue.unshift(fn);
    return this;
  }
  eat(food) {
    this.queue.push(() => {
      console.log(`I am eating ${food}`);
      this.run();
    });
    return this;
  }
  run() {
    const fn = this.queue.shift();
    fn && fn();
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

// 带并发限制的异步调度器
/**
 * addTask(1000, '1');
 * addTask(500, '2');
 * addTask(300, '3');
 * addTask(400, '4');
 * 一开始，1、2两个任务进入队列
 * 500ms时，2完成，输出2，任务3进入队列
 * 800ms时，3完成，输出3，任务4进入队列
 * 1000ms时，1完成，输出1
 * 1200ms时，4完成，输出4
 */

class Scheduler {
  constructor() {
    /**
     * 需要带并发控制，则需要考虑任务的存储情况
     */
    this.task = []; // 当前需要执行的任务队列
    this.cached = []; // 等待被执行的任务队列
    this.max = 2; // 最大并发限制
  }
  add(fn) {
    if (this.task.length < this.max) {
      this.run(fn);
    } else {
      this.cached.push(fn);
    }
  }
  run(fn) {
    this.task.push(fn);
    fn().then(() => {
      this.task.shift();
      if (this.cached.length) {
        this.run(this.cached.shift());
      }
    });
  }
}

const timeout = (time, order) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(order);
      resolve();
    }, time);
  });
};
const scheduler = new Scheduler();
function addTask(time, order) {
  scheduler.add(() => timeout(time, order));
}

// addTask(1000, 1);
// addTask(500, 2);
// addTask(300, 3);
// addTask(400, 4);

// 给定两个数组，写一个方法来计算他们的交集
function intersect(arr1 = [], arr2 = []) {
  const map = {};
  const res = [];
  for (let n of arr1) {
    if (map[n] !== undefined) {
      map[n]++;
    } else {
      map[n] = 1;
    }
  }
  for (let n of arr2) {
    if (map[n] > 0) {
      res.push(n);
      map[n]--;
    }
  }
  return res;
}
// console.log(intersect([1, 1], [1]));

// 随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。

function getRandom() {
  return Math.floor(Math.random() * (99 - 0 + 1));
}
let arr4 = Array.from({ length: 10 }, (v) => {
  return getRandom();
}).sort((a, b) => a - b);
let temp = {};
for (let n of arr4) {
  const baseNum = Math.floor(n / 10);
  if (temp[baseNum] === undefined) {
    temp[baseNum] = [];
  }
  temp[baseNum].push(n);
}
const result1 = [];
for (let i in temp) {
  result1.push(temp[i]);
}
// console.log(result1);

// const p1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve("success");

//   setTimeout(() => {
//     console.log("2");

//     reject("fail");
//   });
// });
// console.log(3);
// setTimeout(() => {
//   console.log(4);
// }, 100);
// console.log(5);
// setTimeout(() => {
//   console.log(6);
// });
// const p2 = p1.then(
//   (res) => {
//     console.log(res);
//     setTimeout(() => {
//       console.log(7);
//     }, 0);
//     return res;
//   },
//   (error) => {
//     console.log(error);
//     return error;
//   }
// );

// console.log(p2 === p1);

// 如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc'
const str = "AbcDefGh".replace(/[a-zA-Z]/g, function (a) {
  return /[a-z]/.test(a) ? a.toUpperCase() : a.toLowerCase();
});
// console.log(str);

// 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是
// subStr: 从指定位置开始截取指定长度的字符串  长度可以不传 不传为截取后面所有字符串
// substring: 从指定位置开始截取到指定位置结束的子串
const find = (s, t) => {
  const sLen = s.length;
  const tLen = t.length;
  if (sLen < tLen) {
    return -1;
  }
  for (let i = 0; i < sLen - tLen; i++) {
    const subStr = s.substring(i, i + tLen + 1);
    if (subStr === t) {
      return i;
    } else {
      return -1;
    }
  }
};

// 旋转数组
// 方案一
const rotate = (arr = [], k) => {
  return arr.splice(-k % arr.length).concat(arr);
};

// 方案二：
const rotate1 = (arr = [], k) => {
  while (k > 0) {
    const i = arr.pop();
    arr.unshift(i);
    k--;
  }
  return arr;
};
// console.log(rotate1([1, 2, 3, 4, 5, 6, 7], 22));

// 打印出 1 - 10000 之间的所有对称数
function summetry() {
  let result = [];
  for (let i = 1; i < 10; i++) {
    result.push(i);
    result.push(i * 11);
    for (let j = 0; j < 10; j++) {
      result.push(i * 101 + j * 10);
      result.push(i * 1001 + j * 110);
    }
  }
  return result;
}

// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
function remove0(arr) {
  for (let i = 0, j = 0; i < arr.length - j; i++) {
    if (arr[i] === 0) {
      arr.push(0);
      arr.splice(i, 1);
      i--;
      j++;
    }
  }
  return arr;
}
// 请实现一个 add 函数，满足以下功能
function add() {
  const args = [].slice.call(arguments);
  const fn = function () {
    const f_args = [].slice.call(arguments);
    return add.apply(null, args.concat(f_args));
  };
  fn.toString = function () {
    const sum = args.reduce((a, b) => a + b, 0);
    console.log(sum);
    return args.reduce((a, b) => a + b, 0);
  };
  return fn;
}
// console.log(add(1)); // 1
// add(1)(2); // 3
// add(1)(2)(3); // 6
// add(1)(2, 3); // 6
// add(1, 2)(3); // 6
// add(1, 2, 3); // 6

// 两数之和
function nums(arr, target) {
  const map = {};
  for (let i = 0, len = arr.length; i < len; i++) {
    map[arr[i]] = i;
    if (map[target - arr[i]] !== undefined) {
      return [map[target - arr[i]], i];
    }
  }
  return [];
}
// console.log(nums([2, 7, 11, 15], 18));

// 在输入框中如何判断输入的是一个正确的网址。
function isUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

// 实现 convert 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度
let list = [
  { id: 1, name: "部门A", parentId: 0 },
  { id: 2, name: "部门B", parentId: 0 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 4, name: "部门D", parentId: 1 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
  { id: 7, name: "部门G", parentId: 2 },
  { id: 8, name: "部门H", parentId: 4 },
];
const convert = (list) => {
  const map = {};
  const len = list.length;
  // 将所有节点按父节点归类
  for (let i = 0; i < len; i++) {
    const pid = list[i].parentId;
    if (map[pid]) {
      map[pid].push(list[i]);
    } else {
      map[pid] = [list[i]];
    }
  }
  let result = [];
  for (let key in map) {
    if (key === "0") {
      result.push(...map[key]);
      continue;
    }
    const node = list.find((e) => e.id.toString() === key);
    node.children = map[key];
  }
  return result;
};
// console.log(convert(list));

// 防抖
function debounce(fn, time) {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
}

// 节流
function throttle(fn, time) {
  let flag = true;
  return () => {
    if (!flag) {
      return false;
    }
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      flag = true;
    }, time);
  };
}
