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

Vue.mixin({
  beforeMount: function () {
    document.getElementById('app').scrollTop = 0;
  },
  created: function() {
    if(!window.info.openid && location.hash.indexOf('CheckShop') == -1 && location.hash.indexOf('ToDevelop') == -1) {
      // location.reload();
      router.push('CheckShop');
    }

    var i = document.createElement('iframe');
    i.src = '//m.baidu.com/favicon.ico';
    i.style.display = 'none';
    i.onload = function() {
      setTimeout(function(){
        i.remove();
      }, 9)
    }
    document.body.appendChild(i);

  }
})

const app = new Vue({
  router
}).$mount('#app')
