import Vue from 'vue'
import Vuex from 'vuex'
import {
  getUsers,
  getProducts,
  createUser,
  createProduct
} from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    products: [],
    creatingUser: false,
    creatingProduct: false
  },
  mutations: {
    SET_USERS (state, users) {
      state.users = users
    },
    SET_PRODUCTS (state, products) {
      state.products = products
    },
    TOGGLE_CREATING_USER (state) {
      state.creatingUser = !state.creatingUser
    },
    TOGGLE_CREATING_PRODUCT (state) {
      state.creatingProduct = !state.creatingProduct
    },
    ADD_USER (state, user) {
      state.users.push(user)
    },
    ADD_PRODUCT (state, product) {
      state.products.push(product)
    }
  },
  actions: {
    async loadUsers ({ commit }) {
      let result = await getUsers()
      commit('SET_USERS', result.data.data)
    },
    async loadProducts ({ commit }) {
      let result = await getProducts()
      commit('SET_PRODUCTS', result.data.data)
    },
    async addUser ({ commit }, user) {
      try {
        let result = await createUser(user)
        commit('ADD_USER', result.data.data)
        commit('TOGGLE_CREATING_USER')
      } catch (e) {
        console.error(e)
      }
    },
    async addProduct ({ commit }, product) {
      try {
        let result = await createProduct(product)
        console.log(result)
        commit('ADD_PRODUCT', result.data.data)
        commit('TOGGLE_CREATING_PRODUCT')
      } catch (e) {
        console.error(e)
      }
    }
  }
})
