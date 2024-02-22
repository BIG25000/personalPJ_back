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
router.get("/joinsAll/:tripId", tripController.getJoinTripAll);

router.get("/allTrip", tripController.allTrip);

router.get("/allTrip2", tripController.allTrip2);

router.post("/joins", tripController.createJoin);

router.get("/history", tripController.hitJoin);

router.get("/historyCreate", tripController.hitCreate);

router.delete("/historyCreate/:tripId", tripController.deleteCreate);

router.delete("/historyJoin/:joinId", tripController.deleteJoin);

router.patch("/:tripId", upload.single("image"), tripController.editTrip);

router.get("/:tripId", tripController.getTripById);

router.put("/joinsUpdate/:joinId", tripController.updateStatusJoin);

router.put("/joinsUpdate2/:joinId", tripController.updateStatusJoin2);

module.exports = router;
