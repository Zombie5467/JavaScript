/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */

// --------------------------------------------------------------
// Introducción a la programación
// OpenBootCamp
// --------------------------------------------------------------

/* Primera parte:

Crear una función con tres parámetros que sean números que se suman entre sí.

Llamar a la función en el main y darle valores.

*/

// const num1 = '';
// const num2 = '';
// const num3 = '';

function sumar(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

sumar(3, 3, 3);
// -------------------------------------------------------------------------
/* Segunda parte:

Crear una clase coche.

Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.

Una función que incremente el número de puertas que tiene el coche.

Crear un objeto miCoche en el main y añadirle una puerta.

Mostrar el número de puertas que tiene el objeto.

*/

class Coche {
  constructor() {
    this._doors = 0;
  }

  incrementarPuertas() {
    this._doors++;
  }
}

/* objeto mi coche */
const miCoche = new Coche();

miCoche.incrementarPuertas();

// eslint-disable-next-line prefer-template
console.log('Número de puertas del coche: ' + miCoche._doors);
