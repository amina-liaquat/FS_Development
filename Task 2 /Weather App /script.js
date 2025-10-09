const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap key
const searchBtn = document.getElementById("searchBtn");
const weatherCard = document.getElementById("weatherCard");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("city").value.trim();
  
  if (!city) {
    weatherCard.innerHTML = `<p class="message">Please enter a city name 🏙️</p>`;
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    weatherCard.innerHTML = `<p class="message">Fetching weather data...</p>`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      weatherCard.innerHTML = `<p class="message">❌ City not found. Try again.</p>`;
    } else {
      const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weatherCard.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <img src="${icon}" alt="Weather icon">
        <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
        <p>🌡 Temperature: ${data.main.temp}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
      `;
    }
  } catch (error) {
    weatherCard.innerHTML = `<p class="message">⚠️ Error fetching data. Please try again later.</p>`;
  }
}
