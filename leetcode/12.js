var intToRoman = function (num) {
  var number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", 'X', "IX", "V", "IV", "I"],
    index = 0,
    str = "";
  while (num > 0) {
    var count = Math.floor(num / number[index]);
    while (count > 0) {
      str += roman[index];
      count--;
    };
    num %= number[index];
    index++;
  };
  return str
};
console.log(intToRoman(1994));
