import L from 'leaflet'
import { validateIp } from './helpers'

const ipInput = document.querySelector('.search-bar__input')
const btn = document.querySelector('button')

const ipInfo = document.querySelector('#ip')
const locationInfo = document.querySelector('#location')
const timezonaInfo = document.querySelector('#timezona')
const ispInfo = document.querySelector('#isp')

btn.addEventListener('click', getData)
ipInput.addEventListener('keydown', handleKey)

const map = L.map('map').setView([53.708095, 31.716962], 14)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map)

const marker = L.marker([53.708095, 31.716962]).addTo(map)

function getData() {
  if (validateIp(ipInput.value)) {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_ZpQz3BKRK7FWfjcb1XeKiCmPWB1uw&ipAddress=${ipInput.value}`,
    )
      .then((res) => res.json())
      .then((data) => setInfo(data))

    fetch(`https://ipinfo.io/${ipInput.value}?token=d88c3fd1682ec9`)
      .then((res) => res.json())
      .then((data) => setMap(data))
  }
}

function handleKey(e) {
  if (e.key === 'Enter') {
    getData()
  }
}

function setInfo(mapData) {
  ipInfo.innerText = mapData.ip
  locationInfo.innerText =
    mapData.location.country + ' ' + mapData.location.region
  timezonaInfo.innerText = mapData.location.timezone
  ispInfo.innerText = mapData.isp
}

function setMap(data) {
  map.setView(data.loc.split(','))
  L.marker(data.loc.split(',')).addTo(map)
}
