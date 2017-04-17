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
        tokenUrl: util.api.host + util.api.getToken,
      }
    },
    created() {
      var query = util.getUrlKey();
      window.info.openid = query['openid'] || '';
      window.info.token = query['access_token'] || '';
      window.info.code = query['code'] || '';
      if(window.info.code) {
        //只有code,需要先换取token
        this.getToken(()=>{
          this.queryShop();
        });
      } else if(window.info.openid) {
        this.queryShop();
      } else {
        alert('参数错误');
      }
      // document.title = '确认商品';//by:yoyo
    },
    activated() {
      document.title = '店铺信息查询';//by:yoyo
    },
    methods: {
      getToken(cb) {
        this.$http.get(this.tokenUrl, {
          code: window.info.code
        })
        .then((res)=>{
          var data = res.body;
          window.info.appid = data.appid;
          window.info.token = data.access_token;
          cb && cb();

        });
      },
      queryShop() {
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
                  this.$router.push('ShopDecorate');
                } else {
                  this.$router.push('MobileBind');
                }
              } else {
                // alert(data.msg);
              }
            });
          // })
      }
    }
  }
</script>
