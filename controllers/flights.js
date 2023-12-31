const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

function newFlight(req, res) {
  res.render("flight/new");
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
    res.redirect("/flights");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

async function showFlight(req, res) {
  try {
    const flight = await Flight.findById(req.params.id).populate(
      "destinations"
    );

    if (!flight) {
      return res.status(404).send("Flight not found");
    }

    const tickets = await Ticket.find({ flight: flight._id });

    res.render("flight/details", { flight, tickets });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

async function indexFlights(req, res) {
  try {
    const flights = await Flight.find();
    res.render("flight/index", { flights });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  newFlight,
  createFlight,
  showFlight,
  indexFlights,
};
