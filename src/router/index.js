import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../views/dashboard/DashBoard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard
  }
]

const router = new VueRouter({
  routes
})

export default router
