// 可以随意定义索引
// enum Status {
//   Uploading, // 0
//   Success, // 1
//   Failed, // 2
// }
// console.log(Status.Uploading); // 0
// console.log(Status[Success]);

// 反向映射

// console.log(Status);
// 字符串枚举
enum Message {
  Error = "sorry,error",
  Success = "hoho,success",
  Failed = Error,
}
// console.log(Message.Failed);
enum Animals {
  Dog = 1,
  Cat = 2,
}
interface Dog {
  type: Animals.Dog;
}
const dog: Dog = {
  type: Animals.Dog,
};

enum Status {
  OFF,
  ON,
}
interface Light {
  status: Status;
}
const light: Light = {
  status: Status.OFF,
};

// 编译完之后var dog=1
const enum Animal {
  Dog = 1,
}
