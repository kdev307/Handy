const url = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "f00c38e0279b7bc85480c3fe775d518c";

const searchBox = document.querySelector("#input-city");
const searchBtn = document.querySelector(".search-icon");
// const weatherIcon = document.querySelector(".weather-icon");

async function findWeather(city) {
    console.log("Fetching weather details for ", city);
    try {
        const res = await fetch(`${url}?q=${city}&appid=${apiKey}&units=metric`);
        if (!res.ok) {
            throw new Error("City not found. Please try again.");
        } else {
            const data = await res.json();
            displayWeather(data);
            setBodyBackground(data.weather[0].description);
        }
    } catch (error) {
        console.log("Error fetching weather data:", error);
        alert(error.message);
    }
}

function setBodyBackground(weatherDescription) {
    const body = document.body;
    let bgColor = "#FFFFFF";

    if (weatherDescription.includes("clear") || weatherDescription.includes("sun")) {
        bgColor = "#4ba6ff";
    } else if (weatherDescription.includes("cloud")) {
        bgColor = "#808080";
    } else if (weatherDescription.includes("rain")) {
        bgColor = "#4682B4";
    } else if (weatherDescription.includes("storm")) {
        bgColor = "#2c0034";
    } else if (weatherDescription.includes("snow")) {
        bgColor = "#efefef";
    } else if (weatherDescription.includes("mist") || weatherDescription.includes("fog")) {
        bgColor = "#B0C4DE";
    } else if (weatherDescription.includes("haze") || weatherDescription.includes("smoke")) {
        bgColor = "#778899";
    } else if (weatherDescription.includes("dust") || weatherDescription.includes("sandstorm")) {
        bgColor = "#D2B48C";
    } else if (weatherDescription.includes("tornado")) {
        bgColor = "#42000D";
    } else if (weatherDescription.includes("hurricane")) {
        bgColor = "#191970";
    }

    body.style.backgroundColor = bgColor;
}

function displayWeather(data) {
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".date-time").textContent = moment().format("MMMM Do YYYY, h:mm:ss a");
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " &degC";
    document.querySelector(".min-temp").innerHTML = Math.round(data.main.temp_min) + " &degC";
    document.querySelector(".max-temp").innerHTML = Math.round(data.main.temp_max) + " &degC";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + " m/s";
    document.querySelector(".weather-desc").innerHTML = data.weather[0].description;
    document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa";
    document.querySelector(".visibility").innerHTML = data.visibility / 1000 + " km";
    document.querySelector(".feels-like").innerHTML = " " + data.main.feels_like + " &degC";
    let newSrc = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    document.querySelector(".weather-icon").setAttribute("src", newSrc);

    document.querySelector(".weather-info").style.display = "block";
}

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        findWeather(searchBox.value);
    }
});

searchBtn.addEventListener("click", () => {
    findWeather(searchBox.value);
});
