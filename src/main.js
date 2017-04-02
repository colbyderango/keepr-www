// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

window.api = axios.create({
  baseURL: 'https://keeprclone.herokuapp.com/api',
  timeout: 1000,
  witheCredentials: true
})

let socket = io('https://keeprclone.herokuapp.com/api')

socket.on('CONNECTED', function (data) {
  console.log(data)

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data(){
    return {
      store
    }
  },
  template: '<App/>',
  components: { App }
})
