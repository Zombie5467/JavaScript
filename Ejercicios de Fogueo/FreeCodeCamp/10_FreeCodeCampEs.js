// --------------------------------------------------------------
// FreeCodeCamp Es
// Ciclo Do While búsqueda de perfil (6.52.30)
// --------------------------------------------------------------
// Este programa no funciono, al final no lo entendí

var contactos = [
  {
    "nombre": "nora",
    "apellido": "naviar",
    "numero": "0543236543",
    "gustos": ["pizza", "carro"]
  },
  {
    "nombre": "harry",
    "apellido": "potter",
    "numero": "0994372684",
    "gustos": ["Hogwarts", "magia"]
  },
  {
   "nombre": "Sherlock",
  	"apellido": "Holmes",
    "numero": "0487345643",
    "gustos": ["casos", "violin"] 
  }
]
function buscarPerfil(nombre, propiedad){
  for (var i=0; i<contactos.length; i++){
    if (contactos[i].nombre===nombre){
      return contactos[i][propiedad] || "La propiedad no existe";
    }
  }
  return "El contacto no esta en la lista";
}
console.log(buscarPerfil("harry", "numero"));
