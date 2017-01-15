import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import VueResource from 'vue-resource'

require('assets/less/common.less')

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
