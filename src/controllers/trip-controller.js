const catchError = require("../utils/catch-error");
const tripService = require("../services/trip-service");
const uploadService = require("../services/upload-service");
const execute = require("../database/pool");

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

exports.allTrip2 = catchError(async (req, res, next) => {
  const sumTrip = await tripService.findAllTrip2();
  res.status(200).json({ sumTrip });
});

exports.createJoin = catchError(async (req, res, next) => {
  const data = {
    userId: req.user.id,
    nameJoin: req.body.nameJoin,
    peopleJoin: req.body.peopleJoin,
    tripId: req.body.tripId,
  };
  const join = await tripService.createJoinTrip(data);
  res.status(200).json({ join: join });
});

exports.hitJoin = async (req, res, next) => {
  const data = await execute(
    `SELECT
    t.id tripId,
      j.id,
      j.userId,
      t.title,
      t.start_date,
      t.end_date,
      t.statusTrip,
      j.statusJoin,
      j.name_join,
      j.people_join
  FROM
      users u
          JOIN
      trips t ON u.id = t.userId
          JOIN
      joins j ON t.id = j.tripId;;`
  );
  res.status(200).json({ data: data });
};

exports.hitCreate = async (req, res, next) => {
  const data = await execute(
    `SELECT 
    t.id,
    t.userId,
    t.title,
    t.start_date,
    t.end_date,
    t.statusTrip,
    t.num_people,
    t.location
FROM
    users u
        JOIN
    trips t ON u.id = t.userId;`
  );
  res.status(200).json({ data: data });
};

exports.deleteJoin = catchError(async (req, res, next) => {
  // console.log("****************", req.params);
  await tripService.deleteJoinTrip(+req.params.joinId);
  res.status(204).json();
});

exports.deleteCreate = catchError(async (req, res, next) => {
  await tripService.deleteCreateTrip(+req.params.tripId);
  res.status(204).json();
});

exports.editTrip = catchError(async (req, res, next) => {
  console.log(req.body, req.params.tripId);
  const result = await tripService.editTrip(req.body, req.params.tripId);
  res.status(200).json({ message: result });
});

exports.getTripById = catchError(async (req, res, next) => {
  const result = await tripService.getById(+req.params.tripId);
  res.status(200).json(result);
});

exports.getJoinTripAll = async (req, res, next) => {
  const data = await execute(
    `SELECT
    t.location,
    t.start_date, 
    t.id,
        t.title,
      t.num_people,
        j.people_join,
        j.name_join,
        j.statusJoin
    FROM
        trips t
            JOIN
        joins j ON t.id = j.tripId where t.id = ?`,
    [req.params.tripId]
  );

  res.status(200).json({ data: data });
};

exports.updateStatusJoin = catchError(async (req, res, next) => {
  console.log(req.body);
  const data = await tripService.updateStatusJoin(req.body.id);
  res.status(200).json({ data });
});

exports.updateStatusJoin2 = catchError(async (req, res, next) => {
  console.log(req.body);
  const data = await tripService.updateStatusJoin2(req.body.id);
  res.status(200).json({ data });
});
