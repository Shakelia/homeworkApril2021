var pizzaToppings = ["pepperoni", "sausage", "onions", "bellpeppers"];
pizzaLine = []

keyValuePizza ={
    size: "Medium",
    crust: "Thick",
    toppings: "Pepperoni",
}

function toppingLoop() {
  availableToppings= []
  for (i = 0; i < pizzaToppings.length; i++) {
      availableToppings.push(pizzaToppings[i]);
}
  return availableToppings;

function greetCustomer(name){
console.log(`Welcome ${name} to Shakelia's Pizza Place! We have ${toppingLoop} to go on your pizza!`);

}
}
greetCustomer("Shakelia");

function getPizzaOrder (s,c...t){
  console.log(`one ${s}, ${c}, pizza with ${t} ...`)
}
getPizzaOrder("Medium", "Thick Crust", "pepperoni")

function preparePizza (arr) {
  let pizza = {
    size: arr.size,
    crust: arr.crust,
    toppings: arr.toppings
}
  pizzaLine.push(pizza);
  console.log("Cooking Pizza");



preparePizza(keyValuePizza);
  console.log(`Order up here's your ${arr.size} ${arr.crust} pizza with ${arr.top}`)
}

servePizza(keyValuePizza);
