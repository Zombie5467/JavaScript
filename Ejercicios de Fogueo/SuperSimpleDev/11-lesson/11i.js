function addNum(array, num) {
    const result = [];

    for (i = 0; i < array.length; i++) {
      result.push(array[i] + num);
    }

    return result;
}

console.log(addNum([10, 20, 30, 40], 2));