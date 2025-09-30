console.log("2">1);  //true  (comparison of two different datatypes)
console.log("02">1);  //true

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true

/* the reason is that an equality check (==) and comparison
(> < >= <=) work differently.
comparisons convert null to a number, treating it as 0.
that's why null>=0 is true and null>0 is false.   */

console.log("2"==2); //true, because it converts string to number
console.log("2"===2); //false, because of strict check

// === compares values as well as datatype
