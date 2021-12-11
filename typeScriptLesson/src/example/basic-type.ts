// 12月20日   ts基础类型
// 使用方式：
// 在声明的变量名后加上需要为该变量指定的类型即可限定该字符串的类型

// 布尔类型
let bool: boolean = false;
// 数值类型
let num: number = 1;

// 字符串类型
let str: string = "abc";

// 数组
// 写法一：
let arr: number[] = [1, 2, 3]; // 指定数组元素只能为number类型的数组
// 写法二：
let arr1: number[] = [1, 2, 3];
let arr3: Array<string | number>;
let arr4: Array<string | number>;

// 元组类型（固定长度,固定每个位置上的类型）
let tulpe: [string, number, boolean];
tulpe = ["1", 1, false];

// 枚举类型
// 保存的是序列值，可以为枚举值指定索引值，指定索引值之后的枚举值的索引递加
enum Roles {
  SUPER_ADMIN,
  ADMIN,
  USER,
}

// console.log(Roles.SUPER_ADMIN);
// console.log(Roles.ADMIN);
// console.log(Roles.USER);
// any类型(任意类型)
let value: any;
value = 123;

// void类型（不是任意类型）
const consoleText = (text: string): void => {
  console.log(text);
};
let v: void;
v = undefined;
console.log("hello world");

// null和undefined
let u: undefined;
let n: null;

// never类型
const errorFunc = (message: string): never => {
  throw new Error(message);
};

const infiniteFunc = (): never => {
  while (true) {}
};

// object
let aaa = {
  name: "zhuotiantian",
};
function getObject(bbb: object): void {
  console.log(bbb);
}
getObject(aaa);

// 类型断言
const getLength = (target: string | number): number => {
  if ((target as string).length || (target as string).length === 0) {
    return (target as string).length;
  } else {
    return target.toString().length;
  }
};
