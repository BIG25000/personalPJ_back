const express = require("express");
const {
  validateCreateTrip,
} = require("../middlewares/validator/validate-trip");

const tripController = require("../controllers/trip-controller");
const router = express.Router();

router.post("/", validateCreateTrip, tripController.createTrip);

module.exports = router;
