function countUnitsInBinary(a) {
  let count = 0;
  while (a > 0) {
    count += a & 1;
    a >>= 1;
  }
  return count;
}
const result = countUnitsInBinary(255);
console.log(result);
