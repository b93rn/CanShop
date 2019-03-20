import { sequelize, Sequelize } from 'sequelize';

const User = sequelize.define('user', {
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
});

export default User;