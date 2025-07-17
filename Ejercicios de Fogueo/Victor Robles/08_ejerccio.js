//Dado un numero entero, inviértelo y devuelve el resultado. Por ejemplo, si le pasamos 12345, nos devolverá 54321.

function invertirNumero(n) {
    const reverso = [];
    const numStr = n.toString();
    //El array reverso se utiliza para almacenar los dígitos del número en orden inverso.
    
    for (let i = numStr.length - 1; i >= 0; i--) {
        reverso.push(numStr[i]);
        //ahora usamos el array para devolver el número invertido.
    }
    return parseInt(reverso.join(''), 10);
}

console.log(invertirNumero(12345)); // 54321







// Version alternativa utilizando métodos de cadena:

function reverseNumber(n) {
const reversed = n.toString().split('').reverse().join('');
return parseInt(reversed, 10);
}

console.log(reverseNumber(24)); // 42