let value = 5
let negValue = -value  // for negative values
console.log(negValue);

console.log(2**3);  // for power

let str1 = "hello"
let str2 = " shubh"

let str3 = str1 + str2  // adding two strings
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2);  //122
console.log(1 + 2 + "2"); //32

/* there are some specific rules for operations in javascript. 
avoid writing such codes and use paranthesis while performing 
complex operations */

console.log(+true); //1

/* Increment operator */ 

let x = 3;
const y = x++;  //the post-increment operator increments and returns the value before incrementing.

console.log(x,y);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;  //the pre-increment operator increments and returns the value after incrementing.

console.log(a,b);
// Expected output: "a:4, b:4"
