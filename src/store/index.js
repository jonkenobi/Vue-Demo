import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

import auth from '@/store/modules/auth'
import http from '@/store/modules/http'
import message from '@/store/modules/message'
import users from '@/store/modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        usersData: [
            {
                id: 1,
                name: 'Liu Hao',
                description: '技術力の高い外人です'
            },
            {
                id: 2,
                name: 'Nakajima daiki',
                description:
                    '筋トレ好きの先輩です'
            },
            {
                id: 3,
                name: 'Sawai Yuka',
                description:
                    '最近髪を切りました'
            },
            {
                id: 4,
                name: 'Charizard',
                description:
                    'カッコイイ'
            }]
    },
    modules: {
        auth,
        http,
        message,
        // TODO users
    },
    plugins: [createPersistedState({
        key: 'example',
        storage: window.sessionStorage
    })]
})