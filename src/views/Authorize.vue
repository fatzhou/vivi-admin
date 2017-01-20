<template>
  <div class="authorize">

  </div>
</template>

<script>
    export default {
      name: 'Authorize',
      data() {
          return {
            redirect_url: encodeURIComponent('http://localhost:8080/#/MobileBind'),
            authorize_url: 'https://open.weixin.qq.com/connect/oauth2/authorize'
          }
      },
      created: function() {
        var data = {
          appid: 'gh_37f6e09e95ec',
          redirect_uri: this.redirect_url,
          response_type: 'code',
          scope: 'snsapi_userinfo',
          state: 'test'
         // '#wechat_redirect'
        }
        this.$http.get(this.authorize_url, data, {credentials: true, crossOrigin: true})
        .then((response)=>{
          console.log(123,response)
        })
      }
    }
</script>


