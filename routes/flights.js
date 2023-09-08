const express = require("express");
const router = express.Router();
const flightCtrl = require("../controllers/flights");

router.get("/", flightCtrl.indexFlights);

router.get("/new", flightCtrl.newFlight);

router.get("/:id", flightCtrl.showFlight);

router.post("/", flightCtrl.createFlight);

module.exports = router;
