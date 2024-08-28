const apiKey = "4f1fdaea8a5f5031e345a186fec30290";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weathericon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".Error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    } else {
        const data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".huminidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + "Km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "img/cloudy.png";

        }

        else if (data.weather[0].main == "Rain") {
            weathericon.src = "img/rain.png";

        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "img/sun.png";

        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "img/Drizzle.png";

        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "img/mist.png";

        }
        else if (data.weather[0].main == "Snow") {
            weathericon.src = "img/snow.png";

        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".Error").style.display = "none";
    }

}
searchbtn.addEventListener("click", () => {
    checkWeather(search.value);
});