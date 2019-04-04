const {
  Sequelize,
  Model
} = require('sequelize');
const sequelize = require('../database');

class User extends Model {

}

User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  credit: {
    type: Sequelize.DECIMAL
  },
  canCount: {
    type: Sequelize.INTEGER
  }
}, {
  sequelize
});

module.exports = User;