<template>
<div class="container build">
    <div class="wrap product">
        <div class="content">
                      <!--商品价格-->
            <div class="weui-cells__title">商品名称</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input class="weui-input" v-model="name" type="text" placeholder="请输入商品名称">
                    </div>
                </div>
            </div>
            <!--添加图片-->
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <div class="weui-uploader">
                            <div class="weui-uploader__hd">
                                <p class="weui-uploader__title">添加图片</p>
                                <div class="weui-uploader__info"><span>{{imgList.length}}</span>/5</div>
                            </div>
                            <div class="weui-uploader__bd">
                                <ul class="weui-uploader__files" id="uploaderFiles">
                                    <li class="weui-uploader__file" v-for="item in imgList" :style="{'background-image':'url('+item+')'}"></li>
                                </ul>
                                <div class="weui-uploader__input-box" v-if="imgList.length<5">
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
                        <textarea class="weui-textarea" v-model="description" maxLength="200" placeholder="请输入商品描述" rows="3"></textarea>
                        <div class="weui-textarea-counter"><span>{{description.length}}</span>/200</div>
                    </div>
                </div>
            </div>
            <!--商品价格-->
            <div class="weui-cells__title">商品价格</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input class="weui-input" v-model="price" type="text" placeholder="请输入价格（单位元）">
                    </div>
                </div>
            </div>
            <!--商品分类-->
            <div class="weui-cells__title">商品分类</div>
            <div class="weui-cells">
                <router-link class="weui-cell weui-cell_access" href="javascript:;" to="BuildProductCategory">
                    <div class="weui-cell__bd">
                        <p>{{categoryName}}</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </router-link>
            </div>
            <div class="weui-btn-area">
                <a  @click.prevent="goNext" class="weui-btn weui-btn_primary" to="ProductIndex" href="javascript:" id="showTooltips">完成并添加下一步</a>
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
            url: util.api.host + util.api.buildProduct,
            imgList: [],
            description: '',
            name: '',
            price: '',
            category: '',
            categoryName: '请添加商品分类'
          }
      },
      created: function() {
        document.title = '添加商品';
      },
      mounted() {
        if(this.$route.params.categoryId) {
          this.category = this.$route.params.categoryId;
          this.categoryName  = this.$route.params.categoryName;
        }
      },
      methods: {
        checkForm() {
          var flag = util.checkForm([
          {
            name: '商品名称',
            data: this.name
          },
          {
            name: '商品图片',
            data: this.imgList.join('|')
          },
          {
            name: '商品价格',
            data: this.price
          },
          {
            name: '商品分类',
            data: this.category
          }]);
          console.log(this.imgList,'abcd')
          return flag;
        },
        goNext() {
          if(!this.checkForm()) {
            return false;
          }
          var postData = {
            openid: window.info.openid,
            token: window.info.token,
            shopid: window.info.shopid,
            classid: parseInt(this.category),
            // prodid: '',
            name: this.name,
            desc: this.description,
            price: this.price,
            image: this.imgList.join('|')
          };
          this.$http.post(this.url, postData)
          .then((res)=>{
            var data = res.body;
            if(data.code == 0) {
              this.$router.push('BuildProduct');
            } else {
              alert(data.msg);
            }
          });
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
              this.imgList.push(data.url);
            } else {
              alert(data.msg);
            }
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
