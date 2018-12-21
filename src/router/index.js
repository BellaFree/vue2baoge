import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LayoutView from '../views/LayoutView.vue'
Vue.use(Router)
// const TestView = () => import('../views/Test.vue')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/layout',
      name: 'LayoutView',
      component: LayoutView,
      meta: {
        keepAlive: false
      }
    }
  ]
})
