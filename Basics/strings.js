const name = "Shubh"
const repoCount = 50

// console.log(name + repoCount + "Value");  // not used in production

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);
// using backtick is modern way of declaring string
// $() is used to insert any other stuffs in between the String. 

const gameName = new String('shubh-fc')
// another way of declaring string using constructor

console.log(gameName[0]);  // accessing key value pair
console.log(gameName.length);  // to get the string length
console.log(gameName.toUpperCase());  // to make the string uppercase
console.log(gameName.charAt());  // to get the char at given index
console.log(gameName.indexOf('b'));

const newString = gameName.substring(0,4)
// for getting a particular part of a string. Can't handle negative values
console.log(newString);

const anotherString = gameName.slice(-7,3)  // hu
// same work as substring but can also process negative values
console.log(anotherString);

const newString1 = "  shubh   "
console.log(newString1);
console.log(newString1.trim());  // for trimming the empty spaces

const url = "https://shubh.com/shubh%20gupta"
console.log(url.replace('%20', '-'));
// to replace some component of a string

console.log(url.includes('shubh'))
// checks whether a string contains a particular letter or word

console.log(gameName.split('-'));
// split the string on the basis of given char, stores in the form of array









