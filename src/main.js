import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// Chakra UI Import and usage
import Chakra, { CThemeProvider } from '@chakra-ui/vue'
// Import Bootstrap Vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// BV Styles
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Chakra)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Vue filters
Vue.filter('initials', (value) => {
  const splitValue = value.split(' ')
  return splitValue[0][0] + splitValue[1][0]
})
Vue.filter('secondChar', (value) => {
  const splitValue = value.split(' ')
  return splitValue[1][0]
})

Vue.filter('twoNames', (value) => {
  const splitValue = value.split(' ')
  return splitValue[0] + ' ' + splitValue[1]
})

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common.Authorization = token
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(CThemeProvider, [h(App)])
}).$mount('#app')
