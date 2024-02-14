const express = require("express");
const {
  validateRegister,
  validateLogin,
} = require("../middlewares/validator/validatator-auth");

const authController = require("../controllers/auth-controller");

const router = express.Router();

router.post("/register", validateRegister, authController.register);
router.post("/login", validateLogin, authController.login);

module.exports = router;
