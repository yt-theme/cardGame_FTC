import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/login/login'
import Home from '@/components/home/home'
import Battle from '@/components/battle/battle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/battle',
          name: 'Battle',
          component: Battle
        },
      ]
    }
  ]
})
