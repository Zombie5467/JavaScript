import { Router } from "express";
import { SignJWT, jwtVerify } from "jose"; // Importamos SignJWT y jwtVerify de jose
import { USERS_BBDD } from "../bbdd.js";
import authApp from "../helpers/authApp.js";
import dotenv from "dotenv"; // Importamos dotenv para manejar variables de entorno

dotenv.config();
console.log("🔍 Clave cargada desde .env:", process.env.YOUR_SECRET_KEY);

const tokenRouter = Router();

//Login con Email y Password
tokenRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const { guid } = authApp(email, password);
    console.log("Email y password recibidos:", email, password);
    console.log("GUID generado:", guid);

    // 🧪 Verificamos la clave secreta
    console.log(
      "Clave secreta usada para firmar:",
      process.env.YOUR_SECRET_KEY
    );

    const secret = process.env.YOUR_SECRET_KEY;

    if (!secret) {
      console.error(
        "❌ No se encontró la clave secreta en process.env.YOUR_SECRET_KEY"
      );
      return res.sendStatus(500);
    }

    //GENERAR TOKEN Y DEVOLVER TOKEN
    const jwtConstructor = new SignJWT({ guid: guid });
    //QUITAR EL toString

    const encoder = new TextEncoder();
    const jwt = await jwtConstructor
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(encoder.encode(process.env.YOUR_SECRET_KEY));
    console.log("Secret key:", process.env.YOUR_SECRET_KEY);
    return res.send({ jwt });
  } catch (err) {
    return res.sendStatus(401);
  }
});

//Solicitud autenticada con token para obtener el perfil del usuario
tokenRouter.get("/profile", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) return res.sendStatus(401);

  try {
    const encoder = new TextEncoder();
    const { payload } = await jwtVerify(
      authorization,
      encoder.encode(process.env.YOUR_SECRET_KEY)
    );

    const user = USERS_BBDD.find((user) => user.guid === payload.guid);

    if (!user) return res.sendStatus(401);

    delete user.password;

    return res.send(user);
  } catch (err) {
    return res.sendStatus(401);
  }
});

export default tokenRouter;


/**
 * NOTA PERSONAL:
 * Este archivo se modifico varias veces pero al final el problema no era la lógica,
 * sino que debía mover el archivo .env a la carpeta src/ porque se supone que es la carpeta raíz del proyecto.
 * Podría volver a poner el codigo justo como estaba antes de mover el archivo .env, pero no me veo en la necesidad de hacerlo por ahora.
 * Si en algún momento necesito volver a la versión anterior, puedo hacerlo sin problemas.
 * Ruta raiz: en teoría debería ser la carpeta Practicas Node, pero como el servidor se ejecuta desde la carpeta src, la ruta raiz es src.
 * Por lo tanto, el archivo .env debe estar en la carpeta src/ para que las variables de entorno se carguen correctamente.
 * Desde ahí hago npm run dev y el servidor se ejecuta correctamente. Quizás por esto tengo dos archivos package.json, uno en la carpeta Practicas Node y otro en la carpeta src.
 * 
 * 
 * dotenv.config() carga el archivo .env desde donde estás ejecutando tu script
Por defecto, dotenv busca el archivo .env en el directorio actual de ejecución, que normalmente es la raíz del proyecto, o el directorio donde ejecutas npm run dev.

📌 Si .env está en otra carpeta, como src/semana 02/, entonces no se encuentra automáticamente, a menos que tú le digas exactamente dónde está:
require('dotenv').config({ path: './src/semana 02/.env' });

 */