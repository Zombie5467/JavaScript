//Día 2: GLOBAL vs WINDOW 🌎 Objetos globales en Node.js

// process proporciona información sobre el entorno de ejecución de Node.js.

// process es un objeto global en Node.js que proporciona información sobre el proceso en ejecución.

// cwd() es un método de process que significa "Current Working Directory" (Directorio de Trabajo Actual).

// process.cwd() devuelve la ruta absoluta del directorio desde el cual se ejecutó el script.

console.log("Ruta de ejecución:", process.cwd());
console.log("Variables de entorno:", process.env);
