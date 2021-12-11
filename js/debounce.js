const debounce = (fn, delay) => {
  return function () {
    let timer = null;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      fn();
    }, delay);
  };
};
