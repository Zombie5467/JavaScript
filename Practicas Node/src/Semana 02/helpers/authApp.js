import { USERS_BBDD } from "../bbdd.js";


const authApp = (email, password) => {
  const user = USERS_BBDD.find((user) => user.email === email);
  if (!user) {
    console.log("❌ Usuario no encontrado:", email);
    throw new Error("Usuario no encontrado");
  }

  if (user.password !== password) {
    console.log("❌ Contraseña incorrecta:", password);
    console.log("🔐 Contraseña esperada:", user.password);
    throw new Error("Contraseña incorrecta");
  }

  return user;
};


export default authApp;