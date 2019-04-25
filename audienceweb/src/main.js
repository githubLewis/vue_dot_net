import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import home from '@/components/home'
import about from '@/components/about'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  { path: '/', component: home },
  { path: '/about', component: about }
]
  
const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
