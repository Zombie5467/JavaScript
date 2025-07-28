// Dado un numero, mostrar una escalera con escalones de "[-]" de la altura del número.
// Ejemplo: si el número es 3, 
// la escalera será:
// [-]
// [-][-]
// [-][-][-]

function mostrarEscalera(n) {
    for (let i = 1; i <= n; i++) {
        console.log('[-]'.repeat(i));
    }
}

mostrarEscalera(3); // [-] \n [-][-] \n [-][-][-]