function recursiveBinarySearch(arr, target, leftIdx, rightIdx) {
  return search(arr, target, leftIdx, rightIdx);
}
function search(arr, target, leftIdx, rightIdx) {
  if (leftIdx > rightIdx) {
    return -1;
  }
  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  if (target === arr[middleIdx]) return middleIdx;
  if (target < arr[middleIdx]) {
    return search(arr, target, leftIdx, middleIdx - 1);
  } else {
    return search(arr, target, middleIdx + 1, rightIdx);
  }
}
let arr = [1, 2, 3, 4, 5],
  target = 5;
console.log(recursiveBinarySearch(arr, target, 0, arr.length - 1));
