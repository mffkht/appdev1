// Function greet
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Pia"));

// Arrow function square
const square = num => num * num;
console.log(square(4)); // 16

// Calculator
function calculator(a, b) {
  return {
    sum: a + b,
    product: a * b
  };
}
console.log(calculator(3, 5));
