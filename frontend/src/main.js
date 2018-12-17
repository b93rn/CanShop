import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/main.scss'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.filter('currency', function (value) {
  if (!value) return '€0,00'
  // value = value.toFixed(2)
  value = value.toString().replace('.', ',')
  return '€' + value
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
