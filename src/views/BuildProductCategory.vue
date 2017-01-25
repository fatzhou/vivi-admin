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
           <div class="weui-cells__title" v-if="categoryList.length>0">选择分类</div>
           <div class="weui-cells weui-cells_checkbox">
               <label v-for="item,index in categoryList" @click="goBack(item.classid, item.name)"  class="weui-cell weui-check__label" >
                   <div class="weui-cell__bd">
                       <p>{{item.name}}</p>
                   </div>
                   <div class="weui-cell__ft">
                       <input type="radio" class="weui-check" name="radio1" >
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
            url: util.api.host + util.api.categoryList,
            categoryList: []
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
              this.categoryList = data.classlist;
              // this.$router.push('BuildProduct');
            } else {
              alert(data.msg);
            }
          });
      },
      methods: {
        goBack(id, name) {
          this.$router.push({
            name: 'BuildProduct',
            params: {
              categoryId: id,
              categoryName: name
            }
          });
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
