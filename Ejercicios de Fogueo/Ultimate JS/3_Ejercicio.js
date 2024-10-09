function getByIdx(arr, idx) {
    if(idx >= 0 && idx < arr.length){
        return arr[idx]
    } else {
        console.log('el arreglo no tiene este indice')
    }
}

let resultado = getByIdx([3, 12], 0);
console.log(resultado)