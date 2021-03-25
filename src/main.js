import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'

import config from './config'
import ui from './ui'

Vue.use(ui)
Vue.use(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
