import { sequelize, Sequelize } from 'sequelize';

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
});

export default Product;