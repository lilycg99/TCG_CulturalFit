import { createRouter, createWebHistory } from 'vue-router'

//Layouts
import LoginLayout from '../layouts/LoginLayout.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue'

//Views
import LoginView from '../views/LoginView.vue'
import TestInfoView from '../views/TestInfoView.vue'
import DashboardView from '../views/DashboardView.vue'


import { ROUTES } from './names.js'

const routes = [
  {
    path: '/',
    component: LoginLayout,
    children: [
      {
        path: '',
        name: ROUTES.LOGIN,
        component: LoginView
      },
    ]
  },
  {
    path: '/testinfo',
    name: ROUTES.TESTINFO,
    component: TestInfoView,
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: ROUTES.DASHBOARD,
        component: DashboardView
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
