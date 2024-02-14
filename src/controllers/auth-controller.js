const catchError = require("../utils/catch-error");

exports.register = catchError(async (req, res, next) => {
  console.log(req.body);
  res.status(200).json({ message: "EIEI" });
});
