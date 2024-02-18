const prisma = require("../models/prisma");

exports.createTrip = (data) => prisma.trip.create({ data });

exports.findAllTrip = () => prisma.trip.findMany({});
