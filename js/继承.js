// 原型链继承
// 初始化一个父类的实例，并将该实例赋值给子类的原型属性来继承
//缺点：引用类型的属性被所有实例共享、创建子类时，无法向父类传参
function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function () {
  return this.name;
};

function Student(stuNo) {
  this.stuNo = stuNo;
}

Student.prototype = new Person();

//借用构造函数继承
// 通过在子类中调用父类构造函数实现继承
// 缺点：每次创建实例时，都需要创建一遍构造函数中的方法
function Animal(name) {
  this.name = name;
}
function Lion(age) {
  Animal.call(this, "lion");
  this.age = age;
}

//组合继承
/**
 * 
 * 通过call继承父类的类中定义的实例属性，通过原型继承继承父类的原型属性
 */
// 父类构造函数需要调用两次
function Super(name) {
  this.name = name;
  this.colors = ["red", "blue"];
}

function Sub(name, age) {
  Super.call(this, name);
  this.age = age;
}

Sub.prototype = new Super();
Sub.prototype.constructor = Sub;
Sub.prototype.age = functin(){
  return this.age
}

// 组合寄生式继承
function Super(name){
  this.name = name;
  this.colors = ['red','blue'] ;
}
function Sub(name,age){
  Super.call(this,name);
  this.age = age;

}


function inheritPrototype(Sub,Super){
  var prototype = Object.create(Super.prototype);
  prototype.constructor = Sub;
  Sub.prototype = prototype
}



