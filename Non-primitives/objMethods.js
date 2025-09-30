// Assign (to merge 2 objects)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = Object.assign(obj1, obj2)
console.log(obj3);

// spread method(same as array)

const obj4 = {...obj1, ...obj2}
console.log(obj4);

// Array of objects

const users = [
  {
    id: "123",
    name1: "Blah"
  },
  {
    id: "1243",
    name1: "Blahh"
  },
  {
    id: "1235",
    name1: "Blahhh"
  }
]

console.log(users[1].id)  // 1243

console.log(obj1.hasOwnProperty("1"));  // same as includes

// Destructuring of objects

const course = {
  coursename: "js in hindi",
  price: 1200,
  courseInstructor: "HiteshSir"
}

course.courseInstructor  // it is okay to access by this method

const {courseInstructor: inst} = course
console.log(inst);   // just to shorten the key value and for easy access

// API intro

// {
//   "name": "shubh",
//   "coursename": "js in hindi",
//   "price": "free"
// }

// this is how a json file looks
// it's different than objects as both key and value are written as string

// Another appearance of json file

[
  {},
  {},
  {}
]