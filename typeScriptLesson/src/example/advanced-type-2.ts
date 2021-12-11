class Counters {
  constructor(public count: number = 0) {}
  public add(value: number) {
    this.count += value;
    return this; // 用于实现链式调用的效果
  }
  public substract(value: number) {
    this.count -= value;
    return this;
  }
}
let counters = new Counters(10);
counters.add(3).substract(2);

class PowContenr extends Counters {
  constructor(public count: number = 0) {
    super(count);
  }
  public pow(value: number) {
    this.count = this.count ** value;
    return this;
  }
}
let powCounter = new PowContenr(2);
powCounter.pow(3).add(5);
// console.log(powCounter);

// 索引类型
// 索引类型查询操作符  keyof
interface AdvanceInfoInterface {
  name: string;
  age: number;
}
let infoProp: keyof AdvanceInfoInterface;
infoProp = "name";

function getValue<T, K extends keyof T>(obj: T, names: K[]): Array<T[K]> {
  return names.map((n) => obj[n]);
}
const infoObj = {
  name: "lison",
  age: 18,
};
let infoValues: Array<string | number> = getValue(infoObj, ["name", "age"]);
// console.log(infoValues);
// 索引访问操作符 []
type NameTypes = AdvanceInfoInterface["name"];

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name];
}
interface Objs<T> {
  [key: number]: T;
}
// keys的类型为Objs所有的属性名的类型
let keys: keyof Objs<number>;

interface Objs2<T> {
  [key: string]: T;
}
const objs1: Objs2<number> = {
  age: 18,
};
let keys1: Objs2<number>["name"];

interface Type {
  a: never;
  b: never;
  c: string;
  d: number;
  e: undefined;
  f: null;
  g: object;
}
type Test = Type[keyof Type];

// 映射类型
interface Info1 {
  age: number;
  name: string;
  sex: string;
}
type ReadonlyType<T> = {
  readonly [P in keyof T]: T[P];
};
type ReadonlyInfo1 = ReadonlyType<Info1>;
let info11: ReadonlyInfo1 = {
  age: 18,
  name: "lison",
  sex: "man",
};

// 内置映射类型
// Readonly(只读) Partial（可选）
// Pick  从传入的对象中选出指定属性名-属性值组成的对象
interface Info2 {
  name: string;
  age: number;
  address: string;
}
const info2: Info2 = {
  name: "lison",
  age: 18,
  address: "beijing",
};
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const res: any = {};
  keys.map((key) => {
    res[key] = obj[key];
  });
  return res;
}
const nameAndAddress = pick(info2, ["name", "age"]);
// console.log(nameAndAddress);

// Record   将对象中每一个属性转换成其他值的场景
// extends  泛型约束
function mapObjects<K extends string | number, T, U>(
  obj: Record<K, T>,
  f: (x: T) => U,
): Record<K, U> {
  const res: any = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = f(obj[key]);
    }
  }
  return res;
}
const names = { 0: "hello", 1: "world", 2: "bye" };
const lengths = mapObjects(names, (s) => s.length);
// console.log(lengths);

// 同态：两个相同类型的代数结构的结果保持映射

interface Proxy<T> {
  get(): T;
  set(value: T): void;
}
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
};

// 封装
function proxify<T>(obj: T): Proxify<T> {
  const result = {} as Proxify<T>;
  // tslint:disable-next-line:forin
  for (const key in obj) {
    // if (obj.hasOwnProperty(key)) {
    result[key] = {
      get: () => obj[key],
      set: (value) => (obj[key] = value),
    };
    // }
  }
  return result;
}
let props = {
  name: "lison",
  age: 18,
};
let proxyProps = proxify(props);
console.log(proxyProps);

// 解封装   将映射类型转换成原始类型
function unproxify<T>(t: Proxify<T>): T {
  const result = {} as T;
  // tslint:disable-next-line:forin
  for (const k in t) {
    result[k] = t[k].get();
  }
  return result;
}
let originalProps = unproxify(proxyProps);
console.log(originalProps);

// 使用+/-可以增加或移除特定修饰符

const stringIndex = "a";
const numberIndex = 1;
const symbolIndex = Symbol();
interface Obj2 {
  [stringIndex]: string;
  [numberIndex]: number;
  [symbolIndex]: symbol;
}
type keysType = keyof Obj2;
type ReadonlyTypes<T> = {
  readonly [P in keyof T]: T[P];
};
let objs3: ReadonlyTypes<Obj2> = {
  a: "aa",
  1: 11,
  [symbolIndex]: Symbol(),
};

type MapToPromise<T> = {
  [K in keyof T]: Promise<T[K]>;
};
type Tuple = [number, string, boolean];
type promiseTuple = MapToPromise<Tuple>;
let tuple1: promiseTuple = [
  new Promise((resolve, reject) => resolve(1)),
  new Promise((resolve, reject) => resolve("1")),
  new Promise((resolve, reject) => resolve(false)),
];

// unknown类型

// 【1】任何类型都可以赋值给unknown
let value1: unknown;
value1 = 1;
value1 = "1";
// 【2】如果没有类型断言或基于控制流的类型细化时，unknown不可以赋值给其他类型，此时他只能赋值给unknown和any类型
let value2: unknown;
// let value3: string = value1;
// 【3】如果没有类型断言或基于控制流的类型细化时;，不能再他上面进行任何操作;
let value4: unknown;
// value4 += 1;

// 【4】unknown与任何其他类型组成的交叉类型最后都等于其他类型;
type type1 = string & unknown;
type type2 = number & unknown;

// 【5】unknown与任何其他类型（除了any）组成的联合类型都等于unknown类型
type type5 = unknown | string;
type type6 = any | unknown;
type type7 = number[] | unknown;
// 【6】never类型是unknown的子类型
type type8 = never extends unknown ? true : false;
// 【7】keyof unknown等于类型never
type type9 = keyof unknown;
// 【8】只能对unknown进行比较操作，不能进行其他操作
console.log(value1 === value2);
// 【9】unknown类型的值不能访问她的属性、作为函数调用和作为类创建实例
let value10: unknown;
// value10.age;
// 【10】使用映射类型时如果遍历的是unknown类型则不会映射任何属性
type Types1<T> = {
  [P in keyof T]: number;
};
type type11 = Types1<any>;
type type12 = Types1<unknown>;

// 条件类型
// T extends U ? X : Y;
type Types2<T> = T extends string ? string : number;
let index: Types2<1>;

// 分布式条件类型
type TypeName<T> = T extends any ? T : never;
type Type3 = TypeName<string | number>;

type Type7<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];
interface Part {
  id: number;
  name: string;
  subparts: Part[];
  undatePart(newName: string): void;
}
type Test1 = Type7<Part>;

// infer  类型推断
type Type8<T> = T extends any[] ? T[number] : T;
type Test2 = Type8<string[]>;
type Test4 = Type8<string>;
// 使用类型推断写法
type Type9<T> = T extends Array<infer U> ? U : T;
type Test5 = Type9<string[]>;

// 内置条件类型
// Exclude<T,U>   从T中选取不在U中的类型
type Type10 = Exclude<"a" | "b" | "c", "a" | "b">;
// Extract<T,U>  从T中选取可以赋值给U的类型
type Type11 = Extract<"a" | "b" | "c", "c" | "b">;
// NonNullable<T> 从T中去掉null和undefined
type Type12 = NonNullable<string | number | null | undefined>;
// ReturnType<T>  选取函数返回值的类型
type Type13 = ReturnType<() => string>;
type Type14 = ReturnType<() => void>;

// InstanceType<T>
class AClass {
  constructor() {}
}
type T1 = InstanceType<typeof AClass>;
type T2 = InstanceType<any>;
