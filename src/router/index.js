import Vue from 'vue'
import VueRouter from 'vue-router'
import Mainpage from '../views/Mainpage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'H project',
    component: Mainpage
  }, 
  {
    path: '/arg/:macroarg',
    name: 'H project',
    component: Mainpage
  },
  {
    path: '/arg/:macroarg/:microarg',
    name: 'H project',
    component: Mainpage
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
