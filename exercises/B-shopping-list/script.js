function shoppingList(arrayOfShoppings) {
  // Write your code here...
  let contentEl = document.querySelector("#content");
  contentEl.innerHTML = "List of items you need to buy:";
  let ulEl = document.createElement("ul");
  contentEl.appendChild(ulEl);
  for (let element of arrayOfShoppings) {
    let liEl = document.createElement("li");
    contentEl.appendChild(liEl);
    liEl.innerHTML = `Item: ${element}`;
  }
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
