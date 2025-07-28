// Ejercicio: Crea un servidor con Express.js que tenga una ruta GET /
// que responda "Bienvenido a mi API".

//Este era el ejercicio del dia 6 que paso a ser del 7

import express from "express";

const PORT = 3000;
const expressApp = express(); // Este express() es el mismo que importamos mas arriba.

expressApp.use(express.json()); // Middleware para parsear JSON
expressApp.use(express.text()); // Middleware para parsear texto

//Obtener los detalles de una cuenta

//Crear una cuenta

//Actualizar una cuenta

//Eliminar una cuenta

expressApp.listen(PORT, () => {
  console.log(`Servidor escuchando en ${PORT}`);
});

console.log("World, hold on!");