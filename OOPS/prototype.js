let myHeros = ["thor", "spiderman"]

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function(){
    console.log(`Spidy power is ${this.spiderman}`);
  }
}

Object.prototype.shubh = function(){
  console.log(`shubh is present in all objects`);
}

Array.prototype.heyShubh = function(){
  console.log(`shubh says hello`);
}

heroPower.shubh()  // shubh() will be accessible to all objects because it is a prototype method of Object.
myHeros.shubh()
// heroPower.heyShubh()  // But heyShubh() will only be accessible to arrays and not any other datatype.
myHeros.heyShubh()


// Inheritance

const User = {
  name: "chai",
  email: "chai@google.com"
}
const Teacher = {
  makeVideo: true
}
const TeacherSupport = {
  isAvailable: false
}
const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__ : TeacherSupport
}

Teacher.__proto__ = User
// means Teacher can access property of User.
// prototype inheritance/chaining in old way.
console.log(Teacher.name);


// Modern syntax

Object.setPrototypeOf(TeacherSupport, Teacher)
// TeachingSupport inherits from Teacher.
// means TeacherSupport can access property of Teacher.
console.log(TeacherSupport.isAvailable);
console.log(TeacherSupport.makeVideo);

// Example

let username = "Shubh     "

String.prototype.truelength = function(){
  console.log(`True length is: ${this.trim().length}`)
}
username.truelength()

console.log("Poonam  ".truelength())
// Since we have added a custom method inside String prototype,every string in JS can now use.truelength()
