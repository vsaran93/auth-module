const userService = require('../../services/userService');


const register = async (req, res) => {
    try {
        let result = await userService.create(req.body);
        if (result) {
            res.status(200).json({
                success: true,
                message: 'user registered successfully',
                result: result
            })
        } else {
            res.status(400).json({
                success: false,
                message: 'user already registered !'
            })
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'internal server error',
            error: err
        })
    }
}

const validateUser = (req, res) => {
    try {
        let result = userService.login(req.body);
        if (result) {
            res.status(200).json({
                success: true,
                message: 'user registered successfully',
                result: result
            })
        } else {
            res.status(400).json({
                success: false,
                message: 'bad request'
            })
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'internal server error',
            error: err
        })
    }
}

module.exports = {
    register,
    validateUser
}