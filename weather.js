

const API_KEY = '095037fa1f35ee79edfa8cb86207ad4d';

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  
  fetch(url).then(response => response.json()).then(data => {
    const weatherContainer = document.querySelector('#weather span:first-child');
    const cityContainer = document.querySelector('#weather h3:last-child');

    weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp} degrees`;
    cityContainer.innerText = data.name;
  });
}

function onGeoError() {
  alert("can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);