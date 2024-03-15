const userTab = document.querySelector("[data-user_weather]");
const searchTab = document.querySelector("[data-search_weather]");
const userContainer = document.querySelector(".weather-container");

const grantAccess = document.querySelector(".grant-location-container");

const searchForm = document.querySelector("[data-search_form]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");
const errorInfoContainer = document.querySelector(".error-info-container");

// * Initial Variable

let currentTab = userTab;
const APIKey = "7723dc1c52779536c72b780e7103ab6a";
currentTab.classList.add("current-tab");

//ek kaam aur pending hh
getfromSessionsStorage();

function switchTab(clickedTab) {
  if (clickedTab != currentTab) {
    currentTab.classList.remove("current-tab");
    currentTab = clickedTab;
    currentTab.classList.add("current-tab");
  }

  if (!searchForm.classList.contains("active")) {
    userInfoContainer.classList.remove("active");
    errorInfoContainer.classList.remove("active");
    grantAccess.classList.remove("active");
    searchForm.classList.add("active");
  } else {
    //*main pehle search tab tha ab your wether vale pe gya
    searchForm.classList.remove("active");
    userInfoContainer.classList.remove("active");
    errorInfoContainer.classList.remove("active");
    //* your weather vale pe gya hu toh local storage se lat or longi se weather dedu
    getfromSessionsStorage();
  }
}

userTab.addEventListener("click", () => {
  switchTab(userTab);
});

searchTab.addEventListener("click", () => {
  switchTab(searchTab);
});

//*Check if Corndinates are already present in session storage
function getfromSessionsStorage() {
  const localCoordinates = sessionStorage.getItem("user-coordinates");
  if (!localCoordinates) {
    //agar local coordinates nhi mile toh
    grantAccess.classList.add("active");
  } else {
    const coordinates = JSON.parse(localCoordinates);
    fetchUserWeatherInfo(coordinates);
  }
}

async function fetchUserWeatherInfo(coordinates) {
  const { lat, lon } = coordinates;
  //Make grantcontainer invisible
  grantAccess.classList.remove("active");

  //make loader visible
  loadingScreen.classList.add("active");

  //API call
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`
    );

    const data = await response.json();

    loadingScreen.classList.remove("active");

    userInfoContainer.classList.add("active");

    renderWeatherInfo(data); //! scrap values from data and dislay in UI
  } catch (err) {
    loadingScreen.classList.remove("active");
    console.log(err);
  }
}

function renderWeatherInfo(weatherInfo) {
  //! firstly we have fetch the elements

  const cityName = document.querySelector("[data-city_name]");
  const countryIcon = document.querySelector("[data-country_icon]");
  const desc = document.querySelector("[data-weather_desc]");
  const icon = document.querySelector("[data-weather_icon]");
  const temperature = document.querySelector("[data-temp]");
  const windSpeed = document.querySelector("[data-windspeed]");
  const humidity = document.querySelector("[data-humidity]");
  const cloudiness = document.querySelector("[data-cloudiness]");

  //* fetching values from weatherInfo object and displaying in UI
  cityName.innerText = weatherInfo?.name;
  countryIcon.src = `https://flagcdn.com/w20/${weatherInfo?.sys?.country.toLowerCase()}.png`;

  desc.innerText = weatherInfo?.weather?.[0]?.description;
  icon.src = `http://openweathermap.org/img/wn/${weatherInfo?.weather?.[0]?.icon}.png`;
  temperature.innerText = `${weatherInfo?.main?.temp} °C`;
  windSpeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
  humidity.innerText = `${weatherInfo?.main?.humidity}%`;
  cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition); //! Show position is a callback function
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  const userCoordinates = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
  };

  sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
  // !Miane yha pe Ui pe dikhana bhul gya tha
  fetchUserWeatherInfo(userCoordinates);
}

const grantAccessButton = document.querySelector("[data-grant_access]");
grantAccessButton.addEventListener("click", getLocation);

//! search Weather
const searchInput = document.querySelector("[data-search_input]");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let cityName = searchInput.value;

  if (cityName === "") {
    return;
  } else {
    fetchSearchWeatherInfo(cityName);
  }
});

async function fetchSearchWeatherInfo(city) {
  loadingScreen.classList.add("active");
  userInfoContainer.classList.remove("active");
  grantAccess.classList.remove("active");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`
    );

    const data = await response.json();

    if (data.cod === "404") {
      loadingScreen.classList.remove("active");
      errorInfoContainer.classList.add("active");
    } else {
      errorInfoContainer.classList.remove("active");
      loadingScreen.classList.remove("active");
      userInfoContainer.classList.add("active");
      renderWeatherInfo(data);
      console.log("success");
    }
  } catch (err) {
    loadingScreen.classList.remove("active");
    console.log(err);
  }
}
