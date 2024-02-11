/* eslint-disable no-console */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable max-classes-per-file */

// --------------------------------------------------------------
// Introducción a la programación
// OpenBootCamp
// --------------------------------------------------------------

// Ejercicios tema 9

// Crea una clase Persona con las siguientes variables:

// La edad

// El nombre

// El teléfono

class PersonaT9 {
  constructor(elNombre, laEdad, elTelefono) {
    this.name = elNombre;
    this.age = laEdad;
    this.phone = elTelefono;
  }
}

//Una vez creada la clase, crea una nueva clase Cliente que herede de Persona, esta nueva clase tendrá la variable crédito solo para esa clase.
class Cliente extends PersonaT9 {
  constructor(name, age, phone, credito) {
    super(name, age, phone);
    this.credit = credito;
  }

  creditoId() {
    console.log(
      `Mi nombre es ${this.name}, mi edad es ${this.age}, mi numero de teléfono es: ${this.phone} y mi numero de credito es ${this.credit}`
    );
  }
}

//Crea ahora un objeto de la clase Cliente que debe tener como propiedades la edad, el teléfono, el nombre y el credito, tienes que darles valor y mostrarlas por pantalla.
const cliente01 = new Cliente('andy', 22, 8094147523, 2150);
cliente01.creditoId();

//Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de Persona, y con una variable salario que solo tenga la clase Trabajador.
class Trabajador extends PersonaT9 {
  constructor(name, age, phone, salario) {
    super(name, age, phone);
    this.salary = salario;
  }

  trabajadorId() {
    console.log(
      `Mi nombre es ${this.name}, mi edad es ${this.age}, mi numero de teléfono es: ${this.phone} y mi salario es: ${this.salary}`
    );
  }
}

const empleado = new Trabajador('Lydia', 25, 445238296, '35k Mensual');
empleado.trabajadorId();
