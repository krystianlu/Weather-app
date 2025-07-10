const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector(".input");
const searchBtn = document.querySelector(".searchBtn");
const image = document.querySelector(".image");
const temp = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");

async function checkWeather(city) {
  const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
  let data = await response.json();
  console.log(data);

  temp.innerHTML = Math.round(data.main.temp) + "°C";
  cityName.innerHTML = data.name;
  wind.innerHTML = data.wind.speed + " km/h";
  humidity.innerHTML = data.main.humidity + "%";

  if (data.weather[0].main == "Clouds") {
    image.src = "/images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    image.src = "/images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    image.src = "/images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    image.src = "/images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    image.src = "/images/rain.png";
  } else if (data.weather[0].main == "Snow") {
    image.src = "/images/snow.png";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(input.value);
  document.querySelector(".details").style.display = "flex";
});
