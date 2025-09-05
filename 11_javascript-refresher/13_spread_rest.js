const numbers = [1, 2, 3];
const user = { name: "Maffia", age: 20 };

// Spread with array
const moreNumbers = [...numbers, 4, 5];
console.log("Spread array:", moreNumbers);

// Spread with object
const newUser = { ...user, hobby: "Drawing" };
console.log("Spread object:", newUser);

// Rest operator
function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}
console.log("Sum:", sum(1, 2, 3, 4, 5));
