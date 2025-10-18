class User{
  constructor(username){
    this.username = username
  }

  logMe(){
    console.log(`${this.username}`);
  }

  static createId(){
    return 123;   // if we don't want to give access of this method to any instance of this object, we use static.
  }
}

const shubh = new User("shubh")
// console.log(shubh.createId()) =>  it will throw error

class Teacher extends User{
  constructor(username, email){
    super(username)
    this.email = email
  }
}
const iphone = new Teacher("iphone", "shubh@google.com")
// console.log(iphone.createId())  => still won't be able to access it.
