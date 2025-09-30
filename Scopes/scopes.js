
let a = 10
const b = 20
var c = 30

if(true){
  let a = 100
  const b = 200
  var c = 300
}

console.log(a);  //10
console.log(b);  //20
console.log(c);  //300, it's accessing the value of block scope


if(true){
  const username = "shubh"
  if(username === "shubh"){
    const website = " youtube"
    console.log(username);  // inside method can access outside variable
  }
  // console.log(website);  // outise method can't access inside variable
}
// console.log(username);  // outside method can't access inside variable


// this keyword
// "this" talks about current context and stores values in an object

const user = {
  username: "shubh",
  price: 999,

  welcomeMessage: function() {
    console.log(`${this.username}, welcome to the course`);
    console.log(this);

  }
}
user.welcomeMessage()
console.log(this);  // since there is no context in global scope, therefore "this" refers to an empty object.

// but in browser, "this" refers to window object not an empty object when there is no context in global scope.
// "this" is mostly used to access elements in an objects. "this" can be only be used in normal function and not in arrow function because they(arrow) inherit it from the surrounding(global) scope.


// Immediately Invoked Function Expression

// ()() => Structure

(function chai(){   // named IIFE
  console.log(`DB Connected`);

})();  //semicolon is important

((name) => {
  console.log(`DB connected twice by ${name}`);

})("shubh");