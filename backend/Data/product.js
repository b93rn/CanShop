const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database');

class Product extends Model {

}

Product.init({
  description: {
    type: Sequelize.STRING
  },
  barcode: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.DECIMAL, 
    allowNull: false,                    
  },
  purchasePrice: {
    type: Sequelize.DECIMAL                     
  },
  amount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  color: {
    type: Sequelize.STRING,
    defaultValue: '#ffffff'
  }
}, {sequelize} );

module.exports = Product;