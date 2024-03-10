searchString = ['Cane', 'Sole', 'Gelato', 'Search', 'Libro', 'Mare'];

index = -1;

// 11p is a 'break' exercise, for now I don't need that.

function findIndex(array, word) {
               // array[i].length;
  for (i = 0; i < array.length; i++) {
    if (array[i] === word) {
      index = i;
    }
  }
  console.log(index);
}

findIndex(searchString, 'Mare');
