import Vue from 'vue'
import Vuex from 'vuex'
import {
  getUsers,
  getProducts,
  getAmountOfSales,
  createUser,
  createProduct,
  updateUser,
  deleteUser,
  updateProduct,
  deleteProduct,
  createSale
} from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    products: [],
    sales: [],
    creatingUser: false,
    creatingProduct: false,
    selectedUser: null,
    selectedProduct: null
  },
  getters: {
    slidePageIsActive: state => {
      return (state.creatingUser || state.creatingProduct || state.selectedUser || state.selectedProduct) ? true : false
    }
  },
  mutations: {
    SET_USERS (state, users) {
      state.users = users
    },
    SET_PRODUCTS (state, products) {
      state.products = products
    },
    SET_SALES (state, sales) {
      state.sales = sales
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
    ADD_SALE (state, sale) {
      state.sales.unshift(sale)
    },
    SET_USER (state, user) {
      state.selectedUser = user
    },
    SET_PRODUCT (state, product) {
      state.selectedProduct = product
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
    },
    DELETE_USER (state, user) {
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i]._id === user._id) {
          state.users.splice(i, 1)
        }
      }
    },
    DELETE_PRODUCT (state, product) {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i]._id === product._id) {
          state.products.splice(i, 1)
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
    async loadSales ({ commit }) {
      let result = await getAmountOfSales()
      commit('SET_SALES', result.data.data)
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
    async deleteUser ({ commit }, user) {
      let result = await deleteUser(user)
      if (result.data.success) {
        commit('DELETE_USER', user)
        commit('SET_USER', null)
      }
    },
    async deleteProduct ({ commit }, product) {
      let result = await deleteProduct(product)
      if (result.data.success) {
        commit('DELETE_PRODUCT', product)
        commit('SET_PRODUCT', null)
      }
    },
    async refundProduct ({ commit, dispatch }, sale) {
      // TODO: add api call en update the store.
    },
    async buyProduct ({ commit, dispatch }, { user, product }) {
      let updatedUser
      let updatedProduct
      let saleResult
      try {
        updatedUser = await dispatch('updateUser', user)
        updatedProduct = await dispatch('updateProduct', product)
      } catch (e) {
        console.error(e)
        return
      }
      // Add sale to sales history
      try {
        saleResult = await createSale(updatedUser, updatedProduct)
      } catch (e) {
        console.error(e)
        return
      }
      commit('UPDATE_USER', updatedUser)
      commit('UPDATE_PRODUCT', updatedProduct)
      commit('ADD_SALE', saleResult.data.data)
      // Close the Edit user page
      commit('SET_USER', null)
    }
  }
})
