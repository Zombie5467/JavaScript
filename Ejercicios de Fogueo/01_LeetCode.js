/* eslint-disable max-len */

/* 
  Función que devuelva otra Function con un string hello word, incluso si tiene parámetros.

  Esta versión (a diferencia de la que subí en let code) tiene console.log porque quería probar en la consola y lo necesitaba para eso
*/

// --------------------------------------------------------------------------

function createHelloWorld() {
  function hello() {
    // eslint-disable-next-line no-console
    return console.log('Hello World');
  }
  return hello(22, 'Exit Door', null);
}

createHelloWorld(22, 'Exit Door', null);

// --------------------------------------------------------------------------

// Version subida a LeetCode

/* 
  function createHelloWorld() {
    let sayHi = () => 'Hello World'
    return sayHi(22, 'Exit Door', null);
  }

  createHelloWorld(22, 'Exit Door', null);
*/