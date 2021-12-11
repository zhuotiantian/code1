// const getFulName = ({ firstname, lastname }) => {
//   return `${firstname} ${lastname} `;
// };
// getFulName({
//   firstname: "tiantian",
//   lastname: "zhuo",
// });

// 限定传入的参数的类型
interface NameInfo {
  firstname: string;
  lastname: string;
}

const getFulName = ({ firstname, lastname }: NameInfo) => {
  return `${firstname} ${lastname} `;
};
// console.log(
//   getFulName({
//     firstname: "tiantian",
//     lastname: "zhuo",
//   }),
// );
// 定义对象的结构
// 可选属性检查  使用？
// 可变长度参数(多余属性检查)  使用as断言
// 索引签名：[prop: string]: any;
// 类型兼容性:将参数先赋值给对象然后再传给函数可以绕过属性检查
interface Vegetable {
  color?: string;
  readonly type: string;
  [prop: string]: any;
}
const getVegetables = ({ color, type }: Vegetable) => {
  return `A ${color ? color + " " : ""}${type}`;
};
const vegetableInfo = {
  type: "tomato",
  size: 2,
};
const vegetableObj: Vegetable = {
  type: "haunggua",
};
getVegetables(vegetableInfo);

interface ArrayInter {
  0: number;
  readonly 1: string;
}
let myarr: ArrayInter = [1, "string"];

// 定义函数的结构
type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (n1, n2) => n1 + n2;

// 索引类型
interface RoleDic {
  [id: string]: string;
}
const role1: RoleDic = {
  1: "super", // 会自动转换成字符串再作为对象的属性名
};
// 接口的继承
interface Vegetables {
  color: string;
}
interface Tomato extends Vegetables {
  radius: number;
}
interface Carrot extends Vegetables {
  length: number;
}
const tomato: Tomato = {
  color: "red",
  radius: 1,
};
// 混合类型接口
interface Counter {
  (): void;
  count: number;
}

const getCounter = (): Counter => {
  const c = () => {
    c.count++;
  };
  c.count = 0;
  return c;
};
const counter: Counter = getCounter();
