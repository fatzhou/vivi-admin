<template>
<div class="container build edit-container">
    <div class="wrap product">
        <div class="content">
            <!--小铺照片-->
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <div class="weui-uploader">
                            <div class="weui-uploader__hd">
                                <p class="weui-uploader__title">小铺照片</p>
                                <div class="weui-uploader__info">{{shopInfo.logoList.length}}/5</div>
                            </div>
                            <div class="weui-uploader__bd">
                                <ul class="weui-uploader__files" id="uploaderFiles">
                                    <li class="weui-uploader__file" v-for="logo in shopInfo.logoList" :style="{'background-image':'url('+logo+')'}">></li>
                                </ul>
                                <div class="weui-uploader__input-box">
                                    <input id="uploaderInput" @change="uploadFileChange" class="weui-uploader__input" type="file" accept="image/*" multiple="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="weui-cells">
                <!--小铺名称-->
                <router-link class="weui-cell weui-cell_access" href="javascript:;" :to="{path:'EditProductItem/name/'+shopInfo.name}">
                    <div class="weui-cell__bd">
                        <p>小铺名称</p>
                    </div>
                    <div class="weui-cell__ft">
                        {{shopInfo.name||'去填写'}}
                    </div>
                </router-link>
                <a class="weui-cell weui-cell_access" :to="{path:'EditProductItem/desc/'+(shopInfo.desc||'店铺描述')}" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p>小铺介绍</p>
                    </div>
                    <div class="weui-cell__ft">
                      {{shopInfo.desc||'去填写'}}
                    </div>
                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p>小铺二维码</p>
                    </div>
                    <div class="weui-cell__ft" id="qrcode-wrap">

                    </div>
                </a>
            </div>
            <div class="weui-cells">
                <!--小铺名称-->
                <a class="weui-cell weui-cell_access" :to="{path:'EditProductItem/addr/'+(shopInfo.desc||'店铺地址')}" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p>小铺地址</p>
                    </div>
                    <div class="weui-cell__ft">
                        {{shopInfo.addr||'去填写'}}
                    </div>
                </a>
                <router-link :to="{path:'EditProductItem/mobile/'+(shopInfo.mobile||'')}" class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p>联系电话</p>
                    </div>
                    <div class="weui-cell__ft">
                        {{shopInfo.mobile||'去填写'}}
                    </div>
                </router-link>
            </div>
            <div class="weui-cells">
                <!--小铺名称-->
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p>管理员头像</p>
                    </div>
                    <div class="weui-cell__ft">
                        <img src="../assets/pic/headicon.png" />
                    </div>
                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p>管理员昵称</p>
                    </div>
                    <div class="weui-cell__ft">
                        桔子
                    </div>
                </a>
            </div>
            <div class="weui-btn-area">
                <a class="weui-btn weui-btn_primary" href="javascript:" @click="saveShopInfo" id="showTooltips">保存</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
  import util from '../assets/js/util.js'
  import QR from '../assets/js/qrcode.min.js'
    export default {
      name: 'EditProduct',
      data() {
          return {
            url: util.api.host + util.api.shopInfo,
            fileApi: util.api.host + util.api.fileApi,
            updateUrl: util.api.host + util.api.shopUpdate,
            shopInfo: {
              logo: '',
              logoList: []
            }
          }
      },
      computed: {
        qrcode() {
          var div = document.createElement('div');
          var qr = new QRCode(div, {
              text: "http://jindo.dev.naver.com/"+window.info.shopid,
              width: 36,
              height: 36,
              colorDark : "#000000",
              colorLight : "#ffffff",
              correctLevel : QRCode.CorrectLevel.H
          });
          return div;
        },
      },
      mounted: function() {
        document.title = '小铺信息';

          var postData = {
            openid: window.info.openid,
            token: window.info.token,
          };

          this.$http.post(this.url, postData)
          .then((res)=>{
            var data = res.body;
            console.log(data)
            if(data.code == 0) {
              this.shopInfo = {
                logo: data.logo,
                logoList: data.logo.split('|')||[],
                name: data.name,
                mobile: data.mobile,
                address: ' ',
                desc: ''
              }

              console.log(this.shopInfo);
              // this.shopQrcode = this.qrcode;
              document.getElementById('qrcode-wrap').append(this.qrcode);
            } else {
              alert(data.msg);
            }
          });
      },
      activated() {
        var params = this.$route.params;
        console.log(params)
        if(params.key) {
          this.shopInfo[params.key] = params.value;
          console.log(this.shopInfo.name,this.shopInfo[params.key]),params.key, params.value
        }
      },
      methods: {
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
              this.shopInfo.logoList.push(data.url);
            } else {
              alert(data.msg);
            }
          }, (response) => {
            console.log('Error occurred...');
          });
        },
        saveShopInfo() {
          var postData = {
            openid: window.info.openid,
            token: window.info.token,
            mobile: this.shopInfo.mobile,
            shopid: window.info.shopid,
            name: this.shopInfo.name,
            logo: this.shopInfo.logoList.join('|'),
          };

          this.$http.post(this.updateUrl, postData)
          .then((res)=>{
            var data = res.body;
            if(data.code == 0) {
              alert('保存店铺信息成功');
            } else {
              alert(data.msg);
            }
          });
        }
      }
    }
</script>

<style lang="less" scoped>
    @import '../assets/less/tob-build.less';
    .container {
      background-color: #f5f5f5;
    }
</style>
