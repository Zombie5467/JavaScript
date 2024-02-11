
function sacarPorciento(porcentaje, numero){
    let operacion = (numero*(porcentaje / 100))
    let resultado = `El ${porcentaje}% de ${numero} es ${operacion}`

    return resultado;
}

console.log(sacarPorciento(20, 100))
console.log(sacarPorciento(30, 400))
console.log(sacarPorciento(80, 11100))
console.log(sacarPorciento(2, 500))
console.log(sacarPorciento(3, 10))
console.log(sacarPorciento(6, 20))