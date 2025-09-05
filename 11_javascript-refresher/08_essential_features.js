let hobbies = ["Reading", "Gaming", "Sleeping"];
hobbies.map(hobby => console.log(hobby));

let student = { name: "Pia", age: 20 };
let { name, age } = student;
console.log(name, age);

let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log(newNumbers);
