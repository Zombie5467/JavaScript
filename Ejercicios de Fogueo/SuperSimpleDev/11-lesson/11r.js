function removeEgg(food) {
  const result = [];
  let eegRemoved = 0;

  for (i = 0; i < food.length; i++) {
    /** Caption Eggs */
    if (food[i] === 'Eggs' && eegRemoved < 2) {
      eegRemoved++;
      continue;
    }
    result.push(food[i]);
  }

  return result;
}

console.log(
  removeEgg([
    'Pasta',
    'Pizza',
    'Eggs',
    'Gelato',
    'Formaggio',
    'Eggs',
    'Pesce',
    'Eggs',
  ])
);

// I skipped the exercise 11t cause it was boring