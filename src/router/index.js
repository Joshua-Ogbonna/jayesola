import Vue from 'vue'
import VueRouter from 'vue-router'
// Store
import store from '../store/index'

import Home from '../views/Home.vue'
import SignUp from '@/views/SignUp'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'

// Dashboard child routes components
import Leads from '@/components/Leads'
import Clients from '@/components/Clients'
import Reporting from '@/components/Reporting'
import NewLead from '@/components/NewLead'
import NewClient from '@/components/NewClient'
import Client from '@/components/Client'
import Settings from '@/components/Settings'

// Client Children routes components
import Notes from '@/components/Notes'
import Emails from '@/components/Emails'
import Calls from '@/components/Calls'
import Tasks from '@/components/Tasks'
import NewTask from '@/components/NewTask'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
      { path: '/dashboard', component: Leads },
      { path: 'clients', component: Clients },
      { path: 'reporting', component: Reporting },
      { path: 'newlead', component: NewLead },
      { path: 'clients/new-client', component: NewClient },
      { path: 'profile', component: Settings }
    ],
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/client/:id',
    component: Client,
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: 'notes',
        component: Notes,
        name: 'Notes'
      },
      {
        path: 'emails',
        component: Emails,
        name: 'Emails'
      },
      {
        path: 'calls',
        component: Calls,
        name: 'Calls'
      },
      {
        path: 'tasks',
        component: Tasks,
        name: 'Tasks'
      },
      {
        path: '/new-task',
        component: NewTask,
        name: 'New Task'
      }
    ]
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
  } else {
    next()
  }
})

export default router
