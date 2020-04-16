'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User', {
      userId: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true
      },
      firstName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      isActive: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true
      },
      lastName: {
        type: Sequelize.DataTypes.STRING
      },
      createdDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User');
  }
};
