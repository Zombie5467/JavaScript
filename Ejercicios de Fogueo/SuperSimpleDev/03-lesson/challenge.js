console.log(`items(${2 + 2}): $${(2095 * 2 + 799 * 2) / 100}`);
console.log(`Shipping & handling: $${Math.round(499 * 2) / 100}`);

console.log(`Total before Tax: $${(2095 * 2 + 799 * 2 + 499 * 2) / 100}`);
console.log(
  `Total before Tax (10%): $${
    Math.round((2095 * 2 + 799 * 2 + 499 * 2) * 0.1) / 100
  }`
);

console.log(`Order Total: `);