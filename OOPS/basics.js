// Object literal

const user = {
  username: "Shubh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){
    console.log(`Username: ${this.username}`);

    console.log(this);  // this means current context, i.e. in this case user object.

  }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);  // "this" in global scope points to window object and it doesn't refer to anything byDefault therefore the output is {}.


// Constructor function

// const promiseOne = new Promise()
// const date = new Date()
// these are examples of constructor fucntion.

function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
}

// const userOne = User("hitesh", 12, true)
// const userTwo = User("shubh", 11, true)
// if i try to print userOne, it will automatically overwrite the values of userTwo.
// to avoid this we user "new" keyword

const userOne = new User("hitesh", 12, true)
const userTwo = new User("shubh", 11, true)

console.log(userOne);
console.log(userTwo);

