import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/pages/homePage.vue'
import MasterPage from '../views/pages/masterPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MasterPage
  },
]

const router = new VueRouter({
  routes
})

export default router
