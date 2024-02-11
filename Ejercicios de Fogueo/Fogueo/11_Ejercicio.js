// Promocionar Valores a Tipo Cadena de Caracteres (String)

console.log(String(5));
console.log(String(true));
console.log(String(false));
console.log(String(null));
console.log(String(undefined));
console.log(String(/alv/));

let objeto = { nombre: 'Silvia Mario', id: 123456 }
console.log(String(objeto));

let numeros = [2, 4, 6, 8];
console.log(String(numeros));

let sumar = (a, b) => { return a + b };
console.log(String(sumar));

let objeto2 = { toString: function () { return 'hello!' } };
console.log(String(objeto2));