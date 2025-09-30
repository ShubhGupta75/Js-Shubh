// basic function

function makeTea(typeOfTea){
  console.log(`Making ${typeOfTea}`)  // Either write return or console.log
}

let tea = makeTea("green tea")
// console.log(tea);

// Some basic stuffs

function loginUserMessage(username) {
  if(username === undefined){   // this can also be written as !username, both means same.
    return   // this will return undefined.
  }
  return `${username} just logged in`
}
const message = loginUserMessage("Shubh")
console.log(message);  // if I don't pass any value in the function, it treats that as undefined

// Rest operator

function calculateCartPrice(val1,val2,...price){
  return price
}
console.log(calculateCartPrice(100,200,300));

// if we want to print all values, we use -> (...), this is called rest operator

console.log(calculateCartPrice(200,233,455,2456,4332));
// first two values gets stored in val1 and val2 and the output is [ 455, 2456, 4332 ]

// Object inside Function

const user = {
  username: "shubh",
  price: 1200
}

function handleObjefct(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObjefct(user)
handleObjefct({
  username: "vansh",
  price: 1300
})  // we can directly add values like this also...

// Arrays inside function

const myArray = [200,300,100,600]
function returnValue(getArray) {
  return getArray[2]
}

console.log(returnValue(myArray));


// Arrow functions

const addTwo = (num1, num2) => {
  return num1 + num2
}   // normal way to declare arrow function
console.log(addTwo(45,64));

const addThree = (num3, num4) => (num3 + num4)
const addObj = () => ({username: "ghochu"})
// impilict way to declare an arrow function(when the return is of only one line)
console.log(addThree(849,4934));
console.log(addObj());
