function* numberGenerator(){
  yield 1
  yield 2
  yield 3
}

// function*  => to initialize a generator function
// yield => same as return keyword
// we have written yield three times, that means we can use generatir function three times.

let gen = numberGenerator()
let genTwo = numberGenerator()

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
// it can oly generate one value at a time.
console.log(genTwo.next().value);
console.log(genTwo.next().value);

// next()  => iterator
// function* along with yield  => generator
