async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  return new Promise((resolve) => {
    console.log("async2 start");
    resolve();
  })
    .then(() => {
      console.log("async2 promise");
      return;
    })
    .then(() => {
      console.log("async2 promise 2");
    });
  // return Promise.resolve().then((_) => {
  //   console.log("async2 promise");
  // });
}
async1();

//async 函数的实现原理   generator函数加自动执行器
function spawn(genF) {
  return new Promise(function (resolve, reject) {
    const gen = genF();
    function step(nextF) {
      let next;
      try {
        next = nextF();
      } catch (e) {
        return reject(e);
      }
      if (next.done) {
        return resolve(next.value);
      }
      Promise.resolve(next.Value).then(
        function (v) {
          step(function () {
            return gen.next(v);
          });
        },
        function (e) {
          step(function () {
            return gen.throw(e);
          });
        }
      );
    }
    step(function () {
      return gen.next(undefined);
    });
  });
}
