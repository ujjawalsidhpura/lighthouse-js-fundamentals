const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let j = 0;
while (j < ingredients.length) {
  console.log(ingredients[j]);
  j++;
}

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

for (let k = ingredients.length - 1; k >= 0; k--) {
  console.log(ingredients[k]);
}
