import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const module = {
  state: {
    count: 0,
    menus: {},
    utils: [],
    roles: [],
    loginUser: {},
    menuRouteLoaded: {},
    logMode: '',
    dayReportFlag: ''
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
    // setUtils (state, utils) {
    //   state.utils = utils
    // }
  },
  getters: {
    // getUtils (state) {
    //   return state.utils
    // }
  }
}
const store = new Vuex.Store({
  modules: {
    module: module
  }
})

export {
  store
}
