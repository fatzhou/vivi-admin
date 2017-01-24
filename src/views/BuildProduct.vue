<template>
<div class="container build">
    <div class="wrap product">
        <div class="content">
            <!--添加图片-->
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <div class="weui-uploader">
                            <div class="weui-uploader__hd">
                                <p class="weui-uploader__title">添加图片</p>
                                <div class="weui-uploader__info">0/5</div>
                            </div>
                            <div class="weui-uploader__bd">
                                <ul class="weui-uploader__files" id="uploaderFiles">
                                    <li class="weui-uploader__file" style="background-image:url(../assets/img/pic_160.png)"></li>
                                    <li class="weui-uploader__file weui-uploader__file_status" style="background-image:url(../assets/img/pic_160.png)">
                                        <div class="weui-uploader__file-content">
                                            <i class="weui-icon-warn"></i>
                                        </div>
                                    </li>
                                </ul>
                                <div class="weui-uploader__input-box">
                                    <input id="uploaderInput" @change="uploadFileChange" class="weui-uploader__input" type="file" accept="image/*" multiple="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--添加描述-->
            <div class="weui-cells__title">添加描述</div>
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <textarea class="weui-textarea" placeholder="请输入商品描述" rows="3"></textarea>
                        <div class="weui-textarea-counter"><span>0</span>/200</div>
                    </div>
                </div>
            </div>
            <!--商品价格-->
            <div class="weui-cells__title">商品价格</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入价格（单位元）">
                    </div>
                </div>
            </div>
            <!--商品分类-->
            <div class="weui-cells__title">商品分类</div>
            <div class="weui-cells">
                <router-link class="weui-cell weui-cell_access" href="javascript:;" to="BuildProductCategory">
                    <div class="weui-cell__bd">
                        <p>请添加商品分类</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </router-link>
            </div>
            <div class="weui-btn-area">
                <router-link class="weui-btn weui-btn_primary" to="ProductIndex" href="javascript:" id="showTooltips">完成并添加下一步</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import util from '../assets/js/util.js'
    export default {
      name: 'BuildProduct',
      data() {
          return {
            fileApi: util.api.host + util.api.fileApi,
            imgList: []
          }
      },
      created: function() {

      },
      methods: {
        uploadFileChange(e) {
          console.log(e)
          var files = e.target.files;
          for (var i = 0, f; f = files[i]; i++) {
            this.uploadFile(f);
          }
        },
        uploadFile(file) {
          var formData = new FormData();
          formData.append('file', file);

         // var oReq = new XMLHttpRequest();
         //  oReq.open("POST", this.fileApi, true);
         //  oReq.onload = function(oEvent) {
         //    if (oReq.status == 200) {
         //      alert(1)
         //    } else {
         //      alert(2)
         //    }
         //  };
         //  oReq.send(formData);
          this.$http.post(this.fileApi, formData)
          .then((response) => {
            alert(1)
            console.log('File sent...'); // this block is never triggered
            console.log(response);
          }, (response) => {
            console.log('Error occurred...');
          });
        }
      }
    }
</script>

<style lang="less" scoped>
    @import '../assets/less/tob-build.less';
</style>
