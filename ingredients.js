var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var item = 0;

// Write a while loop that prints out the contents of ingredients:

while (item < ingredients.length) {
  console.log(ingredients[item]);
  item++;
}

// Write a for loop that prints out the contents of ingredients:

for (item = 0; item < ingredients.length; item++) {
  console.log(ingredients[item]);

}


// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (item = ingredients.length - 1; item > 0; item--){
  console.log(ingredients[item]);

}