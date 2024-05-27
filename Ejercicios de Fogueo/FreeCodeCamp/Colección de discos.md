Está creando una función que ayuda en el mantenimiento de una colección de álbumes musicales. La colección se organiza como un objeto que contiene múltiples álbumes que también son objetos. Cada álbum se representa en la colección con un id único como nombre de la propiedad. Dentro de cada objeto álbum, hay varias propiedades que describen información sobre el álbum. No todos los álbumes tienen información completa.

La función updateRecords toma 4 argumentos representados por los siguientes parámetros de función:

records - un objeto que contiene varios álbumes individuales
id - un número que representa un álbum específico en el objeto records
prop - una cadena que representa el nombre de la propiedad del álbum a actualizar
value - una cadena que contiene la información utilizada para actualizar la propiedad del álbum
Completa la función utilizando las reglas siguientes para modificar el objeto pasado a la función.

Tu función debe devolver siempre el objeto records completo.
Si value es una cadena vacía, elimina la propiedad prop dada del álbum.
Si prop no es tracks y value no es una cadena vacía, asigna el value a la prop de ese álbum.
If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
Nota: Para las pruebas se utiliza una copia del objeto recordCollection. No debes modificar directamente el objeto recordCollection.