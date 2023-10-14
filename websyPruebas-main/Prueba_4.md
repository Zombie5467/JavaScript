//Ejercicio FizzBuzz
/*
for (let x = 1; x <=100; x++){
  if (x%3 == 0 && x%5 == 0){
  console.log(x + " "+"FizzBuzz")
} else if (x%3 == 0){
  console.log(x + " "+ "Fizz")
} else if (x%5 == 0){
  console.log (x + " "+ "Buzz")
} else {console.log(x)}

}


//Ejercicio con array
var myArray = [9,4,7,3,8,1,5,6,2,1,];
var myArray2 = [8,9,4,7,3,8,1,5,6,2,0,]; 

//Ejercicio calcular el valor minimo
var m = Math.min(...myArray);
console.log("El valor Minimo del array es " + m)


//Ejercicio calcular el valor maximo
var ma = Math.max(...myArray);
console.log("El valor Maximo del array es " +ma)


//Ejercicio calcular el promedio
function promedio(myArray){
  var i = 0; sum = 0; arrayLen = myArray.length;
  while(i < arrayLen){
    sum += myArray[i++];
  }
  return sum / arrayLen;
  }
var a = promedio(myArray);
console.log("El promedio del array es " + a)


//Ejercicio calcular la mediana
function mediana(myArray){
  myArray = myArray.sort();
  let l = myArray.length;
  if (l%2 == 0)
  return myArray.slice(l/2-1, l/2+1).reduce((a,b) => a+b)/2
  else
  return myArray.slice((l/2), l/2+1)[0]  
}
console.log("La mediana del array es " + mediana(myArray))
console.log("La mediana del array es " + mediana(myArray2))


//Ejercicio calcular el rango
function rango(myArray){
  myArray = myArray.sort();
  let r = myArray.length;
  return (myArray.length-1)- myArray[0]
}
console.log("El rango del array es " + rango(myArray))
*/
