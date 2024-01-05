function findSumPair(arr, sum) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === sum) {
      return [left, right];
    } else if (currentSum < sum) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}
console.log(findSumPair([1, 2, 3, 4, 5], 6));
