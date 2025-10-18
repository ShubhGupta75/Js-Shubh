// Creating a promise

const promiseOne = new Promise(function(resolve,reject){
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function(){
    console.log("Async task is complete");
    resolve()   // this is directly connected with then() and the function is successfully called.
  }, 1000)
})

// Consuming a promise
promiseOne.then(function(){
  console.log("Promise consumed");
})

// Doing this in one step.

new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Async task 2");
    resolve()
  }, 1000)
}).then(function(){
  console.log("Async task resolved");
})

// Promise Example 3

const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: "Shubh", age: 19})
  }, 1000)
})
promiseThree.then(function(user){
  console.log(user);
// the value we pass in resolve() can be direcly accessed through then().
})

// Promise Example 4

const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false
  if(!error){
    resolve({username: "Shubh", password: 123})
  } else{
    reject("ERROR: Something went wrong")
  }
  }, 1000)
})

promiseFour.then((user) => {
  console.log(user);
  return user.username;
}).then((username) => {   // chaining => by using     this only we can further access properties of object passed in resolve().
  console.log(username);
}).catch(function(error){
  console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))  // this will definitely execute.

// Async Await

const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false
  if(!error){
    resolve({username: "javascript", password: 123})
  } else{
    reject("ERROR: JS went wrong")
  }
  }, 1000)
})

async function consumePromsieFive(){
  try {
    const response = await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);  // we need to use try and catch to handle error in async await.
  }
}
consumePromsieFive()
 

// fetch() using async await

async function getAllUsers(){
  try {
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   const data = await response.json();
   console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}
getAllUsers()

// fetch() using then() and catch()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data);
})
.catch((error) => console.log(error))
