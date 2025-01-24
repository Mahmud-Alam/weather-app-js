const apiKey = `dacdc9838d5af7c90623f198bb0e7c32`;
const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchBox = document.querySelector(`.search input`);
const searchBtn = document.querySelector(`.search button`);
const weatherIcon = document.querySelector(`.weather-icon`);

async function getWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  const data = await response.json();
  return data;
}

searchBtn.addEventListener(`click`, () => {
  getWeather(searchBox.value).then((data) => {
    document.querySelector(`.city`).innerHTML = data.name;
    document.querySelector(`.temp`).innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(`.humidity`).innerHTML = data.main.humidity + "%";
    document.querySelector(`.wind`).innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main === `Clear`) {
      weatherIcon.src = `images/clear.png`;
    } else if(data.weather[0].main === `Clouds`) {
      weatherIcon.src = `images/clouds.png`;
    } else if(data.weather[0].main === `Rain`) {
      weatherIcon.src = `images/rain.png`;
    } else if(data.weather[0].main === `Drizzle`) {
      weatherIcon.src = `images/drizzle.png`;
    } else if(data.weather[0].main === `Mist`) {  
      weatherIcon.src = `images/mist.png`;
    } else if(data.weather[0].main === `Snow`) {
      weatherIcon.src = `images/snow.png`;
    }

    document.querySelector(`.weather`).style.display = `block`;
  });
});
