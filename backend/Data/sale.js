const {
  Sequelize,
  Model
} = require('sequelize');
const sequelize = require('../database');
const Product = require('./product');
const User = require('./user');

class Sale extends Model {}

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
}, {
  sequelize
});

Sale.All = async () => {
  const result = await Sale.findAll();
  console.log('All: ' + result);
  return result;
}

Sale.AddSale = async (userInput, productInput) => {
  let userById = await User.findByPk(userInput.id);
  const productById = await Product.findByPk(productInput.id);
  let sale, newUser, newProduct;
  
  userById = updateCredit(userById, userInput.credit);
  
  const { user, product } = calculateSale(userById.dataValues, productById.dataValues);

  // Try to update the user and the product and add new sale.
  try {
    newUser = await User.updateUser(user.id, user);
    newProduct = await Product.updateProduct(product.id, product);
    sale = await Sale.create({
      user_id: newUser.id,
      product_id: newProduct.id
    }); 
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
  return {
    id: sale.dataValues.id,
    user: newUser,
    product: newProduct
  }
}

const calculateSale = (user, product) => {
  user.credit -= product.price;
  user.canCount++;
  
  product.amount--;
  return {
    user,
    product
  }
}

const updateCredit = (user, newCredit) => {
  user.dataValues.credit = newCredit;
  return user;
}

module.exports = Sale;