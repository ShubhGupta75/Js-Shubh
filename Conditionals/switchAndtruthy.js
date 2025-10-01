const month = 3
switch (month) {
  case 1:
    console.log("January");

    break;
  case 2:
    console.log("February");

    break;
  case 3:
    console.log("March");

    break;
  default:
    break;
}

// Falsy values(values that are presumed to be false)

// false, 0, -0, BigInt 0n, "", null, undefined, NaN   =>  all these are falsy values and rest are truthy values.

// Some interesting truthy values

// "0", "false", " ", [], {}, function(){}....


// To check object is empty or not

const obj = {}
if(Object.keys(obj).length === 0){
  console.log("Object is empty");

}   // Object.keys(obj), this returns an array therefore we can perform array method to check


// Nullish Coalescing operator

// (only used for null and undefined, for error handling)
let val1, val2, val3
val1 = 5 ?? 10  // 5
val2 = null ?? 10  // 10
val3 = undefined ?? 15  // 15

// Ternary Operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");



const greetings = "Hello World"
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
  
}