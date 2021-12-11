// 对象类型兼容性
// 赋值对象必须包含被赋值对象的接口中已经定义的属性
interface InfoInterface {
  name: string;
  info: {
    age: number;
  };
}
let infos: InfoInterface;
const infos1 = { name: "zhuotiantian", info: { age: 25 } };
const infos2 = { age: "zhuotiantian" };
const infos3 = { name: "zhuotiantian", age: 18 };
infos = infos1;

// 函数参数个数兼容性
// 被赋值函数的参数必须小于等于赋值的函数参数
// let x = (a: number) => 0;
// let y = (b: number, c: number) => 0;
// y = x;
// x = y;

// 函数参数类型兼容性
let x = (a: number) => 0;
let y = (b: string) => 0;
// x = y;

// 可选参数和剩余参数
const getSum = (
  arr: number[],
  callback: (...args: number[]) => number,
): number => {
  return callback(...arr);
};
getSum([1, 2], (...args: number[]): number =>
  args.reduce((a, b) => {
    return a + b;
  }, 0),
);

// 类型保护
// 类型保护只能是string、number、boolean、symbol四种类型中的一种
// typeof item === "string";
