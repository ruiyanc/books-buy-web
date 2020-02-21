import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../components/login/login'
import register from '../components/login/register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
