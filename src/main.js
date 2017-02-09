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
  openid: '',
  token: '',
  shopid: '',
  mobile: ''
};

// Vue.mixin({
//   beforeMount: function () {
//     document.getElementById('app').scrollTop = 0;
//   },
//   mounted: function() {
//     if(!window.info.openid && location.hash.indexOf('MobileBind') == -1) {
//       // location.reload();
//       router.push('MobileBind');
//     }
//   }
// })

const app = new Vue({
  router
}).$mount('#app')
