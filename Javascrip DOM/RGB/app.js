// tomando los id's de los inputs
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

// tomando los id's de los p
// el código original era con let pero eslintrc rule lo cambia a const
const textoRojo = document.getElementById('texto--rojo');
const textoVerde = document.getElementById('texto--verde');
const textoAzul = document.getElementById('texto--azul');

// mostrando el valor de cada inputs y mostrándolos en los p
let pRojo = inputRojo.value;
textoRojo.innerText = pRojo;

let pVerde = inputVerde.value;
textoVerde.innerText = pVerde;

let pAzul = inputAzul.value;
textoAzul.innerText = pAzul;

// Para cambiar el color de body
function cambioColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

// Actualizar Red
inputRojo.addEventListener('change', (e) => {
  pRojo = e.target.value;
  textoRojo.innerText = pRojo;
  cambioColor(pRojo, pVerde, pAzul);
});

// -------------------------------------------------------------
// Actualizar Verde
inputVerde.addEventListener('change', (e) => {
  pVerde = e.target.value;
  textoVerde.innerText = pVerde;
  cambioColor(pRojo, pVerde, pAzul);
});

// -------------------------------------------------------------
// Actualizar Azul
inputAzul.addEventListener('change', (e) => {
  pAzul = e.target.value;
  textoAzul.innerText = pAzul;
  cambioColor(pRojo, pVerde, pAzul);
});
