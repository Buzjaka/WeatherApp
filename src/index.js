function formatDate() {
  let now = new Date();
  //console.log(now);
  //let date = now.getDate();
  //let year = now.getFullYear();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  /*let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];*/
  //let month = months[now.getMonth()];
  let currentDate = `${day} ${hours}:${minutes}`;
  //console.log("Today is " + currentDate);
  //return currentDate;
  //console.log(formatDate(new Date()));
  return currentDate;
}
let dateSelector = document.querySelector(".current-weekDay-Time");
dateSelector.innerHTML = formatDate();

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city-mainId");
  let cityInput = document.querySelector("#search-city-input");
  cityElement.innerHTML = cityInput.value;
  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let units = "metric";
  let apiUrl = `${apiEndpoint}?q=${cityInput.value}&appid=${apiKey}&units=${units}`;
  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let temperatureDisplay = document.querySelector("#temperature");
    temperatureDisplay.innerHTML = `${temperature}℃`;
    console.log(response);
    let pressure = Math.round(response.data.main.pressure);
    let pressureDisplay = document.querySelector("#pressure");
    pressureDisplay.innerHTML = `Pressure: ${pressure} hPa`;
    let humidity = Math.round(response.data.main.humidity);
    let humidityDisplay = document.querySelector("#humidity");
    humidityDisplay.innerHTML = `Humidity: ${humidity}%`;
    //let wind = response.data.wind.speed;
    //let windDisplay = document.querySelector("#wind");
    //windDisplay.innerHTML = `Wind: ${wind} km/h`;
    //let sky = Math.round(response.data.weather[0].description);
    //let skyDisplay = document.querySelector("#sky");
    //skyDisplay.innerHTML = `${sky}`;
  }

  axios.get(apiUrl).then(showTemperature);
}

/*function convertToFarenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}
function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}*/

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

/*let farenheitButton = document.querySelector("#farenheit-button");
farenheitButton.addEventListener("click", convertToFarenheit);
let celsiusButton = document.querySelector("#celsius-button");
celsiusButton.addEventListener("click", convertToCelsius);*/
