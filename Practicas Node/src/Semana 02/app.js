/**
     * Ejercicio: Crea un servidor con Express.js que tenga una ruta GET /
     * que responda "Bienvenido a mi API".
     * Este era el ejercicio del dia 6 que paso a ser del 7
     * Ejercicio: Agrega rutas para manejar POST y DELETE.
 */

import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser"; // Importamos cookie-parser para manejar cookies
import accountRouter from "../Semana 02/routes/account.js"; // Importamos las rutas de cuenta
import authRouter from "../Semana 02/routes/auth.js"; // Importamos las rutas de autenticación
import sessionRouter from "./routes/authSessionRouter.js";
import tokenRouter from "./routes/authTokenRouter.js";
//----------------------------------------------------------------------------------

dotenv.config(); // Importamos dotenv para manejar variables de entorno
const PORT = process.env.PORT || 3000;
const expressApp = express(); // Este express() es el mismo que importamos mas arriba.

//----------------------------------------------------------------------------------

//Usando endpoints
expressApp.use(cookieParser()); // Middleware para manejar cookies
expressApp.use(express.json()); // Middleware para parsear JSON
expressApp.use(express.text()); // Middleware para parsear texto
expressApp.use( "/account", accountRouter); // un path principal para usar router
expressApp.use("/auth", authRouter); // Usamos el router de autenticación
expressApp.use("/auth-token", tokenRouter); // Usamos el router de token
expressApp.use("/auth-session", sessionRouter); // Usamos el router de sesión

//----------------------------------------------------------------------------------

expressApp.listen(PORT, () => {
  console.log(`Servidor escuchando en ${PORT}`);
});

console.log("World, hold on!"); // Mensaje de consola para indicar que el servidor está corriendo
