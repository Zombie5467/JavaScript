function countPositive(nums) {
  let result = 0;

  for (i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        result++
    }
  }

  return result;
}

console.log(countPositive([10, -20, 30, -40, 50]));
