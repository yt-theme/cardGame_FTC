// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'

Vue.config.productionTip = false

Vue.use(
  new VueSocketio({
    debug: true,
    connection: 'http://127.0.0.1:1234',
    vuex: {
      store,
      mutationPrefix: "SOCKET_",
      actionPrefix: "SOCKET_"
    }
  })
)
// Vue.use(VueSocketio, socketio('http://127.0.0.1:1234'), store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
