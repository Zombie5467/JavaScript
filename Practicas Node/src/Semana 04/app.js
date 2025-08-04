import express from "express";
import mongoose from "mongoose";
import router from "./routes/book.rutas.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
//----------------------------------------------------------------------------------

dotenv.config();
const app = express();

//----------------------------------------------------------------------------------

//usamos express para los middleware
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//----------------------------------------------------------------------------------

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_DB_URL, { dbName: process.env.MONGO_DB_NAME })
const db = mongoose.connection;

app.use('/books', router);
//----------------------------------------------------------------------------------

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Futurama, En vivo desde el puerto ${port}!`);
});
