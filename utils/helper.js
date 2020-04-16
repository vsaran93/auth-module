const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = async (password) => {
    let hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

const verifyPassword = (password, hashedPassword) => {
    bcrypt.compare(password, hashedPassword, (err, valid) => {
        if (err) {
            throw err;
        }
        return valid;
    })
}
module.exports = {
    hashPassword,
    verifyPassword
}