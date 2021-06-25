import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


// Chakra UI Import and usage
import Chakra, { CThemeProvider } from '@chakra-ui/vue'

Vue.use(Chakra)

// Vue filters
Vue.filter('initials', (value) => {
  let splitValue = value.split(' ')
  return splitValue[0][0] + splitValue[1][0]
})

const token = localStorage.getItem('token')
if(token) {
  axios.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(CThemeProvider, [h(App)])
}).$mount('#app')
