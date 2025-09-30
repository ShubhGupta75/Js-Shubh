// // Count from 5 to 1 and store in array

let arr = []
let j = 5

while(j>0){
  arr.push(j)
  j--
}
console.log(arr);

// do while example

let teaCollection = []
let tea

do {
  tea = prompt(`Enter your favourite tea(type "stop" to finish)`) // for taking input from user

  if(tea !== "stop"){
    teaCollection.push(tea)
  }
} while (tea !== "stop");  // need to execute in browser as prompt is not supported in  nodejs

// for loop

let mul = []
let array = [2,4,6]
let num
for(let k = 0; k < array.length ; k++){
  num = array[k] * 2
  mul.push(num)

  mul.push(array[k] * 2)  // in one line
}
console.log(mul);

// another example

let cities = ["paris", "rome", "delhi", "varanasi"]
let newCities = []
for(let i=0; i<cities.length; i++){
  newCities[i] = cities[i]
}
console.log(newCities);
console.log(cities);
