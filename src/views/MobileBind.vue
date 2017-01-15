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
                    <input class="weui-input" type="tel" placeholder="请输入手机号">
                </div>
                <div class="weui-cell__ft">
                    <button class="weui-vcode-btn">获取验证码</button>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">邀请码</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入邀请码">
                </div>
            </div>
        </div>
        <div class="weui-btn-area">
            <router-link class="weui-btn weui-btn_primary" to="CreateShopStep1" id="showTooltips">确定</router-link>
        </div>
    </div>
    <footer>
        <p><img src="../assets/img/icon_footer_link.png"/> </p>
    </footer>
  </div>
</template>

<script>
    export default {
      name: 'MobileBind',
      data() {
          return {

          }
      },
      created: function() {

      }
    }
</script>

<style lang="less" scoped>
    @import '../assets/less/tob-index.less';
</style>
