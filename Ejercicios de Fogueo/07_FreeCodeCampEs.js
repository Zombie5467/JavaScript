// --------------------------------------------------------------
// FreeCodeCamp Es
// Ciclo for Anidados

// Este programa no funciono, al final no lo entendí
// Ultima actualización: linea 21, palabra proiedad por propiedad
// --------------------------------------------------------------

var coleccionDeDiscos = {
  7853: {
    tituloDelAlbum: 'Bee Gees Greatest',
    artista: 'Bee Gees',
    canciones: ["Staying' Alive"],
  },
  5439: {
    tituloDelAlbum: 'ABBA Gold',
  },
};

function actualizarDiscos(discos, id, propiedad, valor) {
  if (valor === '') {
    delete discos[id][propiedad];
  } else if (propiedad === 'canciones') {
    discos[id][propiedad] = discos[id][propiedad] || [];
    discos[id][propiedad].push(valor);
  } else {
    discos[id][propiedad] = valor;
  }
}

console.log(coleccionDeDiscos[5439].artista);

actualizarDiscos(coleccionDeDiscos, 5439, 'artista', 'ABBA');

console.log(coleccionDeDiscos[5439].artista);
