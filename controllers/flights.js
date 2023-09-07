const Flight = require('../models/flight');

function newFlight(req, res) {
  res.render('flight/new');
}

async function createFlight(req, res) {
  try {
    const { airline, airport, flightNo, departs } = req.body;
    const newFlight = new Flight({
      airline,
      airport,
      flightNo,
      departs,
    });
    await newFlight.save();
    res.redirect('/flights');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

async function indexFlights(req, res) {
  try {
    const flights = await Flight.find();
    res.render('index', { flights }); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  newFlight,
  createFlight,
  indexFlights,
};
