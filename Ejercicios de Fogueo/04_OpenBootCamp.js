/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable prefer-template */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */

// --------------------------------------------------------------
// Introducción a la programación
// OpenBootCamp
// --------------------------------------------------------------

/* Ejercicios tema 4

En este ejercicio practicarás las estructuras de control, para ello deberás crear:

Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
Pista: Los números inferiores a 0 son negativos y los superiores, positivos. */

const numeroIf = 2;
if (numeroIf >= 0) {
  console.log(numeroIf + ' es positivo');
} else {
  console.log('el numero es negativo');
}

/*
Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:

Incrementar el valor de la variable en uno cada vez que se ejecute.

Mostrarlo por pantalla cada vez que se ejecute. */

let numeroWhile = 0;

while (numeroWhile < 3) {
  numeroWhile++;
  console.log(numeroWhile);
}

/*
Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez. */

do {
  numeroWhile++;
} while (numeroWhile < 3);

/*
Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla. */

for (numeroFor = 0; numeroFor <= 3; numeroFor++) {
  console.log(numeroFor);
}

/*
Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación. */

const estacion = 'invierno';

switch (estacion) {
  case 'primavera':
    console.log('Llego la primavera');
    break;

  case 'vernano':
    console.log('en verano comemos helado');
    break;

  case 'otoño':
    console.log('otoño es la segunda primavera, cuando cada hoja es una flor');
    break;

  case 'invierno':
    console.log('invierno, merecido descanso y vistete de blanco');
    break;

  default:
    console.log('temperatura ambiente');
}
