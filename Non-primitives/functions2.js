
// Make a function inside another function and call it inside same function then print the result outside the outer function

function orderTea(teaType){
  function confirmOrder(){
    return `Order confirmed for ${teaType}`
  }
  return confirmOrder()
}
let tea2 = orderTea("chai")
console.log(tea2);


// Arrow function

const calculateTotal = (price, quantity) => {
  return price * quantity
}
let totalCost = calculateTotal(499,3)
console.log(totalCost);

// Higher Order Function

function makeTea(typeOfTea){
  return `maketea: ${typeOfTea}`
}

function processTeaOrder(teaFunction){
  return teaFunction(`earl grey`)
}

let order = processTeaOrder(makeTea)
console.log(order);


// Another example

function createTeaMaker(){
  return function (teaType){
    return `Making ${teaType}`
  }
}
let teaMaker = createTeaMaker()
let result = teaMaker("green tea")
console.log(result);

// Another variant of above question(CLOSURE)

function createTeaMaker(type) {
  return function () {
    return `Making ${type}`;
  }
}

let greenTeaMaker = createTeaMaker("green tea");
let chaiMaker = createTeaMaker("chai");

console.log(greenTeaMaker()); // "Making green tea"
console.log(chaiMaker());     // "Making chai"
