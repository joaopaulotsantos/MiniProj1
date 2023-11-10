import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HobbiesView from '../views/HobbiesView.vue'
import QuemSouEuView from '../views/QuemSouEuView.vue'
import OqueFacoView from '../views/OqueFacoView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/quemsoueu',
        name: 'QuemSouEu',
        component: QuemSouEuView
    },
    {
        path: '/oquefaco',
        name: 'OqueFaco',
        component: OqueFacoView
    },
    {
        path: '/hobbies',
        name: 'Hobbies',
        component: HobbiesView
    },
    {
        path : '/:catchAll(.*)',
        redirect : '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  

export default router