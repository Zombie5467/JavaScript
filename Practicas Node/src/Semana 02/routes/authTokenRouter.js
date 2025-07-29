import { Router } from "express";
import authApp from "../helpers/authApp.js";
const tokenRouter = Router();

//Login con Email y Password
tokenRouter.post("/login", (req, res) => {
  const { email, password } = req.body;
if (!email || !password) return res.sendStatus(400);

  try {
    const user = authApp(email, password);
    return res.send(`Usuario ${user.name} autenticado`);
  } catch (err) {
    return res.sendStatus(401);
  }
});

//Solicitud autenticada con token para obtener el perfil del usuario

export default tokenRouter;