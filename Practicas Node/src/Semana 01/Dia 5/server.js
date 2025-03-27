// 📌 Día 5 - Parte 2: Creando un Servidor en Node.js y HTTP
//Nota, la parte 1 en realidad es el dia 4.

// 🔹 Ejercicio:
// Crea un servidor HTTP que devuelva "Hola, mundo!" en la ruta raíz.

import {createServer} from 'http';

const httpServer = createServer((req, res) => {
 console.log('Petición recibida');
  res.end('Hola, mundo!');
});

httpServer.listen(3000);