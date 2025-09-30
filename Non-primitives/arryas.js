// Array

let user = ["shubh", true]
console.log(user[0]);

// first

let arr = ["green tea", "black tea", "oolong tea"]
console.log(arr[0]);

let arr2 = new Array("green tea", "black tea", "oolong tea")  //another way of declaring array

// second

let tea = ["herbal tea", "masala chai", "white tea"]
tea[1] = "jasmine tea"
console.log(tea);

// third

let citiesVisited = ["Mumbai", "Sydney"]
citiesVisited.push("Berlin")  // adds element in the last
console.log(citiesVisited);

// fourth

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]
const lastOrder = teaOrders.pop()  // removes element from the last
console.log(teaOrders);
console.log(lastOrder);

// fifth(softcopy) -> changes made in one will reflect in other

let tea2 = ["herbal tea", "masala chai", "white tea"]
let tea3 = tea2
tea2[2] = "jasmine tea"
console.log(tea2);
console.log(tea3);

// sixth(hardcopy) ->

let topCities = ["Berlin", "Singapore", "New York"]
let hardCopyCities = [...topCities]  // this generates a seperate memory for the new array and this made in on won't reflect in other
topCities.pop()
console.log(hardCopyCities);

// seventh

let european = ["Rome", "Paris"]
let asian = ["Tokyo", "Bangkok"]
let world = european + asian  // this will give string result
world = [european, asian]  // this creates 2d array
world = european.concat(asian)
console.log(world);

// eight

let cities = ["Kyoto", "London", "Cape Town", "Vancouver"]
let isLondonInList = cities.includes("London")
console.log(isLondonInList);


// join

const myArr1 = [0, 1, 2, 3, 4, 5]
const newArr2 = myArr1.join()  // converts array to strings

console.log(myArr1);
console.log(newArr2);

// slice

const myA = myArr1.slice(1,3)  // doesn't include 3rd index and doesn't manipulate original array
const myA1 = myArr1.splice(1,3)  // includes 3rd index but manipulates original array

console.log(myA);
console.log(myA1);

// spread operator

const dc = ["thor", "wonder woman", "flash"]
const marvel = ["superman", "batman", "spiderman"]

const allHeros = [...marvel, ...dc]  // better and more used than concat
console.log(allHeros);

// flat

const arrr = [1,2,3, [1,3], 3, [4,5, [4,7,8]]]
console.log(arrr.flat(Infinity));  // used to merge all elements in one array

// Array forming

console.log(Array.from("Shubh"));  // converts string to array and cannot convert object to array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));  // same as from

