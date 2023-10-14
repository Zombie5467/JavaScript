// --------------------------------------------------------------
// FreeCodeCamp Es
// Números pares de un arreglo con Ciclo for
// --------------------------------------------------------------

function contarNumerosPares(arreglo) {
  var total = 0;

  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
      total++;
    }
  }
  return total;
}
console.log(contarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
