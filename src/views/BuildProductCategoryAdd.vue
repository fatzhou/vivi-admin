<template>
<div class="container build">
    <div class="wrap fenlei-wrap">
       <div class="content">
           <div class="weui-cells__title">分类名称</div>
           <div class="weui-cells">
               <div class="weui-cell">
                   <div class="weui-cell__bd">
                       <input class="weui-input" type="text" placeholder="请输入分类名称">
                   </div>
               </div>
           </div>
           <div class="weui-btn-area">
               <router-link class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips" to="BuildProductCategory">保存</router-link>
           </div>
       </div>
    </div>
</div>

</template>

<script>
    export default {
      name: 'BuildProduct',
      data() {
          return {

          }
      },
      created: function() {

      }
    }
</script>

<style lang="less" scoped>
    @import '../assets/less/tob-build.less';
</style>
