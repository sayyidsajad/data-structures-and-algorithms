function linearSearch(nums, t) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === t) {
      return i;
    }
  }
  return -1;
}
const nums = [-5, 2, 5, 1, 9],
  t = 1;
console.log(linearSearch(nums, t));
