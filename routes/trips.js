const express = require("express");
const Trip = require("../controller/trips");
const newTrip = new Trip();
router = express.Router();

router.post("/", (req, res) => newTrip.setTrip(req, res));

module.exports = router;