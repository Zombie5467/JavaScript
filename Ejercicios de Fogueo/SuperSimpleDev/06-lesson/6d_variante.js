function discount(name, age) {
  if (age <= 6 || age >= 65) {
    console.log(`${name} have a Discotunt`);
  } else console.log(`${name} pay the full price for the ticket`);
}
discount('Jorgito', 5);
discount('Miguelito', 8);
discount('Jhonas', 18);
discount('Rogert', 65);
discount('Willian', 68);
