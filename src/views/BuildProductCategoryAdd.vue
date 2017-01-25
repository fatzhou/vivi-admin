<template>
<div class="container build">
    <div class="wrap fenlei-wrap">
       <div class="content">
           <div class="weui-cells__title">分类名称</div>
           <div class="weui-cells">
               <div class="weui-cell">
                   <div class="weui-cell__bd">
                       <input class="weui-input" v-model="categoryName" type="text" placeholder="请输入分类名称">
                   </div>
               </div>
           </div>
           <div class="weui-btn-area">
               <a class="weui-btn weui-btn_primary" href="javascript:" @click="saveCategory">保存</a>
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
            url: util.api.host + util.api.addCategory,
            categoryName: ''
          }
      },
      created: function() {
        document.title = '创建商品分类';
      },
      methods: {
        checkForm() {
          var flag = util.checkForm([{
            name: '分类名称',
            data: this.categoryName
          }]);
          return flag;
        },
        saveCategory() {
          if(!this.checkForm()) {
            return false;
          }
          var postData = {
            openid: window.info.openid,
            token: window.info.token,
            shopid: window.info.shopid,
            name: this.categoryName,
            classid: ''
          };
          this.$http.post(this.url, postData)
          .then((res)=>{
            var data = res.body;
            if(data.code == 0) {
              this.$router.push('BuildProductCategory');
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
</style>
