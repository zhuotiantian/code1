const mixins = {
  say() {
    console.log(`${this.name}在说话`);
  },
  sing() {
    console.log(`${this.name}在唱歌`);
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, sNo) {
    // 用于生成一个空对象，作为context来调用父类的constructor
    super(name);
    this.sNo = sNo;
  }
}

const student = new Student("王二柱", 1);
Object.assign(Student.prototype, mixins);
student.say();
