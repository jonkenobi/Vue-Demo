import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/home'
import UsersList from './components/usersList'
import UserDetail from './components/userDetail'
import UserCreate from './components/userCreate'
import Login from './components/login'
import Auth from './services/Authentication'
import ProductList from './components/productList'

import Store from '@/store/index.js'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                isPublic: true
            }
        },
        {
            path: '/users',
            component: UsersList,
            meta:{
                isPublic:true
            }
        },
        {
            path: '/user/new',
            component: UserCreate,
            meta:{
                isPublic:true
            }
        },
        {
            path: '/user/:userId',
            name: 'user',
            component: UserDetail
        },
        {
            path: '/login',
            component: Login,
            meta: {
                isPublic: true
            }
        },
        {
            //TODO
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

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(page => page.meta.isPublic) || Store.state.auth.token) {
//         next()
//     } else {
//         next('/login')
//     }
// })
export default router

