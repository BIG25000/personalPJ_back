const catchError = require("../utils/catch-error");
const jwtService = require("../services/jwt-service");
const userService = require("../services/user-service");
const createError = require("../utils/create-error");

const authenticate = catchError(async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    catchError("user not found", 401);
  }
  const token = authorization.split(" ")[1];
  const decodePayload = jwtService.verify(token);

  const user = await userService.findUserById(decodePayload.userId);
  if (!user) {
    createError("user not found", 401);
  }

  delete user.password;
  req.user = user;
  next();
});

module.exports = authenticate;
