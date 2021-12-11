const light = function (color, second) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(color);
      resolve();
    }, second * 1000);
  });
};

const orderLights = function (list) {
  let promise = Promise.resolve();
  list.forEach((item) => {
    p;
    promise = promise.then(() => {
      return light(item.color, item.second);
    });
  });
};

orderLights([
  {
    color: "red",
    second: 3,
  },
  {
    color: "green",
    second: 2,
  },
  {
    color: "yellow",
    second: 1,
  },
]);
