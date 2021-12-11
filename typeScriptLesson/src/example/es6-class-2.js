class Parent {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  static sayHi() {
    return `this is parent`;
  }
}
class Child extends Parent {
  constructor(name) {
    // super用于调用父对象/父类的构造函数
    super(name);
  }
}

const instance = new Child("xiaoming");
// console.log(Child.sayHi());
// console.log(instance instanceof Child);
// console.log(instance instanceof Parent);
//Object.getPrototypeOf返回指定对象的原型对象
console.log(Object.getPrototypeOf(Child));
console.log(Child);

const obj = { a: "a" };
// console.log(Object.getPrototypeOf(obj));
// console.log(obj);

// super作为函数
// super作为对象
//  在普通方法总  ==>  父类的原型对象
//  在静态方法中  ==>  父类
