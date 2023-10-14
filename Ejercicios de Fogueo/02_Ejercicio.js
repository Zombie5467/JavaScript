// --------------------------------------------------------------
// Ejercicio 2: Revertir una cadena de texto.
// Variante 1
// --------------------------------------------------------------

function revertirCadena(cad) {
  let cadenaTexto = '';

  for (let i = cad.length - 1; i >= 0; i--) {
    cadenaTexto += cad[i];
  }
  return cadenaTexto;
}

revertirCadena('hola');
