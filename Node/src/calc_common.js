// usando common js modules.
// node esta transaccionando los módulos build in ECMAScript.
process.stdin.on('data', (chunk) => {
    const input = chunk.toString().trim();

    if(input === 'quit'){
        process.exit(0);
    }
    try {
        const value = eval(input);
        console.log(`${value}`);
    } catch (exception) {
        console.log('datos inválidos');
    }
    process.stdout.write('Introduce la ecuación: ');
});

process.stdout.write('Introduce la ecuación: ');

// commit 1 practica con path.
// commit 2 calculadora usando common.
// push y ver si se refleja el cambio en el repo como js o como node.