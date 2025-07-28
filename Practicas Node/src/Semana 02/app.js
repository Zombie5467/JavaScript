/**
     * Ejercicio: Crea un servidor con Express.js que tenga una ruta GET /
     * que responda "Bienvenido a mi API".
     * Este era el ejercicio del dia 6 que paso a ser del 7
     * Ejercicio: Agrega rutas para manejar POST y DELETE.
 */

import express from "express";
import dotenv from "dotenv";
import { USERS_BBDD } from "./bbdd.js"; // Importamos la base de datos de usuarios

dotenv.config(); // Importamos dotenv para manejar variables de entorno
const PORT = 3000;
const expressApp = express(); // Este express() es el mismo que importamos mas arriba.
expressApp.use(express.json()); // Middleware para parsear JSON
expressApp.use(express.text()); // Middleware para parsear texto

//----------------------------------------------------------------------------------

// Obtener los detalles de una cuenta
// Usamos get para obtener los datos del usuario a traves de su id (guid)
expressApp.get('/account/:guid', (req, res) => {
    const {guid} = req.params;
    const user = USERS_BBDD.find(user => user.guid === guid);

    if(!user) return res.status(404).send();

    return res.send(user);
});

//----------------------------------------------------------------------------------

//Crear una cuenta nueva a partir de guid y name
expressApp.post('/account', (req, res) => {
    const {guid, name } = req.body;

    if(!guid || !name) return res.status(400).send();

    const user = USERS_BBDD.find((user) => user.guid === guid);
    if (user) return res.status(409).send();

    USERS_BBDD.push({
        guid,
        name,
    });

    return res.send();
});

//----------------------------------------------------------------------------------

//Actualizar el nombre de una cuenta
expressApp.patch('/account/:guid', (req, res) => {
    const {guid} = req.params;
    const {name} = req.body;

    if(!name) return res.status(400).send();
    const user = USERS_BBDD.find((user) => user.guid === guid);

    if(!user) res.status(404).send();

    user.name = name; // Actualizamos el nombre del usuario
    return res.send(user); // Devolvemos el usuario actualizado

});

//----------------------------------------------------------------------------------

//Eliminar una cuenta
expressApp.delete('/account/:guid', (req, res) => {
    const {guid} = req.params;
    const userIndex = USERS_BBDD.findIndex((user) => user.guid === guid);

    if(userIndex === -1) return res.status(404).send();

    USERS_BBDD.splice(userIndex, 1); // Elimina el usuario del array
    return res.send();

});

//----------------------------------------------------------------------------------

expressApp.listen(PORT, () => {
  console.log(`Servidor escuchando en ${PORT}`);
});

console.log("World, hold on!"); // Mensaje de consola para indicar que el servidor está corriendo
