import { Router } from "express";
import authApp from "../helpers/authApp.js";
//----------------------------------------------------------------------------------

const authRouter = Router();
// Endpoint publico (no autenticado y no autorizado)
authRouter.get("/publico", (req, res) => res.send("Endpoint Publico"));

//----------------------------------------------------------------------------------

// Endpoint autenticado para todo tipo de usuarios registrados
authRouter.post("/autenticado", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.sendStatus(400);

  try {
    const user = authApp(email, password);
    return res.send(`Usuario ${user.name} autenticado`);
  } catch (err) {
    return res.sendStatus(401);
  }
});

//----------------------------------------------------------------------------------

// Endpoint autorizado a administradores
authRouter.post("/autentizado", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.send(400);
  try {
    const user = authApp(email, password);
    if (user.role !== "admin") return res.send(403);
    return res.send(`Usuario Administrador ${user.name}`);
  } catch (err) {
    return res.sendStatus(401);
  }
});

export default authRouter;
