async function getWeather() {
    const city = document.getElementById("city").value;
    const errorMessage = document.getElementById("error-message");
    const weatherInfo = document.getElementById("weather-info");
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const condition = document.getElementById("condition");

    if (!city) {
        errorMessage.textContent = "Please enter a city name!";
        weatherInfo.style.display = "none";
        return;
    }

    const apiKey = "e0f63cd555d24c239ac143742252401";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            errorMessage.textContent = "City not found!";
            weatherInfo.style.display = "none";
        } else {
            errorMessage.textContent = "";
            weatherInfo.style.display = "block";
            cityName.textContent = `Weather in ${data.location.name}, ${data.location.country}`;
            temperature.textContent = `Temperature: ${data.current.temp_c}°C`;
            condition.textContent = `Condition: ${data.current.condition.text}`;
        }
    } catch (error) {
        errorMessage.textContent = "An error occurred. Please try again.";
        weatherInfo.style.display = "none";
    }
}
