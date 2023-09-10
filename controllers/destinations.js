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

    // Log the received data
    console.log("Received Data - Airport:", airport, "Arrival:", arrival);

    flight.destinations.push({ airport, arrival });

    // Log the destinations array after pushing
    console.log("Flight Destinations After Push:", flight.destinations);

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
