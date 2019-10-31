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
// import 'ele-calendar/dist/vue-calendar.css'
Vue.prototype.$axios = axios

axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.config.productionTip = false

/* 注入 */
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(eleCalendar)

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
