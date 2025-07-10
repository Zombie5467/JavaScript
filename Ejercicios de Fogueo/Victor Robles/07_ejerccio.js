// --------------------------------------------------------------
// Dado dos números, devolver cuántos números IMPARES hay entre ellos.
// --------------------------------------------------------------

function verificarImpares(num1, num2) {
    let contador = 0;
    for (let i = num1; i <= num2; i++) {
        if (i % 2 !== 0) {
            contador++;
        }
    }
    return contador;
}

console.log(verificarImpares(100, 10));



/**
 * Nota personalbar
 *
 * Las funciones que devuelven valores necesitan que ese valor sea usado o mostrado en algún lado.
 *
 * Llamar a la función sin console.log no muestra nada, aunque esté devolviendo datos.
 */