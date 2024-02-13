const { rateLimit } = require("express-rate-limit");

module.exports = rateLimit({
  windowMs: 1000 * 60 * 5,
  limit: 1000,
  message: { message: "too many request in a given period" },
});
