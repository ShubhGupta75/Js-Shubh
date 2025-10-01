const map = new Map()

map.set("In", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
// set is used to add element in map
console.log(map)

for (const [key] of map) {
  console.log(key);
  // unique syntax to print the key and values seperatelyusing forof loop.
}

// Maps are non-iterable, therefore we need special syntax for iteration