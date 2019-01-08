import Vue from 'vue'
import Vuex from 'vuex'
import {
  getUsers,
  getProducts,
  createUser,
  createProduct,
  updateUser,
  updateProduct,
  createSale
} from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    products: [],
    creatingUser: false,
    creatingProduct: false,
    selectedUser: null
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
    },
    SET_USER (state, user) {
      state.selectedUser = user
    },
    UPDATE_USER (state, user) {
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i]._id === user._id) {
          state.users[i] = user
        }
      }
    },
    UPDATE_PRODUCT (state, product) {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i]._id === product._id) {
          state.products[i] = product
        }
      }
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
        commit('ADD_PRODUCT', result.data.data)
        commit('TOGGLE_CREATING_PRODUCT')
      } catch (e) {
        console.error(e)
      }
    },
    async updateProduct ({ commit }, product) {
      try {
        let result = await updateProduct(product)
        return result.data.data
      } catch (e) {
        throw new Error('Updating the product has failed! ' + e)
      }
    },
    async updateUser ({ commit }, user) {
      try {
        let result = await updateUser(user)
        return result.data.data
      } catch (e) {
        throw new Error('Updating the user has failed!')
      }
    },
    async buyProduct ({ commit, dispatch }, { user, product }) {
      let updatedUser
      let updatedProduct
      try {
        updatedUser = await dispatch('updateUser', user)
        updatedProduct = await dispatch('updateProduct', product)
      } catch (e) {
        console.error(e)
        return
      }
      // Add sale to sales history
      try {
        await createSale(updatedUser, updatedProduct)
      } catch (e) {
        console.error(e)
        return
      }
      commit('UPDATE_USER', updatedUser)
      commit('UPDATE_PRODUCT', updatedProduct)
      // Close the Edit user page
      commit('SET_USER', null)
    }
  }
})
