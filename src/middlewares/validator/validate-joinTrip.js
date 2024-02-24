const validate = require("./validatator");
const Joi = require("joi");

const joinTripSchema = Joi.object({
  nameJoin: Joi.required().messages({
    "string.empty": "nameJoin is required",
  }),
  peopleJoin: Joi.string()
    .required()
    .pattern(/^[1-9]{1}[0-9]{0,}$/)
    .messages({
      "string.empty": "numPeople is required",
    }),
  userId: Joi.required(),
  tripId: Joi.required(),
});

exports.validateJoinTrip = validate(joinTripSchema);
