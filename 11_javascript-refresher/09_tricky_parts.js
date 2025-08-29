// == vs ===
console.log("10" == 10);  // true
console.log("10" === 10); // false

// undefined vs null
let x;
let y = null;
console.log(x); // undefined
console.log(y); // null

// Regular vs arrow function in object
let obj = {
  value: 42,
  regular: function() {
    console.log(this.value); // works
  },
  arrow: () => {
    console.log(this.value); // undefined (arrow fn has no its own "this")
  }
};
obj.regular();
obj.arrow();

// Copy arrays with = vs spread
let arr1 = [1, 2, 3];
let arr2 = arr1; // reference
arr2.push(4);
console.log(arr1); // [1,2,3,4]

let arr3 = [1, 2, 3];
let arr4 = [...arr3]; // copy
arr4.push(5);
console.log(arr3); // [1,2,3]
console.log(arr4); // [1,2,3,5]
