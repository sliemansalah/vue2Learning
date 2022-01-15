import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: function() {
      return import('../views/home/HomePage.vue')
    }
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/about/AboutPage.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
