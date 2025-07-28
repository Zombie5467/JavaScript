// Función que tome dos arrays y retorne un nuevo array con los números que están en ambos arrays.
function intersectArrays(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

console.log(intersectArrays([1, 2, 3], [2, 3, 4])); // [2, 3]