/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable max-len */

// --------------------------------------------------------------
// Soy Dalto Curso 1
// Números Impares
// --------------------------------------------------------------


console.log('working');
/* ---------------------- Mandato------------------------------------------ */

/*
    Un cliente llega a una Heladería, quiere comprar el helado mas caro con el dinero que tienen

    Soluciones Crear:

    - El programa debe pedir el monto del cliente y mostrarles el Helado que puedan comprar.
    - Si hay 2 o mas con el mismo precio, mostrar todos a la vez.
    - Mostrar el vuelto del cliente

    Paleta de Chinola: $0.6 USD
    Paleta de Chinola con Crema: $1 USD
    Barquilla de Una bola Vainilla: $1.6 USD
    Barquilla de Una bola Chocolate: $1.7 USD
    Bonito de Dos bolas con Mermelada: $1.8 USD
    Bonito de Tres bolas con Mermelada: $2.1 USD
    Cubeta 1/4 KG: $2.1 USD

*/

/* ---------------------- Ejercicio------------------------------------------ */
const cliente1 = prompt('Monto del Primer Cliente');
parseInt(cliente1, 10);

if (cliente1 >= 0.6 && cliente1 <= 1) {
  console.log(`Puedes Comprar: Paleta de Chinola por $0.6 USD y tu Vuelto es: ${cliente1 - 0.6}`);
} else if (cliente1 >= 1 && cliente1 <= 1.6) {
  console.log(`Puedes Comprar: Paleta de Chinola con Crema por $1 USD y tu Vuelto es: ${cliente1 - 1}`);
} else if (cliente1 >= 1.6 && cliente1 <= 1.7) {
  console.log(`Puedes Comprar: Barquilla de Una bola Vainilla: $1.6 USD y tu Vuelto es: ${cliente1 - 1.6}`);
} else if (cliente1 >= 1.7 && cliente1 <= 1.8) {
  console.log(`Puedes Comprar: Barquilla de Una bola Chocolate: $1.7 USD y tu Vuelto es: ${cliente1 - 1.7}`);
} else if (cliente1 >= 1.8 && cliente1 <= 2.1) {
  console.log(`Puedes Comprar: Bonito de Dos bolas con Mermelada: $1.8 USD y tu Vuelto es: ${cliente1 - 1.8}`);
} else if (cliente1 >= 2.1) {
  console.log(`Puedes Comprar: Bonito de Tres bolas con Mermelada: $2.1 USD o Cubeta 1/4 KG: $2.1 USD y tu Vuelto es: ${cliente1 - 2.1}`);
} else {
  console.log('No tienes fondos suficientes para Comprar');
}
