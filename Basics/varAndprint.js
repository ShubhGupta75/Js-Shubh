const accountId = 128393
let emailId = "guptashubh780@gmail.com"
var password = "12345"
myName = "Shubh"

// modification is not allowed in const

console.log(emailId);
console.table([accountId,emailId,password,myName]);

/* 
Prefer not to use var, because of issue in block scope and functional scope 
*/

// another way of printing is Js

process.stdout.write("Shubh")  //prints multiple things in one line only.



