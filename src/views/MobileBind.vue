<template>
  <div class="container login">
    <div class="wrap">
        <div class="weui-cells__title">绑定手机号，方便追踪订单</div>
        <div class="weui-cells">

            <div class="weui-cell weui-cell_vcode">
                <div class="weui-cell__hd">
                    <label class="weui-label">手机号</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="tel" v-model="mobile"  placeholder="请输入手机号">
                </div>
                <div class="weui-cell__ft">
                    <button class="weui-vcode-btn">获取验证码</button>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">邀请码</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="number" v-model="smscode" pattern="[0-9]*" placeholder="请输入邀请码">
                </div>
            </div>
        </div>
        <div class="weui-btn-area">
            <a href="javascript:;" @click="saveMobile" class="weui-btn weui-btn_primary"  id="showTooltips">确定</a>
        </div>
    </div>
    <footer>
        <p><img src="../assets/img/icon_footer_link.png"/> </p>
    </footer>
  </div>
</template>

<script>
  import util from '../assets/js/util.js'

    export default {
      name: 'MobileBind',
      data() {
          return {
            url: util.api.host + util.api.mobile,
            smscode: '',
            mobile: ''
          }
      },
      created: function() {

      },
      methods: {
        saveMobile() {
          var check = [
          {
            name: '电话号码',
            data: this.mobile,
            type: 'telephone'
          },
          {
            name: '邀请码',
            data: this.smscode,
          }];

          var flag = util.checkForm(check);
          if(!flag) {
            return false;
          }

          var postData = {
            openid: window.info.openid,
            token: window.info.token,
            mobile: this.mobile,
            smscode: this.smscode
          };

          this.$http.post(this.url, postData)
          .then((res)=>{
            var data = res.body;
            if(data.code == 0) {
              window.info.shopid = data.shopid;
              this.$router.push('BuildProduct');
            } else {
              alert(data.msg);
            }
          });
        }
      }
    }
</script>

<style lang="less" scoped>
    @import '../assets/less/tob-index.less';
</style>
