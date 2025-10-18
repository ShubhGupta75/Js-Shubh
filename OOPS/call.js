function setUsername(username){
  this.username = username
}

function createUser(username, email, password){
  // setUsername(username) => writing this alone won't hold the reference.

  setUsername.call(this, username)  // "this" is written to pass the context.
  this.email = email
  this.password = password
}

// .call() => passes the current execution to another function.

const user = new createUser("shubh", "shubh@google.com", 12345)
console.log(user);

// Another example

function introduce(role) {
  console.log(`Hi, I'm ${this.name} and I'm a ${role}.`);
}

const person = { name: "Shubh" };

introduce.call(person, "developer"); // Hi, I'm Shubh and I'm a developer.

