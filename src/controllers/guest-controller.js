const catchError = require("../utils/catch-error");
const userService = require("../services/user-service");
const createError = require("../utils/create-error");
const hashService = require("../services/hash-service");
const jwtService = require("../services/jwt-service");

exports.guestIn = catchError(async (req, res, next) => {
  const guestId = Math.floor(Math.random() * 1000);
  console.log(guestId);
  const payload = { guestId };
  const accessToken = jwtService.sign(payload);

  res.status(200).json({ accessToken });
});
