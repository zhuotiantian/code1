// function addFunc(arg1: number, arg2: number): number {
//   return arg1 + arg2;
// }
// const addFunc1 = (arg1: number, arg2: number) => arg1 + arg2;
// 定义函数类型,指定参数的类型和返回值的类型
let addFunc: (x: number, y: number) => number;
addFunc = (arg1: number, arg2: number): number => arg1 + arg2;
let arg3 = 3;
addFunc = (arg1: number, arg2: number): number => arg1 + arg2 + arg3;

// 使用接口定义函数类型(自动转换成类型别名)
type Add = (x: number, y: number) => number;
let addFunc1: Add;
addFunc1 = (arg1: number, arg2: number): number => arg1 + arg2;

// 定义可选参数
type AddFunction = (arg1: number, arg2: number, arg3?: number) => number;
let addFunction: AddFunction;
addFunction = (x: number, y: number): number => x + y;
addFunction = (x: number, y: number, z: number = 1): number => {
  return x + y + z;
};
// console.log(addFunction(1, 2, 3));

// 剩余参数
type ArgumentsFunc = (arg1: number, ...args: number[]) => {};

// 重载  只能使用function进行定义，不能使用接口和类型别名定义重载
function handleData(x: string): string[];
function handleData(x: number): number[];
// 函数实体不是函数重载的一部分
function handleData(x: any): any {
  if (typeof x === "string") {
    return x.split("");
  } else {
    return x
      .toString()
      .split("")
      .map((e) => Number(e));
  }
}
handleData("abc");
handleData(123);
