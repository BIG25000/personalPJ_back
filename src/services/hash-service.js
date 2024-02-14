const bcrypt = require("bcryptjs");

exports.hash = (input) => bcrypt.hash(input, 12);
