/* element-ui.common.js?ccbf:9948 [Violation] Added non-passive event
   listener to a scroll-blocking 'mousewheel' event. Consider marking
   event handler as 'passive' to make the page more responsive.
*/
import 'default-passive-events'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import { store } from './store/store'// 引入store
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import '../static/css/global.css'
import eleCalendar from 'ele-calendar'
import less from 'less'
import { handleErrorMsg } from '@/common/common'
// import 'ele-calendar/dist/vue-calendar.css'
Vue.prototype.$axios = axios

const AUTH_TOKEN = sessionStorage.getItem('Authorization')
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.config.productionTip = false

/* 注入 */
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(eleCalendar)
Vue.use(less)

// 全局请求头处理
axios.interceptors.request.use((config) => {
  // console.log('main-config')
  // console.log(config)
  // 请求前面请求数据用动画带起,服务方式调用
  // // ****************************
  // startLoading()
  // endLoading()
  // // ****************************
  return config
}, function (err) {
  // 对请求错误的处理
  console.log('发送失败')
  console.log(err)
  // // ****************************
  // startLoading()
  // endLoading()
  // ****************************
  return Promise.reject(err)
})

// 全局响应头处理
axios.interceptors.response.use((config) => {
  // console.log('response-main-config')
  // console.log(config.data.code)
  // console.log(handleErrorMsg(config.data.code))
  // ****************************
  // startLoading()
  // endLoading()
  // ****************************
  if (config.data.code === 200) {
    // endLoading()
    return config
  }
  ElementUI.Message.warning(handleErrorMsg(config.data.code))
  return config
}, function (err) {
  // console.log('main-err')
  // console.log(err)
  // ****************************
  // startLoading()
  // endLoading()
  // ****************************
  return Promise.reject(err)
})

/* eslint-disable no-new */
// 实例化 router store
new Vue({
  el: '#app',
  store,
  router,
  axios,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
