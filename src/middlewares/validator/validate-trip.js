const createError = require("../../utils/create-error");

exports.validateCreateTrip = (req, res, next) => {
  console.log("req", req.body);
  // const { input } = req.body;
  // console.log("********************", input);
  // if (!trip || !trip.trim()) {
  //   createError("at least one of trip ");
  // }
  next();
};
