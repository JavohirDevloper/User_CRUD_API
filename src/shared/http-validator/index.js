const Joi = require("joi");
const { BadRequestError } = require("../errors");

/**
 * @param {{ body, params, query }} params
 * @param {{ body: Joi.Schema, params: Joi.Schema, query: Joi.Schema }} schema
 * @returns
 */
const httpValidator = ({ body, params, query }, schema) => {
  if (body) {
    const { error } = schema.body.validate(body);

    if (error) throw new BadRequestError(error);
  }
  if (params) {
    const { error } = schema.params.validate(params);

    if (error) throw new BadRequestError(error);
  }
  if (query) {
    const { error } = schema.query.validate(query);

    if (error) throw new BadRequestError(error);
  }
};

// Middlewareda validatsiya qilish uchun
// const httpValidatorV2 = (schema) => {
//   return (req, res, next) => {
//     if (schema.body) {
//       const { error } = schema.body.validate(req.body);

//       if (error) throw new BadRequestError(error);
//     }
//     if (schema.params) {
//       const { error } = schema.params.validate(req.params);

//       if (error) throw new BadRequestError(error);
//     }
//     if (schema.query) {
//       const { error } = schema.query.validate(req.query);

//       if (error) throw new BadRequestError(error);
//     }
//   };
// };

module.exports = httpValidator;
