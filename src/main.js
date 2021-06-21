import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

// Chakra UI Import and usage
import Chakra, { CThemeProvider } from '@chakra-ui/vue';

Vue.use(Chakra);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  render: h => h(CThemeProvider, [h(App)])
}).$mount('#app');
