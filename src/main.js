import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import common from './components/common/js/common'

// 设置反向代理，前端请求发送到http://localhost:9091/api
let axios = require('axios')
axios.defaults.baseURL = 'http://localhost:9091/api'
Vue.prototype.$axios = axios

// Vue.prototype.$axios = axios.create({
//   headers: { 'Content-Type': 'application/json;charset=utf-8' }, // 设置传输内容的类型和编码
//   withCredentials: true// 指定某个请求应该发送凭据。允许客户端携带跨域cookie，也需要此配置
// })
Vue.prototype.common = common
Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.filter('dateFormat', function (value, fmt) {
  let date = new Date(value)
  if (typeof (fmt) === 'undefined') {
    fmt = 'yyyy-MM-dd HH:mm:ss'
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length))
    }
  }
  return fmt
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
