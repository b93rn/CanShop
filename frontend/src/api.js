import axios from 'axios'

const baseUri = 'http://localhost:5000/api/'

// USERS
export const getUsers = async () => {
  var users = await axios.get(baseUri + 'user')
  // console.log(users);
  return users;
}

export const createUser = (user) => {
  return axios.post(baseUri + 'user', user)
}

export const updateUser = (user) => {
  // console.log(user);
  return axios.put(baseUri + 'user/' + user.id, user)
}

export const deleteUser = (user) => {
    return axios.delete(baseUri + 'user/' + user.id);
}

// PRODUCTS
export const getProducts = async () => {
  var products = await axios.get(baseUri + 'product')
  // console.log(products);
  return products;
}

export const createProduct = (product) => {
  return axios.post(baseUri + 'product', product)
}

export const updateProduct = ({amount, color, description, id, name, price, purchasePrice}) => {
  const product = {amount, color, description, id, name, price, purchasePrice};
  // console.log(product);
  return axios.put(baseUri + 'product/' + product.id, product);
}

export const deleteProduct = (product) => {
  return axios.delete(baseUri + 'product/' + product.id)
}

// SALES
export const createSale = (user, product) => {
  return axios.post(baseUri + 'sale', {
    userId: user.id,
    productId: product.id
  })
}

export const getAmountOfSales = (amount = 13) => {
  return axios.get(baseUri + 'sales/' + amount)
}

export const refundSale = (sale) => {
  return axios.delete(baseUri + 'sale/' + sale.id)
}
