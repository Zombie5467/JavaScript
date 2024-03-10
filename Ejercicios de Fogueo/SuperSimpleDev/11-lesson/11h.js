function addOne(array) {
  const result = [];

  for (i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
  }

  return result;
}

console.log(addOne([10,20,30,40]));
