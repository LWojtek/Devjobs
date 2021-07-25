import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:jobId',
    name: 'VJob',
    component: () => import('../views/VJob.vue')
  },
  {
    name: '404',
    path: '/404',
    component: () => import('../views/Home.vue')
  },

]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (){
    return {
      x:0,
      y:0
    }
  }
})

export default router
