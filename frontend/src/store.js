import Vue from 'vue'
import Vuex from 'vuex'
import {
  getUsers,
  createUser
} from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    creatingUser: false
  },
  mutations: {
    SET_USERS (state, users) {
      state.users = users
    },
    TOGGLE_CREATING_USER (state) {
      state.creatingUser = !state.creatingUser
    },
    ADD_USER (state, user) {
      console.log(user)
      state.users.push(user)
    }
  },
  actions: {
    async loadUsers ({ commit }) {
      let result = await getUsers()
      commit('SET_USERS', result.data.data)
      
    },
    async addUser ({ commit }, user) {
      try {
        let result = await createUser(user)
        commit('ADD_USER', result.data.data)
        commit('TOGGLE_CREATING_USER')
      } catch (e) {
        console.error(e)
      }
    }
  }
})
