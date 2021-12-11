// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
// Point.prototype.getPosition = function() {
//   return "(" + this.x + "," + this.y + ")";
// };
// var p1 = new Point(2, 3);
// console.log(p1);
// console.log(p1.getPosition());

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static getPosition() {
    return `(${this.x},${this.y})`;
  }
  getStaticFunction() {
    super.getPosition();
  }
}
const p1 = new Point(2, 3);
console.log(p1);
console.log(p1.getStaticFunction());
