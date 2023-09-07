const express = require('express');
const router = express.Router();
const flightCtrl = require('../controllers/flights');

// Route to display the form for adding a new flight
router.get('/new', flightCtrl.newFlight);

// Route to handle the submission of the new flight form
router.post('/', flightCtrl.createFlight);

// Route to display a list of all flights (index functionality)
router.get('/', flightCtrl.indexFlights);

module.exports = router;