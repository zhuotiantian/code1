var rotate = function (matrix) {
  for (var i = 0, len = matrix.length; i < len; i++) {
    for (var j = i; j < len; j++) {
      var temp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  };
  for (var i = 0; i < matrix.length; i++) {
    matrix[i] = matrix[i].reverse();
  };
};
rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
