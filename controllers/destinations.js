const Flight = require("../models/flight");

function newDestinationForm(req, res) {
  res.render("destination/new", { flightId: req.params.id });
}

async function createDestination(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).send("Flight not found");
    }
    const { airport, arrival } = req.body;
    flight.destinations.push({ airport, arrival });
    await flight.save();
    res.redirect(`/flights/${flight._id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  newDestinationForm,
  createDestination,
};
