function cualEsMayor(a, b){
   switch (true) {
    case a > b:
        console.log(`${a} es mayor que ${b}`);
        break;
    case a === b:
        console.log(`${a} y ${b} son iguales`);
        break;
    case a < b:
        console.log(`${b} es mayor que ${a}`);
        break;
   }
}



let mayor = cualEsMayor(10, 5);
cualEsMayor(12, 22);
cualEsMayor(44, 10);
cualEsMayor(10458, 35963);
cualEsMayor(1, 2);

console.log(mayor)