const axios = require('axios');
const readline = require('readline').createInterface({

input: process.stdin,
output: process.stdout
});

// Function to fetch weather data
async function getWeatherData(city) {
try {
    const apiKey = '8566ea1796cbb08a5ded091cd73523fb';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await axios.get(apiUrl);
    const weatherData = response.data;

    // Display the weather data
    console.log(`Weather in ${city}:`);
    console.log(`Temperature: ${weatherData.main.temp}°C`);
    console.log(`Description: ${weatherData.weather[0].description}`);
    console.log(`Humidity: ${weatherData.main.humidity}%`);
    console.log(`Wind Speed: ${weatherData.wind.speed} m/s`);
} catch (error) {
    console.error('Error fetching weather data:', error.message);
}
}

readline.question('Enter a city: ', async (city) => {
await getWeatherData(city);
readline.close();
});
