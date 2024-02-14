const validate = require("./validatator");
const Joi = require("joi");

const registerSchema = Joi.object({
  email: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/),
  ])
    .required()
    .messages({
      "alternatives.match": "invalid email address",
    }),
  firstName: Joi.string().required().trim().messages({
    "string.empty": "first name is required",
  }),
  lastName: Joi.string().required().trim().messages({
    "string.empty": "last name is required",
  }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
      "string.empty": "password is required",
      "string.pattern.base":
        "password must be at least 6 characters and contain only alphabet and number",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "string.empty": "confirm password is required",
    "any.only": "password and confirm password did not match",
  }),
  foodAllergies: Joi.string().trim(),
  congenitalDisease: Joi.string().trim(),
  gender: Joi.string().trim(),
  mobile: Joi.string().required().trim().messages({
    "string.empty": "mobile is required",
  }),
  nameEmergency: Joi.string().required().trim().messages({
    "string.empty": "name emergency is required",
  }),
  mobileEmergency: Joi.string().required().trim().messages({
    "string.empty": "mobile emergency is required",
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().required().messages({
    "string.empty": "email is required",
    "any.required": "email required",
  }),
  password: Joi.string().required().messages({
    "string.empty": "password is required",
    "any.required": "password is required",
  }),
});

exports.validateRegister = validate(registerSchema);
exports.validateLogin = validate(loginSchema);
