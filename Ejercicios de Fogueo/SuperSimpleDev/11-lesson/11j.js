function addArrays(array1, array2) {
  const result = [];

  for (i = 0; i < array1.length; i++) {
    result.push(array1[i] + array2[i]);
  }

  return result;
}

console.log(addArrays([10, 20, 30, 40], [2, 2, 2, 2]));
