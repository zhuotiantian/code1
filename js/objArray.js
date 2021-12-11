let obj = [
  { id: 1, name: "111" },
  { id: 2, name: "222" },
  { id: 3, name: "333" },
  { id: 1, name: "111" }
];

const uniqueObj = obj.reduce((total, next) => {
  let ids = total.map(e => e.id);
  return ids.includes(next.id) ? total : [next, ...total];
}, []);
console.log(...uniqueObj);
