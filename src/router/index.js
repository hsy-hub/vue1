import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import myTest from '../views/myTest'
//  配置路由
Vue.use(VueRouter)

const routes = [
  {
    path: '/h',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'myTest',
    component: myTest
  }
]

const router = new VueRouter({
  routes
})

export default router
