const express = require("express");
const guestController = require("../controllers/guest-controller");
const router = express.Router();

router.post("/", guestController.guestIn);
module.exports = router;
