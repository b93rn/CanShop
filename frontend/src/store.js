import Vue from 'vue'
import Vuex from 'vuex'
import VueTimers from 'vue-timers'
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
  createSale,
  refundSale
} from './api'

Vue.use(Vuex)
Vue.use(VueTimers)

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
    },
    getMinAmountOfSales: (state) => {
      return state.sales.slice(0, 8);
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
        if (state.users[i].id === user.id) {
          state.users[i] = user
        }
      }
    },
    UPDATE_PRODUCT (state, product) {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === product.id) {
          state.products[i] = product
        }
      }
    },
    DELETE_USER (state, id) {
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].id === id) {
          state.users.splice(i, 1)
        }
      }
    },
    DELETE_PRODUCT (state, id) {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === id) {
          state.products.splice(i, 1)
        }
      }
    },
    DELETE_SALE (state, saleId) {
      for (let i = 0; i < state.sales.length; i++) {
        if (state.sales[i].id === saleId) {
          state.sales.splice(i, 1)
        }
      }
    }
  },
  actions: {
    async loadUsers ({ commit }) {
      let result = await getUsers()
      commit('SET_USERS', result.data)
    },
    async loadProducts ({ commit }) {
      let result = await getProducts()
      commit('SET_PRODUCTS', result.data)
    },
    async loadSales ({ commit }) {
      let result = await getAmountOfSales()
      commit('SET_SALES', result.data)
    },
    async addUser ({ commit }, user) {
      try {
        let result = await createUser(user)
        commit('ADD_USER', result.data)
        commit('TOGGLE_CREATING_USER')
      } catch (e) {
        console.error(e)
      }
    },
    async addProduct ({ commit }, product) {
      try {
        let result = await createProduct(product)
        commit('ADD_PRODUCT', result.data)
        commit('TOGGLE_CREATING_PRODUCT')
      } catch (e) {
        console.error(e)
      }
    },
    async updateProduct ({ commit }, product) {
      try {
        let result = await updateProduct(product)
        return result.data
      } catch (e) {
        throw new Error('Updating the product has failed! ' + e)
      }
    },
    async updateUser ({ commit }, user) {
      try {
        let result = await updateUser(user)
        return result.data
      } catch (e) {
        throw new Error('Updating the user has failed!')
      }
    },
    async deleteUser ({ commit }, user) {
      let result = await deleteUser(user)
      if (result.status < 300) {
        commit('DELETE_USER', result.data)
        commit('SET_USER', null)
      }
    },
    async deleteProduct ({ commit }, product) {
      let result = await deleteProduct(product)
      if (result.status < 300) {
        commit('DELETE_PRODUCT', result.data)
        commit('SET_PRODUCT', null)
      }
    },
    async refundProduct ({
      commit
    }, sale) {
      try {
        let result = await refundSale(sale)
        if (result.status < 300) {
          commit('UPDATE_USER', result.data.buyer)
          commit('UPDATE_PRODUCT', result.data.product)
          commit('DELETE_SALE', result.data.saleId)
        }
      } catch (err) {
        console.error(err)
      }
    },
    async buyProduct ({ commit }, { user, product }) {
      try {
        const { data } = await createSale(user, product)        

        // Update the store.
        commit('UPDATE_USER', data.buyer)
        commit('UPDATE_PRODUCT', data.product)
        commit('ADD_SALE', { ...data })

        // Close the Edit user page.
        commit('SET_USER', null)
      } catch (e) {
        console.error(e)
      }
    }
  }
})
