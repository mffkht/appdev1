let foods = ["Pizza", "Sushi", "Pasta"];

foods.push("Fries");
foods.shift();

for (let food of foods) {
    console.log(food);
}

let likes = foods.map(food => `I like ${food}`);
console.log(likes);
