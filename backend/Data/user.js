const {
  Sequelize,
  Model
} = require('sequelize');
const sequelize = require('../database');

class User extends Model {
}

User.init({
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

User.updateUser = async (userId, userData) => {
  const updatedUser = await User.update(userData, {
    where: {
      id: userId
    },
      returning: true
    }
  );
  return updatedUser[1][0].dataValues;
}

module.exports = User;