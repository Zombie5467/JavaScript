let array = [
    {
        id: 1,
        name: 'Nicolas'
    },
    {
        id: 2,
        name: 'Felipe'
    },
    {
        id: 3,
        name: 'Chanchito'
    }
];

// let pares = [
//     [1, {id: 1, name: 'Nicolas'}]
//     [2, {id: 2, name: 'Felipe'}]
//     [3, {id: 3, name: 'Chanchito'}]
// ]

function toPairs(arr) {
    return arr.map((obj, indx) => [indx + 1, obj])
}

let resultado = toPairs(array);
console.log(resultado);

    /**
     * NOTA PERSONAL:
     * (obj, indx) son los parámetros de la función
     * que YO estoy creando con =>
     * ¿Cómo obj "sabe" cuáles son los valores en arr?:

        El método map() internamente recorre cada elemento del array, 
        y por cada elemento, invoca la función callback que le pasaste.
        En cada iteración, map() llama a la función callback pasando 
        el valor del elemento actual como el primer argumento (que en tu caso es obj) 
        y el índice del elemento como el segundo argumento (que es index).

        En cada iteración, el valor de obj (el valor actual del array) 
        se usa dentro de la función. 
        Resumen:
        El parámetro obj en la función callback de map() automáticamente 
        recibe el valor de cada elemento del array en cada iteración. 
        Esto sucede porque map() pasa ese valor como argumento 
        a la función callback en cada vuelta del bucle.

        No necesitas hacer nada especial para que obj "sepa" 
        cuáles son los valores; el método map() 
        se encarga de pasar esos valores a tu función.
    */