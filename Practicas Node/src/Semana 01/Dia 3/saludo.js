export function saludar(nombre){
    return `Hola ${nombre}! bienvenid@ a Node.`;
}

export default saludar;


// usando exports
function saludar(nombre) {
    return `Hola, ${nombre}! Bienvenido a Node.js`;
}

module.exports = saludar; // Exportando la función
