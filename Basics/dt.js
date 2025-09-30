"use strict"; /* treat all JS code as newer version,
 however it is automatically settled in 
 newer version JS. */

// alert(3+3) // we are using nodejs not browser

// PRIMITIVE DATATYPES

let name = "Shubh"  // String => "..." 
let age = 19  // Number => 2^53 values, for bigger values use 'BigInt'.
let isLoggedIn = true // boolean => true/false
// null => standalone value, basically empty
// undefined => not assigned variables
// symbol => used for uniqueness


console.log(typeof null); // type is object 
console.log(typeof undefined); // type is undefined

// Objects

let teaType = ["lemon tea", "orange tea", "oolong tea"]
let anime = {Naruto: "Best", Onepiece: "Goat", AOT: "Outstanding"}

console.log(teaType)
console.log(anime);

// Symbol

let sm1 = Symbol("Shubh") 
let sm2 = Symbol("Shubh")
console.log(sm1 == sm2);  // false, because it's guaranteed to be unique.

