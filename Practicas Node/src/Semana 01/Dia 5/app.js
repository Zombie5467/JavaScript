// Día 5 - Parte 3: Request y Response en Node.js
// Ahora agregaremos manejo de diferentes métodos HTTP (GET, POST, DELETE) en el servidor.
//Nota, la parte 1 en realidad es el dia 4.

// 🔹 Ejercicio:
// 1️⃣ Modifica el servidor para manejar distintos métodos HTTP.
// 2️⃣ Responde con mensajes diferentes según el método recibido.
// 3️⃣ Procesa datos enviados en un POST.

// const http = require('http');
import {createServer} from 'http';
import http from 'http';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/plain');
     
    if (req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({message: 'Bienvenido al servidor Node.js'}));
    }
    else if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        })

        req.on('end', () => {
            res.writeHead(200);
            res.end(JSON.stringify({message: `Datos recibidos: ${body}`}));
        })
    }
    else if (req.method === 'DELETE') {
        res.writeHead(200);
        res.end(JSON.stringify({message: 'Recurso eliminado'}));
    }
    else {
        res.writeHead(405);
        res.end(JSON.stringify({message: 'Método no permitido'}));
    }

});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});