import API_KEY from "./config.js";

// TODO: Save this in LS

function onGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  console.log(url);
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
    })
  );
}

function onGeoFail() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);
