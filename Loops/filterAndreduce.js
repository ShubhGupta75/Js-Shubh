// Filter(same as forEach but it returns values)

const nums = [1,2,3,4,5,6,7,8,9,10]

const newNums = nums.filter( (item) => (item >= 4) )
// this is implicit return as it is written in one line.
console.log(newNums);

const newNums1 = nums.filter( (item) => {
  return item >= 5   // this is explicit return as we are inside an object and scoping is started.
} )
console.log(newNums1);


// To do the same thing in forEach loop

const number = [3,4,6,8,10,12,14]
const newNumber = []   // defining a new array to store values
number.forEach( (item) => {
  if(item % 2 == 0){
    newNumber.push(item)
  }
} )
console.log(newNumber);

// Application in database

const books = [
  {
    title: "Book one", genre: "History", publish: 1990, edition: 2014
  },
  {
    title: "Book two", genre: "Science", publish: 1980, edition: 2012
  },
  {
    title: "Book three", genre: "Fiction", publish: 2010, edition: 2014
  },
  {
    title: "Book four", genre: "Non-fiction", publish: 2000, edition: 2004
  },
  {
    title: "Book five", genre: "History", publish: 1999, edition: 2012
  },
  {
    title: "Book six", genre: "Romance", publish: 1984, edition: 2000
  },
  {
    title: "Book seven", genre: "History", publish: 1995, edition: 2010
  },
  {
    title: "Book eight", genre: "Fiction", publish: 1997, edition: 2020
  },
  {
    title: "Book nine", genre: "Non-fiction", publish: 2011, edition: 2014
  }
]
let userBooks = books.filter( (bk) => bk.genre === "History" )
// console.log(userBooks);

userBooks = books.filter( (bk) => {
  return bk.publish >= 1995 && bk.genre === "Fiction"
} )
console.log(userBooks);


// map()

const numbers = [1,2,3,4,5,7]
const newNumbers = numbers.map( (num) => num + 10 )
console.log(newNumbers);


// Chaining(using multiple methods together)

const newN = numbers.map( (num) => num*10).map( (num) => num + 1 ).filter( (num) => num >= 40 )
console.log(newN);


// reduce()

let numb = [1,2,3,4]
let sum = numb.reduce( (acc,currVal) => acc + currVal, 0 )
console.log(sum);
