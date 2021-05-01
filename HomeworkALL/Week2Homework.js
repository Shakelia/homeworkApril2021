let pizzaPlace = 'pizzaKingdom'
let numberOfToppings = 8

console.log(pizzaPlace, typeof pizzaPlace );
console.log(numberOfToppings, typeof numberOfToppings);


console.log(`Welcome to ${pizzaPlace} where we have ${numberOfToppings} toppings. `)

if(numberOfToppings < 10){
  console.log("Quality, not quantity.")
}else{
  console.log("A whole lot of pizza.")
}
