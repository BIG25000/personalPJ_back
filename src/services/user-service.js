const prisma = require("../models/prisma");

exports.findUserByEmail = (email) =>
  prisma.user.findFirst({
    where: { email: email },
  });

exports.createUser = (data) => prisma.user.create({ data });

exports.findUserById = (id) => prisma.user.findUnique({ where: { id } });
