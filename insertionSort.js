function insertionSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let j = i - 1;
    while (j >= 0 && arr[j] > arr[j + 1]) {
      [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      j--;
    }
  }
  return arr;
}
let arr = [-6, 5, 2, 0, 3];
console.log(insertionSort(arr));
