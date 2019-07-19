import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/home'
import UsersList from './components/usersList'
import UserDetail from './components/userDetail'
import UserCreate from './components/userCreate'
import Login from './components/login'
import Auth from './services/Authentication'
import ProductList from './components/productList'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/users',
            component: UsersList
        },
        {
            path: '/user/new',
            component: UserCreate
        },
        {
            path: '/user/:userId',
            name: 'user',
            component: UserDetail
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/logout',
            beforeEnter: function (to, from, next) {
                Auth.logout()
                next('/')
            }
        },
        {
            path: '/productList',
            component: ProductList
        }
    ]
})

export default router