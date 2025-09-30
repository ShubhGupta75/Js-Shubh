//first

let arr = ["oolong tea", "black coffee", "chai", "lemon tea"]
let selected = []
let element
for(let i=0; i<arr.length; i++){
  if(arr[i] == "chai"){
    break
  }
// selected.push(arr[i])
  selected[i] = arr[i]
}
console.log(selected);


//second

let cities = ["paris", "mumbai", "rome", "los angeles", "varanasi"]
let newCities = []

for(let i= 0; i< cities.length; i++){
  if(cities[i] == "rome"){
    continue
  }
  newCities.push(cities[i])
}
console.log(newCities);

//third

let numbers = [1,2,3,4,5]
let smallNumbers = []

for (const num of numbers) {
  if(num == 4){
    break
  }
  smallNumbers.push(num)
}
console.log(smallNumbers);

//fourth

let citiesPop = {
  delhi: 802903,
  mumbai: 242222,
  varanasi: 534525,
  indore: 424244
}
let cityNewPop = {}
for (const city in citiesPop) {
  if(city == "indore"){
    break
  }
  cityNewPop[city] = citiesPop[city]
}
console.log(cityNewPop);

//fifth

let teaCollection1 = ["oolong tea", "jasmine tea", "black tea", "chai"]
let availableTea = []

teaCollection1.forEach(function (tea) {
  if(tea == "black tea"){
    return  // used in functions as a replacement to continue
  }
  availableTea.push(tea)
});
console.log(availableTea);

//sixth

let arr1 = [2,4,5,3,6]
let newArr = []
for(let i=0; i<arr1.length; i++){
  if(arr1[i] == 5){
    continue
  }
  newArr.push(arr1[i] * 2)
}
console.log(newArr);


// seventh

let teaCollection = ["oolong tea", "chai", "black tea", "jasmine tea", "coffee"]
let newTeaCollection = []

for (const tea of teaCollection) {
  if(tea.length > 10){
    break
  }
  newTeaCollection.push(tea)
}
console.log(newTeaCollection);
