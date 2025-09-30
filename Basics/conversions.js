let score = "55"
console.log(typeof score);   // to determine the type of datatype

let valueInNumber = Number(score)  // type conversion to number
console.log(typeof valueInNumber)
console.log(valueInNumber)

let blah = Number(undefined)
console.log(blah);

// "33" => 33
// "33abc" => NaN
// "true" => 1; "false" => 0
// "null/undefined" => 0/NaN

let isLoggedIn = 1
let boolean = Boolean(isLoggedIn) // type conversion in boolean

console.log(boolean)

// 1 => true; 0 => false
// "" => false
// "shubh" => true

/* for string conversions use String() */