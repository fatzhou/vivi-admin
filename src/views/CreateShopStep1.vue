<template>
<div class="container guide">
    <div class="wrap step1">
        <h1>Hi，桔子小姐<br/>请先为小铺起个名字吧！</h1>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <input class="weui-input" v-model="shopName" type="text" placeholder="小铺名字">
                </div>
            </div>
        </div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-gallery" @click="hideMask" id="gallery" :style="{display:ifMaskDisplay, opacity: 1}">
                <span class="weui-gallery__img" id="galleryImg" :style="{'background-image':'url('+logo+')'}"></span>
                <div class="weui-gallery__opr">
                    <a href="javascript:" class="weui-gallery__del">
                        <i class="weui-icon-delete weui-icon_gallery-delete" @click="deleteLogo"></i>
                    </a>
                </div>
            </div>

            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <div class="weui-uploader">
                        <div class="weui-uploader__hd">
                            <p class="weui-uploader__title">上传LOGO</p>
                        </div>
                        <div class="weui-uploader__bd">
                            <ul class="weui-uploader__files" id="uploaderFiles" v-if="logo.length>0">
                                <li class="weui-uploader__file" @click="showMask" :style="{'background-image':'url('+logo+')'}"></li>
                            </ul>
                            <div class="weui-uploader__input-box">
                                <input id="uploaderInput" class="weui-uploader__input" @change="uploadFileChange" type="file" accept="image/*" multiple="">
                            </div>
                            <a href="javascript:;" class="demo">示例</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="weui-btn-area">
            <a class="weui-btn weui-btn_plain-primary" href="javascript:;" @click="goNext" id="showTooltips">下一步</a>
        </div>
    </div>
</div>

</template>

<script>
import util from '../assets/js/util.js'
    export default {
      name: 'CreateShopStep1',
      data() {
          return {
            url: util.api.host + util.api.buildShop,
            shopName: '',
            fileApi: util.api.host + util.api.fileApi,
            logo: '',
            ifMaskDisplay: 'none'
          }
      },
      activated: function() {
        document.title = '创建小铺';
      },
      methods: {
        deleteLogo() {
          this.logo = '';
        },
        hideMask() {
          this.ifMaskDisplay = 'none';
        },
        showMask() {
          this.ifMaskDisplay = 'block';
        },
        uploadFileChange(e) {
          var files = e.target.files;
          for (var i = 0, f; f = files[i]; i++) {
            this.uploadFile(f);
          }
        },
        uploadFile(file) {
          var formData = new FormData();
          formData.append('thumbnail', file);

          this.$http.post(this.fileApi, formData)
          .then((response) => {
            var data = response.body;
            if(data.code == 0) {
              this.logo = data.url;
            } else {
              alert(data.msg);
            }
          }, (response) => {
            console.log('Error occurred...');
          });
        },
        checkForm() {
          var flag = util.checkForm([{
            name: '店铺名称',
            data: this.shopName
          },
          {
            name: '店铺LOGO',
            data: this.logo
          }
            ]);
          return flag;
        },
        goNext() {
          console.log(1234)
          if(!this.checkForm()) {
            return false;
          }
          var postData = {
            openid: window.info.openid,
            token: window.info.token,
            shopid: window.info.shopid,
            name: this.shopName,
            logo: this.logo,
            mobile: window.info.mobile
          };
          this.$http.post(this.url, postData)
          .then((res)=>{
            var data = res.body;
            if(data.code == 0) {
              this.$router.push('CreateShopStep2');
            } else {
              alert(data.msg);
            }
          });
        }
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
