import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Dashboard from  './components/Dashboard.vue'

Vue.use(Router)

export default new Router({
    mode : 'history',
    routes : [
        {
            path : '/',
            name : 'login',
            component: Login
        },
        {
            path : '/register',
            name : 'register',
            component: Register
        },
        {
            path : '/dashboard',
            name : 'dashboard',
            component: Dashboard
        }
    ]
})