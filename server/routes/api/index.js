const router = require('express').Router();

const coordinatesRoutes = require('./coordinates-routes');

router.use('/coordinates', coordinatesRoutes);

module.exports = router;
