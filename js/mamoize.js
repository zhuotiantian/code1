let count = 0;
let fabnacci = (n) => {
  count++;
  return n < 2 ? n : fabnacci(n - 2) + fabnacci(n - 1);
};

const mamoize = (fn, hasher) => {
  let mamoize = function (key) {
    let cache = mamoize.cache;
    let address = hasher ? hasher.apply(this, arguments) : key;
    if (!cache[address]) return (cache[address] = fn.apply(this, arguments));
    else return cache[address];
  };
  mamoize.cache = {};
  return mamoize;
};

fabnacci = mamoize(fabnacci);

for (var i = 0; i < 10; i++) {
  console.log(fabnacci(i));
}
console.log(count);
