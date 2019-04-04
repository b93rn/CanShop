const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database');
const Product = require('./product');
const User = require('./user');

class Sale extends Model {

}

Sale.init({
  user_id: {
    type: Sequelize.INTEGER, 
    references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  product_id: {
    type: Sequelize.INTEGER, 
    references: {
      model: Product,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
}, { sequelize });

module.exports = Sale;