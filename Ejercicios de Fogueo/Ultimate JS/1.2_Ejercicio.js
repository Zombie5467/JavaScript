function cualEsMayor(a, b){
    if(a>b){
        console.log(`${a} es mayor que ${b}`);

    } else if(a===b){
        console.log(`${a} y ${b} son iguales`);

    } else{
        console.log(`${b} es mayor que ${a}`);
    }
 }
 
 let mayor = cualEsMayor(10, 5);
 cualEsMayor(12, 22);
 cualEsMayor(44, 10);
 cualEsMayor(10458, 35963);
 cualEsMayor(1, 2);
