function mutiplyBy5(num){
  return num * 5;
}

mutiplyBy5.power = 2  // accessing a function as an object

console.log(mutiplyBy5(5));
console.log(mutiplyBy5.power);
console.log(mutiplyBy5.prototype);

// Use of prototype

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()
