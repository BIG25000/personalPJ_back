const prisma = require("../models/prisma");

exports.createTrip = (data) => prisma.trip.create({ data });

exports.findAllTrip = () =>
  prisma.trip.findMany({
    where: { statusTrip: "PENDING" },
    orderBy: { startDate: "asc" },
  });

exports.findAllTrip2 = () =>
  prisma.trip.findMany({
    where: { statusTrip: "SUCCESS" },
    orderBy: { startDate: "asc" },
  });

exports.createJoinTrip = (data) => prisma.join.create({ data });

exports.deleteJoinTrip = (id) => prisma.join.delete({ where: { id } });

exports.deleteCreateTrip = (id) => prisma.trip.delete({ where: { id } });

exports.editTrip = (data, id) =>
  prisma.trip.update({
    data: data,
    where: { id: +id },
  });

exports.getById = (id) => prisma.trip.findFirst({ where: { id } });
