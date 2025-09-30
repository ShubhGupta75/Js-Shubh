const JsUser = {
  name: "Shubh",
  age: 19,
  "full name": "Shubh Gupta",
  isLoggedIn: true,
  loggedInOn: ["Monday", "Friday"]
}

JsUser.greeting = function(){
  console.log("Hello Shubh");
}

JsUser.greetingTwo = function(){
  console.log(`Hello js user this is ${this.name}`);
}

console.log(JsUser.greeting);  // if we don't use (), it gives output as [Function (anonymous)] and it's called "reference"

console.log(JsUser.greeting());  // this is execution
console.log(JsUser.greetingTwo());

// Elements in objects is accessed by using "this" keyword when it is present inside a function

// Singleton objects

const tinderUser = new Object()
tinderUser.name = "Virat"
tinderUser.id = "123abc"
tinderUser.isLoggedIn = true

console.log(tinderUser);

// Ojects inside object

const regularUser = {
  email: "someone@gmail.com",
  fullname: {
    username: {
      firstname: "Shubh",
      lastname: "Gupta"
    }
  }
}

console.log(regularUser.fullname.username.firstname);

// Interesting thing to remember

console.log(tinderUser);  //this is a object
console.log(Object.keys(tinderUser));  // the keys are stored in an array which mean we can apply array methods in this and we can loop through.
