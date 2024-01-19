let arr = [1, 2, 3, 4, 5];
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] > arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  return arr;
}
console.log(insertionSort(arr));

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallest] > arr[j]) {
        smallest = j;
      }
    }
    if (smallest !== i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    }
  }
  return arr;
}
console.log(selectionSort(arr));

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let leftArr = [];
  let rightArr = [];
  let pivot = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
console.log(quickSort(arr));

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
  let sorted = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sorted.push(leftArr.shift());
    } else {
      sorted.push(rightArr.shift());
    }
  }
  return [...sorted, ...leftArr, ...rightArr];
}
console.log(mergeSort(arr));
