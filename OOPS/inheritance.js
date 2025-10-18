class User{
  constructor(username){
    this.username = username
  }

  logMe(){
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User{
  constructor(username, email, password){
    super(username)  // we don't need to use .call(this, username) in classes.
    this.email = email
    this.password = password
  }

  addCourse(){
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("Shubh", "shubh@google.com", "123")
chai.addCourse()
chai.logMe()
console.log(chai instanceof Teacher);  // to check whether chai is instance of teacher or not.
console.log(chai instanceof User);  // true, because chai is instance of Teahcer which is instance of User.
