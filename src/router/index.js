import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login/login'
import register from '../components/login/register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../components/index/index')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../components/index/cart')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('../components/index/info')
  },
  {
    path: '/login',
    name: login,
    component: login
  },
  {
    path: '/register',
    name: register,
    component: register
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../components/index/index')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../components/admin/admin')
  },
  {
    path: '/header',
    name: 'header',
    component: () => import('../components/common/header')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  // mode: '',
  // base: process.env.BASE_URL,
  routes
})

export default router
