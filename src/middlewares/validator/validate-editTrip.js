const validate = require("./validatator");
const Joi = require("joi");

const editTripSchema = Joi.object({
  title: Joi.string().messages({
    "string.empty": "title is required",
  }),
  location: Joi.string().messages({
    "string.empty": "location is required",
  }),
  startDate: Joi.string().messages({
    "string.empty": "startDate is required",
  }),
  endDate: Joi.string().messages({
    "string.empty": "endDate is required",
  }),
  description: Joi.string().messages({
    "string.empty": "description is required",
  }),
  meetingPlace: Joi.string().messages({
    "string.empty": "meetingPlace is required",
  }),
  numPeople: Joi.string()
    .pattern(/^[1-9]{1}[0-9]{0,}$/)
    .messages({
      "string.empty": "numPeople is required",
    }),
});

exports.validateEditTrip = validate(editTripSchema);
