const map = L.map('mapid').setView([0, 0], 2);
const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

var icon = L.icon({
    iconUrl: "./images/icon.png",
    iconSize: [75, 48],
    iconAnchor: [37.5, 22.5],
});

var redCircle = {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.15,
    radius: 2200 * 1000,
};

const marker = L.marker([0, 0], { icon: icon }).addTo(map);
const circle = L.circle([0, 0], redCircle).addTo(map);

const BASE = "https://api.wheretheiss.at/v1";
const ENDPOINT = "/satellites/";
const ID = 25544;

const lat_elem = document.getElementById("latitude");
const long_elem = document.getElementById("longitude");

let firstCall = true;

async function getData() {
    const resp = await fetch(BASE + ENDPOINT + ID);
    const data = await resp.json();

    let lat = data.latitude;
    let long = data.longitude;

    if (firstCall) {
        map.setView([lat, long], 2);
        firstCall = false;
    }

    marker.setLatLng([lat, long]);
    circle.setLatLng([lat, long]);

    document.getElementById("latitude").innerHTML = `<strong>Latitude: </strong><code>${Math.round(lat * 10000) / 10000}</code>` || "Not Available";
    document.getElementById("longitude").innerHTML = `<strong>Longitude:</strong><code> ${Math.round(long * 10000) / 10000}</code>` || "Not Available";
};

setInterval(getData, 2000);