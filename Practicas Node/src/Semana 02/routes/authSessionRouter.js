import { Router } from "express";
import { nanoid } from "nanoid"; // Importamos nanoid para generar GUIDs
import authApp from "../helpers/authApp.js";
import { USERS_BBDD } from "../bbdd.js";

const sessions = []; // Array para almacenar las sesiones
const sessionRouter = Router();

//Login con Email y Password
sessionRouter.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.sendStatus(400);

  try {
    const { guid } = authApp(email, password);

    const sessionId = nanoid();
    sessions.push({ sessionId, guid }); // Guardamos la sesión

    res.cookie("sessionId", sessionId, {
      httpOnly: true, // Para que no sea accesible desde JavaScript
    });
    return res.send();
  } catch (err) {
    return res.sendStatus(401);
  }
});

//Solicitud autenticada con token para obtener el perfil del usuario
sessionRouter.get("/profile", (req, res) => {
  const { cookies } = req;
  if (!cookies.sessionId) return res.sendStatus(401);
  const userSession = sessions.find(
    (session) => session.sessionId === cookies.sessionId
  );
  if (!userSession) return res.sendStatus(401);
  const user = USERS_BBDD.find(user => user.guid === userSession.guid);
  if (!user) return res.sendStatus(401);
  delete user.password; // Eliminamos la contraseña del usuario antes de enviarlo
  return res.send(user);
});

export default sessionRouter;
