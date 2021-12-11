// runtime+compile：可以在js文件中使用template
// runtime-only：只能在.vue文件中使用template，轻量

module.exports = {
  runtimeCompiler: true, // 配置项目构建方式   true: runtime+compiler(完整版)  false: runtime-only
};
