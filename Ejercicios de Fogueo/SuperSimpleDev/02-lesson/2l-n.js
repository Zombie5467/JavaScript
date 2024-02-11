// --------------------------------------------------------------
// Ejercicios l & n: Convertir grados Celsius a Fahrenheit.
// --------------------------------------------------------------

function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(25));
console.log(celsiusToFahrenheit(-5));


// Ejercicios m: Convertir grados Fahrenheit a Celsius.
// --------------------------------------------------------------

function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}

console.log(fahrenheitToCelsius(86))