const router = require('express').Router();
const axios = require('axios');

const API_KEY = process.env.key;
console.log(API_KEY);

router.get('/:city', async (req, res) => {
  const { city } = req.params;

  const response = await axios.get(`http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${city},UK`);
  const data = response.data.data[0];
  const coordinates = {
    longitude: data.longitude,
    latitude: data.latitude,
  };

  if (data) {
    return res.status(200).json(coordinates);
  }
  return res.status(404).json({ message: 'Bad request' });
});

module.exports = router;
