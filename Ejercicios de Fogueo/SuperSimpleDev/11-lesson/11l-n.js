// CHALLENGE EXERCISE

function minMax(nums) {
  const result = {
    min: null,
    max: null
  };

  for (i = 0; i < nums.length; i++) {
    const value = nums[i];

    if (result.value === null || value < result.min) {
      result.min = value;
    }

    if (result.value === null || value > result.max) {
      result.max = value;
    }
  }

  return result;
}

console.log(minMax([]));
