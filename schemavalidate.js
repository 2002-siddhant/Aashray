const Joi = require("joi");
module.exports.listing_validation = Joi.object({
    title: Joi.string().trim().min(10).max(30).required(),
    description: Joi.string().trim().min(30).max(80).required(),
    price: Joi.number().positive().required(),
    location: Joi.string().trim().required(),
    image: Joi.string().trim().allow("").optional(),
    country:Joi.string().trim().required()

})
module.exports.review_validation = Joi.object({
    name:Joi.string().trim().min(10).max(30).required(),
    comment:Joi.string().trim().min(10).max(200).required(),
    rating:Joi.number().min(1).max(5).required()

})
