const joi = require('@hapi/joi');

const schema = {
    user: joi.object({
        firstName: joi.string().max(100).required(),
        lastName: joi.string().max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().required()
    })
}

module.exports = schema;