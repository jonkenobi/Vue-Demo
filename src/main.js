import Vue from 'vue'
import './plugins/vuetify'
import App from './views/App.vue'
import routes from './router'



Vue.config.productionTip = false

new Vue({
    router:routes,
    render: h => h(App),
}).$mount('#main')
