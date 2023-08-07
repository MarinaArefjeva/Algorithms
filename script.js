//1

let arr = [1, 5, 10, 20, 34, 40, 66, 100, 112, 134];
let max = Math.max(...arr);

console.log(max);
//2
function palindrome(str) {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
}
console.log(palindrome("шалаш"));
console.log(palindrome("дерево"));
console.log(palindrome("дед"));
console.log(palindrome("Анна"));
console.log(palindrome("мороз"));
