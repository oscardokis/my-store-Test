const Joi = require('joi');

const productIdSchema = Joi.string().uuid();
const name = Joi.string().min(3).max(30);
const price = Joi.number().min(10);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required()
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image
});

const getProductSchema = Joi.object({
  id: productIdSchema.required()
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }

