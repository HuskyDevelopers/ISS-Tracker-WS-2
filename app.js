var mymap = L.map('mapid').setView([0, 0], 2);

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

//////////////////////////////////////////////////////
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'

const latitude_element = document.getElementById('iss_Lat');
const longitude_element = document.getElementById('iss_Long');

//need async when using apis//
async function getISSLocation() {
    const response = await fetch(api_url);//Waiting for the api to fetch//
    const data = await response.json(); //converting to json object//

    const iss_Lat = data.latitude;
    const iss_Long = data.longitude;

    latitude_element.innerText = "Current Latitude: " + iss_Lat.toFixed(6);
    longitude_element.innerText = "Current Longitude: " + iss_Long.toFixed(6);
}

getISSLocation();

setInterval(getISSLocation, 1000); //Repeatedly calls function getISSLocation