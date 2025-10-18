class User{
  constructor(email, password){
    this.email = email;
    this.password = password
  }

  get password(){
    return this._password;
  }
  set password(value){
    this._password = value;  // we are using _password,to differentiate between constructor and get,set method value.
  }
}

const shubh = new User("shubh", 12345)
console.log(shubh.password);


// Getters setters usecase in function

function User1(email1, password1){
  this._email1 = email1;
  this._password1 = password1

  Object.defineProperty(this, "email", {
    get: function(){
      return this._email1.toUpperCase();
    },
    set: function(value){
      this.email = value;
    }
  })
}

const chai = new User1("chai@google.com", "abcdef")
console.log(chai.email)

// Usecase in Object

const User2 = {
  _email2: "chai@@google.com",
  _password2: "asdfg",

  get email2(){
    return this._email2.toUpperCase()
  },
  set email2(value){
    this._email2 = value
  }
}

const tea = Object.create(User2)  // => factory function, same as "new", used for objects and arrays.
console.log(tea.email2);

