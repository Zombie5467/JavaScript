// Crear Objetos Fecha a partir de Cadenas de Caracteres

cadenaFecha = 'May 28, 1993 13:15:17';
let fecha = new Date(cadenaFecha);
console.log(fecha);

//  Validar si una Variable es de Tipo Date

let x = new Date();
y = 'I love JavaScript';
z = 3.14;

if (x instanceof Date) {
  console.log('la variable x es un tipo date');
} else {
  console.log('la variable no es tipo date');
}

if (y instanceof Date) {
  console.log('la variable y es un tipo date');
} else {
  console.log('la variable no es tipo date');
}

if (z instanceof Date) {
  console.log('la variable z es un tipo date');
} else {
  console.log('la variable no es tipo date');
}
    