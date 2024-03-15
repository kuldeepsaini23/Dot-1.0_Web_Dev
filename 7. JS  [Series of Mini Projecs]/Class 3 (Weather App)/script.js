// ! Overall Mini Project js Class 3 Weather app making class 1

const APIKey = "7723dc1c52779536c72b780e7103ab6a";

function renderWeather(data) {
  let newHeading = document.createElement("h1");
  newHeading.textContent = `The weather in Goa is ${data.main.temp} °C`;

  document.body.appendChild(newHeading);
}

async function fetchWeatherApi() {
  try {
    let city = "goa";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`
    );

    const data = await response.json();
    console.log("Weather APP", data);

    renderWeather(data);
  } catch (err) {
    console.log(err);
  }
}

async function getCustomWeatherDetails() {
  try {
    let latitude = 15.6333;
    let longitude = 18.3333;

    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}&units=metric`
    );

    let data = await response.json();

    console.log(data);

    renderWeather(data);
  } catch (err) {
    console.log("Error: - " + err);
  }
}
fetchWeatherApi();
getCustomWeatherDetails();




//! User current Location
function showPosition(position) {
  let lat = position.coords.latitude;
  let longi = position.coords.longitude;

  console.log(lat);
  console.log(longi);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

