const express = require("express");
const {
  validateCreateTrip,
} = require("../middlewares/validator/validate-trip");
const tripController = require("../controllers/trip-controller");
const upload = require("../middlewares/upload");
const execute = require("../database/pool");

const router = express.Router();

router.post(
  "/",
  upload.single("image"),
  validateCreateTrip,
  tripController.createTrip
);

router.get("/allTrip", tripController.allTrip);

router.post("/joins", tripController.createJoin);

router.get("/history", tripController.hitJoin);

router.get("/historyCreate", tripController.hitCreate);

router.delete("/historyCreate/:tripId", tripController.deleteCreate);

router.delete("/historyJoin/:joinId", tripController.deleteJoin);

router.patch("/:tripId", tripController.editTrip);

module.exports = router;
