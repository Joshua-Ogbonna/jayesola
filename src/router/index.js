import Vue from 'vue'
import VueRouter from 'vue-router'
// Store
import store from '../store/index'

import Home from '../views/Home.vue'
import SignUp from '@/views/SignUp'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'

// Dashboard child routes components
import Customer from '@/components/Customer'
import Automations from '@/components/Automations'
import Pipelines from '@/components/Pipelines'
import Reviews from '@/components/Reviews'
import Reporting from '@/components/Reporting'
import NewLead from '@/components/NewLead'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/dashboard/',
    name: 'Dashboard',
    component: Dashboard,
    // Children routes
    children: [
      { path: '/dashboard', component: Customer },
      { path: 'reviews', component: Reviews },
      { path: 'pipeline', component: Pipelines },
      { path: 'automations', component: Automations },
      { path: 'reporting', component: Reporting },
      { path: 'newlead', component: NewLead }
    ],
    meta: {
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!store.getters.isLoggedIn) {
      next('/login')
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      next('/dashboard')
    } else {
      next()
    }
  }
})

export default router
