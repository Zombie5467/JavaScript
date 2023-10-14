/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable grouped-accessor-pairs */
/* eslint-disable no-underscore-dangle */

// --------------------------------------------------------------
// Introducción a la programación
// OpenBootCamp
// --------------------------------------------------------------

// Ejercicios tema 8
// Para practicar la encapsulación:

// Crear clase Persona.

// Crear variables las privadas edad, nombre y telefono de la clase Persona.

class Persona {
  constructor() {
    const _edad = 0; // variable privada edad
    const _nombre = ''; // variable privada nombre
    const _telefono = ''; // variable privada teléfono
  }

  // Crear gets y sets de cada propiedad.
  // getters
  get edad() {
    return this._edad;
  }

  get nombre() {
    return this._nombre;
  }

  get telefono() {
    return this._telefono;
  }

  // setters
  set edad(nuevaEdad) {
    this._edad = nuevaEdad;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  set telefono(nuevoTelefono) {
    this._telefono = nuevoTelefono;
  }
}

// Crear un objeto persona en el main.
const persona1 = new Persona();

// Utiliza los gets y sets para darle valores a las propiedades edad, nombre y telefono, por último muéstrela por consola
persona1.edad = 28;
persona1.nombre = 'Raul';
persona1.telefono = '8099487252';

console.log(persona1.edad);
console.log(persona1.nombre);
console.log(persona1.telefono);
