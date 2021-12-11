// 泛型
// 1.在函数前面使用泛型变量<T>
// 2.调用函数时在函数后面使用<>传入需要限定参数的类型
const getArray = <T>(value: T, times: number = 5): T[] => {
  return new Array(times).fill(value);
};
// console.log(getArray<string>("2", 8).map((e) => e.length));

const getArray1 = <T, U>(
  param1: T,
  param2: U,
  times: number,
): Array<[T, U]> => {
  return new Array(times).fill([param1, param2]);
};
// getArray1<number, string>(1, "a", 3).forEach((e) => {
//   console.log(e[0]);
//   console.log(e[1]);
// });

// 泛型在类型定义中的使用
let getArray3: <T>(arg: T, times: number) => T[];
getArray3 = (arg: any, times: number) => {
  return new Array(times).fill(arg);
};
// console.log(getArray3(123, 3));

// 使用类型别名+泛型定义函数
// type GetArray = <T>(arg: T, times: number) => T[];
// let getArray4 = (arg: any, times: number) => {
//   return new Array(times).fill(arg);
// };

// 使用接口方式+泛型定义函数
// type GetArray = <T>(arg: any, times: number) => T[];
// let getArray4: GetArray = (arg: any, times: number) => {
//   return new Array(times).fill(arg);
// };

interface GetArray<T> {
  (arg: T, times: number): T[];
  array: T[];
}
// let getArray4: GetArray = (arg: any, times: number) => {
//   return new Array(times).fill(arg);
// };
let getArra4 = (): GetArray<string> => {
  const fun: GetArray<string> = (arg: string, times: number) => {
    return new Array(times).fill(arg);
  };
  fun.array = ["1"];
  return fun;
};

let instance = getArra4();
interface ValueWithLength {
  length: number;
}

// 泛型约束
const getArray5 = <T extends ValueWithLength>(arg: T, times): T[] => {
  return new Array(times).fill(arg);
};
// console.log(getArray5([1, 2], 3));
// console.log(getArray5(12, 3));
// console.log(
//   getArray5(
//     {
//       length: 2,
//     },
//     3,
//   ),
// );

// keyof返回一个对象上所有的属性名构成的数组
const getProps = <T, K extends keyof T>(object: T, propName: K) => {
  return object[propName];
};
const obj = {
  a: "a",
  b: "b",
};
console.log(getProps(obj, "a"));
console.log(getProps(obj, "b"));
