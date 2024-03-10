const product = {
  name: 'basketball',
  price: 20.95,
};

const productTwo = {
  name: 'football',
  price: 35.6,
};

// product.price = 22.26;
// product['delivery-time'] = '3 days';
// console.log(product);


function comparePrice(product1, product2) {
    if (product1.price < product2.price) {
        return product1
    } else { return product2 }
}

console.log(comparePrice(product, productTwo));
let greeting = 'BUON GIORNO! ';

console.log(greeting.toLowerCase().repeat(2));
// console.log(greeting.repeat(2));

/**
  * NOTA IMPORTANTE, HO LASCIATO FARE L'ESERCIZIO localStorage PERCHÉ VOGLIO FARLO CON LA PRATICA DEL "TEMA SCURO"
 */

