// import { a } from "./b";
// import * as info from "./b";

// 导出的接口不可见
// import * as AInfo from "./a";

// 适合全局作用的代码逻辑
// import "./a";

// import name from "./c";
// console.log(name);
// import name = require("./c");
// console.log(name);

// 命名空间  namespace

/// <reference path="./letter-validation.ts" />
/// <reference path="./number-validation.ts" />
const isLetter = Validation.checkLetter("abc");
console.log(isLetter);
