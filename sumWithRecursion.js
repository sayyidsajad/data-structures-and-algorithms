let n = 0;
function sumRecursion(arr) {
  if (arr.length === 0) {
    return n;
  }
  n += arr.pop();
  return sumRecursion(arr);
}
let arr = [1, 2, 3, 4, 5];
console.log(sumRecursion(arr));
