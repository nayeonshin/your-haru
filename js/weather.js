import API_KEY from "./config.js";

const COORDINATES_KEY = "coordinates";

function handleGeoFail() {
  alert("Permission denied. Can't show your weather.");
}

function getWeather(latitude, longitude, { isWeatherSaved } = {}) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  fetch(url).then((response) =>
    response.json().then((data) => {
      // Creates a CSS custom property
      const root = document.documentElement;
      root.style.setProperty(
        "--weather-icon",
        `url("../../img/weather/${data.weather[0].icon}.png")`
      );

      const weather = document.querySelector(".js-home__weather");
      const temperature = weather.querySelector(
        ".js-home__weather .js-weather__temperature"
      );
      const city = weather.querySelector(".js-home__weather .js-weather__city");

      temperature.innerText = `${data.main.temp}°C`;
      city.innerText = data.name;

      if (!isWeatherSaved) {
        fadeIn(weather, { isAfterOut: true });
      }
    })
  );
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordinates = {
    latitude: latitude,
    longitude: longitude,
  };

  localStorage.setItem(COORDINATES_KEY, JSON.stringify(coordinates));

  getWeather(latitude, longitude, { isWeatherSaved: false });
}

function askForLocation() {
  const savedLocation = localStorage.getItem(COORDINATES_KEY);

  if (savedLocation === null) {
    const weather = document.querySelector(".js-home__weather");
    weather.classList.add(HIDDEN_CLASSNAME);

    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFail);
  } else {
    const parsedLocation = JSON.parse(savedLocation);
    getWeather(parsedLocation.latitude, parsedLocation.longitude, {
      isWeatherSaved: true,
    });
  }
}

askForLocation();
