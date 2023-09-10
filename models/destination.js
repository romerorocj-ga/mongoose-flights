const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const airportEnum = ["AUS", "DFW", "DEN", "LAX", "SAN"];

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: airportEnum,
    required: true,
  },
  arrival: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Destination", destinationSchema);
