const catchError = require("../utils/catch-error");
const tripService = require("../services/trip-service");

exports.createTrip = catchError(async (req, res, next) => {
  const trip = req.body;
  console.log(trip);
  const startDate = new Date(req.body.startDate);
  const endDate = new Date(req.body.endDate);
  const tripA = {
    ...trip,
    userId: req.user.id,
    startDate,
    endDate,
  };
  const result = await tripService.createTrip(tripA);
  res.status(200).json({ result });
});
