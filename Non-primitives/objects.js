// Object via literals

const username ={
  firstname: "shubh",
  isLoggedName: true
}

username.firstname = "Mr.H"
username.lastname = "Shubh"

console.log(username.firstname);
console.log(username.lastname);
console.log(username);

const mySym = Symbol("key1")
const username1 = {
  "first name": "blah blah",
  isLoggedIn: false,
  [mySym]: "guitar"
}

console.log(username1["first name"]);
console.log(username1);
console.log(typeof [mySym]);  // it still remains symbol but if we dont put [] it will e changed to string

// When we create objects via literals it doesn't form singleton and when it declare it using contructor, it forms a singleton.

username1["first name"] = "Vansh"
// Object.freeze(username1)
console.log(username1);

username1["first name"] = "Rahul"
console.log(username1);
// above change won't take place as we have used freeze method


