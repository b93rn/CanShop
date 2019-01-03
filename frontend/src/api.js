import axios from 'axios'

const baseUri = 'http://localhost:8080/api/'

export const getUsers = () => {
  return axios.get(baseUri + 'users')
}

export const createUser = async (user) => {
  return axios.post(baseUri + 'users', user)
}

export const getProducts = () => {
  return axios.get(baseUri + 'products')
}

export const createProduct = async (product) => {
  let result = await axios.post(baseUri + 'products', product)
  return result
}
