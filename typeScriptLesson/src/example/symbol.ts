//symbol被用来表示独一无二的值
const s = Symbol();
const s2 = Symbol();

//symbol值做为对象的属性，无法通过对象的操作方法进行枚举，
// 需要通过Object.getOwnPropertySymbols
//或者Reflect.ownKeys()进行枚举

//symbol的方法
//1.Symbol.for()  先在全局搜索是否有使用当前参数创建的symbol值。若有则返回该值
// 若没有则创建一个新的symbol值
const s8 = Symbol.for('lison');
const s9 = Symbol.for('lison');
const s10 = Symbol.for('haha');
//s8===s9;//true    s9===s10;//false

// 2.Symbol.keyFor()接收一个Symbol.for创建的Symbol值作为参数，返回该参数的符号
// console.log(Symbol.keyFor(s10)); //haha

// 11个内置的Symbol值
//1. Symbol.hasInstance
// Symbol.hasInstance属性指向一个内部方法，
// 当其他对象使用instanceof运算符时，会调用这个方法

class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof MyArray);
