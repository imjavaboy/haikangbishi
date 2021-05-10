import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Calculator'
import Resize from '../views/Resize'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/resize',
    name: 'Resize',
    component: Resize
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
