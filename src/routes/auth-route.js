const express = require("express");
const {
  validateRegister,
} = require("../middlewares/validator/validatator-auth");

const authController = require("../controllers/auth-controller");

const router = express.Router();

router.post("/register", validateRegister, authController.register);

module.exports = router;
