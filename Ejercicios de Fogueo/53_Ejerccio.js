function encontrarCoincidencias(frase, busqueda){

let textoLimpio = frase.toLowerCase().replace(/[!@#$%,.:;]/gi, '');
// cuando usamos /[reemplaza todo lo que haya aqui dentro]/.
// g significa global y la i significa indistinto.

if(textoLimpio.includes(busqueda)){

    let palabras = textoLimpio.split(" ");
    let mapa = {};

    for(let palabra of palabras){

        if(mapa[palabra]){
            mapa[palabra]++;
        }else{
            mapa[palabra] = 1;
        }

    }

    resultado = mapa[busqueda];

}else{
    resultado = 0;
}

return resultado;
}

console.log("numero de coninciencias: ", encontrarCoincidencias("hello and wellcome wellcome to the best day of ur life.", "lalala"));