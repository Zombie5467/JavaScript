let array = [2,5,7,15, -5, -100, 55];

function getMenorMayor(arr) {
    //Encontramos el valor máximo y el mínimo
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    //Buscamos el indice
    let indexMax = arr.indexOf(max);
    let indexMin = arr.indexOf(min);

    // Nos aseguramos que se impriman en el orden original del arreglo
    if(indexMin < indexMax) {
        return `${min}, ${max}`
    } else {
        return `${max}, ${min}`
    }

}

let numeros = getMenorMayor(array)
console.log(numeros);