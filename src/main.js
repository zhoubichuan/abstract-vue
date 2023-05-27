import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import config from './config'
import ui from './ui'
import data from '@/assets/data.js'
Vue.use(ui)
Vue.use(config)
Vue.use(data)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
