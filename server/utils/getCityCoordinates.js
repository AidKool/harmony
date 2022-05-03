const axios = require('axios');

const API_KEY = process.env.key;

async function getCityCoordinates(city) {
  const response = await axios.get(`http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${city},UK`);
  const data = response.data.data[0];
  const coordinates = {
    longitude: data.longitude,
    latitude: data.latitude,
  };
  return coordinates;
}

module.exports = getCityCoordinates;
