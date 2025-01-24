const apiKey = `dacdc9838d5af7c90623f198bb0e7c32`;
const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchBox = document.querySelector(`.search input`);
const searchBtn = document.querySelector(`.search button`);

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
  });
});
