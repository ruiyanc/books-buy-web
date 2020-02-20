import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 设置反向代理，前端请求发送到http://localhost:9091/api
let axios = require('axios')
axios.defaults.baseURL = 'http://localhost:9091/api'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
