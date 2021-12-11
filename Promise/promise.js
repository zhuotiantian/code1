const PROMISE_STATES = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

// 判断目标是否是一个对象
function isObject(val) {
  return val && typeof val === "object";
}

function isPromise(val) {
  return val instanceof MyPromise;
}

/**
 * promise的回调必须在执行上下文栈只包含platform code时执行
 * 所以可以用微任务实现
 */
function nextTick(callback) {
  const observer = new MutationObserver(callback);
  const textNode = document.createTextNode("1");
  observer.observe(textNode, {
    characterData: true,
  });
  textNode.data = "2";
}

function resolve() {}

function reject() {}

class MyPromise {
  constructor(executor) {
    this.state = PROMISE_STATES.PENDING;
    this.fulfillQueue = [];
    this.rejectQueue = [];
    // 构造Promise实例后，立刻调用executor
    executor(resolve.bind(this), reject.bind(this));
  }
  then(onFulfilled, onRejected) {
    // 需要返回一个新的promise实例，供链式调用
    const promise2 = new MyPromise(() => {});

    if (this.state === PROMISE_STATES.FULFILLED) {
      nextTick(() => {
        try {
          if (typeof onFulfilled === 'function') {
            const result = onFulfilled(this.value);
            
          }
        }
      })
    }
  }
}
