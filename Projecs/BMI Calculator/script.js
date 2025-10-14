const form = document.querySelector("form")
// const height = parseInt(document.querySelector("#height").value)
// writing this outside will give you empty values.
// parseInt, because querySelector().value returns values in string.

form.addEventListener("submit", function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector("#height").value)
  // console.log(height);
  const weight = parseInt(document.querySelector("#weight").value)
  const results = document.querySelector("#results")

  if(height === "" || height < 0 || isNaN(height)){
    results.innerHTML = "Please enter a valid height"
  }
  else if(weight === "" || weight < 0 || isNaN(weight)){
    results.innerHTML = "Please enter a valid weight"
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span`;

    if(bmi < 18.6){
    results.innerHTML += " => Underweight"
    }
    else if(bmi >= 18.6 && bmi < 24.9){
      results.innerHTML += " => Normal Weight"
    }
    else{
      results.innerHTML += " => Overweight"
    }
    // += because we want both the bmi value and underweight. if we didn't use +, it will overwrite the bmi value.
  }


});