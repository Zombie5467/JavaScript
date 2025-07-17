
// Ejercicio par generar un color aleatorio en formato hexadecimal

function randomColor(){
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let code = "";
    for(let i=0; i<6; i++){
     code += hexArray[Math.floor(Math.random()*16)];
    }
    return `#${code}`
   }

 export { randomColor };

//  usamos paréntesis porque la exportación no es default


