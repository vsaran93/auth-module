const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = (password) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            throw (err)
        }
        return hash;
    })
}

module.exports = {
    hashPassword
}