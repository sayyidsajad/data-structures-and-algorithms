function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let leftArr = [];
  let rightArr = [];
  let pivot = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
let arr = [-6, 5, 2, 0, 3];
console.log(quickSort(arr));
