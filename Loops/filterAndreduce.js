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
const newNumber = []   // defining a new arrays to store values
number.forEach( (item) => {
  if(item % 2 == 0){
    newNumber.push(item)
  }
} )
console.log(newNumber);


