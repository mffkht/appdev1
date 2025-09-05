const person = {
  name: "Pia", 
  age: 20
};

const hobbies = ["reading", "coding"];

// Object destructuring
const { name, age } = person;
console.log(name, age);

// Array destructuring
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// Destructuring in function parameters
function printName({ name }) {
  console.log("Name from function:", name);
}
printName(person);
