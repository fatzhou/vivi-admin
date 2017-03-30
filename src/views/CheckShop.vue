<template>
  <div></div>
</template>


<script>
  import util from '../assets/js/util.js'

  export default {
    name: 'CheckShop',
    data() {
      return {
        url: util.api.host + util.api.queryShop,
        userInfoUrl: util.api.host + util.api.userInfo,
      }
    },
    created() {
      this.queryShop();
    },
    methods: {
      queryShop() {
          var query = util.getUrlKey();
          window.info.openid = query['openid'];
          window.info.token = query['access_token'];

          var postData = {
            openid: window.info.openid,
            token: window.info.token,
          };
          console.log(this.userInfoUrl, postData)

          // this.$http.post(this.userInfoUrl, postData)
          // .then((res1)=>{
          //   console.log(res1)

            this.$http.post(this.url, postData)
            .then((res)=>{
              var data = res.body;
              if(data.code == 0) {
                console.log(data)
                if(data.shopid) {
                  window.info.shopid = data.shopid;
                  window.info.mobile = data.mobile;
                  this.$router.push('BuildIndex');
                } else {
                  this.$router.push('MobileBind');
                }
              } else {
                alert(data.msg);
              }
            });
          // })
      }
    }
  }
</script>
