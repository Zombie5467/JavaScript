

function lado(numero){
    let lado = ""; //los * de la iteracion se guardan aqui

    for (let i = 0; i < numero; i++){
        lado += "*";// aqui decimos que lo que se guarde en la variable lado sean *
    }

    return lado;
}

function cuadrado(numero){
    let dibujo = lado(numero) + "\n";

    let contenido = "";

    for(let i = 2; i < numero; i++){
        contenido = "*";

        for(let x = 0; x < (numero - 2); x++){
            contenido += " ";
        }
        contenido += "*";


        dibujo += contenido + "\n"
    }

    dibujo += lado(numero);

    return dibujo;
}

console.log(cuadrado(4));