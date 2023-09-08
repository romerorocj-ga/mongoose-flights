const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const airlineEnum = ["American", "Southwest", "United"];
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

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: airlineEnum,
      required: true,
    },
    airport: {
      type: String,
      enum: airportEnum,
      default: "DEN",
    },
    flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 9999,
    },
    departs: {
      type: Date,
      default: () => {
        const oneYearFromNow = new Date();
        oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
        return oneYearFromNow;
      },
    },
    destinations: [destinationSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flight", flightSchema);
