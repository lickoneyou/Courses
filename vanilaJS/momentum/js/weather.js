const COORDS_LS = 'coords'
const API_KEY = 'b2eb8825eff42f8b14d59340fb80af42'

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
  // api don't work
}

function saveCoords(posObj) {
  localStorage.setItem(COORDS_LS, JSON.stringify(posObj))
}

function geoSuccessHandler(pos) {
  const lat = pos.coords.latitude
  const lon = pos.coords.longitude
  const posObj = {
    lat,
    lon,
  }
  saveCoords(posObj)
  getWeather(lat, lon)
}

function geoErrorHandler() {}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(geoSuccessHandler, geoErrorHandler)
}

function getCoords() {
  const coords = localStorage.getItem(COORDS_LS)
  if (!coords) {
    askForCoords()
  } else {
    const loadedCoords = JSON.parse(coords)
    console.log(loadedCoords);
getWeather(loadedCoords.lat, loadedCoords.lon)
  }
}

function init() {
  getCoords()
}

init()
