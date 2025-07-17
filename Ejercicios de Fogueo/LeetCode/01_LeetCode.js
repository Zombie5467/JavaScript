/* eslint-disable max-len */

/* 
Create Hello World Function

  Write a function createHelloWorld. It should return a new function that always returns "Hello World".
  Función que devuelva otra Function con un string hello word, incluso si tiene parámetros.

  https://leetcode.com/problems/create-hello-world-function/?envType=study-plan-v2&envId=30-days-of-javascript
  
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