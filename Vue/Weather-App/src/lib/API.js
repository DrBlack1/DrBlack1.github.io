const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '0ff63a76fe8a95db1e772110b7589231';
// const location = '37.8267, -122.4233';
const WEATHER_API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`;
const ADDRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1`;

// Getting lat/long for users inputted location
function getCoordinates(location) {
    // Using the darksky geo location url concatenated with the users location input
        return fetch(`${GEO_API_URL}${location}`)
            .then(response => response.json());
    };


// Function that will make the request to the API
function getForecast(lat, lng) {
// This makes the request
   return fetch(`${WEATHER_API_URL}${lat},${lng}`)
// When the fetch is complete, turn it into json
    .then(response => response.json());
    };

// Function to get the location/address the user has input
function getAddress(lat, lng) {
    return fetch(`${ADDRESS_API_URL}&lat=${lat}&lon=${lng}`)
    .then(response => response.json());
}



export default {
getForecast,
getCoordinates,
getAddress
};
