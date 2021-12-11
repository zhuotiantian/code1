// 类的定义
class Point {
  public x: number;
  public y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  public getPosition() {
    return `(${this.x},${this.y})`;
  }
}
const point = new Point(1, 2);

class Parent {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name: string) {
    super(name);
  }
}

// 类的修饰符（公共、私有、受保护的）
// public（外部可以访问的属性和方法）

// private 私有的（外部不可访问的属性和方法，继承该类的子类也不可使用）

// protected  受保护  在继承该类的子类中可以使用方法

// readonly    将属性设置为只读属性
