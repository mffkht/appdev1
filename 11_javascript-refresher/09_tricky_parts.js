// == vs ===
console.log(5 == "5");  // true
console.log(5 === "5"); // false

// undefined vs null
let x;
let y = null;
console.log(x, y);

// Regular vs arrow function in object
let obj = {
    value: 10,
    regular: function () {
        console.log("Regular:", this.value);
    },
    arrow: () => {
        console.log("Arrow:", this.value);
    }
};
obj.regular(); // works
obj.arrow();   // undefined

// Array copy with = (reference)
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("arr1:", arr1); // both changed

// Array copy with spread
let arr3 = [1, 2, 3];
let arr4 = [...arr3];
arr4.push(4);
console.log("arr3:", arr3); // unchanged
console.log("arr4:", arr4); // new copy
