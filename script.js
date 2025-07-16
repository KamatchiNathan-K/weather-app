const apiKey = 'd531c50185faddd9636d870aa36a65ec'; // your key

function getWeather() {
  const city = document.getElementById('cityInput').value;
  if (!city) {
    alert('Please enter a city name');
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log('API data:', data); // see in console
      const weatherDiv = document.getElementById('weather');
      if (data && data.main) {
        weatherDiv.innerHTML = `
          <h2>${data.name}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>${data.weather[0].description}</p>
        `;
      } else {
        weatherDiv.innerHTML = `<p>City not found. Please check the spelling.</p>`;
      }
    })
    .catch(error => {
      console.error('Fetch error:', error);
      document.getElementById('weather').innerHTML = `<p>Error loading data.</p>`;
    });
}
