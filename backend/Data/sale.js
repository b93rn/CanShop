const { Sequelize, Model } = require('sequelize');
const sequelize = require('../database');
const Product = require('./product');
const User = require('./user');

class Sale extends Model {
  addSale (userId, productId) {
    const user = User.findByPk(userId);
    const product = Product.findByPk(productId);

    
  }
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

Sale.All = async () => {
  const result = await Sale.findAll();
  console.log('All: ' + result);
  return result;
}

Sale.AddSale = async (userId, productId) => {
  const userById = await User.findByPk(userId);
  const productById = await Product.findByPk(productId);
  // const { updatedUser, updatedProduct } = calculateSale(user.dataValues, product.dataValues);
  const {user, product} = calculateSale(userById.dataValues, productById.dataValues);
  console.log(user,product)
  try {
    // console.log(updatedUser)
    const newUser = await User.updateUser(user.id, user);
    const newProduct = await Product.updateProduct(product.id, product);
    console.log(newUser, newProduct);

  } catch(err) {
    // console.error(err);
  }
  
  // return await Sale.create({user_id: newUser.id, product_id: newProduct.id});
}

const calculateSale = (user, product) => {
  user.credit -= product.price;
  user.canCount++;

  product.amount--;
  // console.log(user, product)
  return {
    user,
    product
  }
}

module.exports = Sale;