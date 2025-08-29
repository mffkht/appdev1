// .map()
let hobbies = ["Reading", "Gaming", "Coding"];
hobbies.map(hobby => console.log(hobby));

// Destructuring
let student = { name: "Pia", age: 21 };
let { name, age } = student;
console.log(name, age);

// Spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);
