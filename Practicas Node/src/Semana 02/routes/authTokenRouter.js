import { Router } from "express";
import { SignJWT } from "jose"; // Importamos jsonwebtoken para manejar tokens
import { jwtVerify } from "jose"; // Importamos jsonwebtoken para manejar tokens
import { USERS_BBDD } from "../bbdd.js";
import authApp from "../helpers/authApp.js";

const tokenRouter = Router();

//Login con Email y Password
tokenRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.sendStatus(400);

  try {
    const { guid } = authApp(email, password);

    //generar un token y devolverlo
    const jwtConstructor = new SignJWT({ guid });

    const encoder = new TextEncoder();
    const jwt = await jwtConstructor
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("1h") // El token expira en 1 hora
      .sign(encoder.encode(process.env.YOUR_SECRET_KEY)); // Reemplaza con tu clave secreta

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
    // console.log(jwData);
    // obtener el token de cabecera y comprobar su autenticidad y caducidad
    const user = USERS_BBDD.find((user) => user.guid === payload.guid);

    if (!user) return res.sendStatus(401);

    delete user.password; // Eliminamos la contraseña del usuario antes de enviarlo

    return res.send(user);
  } catch (err) {
    return res.sendStatus(401); // Si el token no es válido, devolvemos 401
  }
});

export default tokenRouter;
