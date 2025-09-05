import greet, { info } from "./15_modules_export.js";

console.log(greet());
console.log("Imported info:", info.name, info.age);
