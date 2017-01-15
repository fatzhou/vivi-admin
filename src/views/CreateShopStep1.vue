<template>
<div class="container guide">
    <div class="wrap step1">
        <h1>Hi，桔子小姐<br/>请先为小铺起个名字吧！</h1>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="小铺名字">
                </div>
            </div>
        </div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <div class="weui-uploader">
                        <div class="weui-uploader__hd">
                            <p class="weui-uploader__title">上传LOGO</p>
                        </div>
                        <div class="weui-uploader__bd">
                            <ul class="weui-uploader__files" id="uploaderFiles"  style="display: none">
                                <li class="weui-uploader__file" style="background-image:url(./images/pic_160.png)"></li>
                            </ul>
                            <div class="weui-uploader__input-box">
                                <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple="">
                            </div>
                            <a href="javascript:;" class="demo">示例</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="weui-btn-area">
            <router-link class="weui-btn weui-btn_plain-primary" href="javascript:" id="showTooltips" to="CreateShopStep2">下一步</router-link>
        </div>
    </div>
</div>

</template>

<script>
    export default {
      name: 'CreateShopStep1',
      data() {
          return {

          }
      },
      created: function() {

      }
    }
</script>

<style lang="less" scoped>
  @import '../assets/less/tob-guide.less';
  .guide {
    background-color: #f97a4d;
    background: -webkit-gradient(#febf83, #f97a4d);
    background-image: linear-gradient(#febf83, #f97a4d);
    background-repeat: no-repeat;
  }
</style>
