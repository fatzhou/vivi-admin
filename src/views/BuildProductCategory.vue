<template>
<div class="container build">
    <div class="wrap fenlei-wrap">
       <div class="content">
           <div class="weui-cells">
               <router-link to="BuildProductCategoryAdd" class="weui-cell weui-cell_access" href="javascript:;">
                   <div class="weui-cell__bd">
                       <p><i class="weui-icon-info-circle"></i><span>添加新分类</span></p>
                   </div>
                   <div class="weui-cell__ft">
                   </div>
               </router-link>
           </div>
           <div class="weui-cells__title">选择分类</div>
           <div class="weui-cells weui-cells_checkbox">
               <label data-test="ttt" class="weui-cell weui-check__label" @click.stop="selectCategory(a)" for="x11">
                   <div class="weui-cell__bd">
                       <p>分类名称1</p>
                   </div>
                   <div class="weui-cell__ft">
                       <input type="radio" class="weui-check" name="radio1" id="x11">
                       <span class="weui-icon-checked"></span>
                   </div>
               </label>
               <label class="weui-cell weui-check__label" for="x12">
                   <div class="weui-cell__bd">
                       <p>分类名称2</p>
                   </div>
                   <div class="weui-cell__ft">
                       <input type="radio" name="radio1" class="weui-check" id="x12" checked="checked">
                       <span class="weui-icon-checked"></span>
                   </div>
               </label>
           </div>
       </div>
    </div>
</div></template>

<script>
import util from '../assets/js/util.js'
    export default {
      name: 'MobileBind',
      data() {
          return {
            a: 123,
            url: util.api.host + util.api.categoryList
          }
      },
      mounted: function() {
          var postData = {
            openid: window.info.openid,
            token: window.info.token,
            shopid: window.info.shopid
          };

          this.$http.post(this.url, postData)
          .then((res)=>{
            var data = res.body;
            if(data.code == 0) {
              // this.$router.push('BuildProduct');
            } else {
              alert(data.msg);
            }
          });
      },
      methods: {
        goBack() {
          this.$router.push('BuildProduct');
        },
        selectCategory(n) {
          console.log(n)
        }
      }
    }
</script>

<style lang="less" scoped>
    @import '../assets/less/tob-build.less';
</style>
