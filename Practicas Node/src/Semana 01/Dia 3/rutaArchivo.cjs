// Día 3: Módulos en Node.js
//Usando Path

//para usar require tuve que cambiar la extension del archivo de .js a .cjs
const path = require("path");
// import path from "path";

// Ruta absoluta del archivo actual
console.log("texto.tsx:", __filename);

// Directorio del archivo actual
console.log("texto.tsx:", __dirname); 

// Obtener solo el nombre del archivo
console.log("texto.tsx:", path.basename(__filename));

// Obtener solo la extensión del archivo
console.log("texto.tsx:", path.extname(__filename));

// Obtener el directorio base
console.log("texto.tsx:", path.dirname(__filename));

// Crear una ruta uniendo segmentos
const nuevaRuta = path.join(__dirname, "carpeta_path", "archivo.txt");
console.log("Ruta creada:", nuevaRuta);
