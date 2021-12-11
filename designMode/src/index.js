class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} eat something`);
  }
  speak() {
    console.log(`My name is ${this.name}, age ${this.age}`);
  }
}
// let zhang = new Person("zhang", 20);
// let wang = new Person("wang", 20);
// zhang.eat();
// zhang.speak();
// wang.eat();
// wang.speak();

class Student extends Person {
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
  }
  study() {
    console.log(`${this.number} study`);
  }
}
let s1 = new Student("赵", 20, "001");
s1.eat();
s1.speak();
s1.study();
