const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = require('../models/user');
const helper = require('../utils/helper');


const create = async (details) => {
    const { firstName, email, password, lastName } = details;
    try {
        let result = await User.findAndCountAll({ where: { email: email } });
        if (result.rows.length > 0) {
            return;
        } else {
            let hash = await helper.hashPassword(password);
            if (hash) {
                return await User.create({ firstName: firstName, lastName: lastName, email: email, password: hash });
            }
        }
    }
    catch (err) {
        throw err;
    }
}


const login = async (detail) => {
    const { email, password } = detail;
    passport.use(new LocalStrategy({
        usernameField: email,
        passwordField: password
    }, async (userEmail, userPassword, done) => {
        try {
            let user = await User.findOne({ where: { email: userEmail } });
            if (!user) {
                return done(null, false, { message: 'user not found' })
            }
            const isValidPassword = helper.verifyPassword(userPassword, user.password)
            if (!isValidPassword) {
                return done(null, false, { message: 'wrong password' })
            }
            return done(null, user, { message: 'loggedin successfully' })
        }
        catch (err) {
            throw err
        }
    }))
}

module.exports = {
    create,
    login
}