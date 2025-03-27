//Día 2: GLOBAL vs WINDOW 🌎 Objetos globales en Node.js
//En el navegador, el objeto global es window, pero en Node.js es global.

console.log(global);
setTimeout(() => {
  console.log('Mensaje luego de dos segundos');
}, 2000);