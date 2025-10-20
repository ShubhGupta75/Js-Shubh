document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "2f501d13290cda0aaecfc909bb8bd0b5";

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    // Web requests always takes some time and it may show error, always remember this.

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url)
    // console.log(typeof response);  => Object
    console.log(response);

    if(!response.ok){
      throw new Error("City not found")
    }

    const data = await response.json()
    return data;

  }

  function displayWeatherData(data) {
    console.log(data);
    const {name, main, weather} = data;
    cityNameDisplay.innerHTML = name;
    temperatureDisplay.innerHTML = `Temperature : ${main.temp}`;
    descriptionDisplay.innerHTML = `Description : ${weather[0].description}`;

    // Unlocking the display(because the class is hidden)
    weatherInfo.classList.remove("hidden")  // show weather.
    errorMessage.classList.add("hidden")  // hide error.


  }

  function showError() {
    weatherInfo.classList.add("hidden");  // hide weather.
    errorMessage.classList.remove("hidden"); // show error.
  }
});
