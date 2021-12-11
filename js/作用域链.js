var scope = "global scope";
// 1、checkscope函数被创建，保存作用域链到内部属性[[scope]]；
// checkscope[[scope]] = [globalContext.VO];
function checkscope() {
  // 3、checkscope不会立即执行，而是开始准备阶段
  // 3.1 复制函数[[scope]]属性创建作用域链
  // checkscopeContext = {
  //   Scope: checkscope[[scope]],
  // };
  // 3.2 利用arguments创建函数的活动对象，随后初始化活动对象加入形参、函数声明、变量声明
  // checkscopeContext = {
  //   AO: {
  //     arguments: {
  //       length: 0,
  //     },
  //     scope2: undefined,
  //   },
  //   Scope: checkscope[[scope]],
  // };
  // 3.3 将AO压入checkscope作用域顶端
  // checkscopeContext = {
  //   AO: {
  //     arguments: {
  //       length: 0,
  //     },
  //     scope2: undefined,
  //   },
  //   Scope: [AO, [[scope]]],
  // };
  //3.4 准备工作完成，开始执行函数，随着函数的执行修改AO的属性值
  // checkscopeContext = {
  //   AO: {
  //     arguments: {
  //       length: 0,
  //     },
  //     scope2: "local scope",
  //   },
  //   Scope: [AO, [[scope]]],
  // };
  var scope2 = "local scope";
  return scope2;
}
// 4、函数执行完毕之后，函数从执行上下文中出栈
ECstack = [globalContext];

// 2、执行checkscope函数，创建函数执行上下文
// checkscope[[scope]] = [checkscopeContext, globalContext];
checkscope();

/**
 * 1、创建函数时，将作用域链保存在函数内部属性[[scope]]中
 * 2、函数被执行，创建函数执行上下文，并压入执行上下文栈的栈顶；
 * 3、函数开始进入执行前的准备阶段，将作用域链复制到函数执行上下文中，使用arguments创建AO，随后初始化AO，加入形参、函数声明、变量声明
 * 4、将AO压入作用域链的顶端
 * 5、执行函数，随着函数的执行修改AO的值
 * 6、函数执行完毕，将函数上下文弹出执行上下文栈中
 *
 */
