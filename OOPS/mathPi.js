const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);
// {value: 3.141592653589793,
// writable: false,
// enumerable: false,
// configurable: false}

// this means we can't overwrite the value of PI in JS.

const chai = {
  name: "ginger tea",
  price: 230,
  isAvailable: true,

  orderChai: function(){
    console.log("code fat jayega");
  }
}

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false  // => iterable or not.
})  // to change predefined properties but it is applicable only in few scenarios.

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (const [key,value] of Object.entries(chai)) {
  if(typeof value !== "function"){
    console.log(`${key} : ${value}`);
  }
}  // Object.entries(chai) is written because chai was not iterable byDefault.
