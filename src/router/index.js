import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/Test',
      name: 'Test',
      component: () => import('@/components/Test.vue')
      // component: Test
    }
  ],
  // 自定义路由切换时页面如何滚动
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
