function greet(name) {
  if (!name) {
    console.log('Ciao, come stai?');
  } else {
    console.log(`ciao ${name}, come stai?`);
  }
}
greet('Silvia');
greet();
greet('Faustino');
greet('Alessandro');
greet('Andrea');
greet();
