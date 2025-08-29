let favoriteFoods = ["Pizza", "Sushi", "Burger"];

// Add one more
favoriteFoods.push("Pasta");

// Remove first
favoriteFoods.shift();

// Print with for...of
for (let food of favoriteFoods) {
  console.log(food);
}

// .map()
let likedFoods = favoriteFoods.map(food => `I like ${food}`);
console.log(likedFoods);
