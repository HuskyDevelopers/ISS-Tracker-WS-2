const mymap = L.map('mapid').setView([0, 0], 2);
const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });

tiles.addTo(mymap);

var myIcon = L.icon({
    iconUrl: 'issPic.png',

    iconSize: [75, 48],
    iconAnchor: [37.5, 22.5],
});

var myCircle = {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.15,
    radius: 2200 * 1000,
};

const marker = L.marker([0, 0], { icon: myIcon }).addTo(mymap);
const circle = L.circle([0, 0], myCircle).addTo(mymap);

//////////////////////////////////////////////////////////////

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

const latitude_element = document.getElementById('iss_Lat');
const longitude_element = document.getElementById('iss_Long');

let initialCall = true;

async function getISSLocation() {
    const response = await fetch(api_url);
    const data = await response.json();
    const iss_Lat = data.latitude;
    const iss_Long = data.longitude;
    latitude_element.innerText = 'Latitude: ' + iss_Lat.toFixed(6);
    longitude_element.innerText = 'Longitude: ' + iss_Long.toFixed(6);

    marker.setLatLng([iss_Lat, iss_Long]);
    circle.setLatLng([iss_Lat, iss_Long]);
    if (initialCall) {
        mymap.setView([iss_Lat, iss_Long], 2);
        initialCall = false;
    }
}

getISSLocation();

setInterval(getISSLocation, 1000);
