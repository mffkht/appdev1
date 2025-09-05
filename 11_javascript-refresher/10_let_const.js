// Using var
var name = "Maffia";
var age = 19;
age = 20; 
console.log("var:", name, age);

// Using let
let city = "Manila";
city = "Negros"; // ✅ allowed
console.log("let:", city);

// Using const
const country = "Philippines";
// country = "Japan"; ❌ Error: Assignment to constant variable
console.log("const:", country);
