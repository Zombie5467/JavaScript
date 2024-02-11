// ---------------------------------------------------------------------------
// Variante 2 con operador spread (usa la longitud de valores que le pasemos)
// ---------------------------------------------------------------------------
function numeroMayorOtro(...numeros) {
  return Math.max(...numeros);
}

console.log(numeroMayorOtro(5, 6, 70, 8)); // Ejemplo con 4 valores
console.log(numeroMayorOtro(10, 20, 30)); // Ejemplo con 3 valores
console.log(numeroMayorOtro(100, 200)); // Ejemplo con 2 valores
