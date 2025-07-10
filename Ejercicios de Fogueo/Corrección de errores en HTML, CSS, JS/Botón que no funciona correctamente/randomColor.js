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


// Opino que me gusta la idea de hacer ambas en paralelo, junto a eso voy a hacer dos cosas

// 1 - revisar todas las practicas que acumule en mi aprendizaje, de algo tienen que servir.

// 2 - revaluar el curso de acción y modificarlo a este enfoque si hace falta.