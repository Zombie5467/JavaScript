// Comprobar si una Variable es de Tipo de Dato String

a = String('I Love Javascript');
b = 'ES6';
c = new Date();
d = 5;

// Averiguar si una Variable Definida es de Tipo de Dato Numérico

w = 5.3;
x = Number('3.14');
y = '';
z = new Date();


if (typeof a === 'string') {
    console.log('la variable a es un string')
} else {
    console.log('la variable no es string')
}

if (typeof b === 'string') {
  console.log('la variable b es un string');
} else {
  console.log('la variable no es string');
}

if (typeof c === 'string') {
  console.log('la variable c es un string');
} else {
  console.log('la variable no es string');
}

if (typeof d === 'string') {
  console.log('la variable d es un string');
} else {
  console.log('la variable no es string');
}

if (typeof w === 'number') {
  console.log('la variable w es un number');
} else {
  console.log('la variable no es number');
}

if (typeof x === 'number') {
  console.log('la variable x es un number');
} else {
  console.log('la variable no es number');
}

if (typeof y === 'number') {
  console.log('la variable y es un number');
} else {
  console.log('la variable no es number');
}

if (typeof z === 'number') {
  console.log('la variable z es un number');
} else {
  console.log('la variable no es number');
}