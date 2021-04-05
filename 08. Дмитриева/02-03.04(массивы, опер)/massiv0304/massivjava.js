//Zadanie 1
var a = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var i = 0;
while (i < a.length) {
  console.log(a[i++]);
}
alert(a);
//
//Zadanie 2

//zadanie 4
        for (let i = 0; i < 10; console.log(i++)) {}
alert(i)
//
//zadanie 5
function pyramid(n) {
  let result = '', str = '', add = 'x';
  for (var i = 0; i < n; i++) {
    str += add;
    add = 'x';
    if (!(i % 2)) result += str + '\n';
  }
  return result;
}

console.log(pyramid(20));
//