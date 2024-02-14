const catchError = require("../utils/catch-error");
const userService = require("../services/user-service");
const createError = require("../utils/create-error");
const hashService = require("../services/hash-service");
const jwtService = require("../services/jwt-service");

exports.register = catchError(async (req, res, next) => {
  const existsUser = await userService.findUserByEmail(req.body.email);

  if (existsUser) {
    catchError("email already in user", 400);
  }

  req.body.password = await hashService.hash(req.body.password);
  delete req.body.confirmPassword;

  const newUser = await userService.createUser(req.body);
  const payload = { userId: newUser.id };
  const accessToken = jwtService.sign(payload);

  delete newUser.password;

  res.status(200).json({ accessToken, newUser });
});
