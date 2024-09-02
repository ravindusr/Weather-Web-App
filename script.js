const apiKey = "0142901ac0f740f984d94809242808";
const apiUrl = "https://api.weatherapi.com/v1/current.json?";

const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weathericon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + `key=${apiKey}&q=`+city);
    
    if (response.status == 404) {
        document.querySelector(".Error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    } else {
        const data = await response.json();
        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".time").innerHTML = data.location.localtime;
        document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
        document.querySelector(".huminidity").innerHTML = data.current.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.current.wind_kph + "Km/h";

        const weatherCondition = data.current.condition.text;

        if (weatherCondition.includes("Patchy rain nearby")) {
            weathericon.src = "img/patchlyrain.png";

        } else if (weatherCondition.includes("Rain")) {
            weathericon.src = "img/rain.png";

        } else if (weatherCondition.includes("Clear")) {
            weathericon.src = "img/sun.png";

        } else if (weatherCondition.includes("Light drizzle")) {
            weathericon.src = "img/drizzle.png";

        } else if (weatherCondition.includes("Mist")) {
            weathericon.src = "img/mist.png";

        } else if (weatherCondition.includes("Snow")) {
            weathericon.src = "img/snow.png";
        }
        else if (weatherCondition.includes("Cloudy")) {
            weathericon.src = "img/cloudy.png";
        }
        else if (weatherCondition.includes("Partly cloudy")) {
            weathericon.src = "img/cloudy.png";
        }
        else if (weatherCondition.includes("Overcast")) {
            weathericon.src = "img/overcast.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".Error").style.display = "none";
    }

}
searchbtn.addEventListener("click", () => {
    checkWeather(search.value);
});


const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
});