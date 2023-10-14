function palindromo(texto){
    let invertido = texto.split('').reverse().join('')
    return invertido === texto                       
}
console.log("Es un palindromo? " + palindromo("amor") )
console.log("Es un palindromo? " + palindromo("murcielago") )
console.log("Es un palindromo? " + palindromo("aerea") )
console.log("Es un palindromo? " + palindromo("ojo") )
console.log("Es un palindromo? " + palindromo("radar") )
console.log("Es un palindromo? " + palindromo("orejero") )