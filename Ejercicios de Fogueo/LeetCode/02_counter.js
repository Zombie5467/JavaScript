// Closures en JavaScript

const outerCounter = function(n){
    return function(){
       return n++;
    }
    //Se llamaba innerCounter, pero no es necesario.
    // Se convertiría en una función global, y no es necesario.
    // La idea de closures es que la función interna tenga acceso a las variables de la función externa y mantener este scope.
  }
  
  
const counter = outerCounter(2);
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4

/**
NOTA PERSONAL:
    para que funcione en leetCode debo cambiar el nombre outerCounter 
    por createCounter. 
 */
