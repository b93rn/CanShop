import axios from 'axios'

const baseUri = 'https://localhost:5001/api/'

// USERS
export const getUsers = async () => {
  var users = await axios.get(baseUri + 'user')
  console.log(users);
  return users;
}

export const createUser = (user) => {
  return axios.post(baseUri + 'user', user)
}

export const updateUser = (user) => {
  console.log(user.id);
  return axios.put(baseUri + 'user/' + user.id, user)
}

export const deleteUser = (user) => {
    return axios.delete(baseUri + 'user/' + user.id);
}

// PRODUCTS
export const getProducts = () => {
  return axios.get(baseUri + 'products')
}

export const createProduct = (product) => {
  return axios.post(baseUri + 'products', product)
}

export const updateProduct = (product) => {
  return axios.patch(baseUri + 'product/' + product.id, product)
}

export const deleteProduct = (product) => {
  return axios.delete(baseUri + 'product/' + product.id)
}

// SALES
export const createSale = (user, product) => {
  return axios.post(baseUri + 'sales', {
    user,
    product
  })
}

export const getAmountOfSales = (amount = 13) => {
  return axios.get(baseUri + 'sales/' + amount)
}

export const refundSale = (sale) => {
  return axios.delete(baseUri + 'sale/' + sale.id)
}
