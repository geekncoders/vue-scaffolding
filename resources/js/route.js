import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import firstPage from './components/firstPage'
import secondPage from './components/secondPage'

const routes = [
    {
        path: '/first-page',
        component: firstPage
    },
    {
        path: '/second-page',
        component: secondPage
    },
]

export default new VueRouter({
    mode: 'history',
    routes
})