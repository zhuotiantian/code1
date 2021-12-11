function test(a, b) {
  console.log(b);
  return {
    test: function(c) {
      return test(c, a);
    }
  };
}
// var a = test(100, 200);
// a.test(300);
// a.test(400);

test(100)
  .test(200)
  .test(300);

var a = test(100).test(200);
a.test(300);
