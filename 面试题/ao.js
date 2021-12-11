function bar () {
  return foo;
  foo = 10;
  function foo () {}
  var foo = 11;
}
// console.log (bar ());

// console.log (bar ());
function bar () {
  foo = 11;
  function foo () {}
  var foo = 10;
  return foo;
}

var f = (function f () {
  return '1';
}, function g () {
  return 2;
}) ();

function demo () {
  var arr = [];
  for (var i = 0; i < 10; i++) {
    // arr[i] = (function (i) {
    //   return function () {
    //     console.log (i);
    //   };
    // }) (i);

    (function (j) {
      arr[j] = function () {
        console.log (j);
      };
    }) (i);
  }
  return arr;
}
var resultArr = demo ();
for (var i = 0; i < resultArr.length; i++) {
  // resultArr[i] ();
}
