// Crear un componente tipo función y poder acceder a su estado privado a través de hooks
// y ademas poder modificarlo

import React, {useState} from 'react';

const Ejemplo1 = () => {
  // valor inicial para un contador
  const valorInicial = 0;

  // valor inicial para una persona
  const personaInicial = {
    nombre: 'Martin',
    email: 'martin@mailgroup.com',
  };

  /**
   * Queremos que el VALORINICIAL y PERSONAINICIAL sean parte
   * del estado del componente para asi poder gestionar su cambio
   * y que este se vea reflejado en la vista del componente
   *
   * const [nombreVariable, functionParaCambiar] = useState{valorInicial}
   */

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**Función para actualizar el estado privado que contiene el contador */
  function incrementarContador() {
    // ? functionParaCambiar(nuevoValor)
    setContador(contador + 1);
  }

  /**Función para actualizar el estado persona en el componente */
  function actualizarPersona() {
    setPersona({
      nombre: 'Marta',
      email: 'marta@mailgroup.com',
    });
  }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>

            {/* Bloque de botones */}
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;
