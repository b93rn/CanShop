import axios from 'axios'

// const baseUri = 'http://localhost:8080/api/'
const baseUri = 'http://192.168.1.25:8080/api/'

// USERS
export const getUsers = () => {
  return axios.get(baseUri + 'users')
}

export const createUser = (user) => {
  return axios.post(baseUri + 'users', user)
}

export const updateUser = (user) => {
  return axios.put(baseUri + 'user/' + user._id, user)
}

export const deleteUser = (user) => {
  return axios.delete(baseUri + 'user/' + user._id)
}

// PRODUCTS
export const getProducts = () => {
  return axios.get(baseUri + 'products')
}

export const createProduct = (product) => {
  return axios.post(baseUri + 'products', product)
}

export const updateProduct = (product) => {
  return axios.put(baseUri + 'product/' + product._id, product)
}

export const deleteProduct = (product) => {
  return axios.delete(baseUri + 'product/' + product._id)
}

// SALES
export const createSale = (user, product) => {
  return axios.post(baseUri + 'sales', { user_id: user._id, product_id: product._id })
}

export const getAmountOfSales = (amount = 13) => {
  return axios.get(baseUri + 'sales/' + amount)
}

export const refundSale = (sale) => {
  return axios.delete(baseUri + 'sale/' + sale._id)
}
