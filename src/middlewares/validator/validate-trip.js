const validate = require("./validatator");
const Joi = require("joi");

const createTripSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.empty": "title is required",
  }),
  location: Joi.string().required().messages({
    "string.empty": "location is required",
  }),
  startDate: Joi.string().required().messages({
    "string.empty": "startDate is required",
  }),
  endDate: Joi.string().required().messages({
    "string.empty": "endDate is required",
  }),
  description: Joi.string().required().messages({
    "string.empty": "description is required",
  }),
  meetingPlace: Joi.string().required().messages({
    "string.empty": "meetingPlace is required",
  }),
  numPeople: Joi.string()
    .pattern(/^[1-9]{1}[0-9]{0,}$/)
    .required()
    .messages({
      "string.empty": "numPeople is required",
    }),
});

exports.validateCreateTrip = validate(createTripSchema);
