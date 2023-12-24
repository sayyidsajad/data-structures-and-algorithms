function bubbleSort(arr) {
  let swapped;
  let len = arr.length - 1;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
console.log(bubbleSort([8, 2, 4, 7, 5]));
