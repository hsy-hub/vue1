import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.$axios = axios
// 导入第三方的包
Vue.config.productionTip = false
// 消息提示的环境配置，设置为开发环境或者生产环境
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// 在Vue构造函数时，需要配置一个el属性，如果没有el属性时，可以使用.$mount('#app')进行挂载。
