const catchError = require("../utils/catch-error");
const tripService = require("../services/trip-service");
const uploadService = require("../services/upload-service");

exports.createTrip = catchError(async (req, res, next) => {
  const startDate = new Date(req.body.startDate);
  const endDate = new Date(req.body.endDate);
  const data = {
    userId: req.user.id,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    startDate: startDate,
    endDate: endDate,
    meetingPlace: req.body.meetingPlace,
    numPeople: req.body.numPeople,
  };

  if (req.file) {
    data.image = await uploadService.upload(req.file.path);
  }
  const trip = await tripService.createTrip(data);

  res.status(200).json({ trips: trip });
});

exports.allTrip = catchError(async (req, res, next) => {
  const sumTrip = await tripService.findAllTrip();
  res.status(200).json({ sumTrip });
});

exports.createJoin = catchError(async (req, res, next) => {
  console.log(req.body);
  const data = {
    userId: req.user.id,
    nameJoin: req.body.nameJoin,
    peopleJoin: req.body.peopleJoin,
    tripId: req.body.tripId,
  };
  const join = await tripService.createJoinTrip(data);
  res.status(200).json({ join: join });
});
