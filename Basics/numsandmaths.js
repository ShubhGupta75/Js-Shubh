const score = 400

const balance = new Number(100)  // using Number constuctor 
console.log(balance);
// not recommended method to get datatype, just use typeof.

console.log(balance.toString().length);
// toString converts number to String explicitly and we can perform string functions

console.log(typeof(balance));

console.log(balance.toFixed(2));
// toFixed converts 100 to 100.00(2 decimal places),
// which will help in decimal approximations 

const anotherNumber = 123.74834
console.log(anotherNumber.toPrecision(4));
// if value is 4 then it will round off in decimal (123 that means value should be 4)
// if value is 3 then it will round off in number and decimal will be gone 

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'))
// it gives comma between large numbers
// en-IN is used for indian numbering system

//  ++++++++++ MATHS ++++++++++++++

console.log(Math.abs(-8)); // for changing sign
console.log(Math.round(4.6)); // for rounding off 
console.log(Math.ceil(4.2)); // for rounding off to next int
console.log(Math.floor(4.9)); // for rounding off to previous int
console.log(2 ** 5); // for calculating power

console.log(Math.min(4,6,23,6)); // for min numbers
console.log(Math.max(23,45,3,5)); // for max numbers

console.log(Math.random()); // just gives random values between 0 and 1 
console.log((Math.random()*10) + 1); // if we multiply by 10,the number could become zero
// to avoid we just add 1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min));
// if we want random numbers between a range, use this
// (max-min+1)+min -> used to get range and +1 to avoid zero
// if max and min numbers are given, use this formula


