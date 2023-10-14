/* eslint-disable no-plusplus */
// Tomar los id de los botones y guardarlos en sus respectivas variables
const contadorDiv = document.getElementById('contador');
const btnReset = document.getElementById('btn-reset');
const btnPlay = document.getElementById('btn-play');

// Crear 3 variables y darles sus respectivos valores, iniciarlas en 0
let [horas, minutos, segundos] = [0, 0, 0];

// Una variable para el intervalo de tiempo
let intervaloTiempo = '';
// Una variable para el estado del cronometro con el valor 'pausado'
const estadoTiempo = 'pausado';

// una funcion para contar los segundos, minutos y horas
function contador() {
  segundos++;
  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;

    if (minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }
  }
  // Tres variables para dar formado 00 a los numeros
  const formatosSegundos = asignarFormato(segundos);
  const formatosMinutos = asignarFormato(minutos);
  const formatosHoras = asignarFormato(horas);

  contadorDiv.innerText = `${formatosHoras}:${formatosMinutos}:${formatosSegundos}`;
}
// Una funcion para dar el formato 00
function asignarFormato(unidad) {
  // return unidad < 10 ? '0' + unidad : unidad;
  return unidad < 10 ? `0${unidad}` : unidad;
}

btnPlay.addEventListener('click', function () {
  if (estadoTiempo === 'pausado') {
    intervaloTiempo = window.setInterval(contador, 1000);
    btnPlay.innerHTML = '<span class="material-symbols-outlined">pause</span>';
  }
});
// console.log('minutos');
