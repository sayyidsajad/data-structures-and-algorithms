function binarySearch(nums, target) {
  let leftIdx = 0;
  let rightIdx = nums.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (target === nums[middleIdx]) return middleIdx;
    if (target < nums[middleIdx]) {
      rightIdx = middleIdx - 1;
    } else {
      leftIdx = middleIdx + 1;
    }
  }
  return -1;
}
console.log(binarySearch([1], 1));
