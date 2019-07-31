import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

import auth from '@/store/modules/auth'
import http from '@/store/modules/http'
import message from '@/store/modules/message'
import cashOperations from '@/store/modules/cashOperations'
import users from '@/store/modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        http,
        message,
        cashOperations,
        users
    },
    actions: {
        paymentVerification(context) {
            context.commit('deductMoney')
        }
    },

    plugins: [createPersistedState({
        key: 'example',
        storage: window.sessionStorage
    })]
})