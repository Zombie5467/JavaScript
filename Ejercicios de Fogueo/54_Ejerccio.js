/* 
1) la dieferencia de "for in" y "for of" es que el primero devuelve el indice;
osea en que posicion esta, [0,1,2,3] pero el segundo devuelve lo que hay
guardado en el indice 

2) Cuando usamos invertido += letra esto nos va a ir guardando el string en su mismo
orden, pero Cuando usamos invertido = letra + invertido lo que hace es guardar
cada letra una detras de la otra, haciendo que la que estaba de ultimo ahora 
es la primera, eje: aeiou lo guarda, primero la u luego la o y asi hasta tener uoiea.
(cada letra se va guardando en la variable "letra")

3) En "letra" se guarda el nuevo valor de invertido, el cual viene del blucle
for...of
*/
 // forma larga, usando solo estructuras de control, nada de metodos
function invertir(texto){

    let invertido = "";

    for(let letra of texto){
        invertido = letra + invertido;
        
    }
    
    return invertido;
}

console.log("Texto invertido: ", invertir("beba cholo"));

// forma corta usando metodos

function invertir(texto){
    return texto.split("").reverse().join('');
}
console.log(invertir("harry popote"));