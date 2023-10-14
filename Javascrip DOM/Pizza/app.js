const contenedor = document.getElementById('contenedor');
console.log(contenedor.innerHTML);

const toppings = document.getElementsByClassName('topping');
console.log(toppings);

const liElements = document.getElementsByTagName('li');
console.log(liElements);

// Estilos en linea con dot notation
const primerTopping = document.querySelector('.topping');
primerTopping.style.backgroundColor = 'red';
primerTopping.style.color = 'rgb(32, 32, 31)';
primerTopping.style.textTransform = 'uppercase';

const titulo = document.getElementById('titulo');
titulo.innerText = 'Mis Toppings Favoritos';

const enlaces = document.getElementsByTagName('a');
console.log(enlaces[0].setAttribute('href', 'https://www.freepik.com'));
