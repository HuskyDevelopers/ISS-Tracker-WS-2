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

<<<<<<< HEAD
//////////////////////////////////////////////////////
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'
=======
//////////////////////////////////////////////////////////////

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
>>>>>>> 334d726be6ce4a65563dc61734b03fcbbb3e106c

const latitude_element = document.getElementById('iss_Lat');
const longitude_element = document.getElementById('iss_Long');

<<<<<<< HEAD
//need async when using apis//
async function getISSLocation() {
    const response = await fetch(api_url);//Waiting for the api to fetch//
    const data = await response.json(); //converting to json object//
=======
let initialCall = true;

async function getISSLocation() {
    const response = await fetch(api_url);
    const data = await response.json();
<<<<<<< HEAD
>>>>>>> 334d726be6ce4a65563dc61734b03fcbbb3e106c

    const iss_Lat = data.latitude;
    const iss_Long = data.longitude;

<<<<<<< HEAD
    latitude_element.innerText = "Current Latitude: " + iss_Lat.toFixed(6);
    longitude_element.innerText = "Current Longitude: " + iss_Long.toFixed(6);
=======
    latitude_element.innerText = 'Latitude: ' + iss_Lat.toFixed(6);
    longitude_element.innerText = 'Longitude: ' + iss_Long.toFixed(6);
=======
    const iss_Lat = data.latitude;
    const iss_Long = data.longitude;
    latitude_element.innerText = iss_Lat.toFixed(6);
    longitude_element.innerText = iss_Long.toFixed(6);
>>>>>>> da18caee72b12a5f2bc53c29e7ca15834d1fd78d

    marker.setLatLng([iss_Lat, iss_Long]);
    circle.setLatLng([iss_Lat, iss_Long]);
    if (initialCall) {
        mymap.setView([iss_Lat, iss_Long], 2);
        initialCall = false;
    }
>>>>>>> 334d726be6ce4a65563dc61734b03fcbbb3e106c
}

getISSLocation();

<<<<<<< HEAD
setInterval(getISSLocation, 1000); //Repeatedly calls function getISSLocation
=======
setInterval(getISSLocation, 1000);
>>>>>>> 334d726be6ce4a65563dc61734b03fcbbb3e106c
