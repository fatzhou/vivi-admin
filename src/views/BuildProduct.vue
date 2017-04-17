<template>
<div class="container build">
    <div class="wrap product">
        <div class="content">
            <!--添加图片-->
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
                                <p class="weui-uploader__title">添加图片</p>
                                <div class="weui-uploader__info"><span>{{imgList.length}}</span>/{{maxPic}}</div>
                            </div>
                            <div class="weui-uploader__bd">
                                <ul class="weui-uploader__files" id="uploaderFiles">
                                    <li class="weui-uploader__file" v-for="item,index in imgList" :style="{'background-image':'url('+item+')'}" @click="showMask(index)"></li>
                                </ul>
                                <div class="weui-uploader__input-box" v-show="imgList.length<maxPic">
                                    <input id="uploaderInput" @change="uploadFileChange" class="weui-uploader__input" type="file" accept="image/*" multiple="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                      <!--商品价格-->
            <div class="weui-cells__title">商品名称</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd" style="display:relative;">
                        <input class="weui-input" v-model="name" maxLength="7" type="text" placeholder="请输入商品名称">
                        <span style="position:absolute;top: 0;right: 10px;line-height: 44px;;">{{name.length}}/{{maxNameLength}}</span>
                    </div>
                </div>
            </div>

            <!--添加描述-->
<!--             <div class="weui-cells__title">添加描述</div>
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <textarea class="weui-textarea" v-model="description" maxLength="200" placeholder="请输入商品描述" rows="3"></textarea>
                        <div class="weui-textarea-counter"><span>{{description.length}}</span>/200</div>
                    </div>
                </div>
            </div>
 -->            <!--商品价格-->
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
                <router-link class="weui-cell weui-cell_access" href="javascript:;" :to="{name:'BuildProductCategory',params:{prodid: prodid, categoryId: category, categoryName: categoryName}}">
                    <div class="weui-cell__bd">
                        <p>{{categoryName}}</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </router-link>
            </div>
            <div class="weui-btn-area">
                <a  @click.prevent="goNext" class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips">{{buttonName}}</a>
            </div>

            <div class="weui-btn-area">
                <a  @click.prevent="goBack" class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips">保存并继续添加</a>
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
            maxNameLength: 7,
            name: '',
            price: '',
            category: '',
            prodid: '',
            categoryName: '请选择商品分类',
            buttonName: '保存并返回',
            ifMaskDisplay: 'none',
            logo: '',
            maxPic: 3,
            currentSelectLogoIndex: -1
          }
      },
      created: function() {

      },
      activated() {
        console.log(this.$route.params)
        document.title = '添加商品';
        if(this.$route.params.categoryId) {
          if(!this.$route.params && this.$route.params.prodid) {
            this.clearData();
          }
          this.category = this.$route.params.categoryId;
          this.categoryName  = this.$route.params.categoryName;
        } else if(this.$route.params.prodinfo) {
          this.buttonName = '保存并返回';
          //获取并填充商品信息
          console.log(this.$route.params.prodinfo.image);
          var prodinfo = this.$route.params.prodinfo;
          this.name = prodinfo.name;
          this.description = prodinfo.descr;
          this.price = prodinfo.price;
          this.category = prodinfo.classid;
          this.prodid = prodinfo.prodid;
          this.imgList = [].concat(prodinfo.image.split('|'));
          this.categoryName = this.$route.params.categoryName || '请添加商品分类';
          console.log(this.imgList)
          document.title = '编辑商品';
        }
      },
      methods: {
        hideMask() {
          this.ifMaskDisplay = 'none';
        },
        showMask(i) {
          this.logo = this.imgList[i];
          this.currentSelectLogoIndex = i;
          this.ifMaskDisplay = 'block';
        },
        deleteLogo() {
          if(this.currentSelectLogoIndex != -1) {
            this.imgList.splice(this.currentSelectLogoIndex, 1);
          }
        },
        goBack() {
          this.saveItem(()=>{
              alert('商品保存成功');
              this.clearData();
            })
        },
        clearData() {
          this.imgList = [];
          this.name = '';
          this.price = '';
          this.category = '';
          this.prodid = '';
          this.description = '';
          this.categoryName = '请添加商品分类';
        },
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
        saveItem(cb) {
          if(!this.checkForm()) {
            return false;
          }
          var postData = {
            openid: window.info.openid,
            token: window.info.token,
            shopid: window.info.shopid,
            classid: parseInt(this.category),
            prodid: '',
            name: this.name,
            desc: this.description,
            price: this.price,
            image: this.imgList.join('|'),
            status: 0
          };
          this.prodid && (postData.prodid = this.prodid);
          this.$http.post(this.url, postData)
          .then((res)=>{
            var data = res.body;
            console.log(data)
            if(data.code == 0) {
              cb && cb();
              // this.goBack();
            } else {
              alert(data.msg);
            }
          });
        },
        goNext() {
          this.saveItem(()=>{
              alert('商品保存成功');
              this.clearData();
              this.$router.push('ShopDecorate');
            })
        },
        uploadFileChange(e) {
          console.log(arguments)
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
            console.log(data)
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
