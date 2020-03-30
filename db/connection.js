const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('authMain', 'root', 'Admin123', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = sequelize;