const express = require("express");
const {
  validateCreateTrip,
} = require("../middlewares/validator/validate-trip");
const tripController = require("../controllers/trip-controller");
const upload = require("../middlewares/upload");

const router = express.Router();

router.post(
  "/",
  upload.single("image"),
  validateCreateTrip,
  tripController.createTrip
);

router.get("/allTrip", tripController.allTrip);

router.post("/joins", tripController.createJoin);

module.exports = router;
