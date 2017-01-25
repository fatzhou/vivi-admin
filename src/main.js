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

window.info = {
  openid: '11112222333344',
  token: 'aaabbcc',
  shopid: 'e38571534f6c4d6bd61a05876ce42c85e450731b',
  mobile: '18111111111'
};

const app = new Vue({
  router
}).$mount('#app')
