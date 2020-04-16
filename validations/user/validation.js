const { user } = require('./schema');

const validateUserInput = async (req, res, next) => {
    const values = await user.validate(req.body);
    if (values.error) {
        res.status(400).json({
            success: false,
            message: values.error.details[0].message
        })
    }
    next();
}

module.exports = {
    validateUserInput
}