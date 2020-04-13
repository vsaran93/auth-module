const User = require('../models/user');
const helper = require('../utils/helper');

const create = async (details) => {
    const { firstName, email, password, lastName } = details;
    try {
        let result = await User.findAndCountAll({ email: email });
        if (result.rows.length > 0) {
            return;
        } else {
            let hashPassword = helper.hashPassword(password);
            return await User.create({ firstName: firstName, lastName: lastName, email: email, password: hashPassword });
        }
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    create
}