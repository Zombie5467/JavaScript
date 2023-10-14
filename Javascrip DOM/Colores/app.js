/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
const boton = document.querySelector('button');
const titulo = document.getElementById('tituloH1');

function hexAleatorio() {
  let digitos = '0123456789ABCDEF';
  let hex = '#';

  for (let i = 0; i < 6; i++) {
    let indexAleatoreo = Math.floor(Math.random() * 16);
    hex += digitos[indexAleatoreo];
  }
  return hex;
}

boton.addEventListener('click', () => {
  let colorAleatoreo = hexAleatorio();

  // Cambia el texto del titulo (h1)
  titulo.innerText = colorAleatoreo;

  // Cambia el color del body
  document.body.style.backgroundColor = colorAleatoreo;
});

// innerText trae el css
// innerText trae el texto como en el navegador hace el Render
// textContent trae el texto igual que el documento fuente incluso si usamos display none
