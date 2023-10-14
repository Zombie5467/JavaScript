// import citas from './citas';

// Tomar el id del p cita y guardarlo en una variable
const pCita = document.getElementById('cita');
// Tomar el id del p autor y guardarlo en una variable
const pAutor = document.getElementById('autor');
// Tomar el id del boton y guardarlo en una variable
const btnCita = document.getElementById('btn-cita');

// generar un entero mínimo y uno máximo con random y floor, se usara como un index random
// gen = generar
function genEntero(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}
// Una función que cambie la cita
function cambiarCita() {
  // la función debe tomar el entero, guardarlo en una variable y usarlo como un index random
  const indexRandom = genEntero(0, citas.length);
  //  la función debe tomar la variable de la cita y cambiar su Texto usando comillas
  pCita.innerText = `"${citas[indexRandom].texto}"`;
  //  la función debe tomar la variable del autor y cambiar su texto
  pAutor.innerText = citas[indexRandom].autor;
}
// crear un evento para el boton que llame esta función
btnCita.addEventListener('click', cambiarCita);
