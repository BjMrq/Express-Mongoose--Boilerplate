const Joi = require('@hapi/joi');
const { ValidationError } = require('../../../errors/errorTypes');
const handleHTTPErrors = require('../../../errors/handleHTTPErrors');

// Define schema to validate request body
const createOneSchema = Joi.object({
  email: Joi
    .string()
    .email()
    .required(),
  name: Joi
    .string()
    .required(),
  password: Joi
    .string()
    .required(),
  isAdmin: Joi
    .boolean()
});

// Validate the request body
const validateRequest = async ({ body }, res, next) => {

  try {

    await createOneSchema.validateAsync(body);

    next();

  } catch (error) {

    handleHTTPErrors(new ValidationError(error.details[0].message,), res);

  }

};

module.exports = { validateRequest };