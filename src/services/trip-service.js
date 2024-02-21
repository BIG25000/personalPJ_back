const prisma = require("../models/prisma");

exports.createTrip = (data) => prisma.trip.create({ data });

exports.findAllTrip = () => prisma.trip.findMany({});

exports.createJoinTrip = (data) => prisma.join.create({ data });

exports.deleteJoinTrip = (id) => prisma.join.delete({ where: { id } });

exports.deleteCreateTrip = (id) => prisma.trip.delete({ where: { id } });
