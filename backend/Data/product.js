const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database');

class Product extends Model {
  
}

Product.init({
  name: {
    type: Sequelize.STRING
  },
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

Product.updateProduct = async (productId, productData) => {
  const updateProduct = await Product.update(productData, {
    where: {
      id: productId
    },
    returning: true
  });
  return updateProduct[1][0].dataValues;
}

module.exports = Product;