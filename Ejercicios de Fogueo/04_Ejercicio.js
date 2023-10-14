// --------------------------------------------------------------
// Ejercicio 4: Calcular la suma de los elementos de un arreglo.
// Variante 1 ciclo for
// --------------------------------------------------------------

function sumarValores(array) {
  let suma = 0;
  for (i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma;
}

sumarValores([10, 10, 10, 10, 10]);
