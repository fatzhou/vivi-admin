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
  mounted() {
    var name = this.$route.matched[0].name;
    if(!window.info.openid && location.hash.indexOf('CheckShop') != 2 && location.hash.indexOf('ToDevelop') != 2) {
      // if(location.hash.indexOf('ShopIndex') != 2 && location.hash.indexOf('ShopDecorate') != 2 && location.hash.indexOf('BuildIndex') != 2) {

      // } else {
      //   router.push({
      //     name: 'CheckShop'
      //   });
      // }
        router.push({
          name: 'CheckShop',
          params: {
            from: name
          }
        });
    }

  },
  activated: function() {
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
