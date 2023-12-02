document.getElementById('search-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const cityInput = document.getElementById('city-input').value;
  
    try {
      const apiKey = 3ed565296c19775878a64c31457d90b2''; 
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey}`;
      const response = await axios.get(apiUrl);
  
      const weatherInfo = document.getElementById('weather-info');
      const { name, weather, main } = response.data;
      const description = weather[0].description;
      const temperature = main.temp;
  
      weatherInfo.innerHTML = `<h2>${name}</h2>
                               <p>Weather: ${description}</p>
                               <p>Temperature: ${temperature}°C</p>`;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      const weatherInfo = document.getElementById('weather-info');
      weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
    }
  });
  
