import Vue from 'vue'
import ElementUI from 'element-ui'
import '@/icons'
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'
import store from '@/store'
import 'whatwg-fetch'

Vue.use(ElementUI)

import fetch from '@/utils/fetch'
Vue.prototype.$fetch = fetch

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
