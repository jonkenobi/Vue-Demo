import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import routes from './router'
import store from '@/store'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
Vue.config.productionTip = false

new Vue({
    router: routes,
    store,
    render: h => h(App),
}).$mount('#main')
