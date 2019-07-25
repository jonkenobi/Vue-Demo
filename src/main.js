import Vue from 'vue'
import './plugins/vuetify'
import App from './views/App.vue'
import routes from './router'
import store from '@/store'
import VeeValidate from 'vee-validate'
import money from 'v-money'
//TODO
// import 'vuetify/dist/vuetify.min.css'
Vue.use(money,{})
Vue.use(VeeValidate)
Vue.config.productionTip = false

new Vue({
    router:routes,
    store,
    render: h => h(App),
}).$mount('#main')
