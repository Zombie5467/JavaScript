// Challenge Exercise FizzBuzz

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// for (i = 0; i <= 25; i++) {

//     if (i % 3 === 0) {

//         console.log('Fizz');

//     }
//     console.log(i);
// }

for (i = 1; i <= 100; i++) {

  if (i % 5 === 0 && i % 3 === 0) {
    console.log('FizzBuzz');
    continue;
  } else if (i % 3 === 0) {
    console.log('Fizz');
    //   i = 'fizz'
    continue;
    
  } else if (i % 5 === 0) {
    console.log('Buzz');
    continue;
  }
  
    console.log(i);
}
